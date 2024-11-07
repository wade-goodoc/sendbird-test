import React, { ForwardedRef, forwardRef } from 'react';

import Input from '..';
import { InputProps } from '../types';

import * as styles from './index.css';

export type NumberProps = InputProps;

const Number = (props: NumberProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <Input type={'number'} inputClassName={styles.numberInput} ref={ref} {...props} />
  );
};

export default forwardRef(Number);
