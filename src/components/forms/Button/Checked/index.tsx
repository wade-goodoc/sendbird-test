import React from 'react';

import * as style from './index.css';
import { ButtonProps } from '../type';
import Button from '@/src/components/forms/Button';

const ButtonChecked: React.FC<ButtonProps> = (props) => {
  const { checked = false } = props;

  return <Button className={style.checkedButton({ checked })} {...props} />;
};

export default ButtonChecked;
