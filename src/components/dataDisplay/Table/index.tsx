import React, { ReactNode } from 'react';

const Table = ({ children }: { children: ReactNode }) => {
  return <table>{children}</table>;
};

export default Table;
