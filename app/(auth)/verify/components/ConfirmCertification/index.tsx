'use client';
import React from 'react';
import * as style from './index.css';
import Text from '@/src/components/typographies/Text';
import BoxContainer from '@/src/app/(auth)/components/BoxContainer';
import Button from '@/src/components/forms/Button';

const ConfirmCertification = () => {
  return (
    <div>
      <BoxContainer className={style.container}>
        <h2 className={style.title}>
          <Text type={'heading3_700'} color={'GRAY_90'}>
            서비스 이용을 위해
            <br />
            최초 1회 본인인증을 해주세요.
          </Text>
        </h2>
        <Button styleType={'primarySolid'} size={'large'} fullWidth>
          확인
        </Button>
      </BoxContainer>
    </div>
  );
};

export default ConfirmCertification;
