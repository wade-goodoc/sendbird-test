import * as style from './index.css';
import React, { ReactNode } from 'react';

const TableRow = ({ children }: { children: ReactNode }) => {
  return <tr className={style.column}>{children}</tr>;
};
export default TableRow;
