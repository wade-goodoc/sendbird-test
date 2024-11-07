import { TextareaHTMLAttributes } from 'react';

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  containerClassName?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  isError?: boolean;
  maxLength?: number;
  value?: string;
  children?: React.ReactNode;
  onChange?: (value: string) => void;
}
