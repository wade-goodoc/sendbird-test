'use client';
import * as style from './index.css';
import BoxContainer from '@/src/app/(auth)/components/BoxContainer';
import Text from '@/src/components/typographies/Text';
import React from 'react';
import Input from '@/src/components/forms/Input';
import Button from '@/src/components/forms/Button';
import TermLinks from '@/src/app/(auth)/components/TermLinks';
import useFindPasswordForm from '@/src/hooks/auth/findPassword/useFIndPasswordForm';
import { Controller } from 'react-hook-form';

const FindPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit
  } = useFindPasswordForm();

  return (
    <div>
      <BoxContainer className={style.container}>
        <h2 className={style.title}>
          <Text type={'heading3_700'} color={'GRAY_90'}>
            개인정보 보호를 위해
            <br />
            비밀번호를 변경해 주세요.
          </Text>
        </h2>
        <div className={style.inputWrap}>
          <Text className={style.inputLabel} type={'body2_500'} color={'GRAY_70'}>
            비밀번호
          </Text>

          <Controller
            name="password"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input.Password
                isError={!!errors.password}
                value={value}
                placeholder={'8~20자 이내 영문, 숫자, 특수문자 모두 포함'}
                onChange={(event) => onChange(event.target.value)}
              />
            )}
          />

          {errors.password && (
            <div className={style.errorMessage}>
              <Text type={'body2_500'} color={'RED_60'}>
                {errors.password.message}
              </Text>
            </div>
          )}
        </div>

        <div className={style.inputWrap}>
          <Text className={style.inputLabel} type={'body2_500'} color={'GRAY_70'}>
            비밀번호 확인
          </Text>
          <Controller
            name="passwordConfirm"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input.Password
                isError={!!errors.passwordConfirm}
                value={value}
                placeholder={'비밀번호를 재입력 해주세요.'}
                onChange={(event) => onChange(event.target.value)}
              />
            )}
          />

          {errors.passwordConfirm && (
            <div className={style.errorMessage}>
              <Text type={'body2_500'} color={'RED_60'}>
                {errors.passwordConfirm.message}
              </Text>
            </div>
          )}
        </div>

        <Button
          className={style.submitButton}
          styleType={'primarySolid'}
          size={'medium'}
          fullWidth
          onClick={handleSubmit(
            (data) => {
              console.log('onSubmit : ', data);
            },
            (error) => {
              console.log('onError : ', error);
            }
          )}
        >
          확인
        </Button>
        <Button styleType={'secondaryOutline'} size={'medium'} fullWidth>
          취소
        </Button>
      </BoxContainer>
      <TermLinks />
    </div>
  );
};

export default FindPassword;
