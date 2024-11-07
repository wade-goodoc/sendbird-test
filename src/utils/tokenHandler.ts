import { debounce } from 'lodash';
import mem from 'mem';

// import { UNAUTHENTICATED_PAGES } from '@/context/Auth/constants';

interface TokenDataType {
  accessToken: string;
  refreshToken: string;
  refreshTokenExpiredAt: string;
}

// export const isUnauthenticatedPage = mem((currentPath: string) => {
//   return UNAUTHENTICATED_PAGES.some((pathname) => currentPath.startsWith(pathname));
// });

export const checkAccessTokenInvalid = () => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) return checkAccessTokenExpired(accessToken);
  else return true;
};

export const checkAccessTokenExpired = (accessToken: string) => {
  const splittedToken = accessToken.split('.');
  const { exp } = JSON.parse(
    Buffer.from(splittedToken[1] || '', 'base64').toString('utf8')
  );
  return Date.now() >= exp * 1000;
};

export const checkRefreshTokenExpired = () => {
  const refreshToken = localStorage.getItem('refreshToken');
  const refreshTokenExpiredAt = localStorage.getItem('refreshTokenExpiredAt');
  if (!refreshToken) return true;
  return Date.now() >= new Date(refreshTokenExpiredAt || '').getTime();
};

export const getAccessToken = () => {
  const token = localStorage.getItem('token');
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken && !token) return '';
  return accessToken ? accessToken : token;
};

export const getAccessTokenForAuthorizationHeader = () => {
  const accessToken = getAccessToken();
  return accessToken ? `Bearer ${accessToken}` : '';
};

export const rotateAccessTokenViaRefreshToken = async () => {
  console.log('rotateAccessTokenViaRefreshToken');
  const { query, variables, url } = getRotateRefreshTokenParameters();
  if (!variables.refreshToken) {
    return debounceMoveToSignIn();
  }
  const fetchResult = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
  const { data, errors } = await fetchResult.json();
  if (errors) {
    const { exception } = errors[0].extensions;
    console.error(JSON.stringify(exception, null, 2));

    if (checkAccessTokenInvalid()) {
      // refresh token은 이미 만료되었기 때문에 체크하지 않는다.
      removeAllTokens();
      return debounceMoveToSignIn(); // access token, refresh token 모두 만료된 경우
    }
    console.info('Access token or Refresh token not expired');
    return;
  }
  const { rotateRefreshToken } = data;
  updateTokensInStorage(rotateRefreshToken);
  console.debug('[token handler] token updated');
  return rotateRefreshToken.accessToken;
};

export const memoizedRotateAccessTokenViaRefreshToken = mem(
  async () => {
    return await rotateAccessTokenViaRefreshToken();
  },
  {
    cacheKey: () => localStorage.getItem('refreshToken'),
    maxAge: 1000 * 10
  }
);

export const updateTokensInStorage = (tokenData: TokenDataType) => {
  const { accessToken, refreshToken, refreshTokenExpiredAt } = tokenData;
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
  localStorage.setItem('refreshTokenExpiredAt', refreshTokenExpiredAt);
};

const getRotateRefreshTokenParameters = () => {
  const query = `mutation RotateRefreshToken($refreshToken: String!) {
    rotateRefreshToken(refreshToken: $refreshToken) {
      accessToken
      refreshToken
      refreshTokenExpiredAt
    }
  }
`;
  const variables = { refreshToken: localStorage.getItem('refreshToken') || '' };
  const url = process.env.NEXT_PUBLIC_WEB_API_URL || '';
  return { query, variables, url };
};

const moveToSignIn = () => {
  removeAllTokens();
  const { pathname, search } = window.location;
  if (pathname.includes('signIn')) return;
  const queryString = search ? search : '';
  window.location.href = `/signIn/?redirect=${pathname}${queryString}`;
};

export const debounceMoveToSignIn = debounce(moveToSignIn, 1000);

export const removeAllTokens = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('refreshTokenExpiredAt');
};
