import * as style from './index.css';
import React, { ReactNode } from 'react';

const TableHeader = ({ children }: { children: ReactNode }) => {
  return <thead className={style.columnName}>{children}</thead>;
};
export default TableHeader;
