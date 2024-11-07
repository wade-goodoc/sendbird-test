import { Attributes, useMemo } from 'react';
import * as React from 'react';

import * as style from './index.css';
import { SelectMenuProps } from './types';

const SelectMenu: React.FC<SelectMenuProps> = (props) => {
  const { children, onChange, className, size } = props;

  const childWithProps = useMemo(
    () =>
      React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          size,
          index,
          onClick: onChange
        } as Partial<unknown> & Attributes);
      }),
    [children, onChange, size]
  );

  return <div className={`${style.container} ${className}`}>{childWithProps}</div>;
};

export default SelectMenu;
