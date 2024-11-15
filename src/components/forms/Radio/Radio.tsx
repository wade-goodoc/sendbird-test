import * as style from './radio.css';
import Text from '@/src/components/typographies/Text';

interface RadioProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio = ({ label, value, checked, onChange }: RadioProps) => (
  <div className={style.radioButtonWrapper}>
    <label className={style.label}>
      <input
        type="radio"
        className={style.hiddenRadio}
        checked={checked}
        onChange={onChange}
        value={value}
      />
      <div
        className={`${style.customRadio} ${checked ? style.customRadioChecked : ''}`}
      />
      <Text type={'body1_500'} color={'GRAY_80'}>
        {label}
      </Text>
    </label>
  </div>
);

export default Radio;
