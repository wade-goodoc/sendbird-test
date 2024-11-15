'use client';
import { MeQuery, useMeQuery } from '@/src/gql/generated/graphql';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { meData } from '@/src/store/auth/me';

const Auth = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const setMeData = useSetRecoilState(meData);

  const { data } = useMeQuery({
    skip: !accessToken,
    fetchPolicy: 'no-cache'
  });

  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken'));
  }, []);

  useEffect(() => {
    setMeData(data?.me as MeQuery['me']);
  }, [data]);

  return <></>;
};

export default Auth;
