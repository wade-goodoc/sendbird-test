import React from 'react';
import * as styles from './index.css';
import { ButtonProps } from './type';

const Button: React.FC<ButtonProps> = (buttonProps) => {
  const {
    className,
    children,
    size = 'small',
    styleType,
    disabled = false,
    fullWidth = false,
    ...props
  } = buttonProps;

  return (
    <button
      disabled={disabled}
      className={`${styles.button({ size, fullWidth })} ${disabled ? styles.disabledStyle({ styleType }) : styles.styleType({ styleType })} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
