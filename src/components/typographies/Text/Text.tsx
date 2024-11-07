import { FC } from 'react';
import { FontWeight, Scale, TextProps } from './type';
import { textStyle } from '@/src/components/typographies/Text/index.css';

const Text: FC<TextProps> = (props) => {
  const { type, color, className, children } = props;

  const styles = type.split('_') as [Scale, FontWeight];
  const scale: Scale = styles[0];
  const weight: FontWeight = styles[1];

  return (
    <span className={`${textStyle({ scale, weight, color })} ${className}`}>
      {children}
    </span>
  );
};

export default Text;
