import { InputHTMLAttributes, ReactNode } from 'react';

import * as style from './checkbox.css';

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'id'> {
  children?: ReactNode;
  id: string;
}

const Checkbox = (props: CheckboxProps) => {
  const { children, id, ...rest } = props;
  return (
    <div className={style.wrapper}>
      <input id={id} className={style.checkbox} type="checkbox" {...rest} />
      <label htmlFor={id} className={style.label} />
      {!!children && <div className={style.childrenContainer}>{children}</div>}
    </div>
  );
};
export default Checkbox;
