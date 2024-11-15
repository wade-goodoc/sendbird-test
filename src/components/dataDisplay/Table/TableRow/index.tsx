import * as style from './index.css';
import React, { HTMLAttributes, ReactNode } from 'react';

const TableRow = (
  props: { children: ReactNode } & HTMLAttributes<HTMLTableRowElement>
) => {
  const { children, ...rest } = props;
  return (
    <tr className={style.column} {...rest}>
      {children}
    </tr>
  );
};
export default TableRow;
