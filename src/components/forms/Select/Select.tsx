'use client';
import { useMemo, useState } from 'react';

import Input from '@/src/components/forms/Input';
import ArrowDown from '@/src/assets/icons/ic_arrow_down_regular.svg';
import ArrowUp from '@/src/assets/icons/ic_arrow_up_regular.svg';

import SelectMenu from './SelectMenu';
import { SelectMenuProps } from './SelectMenu/types';
import SelectMenuItem from './SelectMenuItem';
import { MenuItem } from './SelectMenuItem/types';
import * as style from './index.css';
import { COLORS } from '@/src/styles/colors';

/*
 * Select 풀 기능을 제공한다
 * InputWithImage를 사용한다
 */
interface SelectProps extends Omit<SelectMenuProps, 'item'> {
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  isError?: boolean;
  readonly?: boolean;
  items?: MenuItem[];
  className?: string;
  selectButtonClassName?: string;
  selectMenuClassName?: string;
}

const Select = ({
  onChange,
  value,
  size = 'large',
  isError,
  readonly = false,
  disabled,
  items,
  placeholder,
  className,
  selectButtonClassName,
  selectMenuClassName
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedItem = useMemo(() => {
    return items?.find(({ value: _value }) => _value === value);
  }, [items, value]);

  const toggleSelectMenu = () => {
    if (disabled || readonly) return;
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div
      className={`${style.container({ size })} ${className}`}
      onClick={toggleSelectMenu}
    >
      <Input
        isError={isError}
        disabled={disabled}
        value={selectedItem?.label || ''}
        placeholder={placeholder}
        layoutClassName={`${style.selectButton({ isOpen })} ${selectButtonClassName}`}
        readOnly={readonly}
        rightComponent={
          isOpen ? (
            <ArrowUp
              width={style.iconLayout[size]}
              height={style.iconLayout[size]}
              color={disabled ? COLORS.ALPHA_GRAY_30 : COLORS.GRAY_70}
            />
          ) : (
            <ArrowDown
              width={style.iconLayout[size]}
              height={style.iconLayout[size]}
              color={disabled ? COLORS.ALPHA_GRAY_30 : COLORS.GRAY_70}
            />
          )
        }
        onChange={() => {}}
      />
      {isOpen && (
        <SelectMenu
          className={`${style.selectMenu} ${selectMenuClassName}`}
          onChange={onChange}
          size={size}
        >
          {items?.map((item) => (
            <SelectMenuItem
              key={item.value}
              item={item}
              selected={item.value === selectedItem?.value}
              disabled={item.disabled}
            />
          ))}
        </SelectMenu>
      )}
    </div>
  );
};

export default Select;
