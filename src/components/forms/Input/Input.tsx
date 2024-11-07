import React, { ForwardedRef, forwardRef } from 'react';

import { InputProps } from './types';
import * as style from './input.css';
import { AllowKeysForNumberInput } from './constants';

const Input = (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const {
    type,
    disabled = false,
    isError = false,
    value,
    layoutClassName,
    inputClassName,
    leftComponent,
    rightComponent,
    onEnter,
    ...restProps
  } = props;

  const checkPreventInput = (key: string) => {
    if (key === 'Enter' && onEnter) {
      onEnter(value);
      return false;
    }

    if (type === 'tel' || type === 'number') {
      return !AllowKeysForNumberInput.includes(key);
    }

    return false;
  };

  return (
    <div
      className={`${style.container({ disabled, isError, readOnly: restProps.readOnly ?? false })}
         ${layoutClassName}`}
    >
      {leftComponent}
      <input
        ref={ref}
        type={type !== 'number' && type !== 'tel' ? type : undefined}
        value={value}
        disabled={disabled}
        onKeyDown={(event) => checkPreventInput(event.key) && event.preventDefault()}
        {...restProps}
        className={`${style.input} ${inputClassName}`}
      />
      {rightComponent}
    </div>
  );
};

export default forwardRef(Input);
