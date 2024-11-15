import Check from '@/src/assets/icons/ic_check_light.svg';

import * as style from './index.css';
import { SelectMenuItemProps } from './types';

const SelectMenuItem: React.FC<SelectMenuItemProps> = ({
  className,
  onClick,
  item,
  selected = false,
  size = 'large',
  index,
  disabled = false
}: SelectMenuItemProps) => {
  return (
    <div
      className={`${style.container({ size, selected, disabled })} ${className}`}
      onClick={() => !disabled && onClick?.(item, index)}
    >
      {item.label}
      {selected && <Check width={16} height={16} />}
    </div>
  );
};

export default SelectMenuItem;
``;
