import { InputHTMLAttributes, ReactNode } from 'react';

export type textType = 'text' | 'password' | 'tel' | 'number' | 'email';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'className'> {
  type?: textType;
  layoutClassName?: string;
  inputClassName?: string;
  children?: ReactNode;
  isError?: boolean;
  onEnter?: (value?: string | number | readonly string[]) => void;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
}
