import { ApolloClient, createHttpLink, from, InMemoryCache } from '@apollo/client';
import { fromPromise } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

// import { notificationOperations } from '@/libs/EventEmitter/contants';
// import eventEmitter from '@/libs/EventEmitter/eventEmitter';
import {
  checkAccessTokenInvalid,
  checkRefreshTokenExpired,
  debounceMoveToSignIn,
  getAccessTokenForAuthorizationHeader,
  memoizedRotateAccessTokenViaRefreshToken
} from '@/src/utils/tokenHandler';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_WEB_API_URL
});

const getAuthorizationHeaders = (headers = {}) => {
  return {
    headers: {
      ...headers,
      authorization: getAccessTokenForAuthorizationHeader()
    }
  };
};

const authLink = setContext(async (_, { headers }) => {
  if (checkAccessTokenInvalid() && !checkRefreshTokenExpired()) {
    await memoizedRotateAccessTokenViaRefreshToken();
  }
  return getAuthorizationHeaders(headers);
});

const linkOnError = onError((errors) => {
  const { graphQLErrors, operation, forward } = errors;
  const message = graphQLErrors ? graphQLErrors[0].message : '';

  if (message === 'Unauthorized' && checkRefreshTokenExpired()) {
    return debounceMoveToSignIn();
  }
  if (message === 'Unauthorized') {
    return fromPromise(
      memoizedRotateAccessTokenViaRefreshToken().catch((_error) => {
        console.log('error', _error);
        debounceMoveToSignIn();
      })
    )
      .filter((value) => Boolean(value))
      .flatMap(() => {
        const oldHeaders = operation.getContext().headers;
        operation.setContext(getAuthorizationHeaders(oldHeaders));
        return forward(operation);
      });
  }
});

const link = authLink.concat(httpLink);

export const graphQLClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WEB_API_URL,
  link: from([linkOnError, link]),
  cache: new InMemoryCache()
});
