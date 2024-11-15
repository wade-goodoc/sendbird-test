import React, { ReactNode } from 'react';
import * as style from './index.css';

const TableCell = ({
  children,
  width,
  align = 'left'
}: {
  children?: ReactNode;
  width?: number;
  align?: 'left' | 'right' | 'center';
}) => {
  return (
    <td className={style.cellContainer} width={width} align={align}>
      {children}
    </td>
  );
};
export default TableCell;
