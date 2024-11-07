export interface SelectMenuItemProps {
  className?: string;
  onClick?: (item: MenuItem, index?: number) => void;
  item: MenuItem;
  selected?: boolean;
  size?: Size;
  index?: number;
  disabled?: boolean;
}

export type MenuItem = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type Size = 'large' | 'medium';
