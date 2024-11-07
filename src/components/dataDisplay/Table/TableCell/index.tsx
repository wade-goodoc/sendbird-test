import React, { ReactNode } from 'react';
import * as style from './index.css';

const TableCell = ({
  children,
  width,
  align
}: {
  children?: ReactNode;
  width?: number;
  align?: 'left' | 'right' | 'center';
}) => {
  return (
    <td className={style.cellContainer} width={width} align={align || 'center'}>
      {children}
    </td>
  );
};
export default TableCell;
