import React, { ForwardedRef, forwardRef } from 'react';

import Input from '..';
import { PhoneProps } from './types';
import { convertPhoneFormat } from '@/src/utils/convertPhoneFormat';
import { phoneNumberRegulation } from '@/src/utils/regularExpressions';

const Phone = (props: PhoneProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { prefix = '', value = '', onChange = () => undefined, ...restProps } = props;

  const formatPhone = (phone: string) => {
    return convertPhoneFormat(phone, '-');
  };

  const inputPhoneNumber: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (phoneNumberRegulation(event.target.value))
      onChange(formatPhone(event.target.value), event);
  };

  return (
    <Input
      ref={ref}
      inputMode="tel"
      type="tel"
      maxLength={13}
      value={formatPhone(value)}
      onChange={inputPhoneNumber}
      {...restProps}
    />
  );
};

export default forwardRef(Phone);
