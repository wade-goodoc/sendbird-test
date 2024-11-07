import * as style from './index.css';
import Link from 'next/link';
import Text from '@/src/components/typographies/Text';
import React from 'react';

const TermLinks = () => {
  return (
    <div className={style.bottomContainer}>
      <div className={style.termButtons}>
        <Link href={'/'}>
          <Text type={'caption1_700'} color={'GRAY_60'}>
            개인정보처리방침
          </Text>
        </Link>
        <span className={style.textDivider}></span>
        <Link href={'/'}>
          <Text type={'caption1_500'} color={'GRAY_60'}>
            서비스 이용약관
          </Text>
        </Link>
      </div>

      <div>
        <Text type={'caption1_500'} color={'GRAY_60'}>
          All Right Reserved. @goodoc
        </Text>
      </div>
    </div>
  );
};

export default TermLinks;
