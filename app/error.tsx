'use client';
import { useEffect } from 'react';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error }: ErrorProps) => {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <div>
      <h2>현재 페이지에 문제가 있습니다.</h2>
    </div>
  );
};

export default Error;
