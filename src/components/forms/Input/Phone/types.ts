import { InputProps } from '../types';

export interface PhoneProps extends Omit<InputProps, 'value' | 'onChange'> {
  value?: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}
