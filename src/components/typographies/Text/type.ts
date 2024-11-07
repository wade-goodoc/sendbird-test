import { Color } from '@/src/styles/colors';

export interface TextProps {
  type: TextType;
  color?: Color;
  className?: string;
  children: React.ReactNode;
}

export type TextType =
  | 'heading1_400'
  | 'heading1_500'
  | 'heading1_600'
  | 'heading1_700'
  | 'heading2_400'
  | 'heading2_500'
  | 'heading2_600'
  | 'heading2_700'
  | 'heading3_400'
  | 'heading3_500'
  | 'heading3_600'
  | 'heading3_700'
  | 'heading4_400'
  | 'heading4_500'
  | 'heading4_600'
  | 'heading4_700'
  | 'heading5_400'
  | 'heading5_500'
  | 'heading5_600'
  | 'heading5_700'
  | 'body1_400'
  | 'body1_500'
  | 'body1_600'
  | 'body1_700'
  | 'body2_400'
  | 'body2_500'
  | 'body2_600'
  | 'body2_700'
  | 'caption1_400'
  | 'caption1_500'
  | 'caption1_600'
  | 'caption1_700'
  | 'caption2_400'
  | 'caption2_500'
  | 'caption2_600'
  | 'caption2_700';

export type Scale =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'body1'
  | 'body2'
  | 'caption1'
  | 'caption2';

export type FontWeight = '700' | '600' | '500' | '400';
