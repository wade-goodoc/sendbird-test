'use client';
import React from 'react';
import * as style from './index.css';
import Text from '@/src/components/typographies/Text';
import BoxContainer from '@/src/app/(auth)/components/BoxContainer';
import Input from '@/src/components/forms/Input';
import Button from '@/src/components/forms/Button';
import Checkbox from '@/src/components/forms/Checkbox';
import Link from 'next/link';
import TermLinks from '@/src/app/(auth)/components/TermLinks';
import useSignInForm from '@/src/hooks/auth/login/useSignInForm';
import { Controller } from 'react-hook-form';
import SignInFailModal from '@/src/app/(auth)/signIn/components/SignInFailModal';

const SignInPage = () => {
  const { onSubmit, control, watch } = useSignInForm();

  return (
    <div>
      <BoxContainer className={style.container}>
        <div className={style.inner}>
          <h1 className={style.title}>
            <Text type={'heading3_700'} color={'GRAY_90'}>
              로그인
            </Text>
          </h1>
          <Controller
            name="email"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                layoutClassName={style.input}
                placeholder={'이메일'}
                onChange={(event) => onChange(event.target.value)}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input.Password
                value={value}
                layoutClassName={style.input}
                placeholder={'비밀번호'}
                onChange={onChange}
              />
            )}
          />

          <Controller
            name="saveEmail"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Checkbox
                id={'save-id'}
                checked={value}
                onChange={(e) => onChange(e.target.checked)}
              >
                <Text type={'body2_400'} color={'GRAY_70'}>
                  이메일 저장
                </Text>
              </Checkbox>
            )}
          />

          {/*<div className={style.errorMessage}>*/}
          {/*  <Text type={'body2_400'} color={'RED_60'}>*/}
          {/*    이메일 또는 비밀번호를 잘못 입력했습니다.*/}
          {/*    <br />*/}
          {/*    정확한 정보를 입력해 주세요.*/}
          {/*  </Text>*/}
          {/*</div>*/}

          <Button
            className={style.submitButton}
            styleType={'primarySolid'}
            disabled={watch('email').length === 0 || watch('password').length === 0}
            size={'large'}
            fullWidth
            onClick={onSubmit}
          >
            로그인
          </Button>
          <div className={style.findAccount}>
            <Link href={'/findPassword'}>
              <Text type={'caption1_400'} color={'GRAY_70'}>
                이메일 ∙ 비밀번호 찾기
              </Text>
            </Link>
          </div>
        </div>
      </BoxContainer>
      <TermLinks />
      <SignInFailModal isVisible={false} />
    </div>
  );
};

export default SignInPage;
