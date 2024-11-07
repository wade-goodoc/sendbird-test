import React, { ForwardedRef, forwardRef } from 'react';
import * as styles from './index.css';
import Text from '../../typographies/Text';
import { TextareaProps } from './type';

const Textarea = (props: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
  const {
    containerClassName,
    className,
    isError = false,
    disabled = false,
    maxLength,
    placeholder,
    value = '',
    children,
    onChange,
    ...restProps
  } = props;

  return (
    <div className={containerClassName}>
      <div className={`${styles.wrapper({ disabled, isError })} ${className}`}>
        <textarea
          ref={ref}
          className={styles.textarea}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          placeholder={placeholder}
          onChange={(event) => {
            if (!onChange) return;
            if (maxLength && maxLength < event.target.value.length) return;
            onChange(event.target.value);
          }}
          {...restProps}
        />
        {children}
      </div>
      {maxLength && (
        <div className={styles.counter}>
          <Text type="caption2_500" color={'GRAY_80'}>
            {value.length}
          </Text>
          <Text type="caption2_400" color={'GRAY_60'}>
            {'/'}
          </Text>
          <Text type="caption2_400" color={'GRAY_60'}>
            {`${maxLength}자`}
          </Text>
        </div>
      )}
    </div>
  );
};

export default forwardRef(Textarea);
