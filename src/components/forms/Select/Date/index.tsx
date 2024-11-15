import React, { FC, ReactNode } from 'react';
import DatePicker, { DatePickerProps } from 'react-datepicker';

import * as styles from './index.css';
import DateHeader from '@/src/components/forms/Select/Date/DateHeader';

/**
 * [가이드 문서]
 * https://reactdatepicker.com/
 */
const Date = (props: DatePickerProps) => {
  const { children, ...restProps } = props;

  return (
    <div className={styles.container}>
      <DatePicker
        dateFormat={'yyyy.MM.dd'}
        {...restProps}
        renderCustomHeader={(props) => (
          <>
            <DateHeader {...props} />
          </>
        )}
      />
      {children}
    </div>
  );
};

export default Date;
