import { MenuItem, SelectMenuItemProps, Size } from '../SelectMenuItem/types';

export interface SelectMenuProps {
  className?: string;
  onChange?: (item: MenuItem) => void;
  size?: Size;
  children?:
    | React.ReactElement<SelectMenuItemProps>[]
    | React.ReactElement<SelectMenuItemProps>;
}
