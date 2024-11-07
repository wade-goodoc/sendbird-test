import React, { ForwardedRef, forwardRef, useState } from 'react';

import Input from '..';
import { InputProps } from '../types';

import * as styles from './index.css';
import EyeClosedIcon from '@/src/assets/icons/ic_eye_closed.svg';
import EyeIcon from '@/src/assets/icons/ic_eye.svg';

export type PasswordInputProps = InputProps;

const PasswordInput = (
  props: PasswordInputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      type={showPassword ? 'text' : 'password'}
      inputClassName={styles.numberInput}
      rightComponent={
        <button type={'button'} onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <EyeIcon /> : <EyeClosedIcon />}
        </button>
      }
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(PasswordInput);
