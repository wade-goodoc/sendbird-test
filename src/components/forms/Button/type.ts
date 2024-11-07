import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: Size;
  styleType: StyleType;
  checked?: boolean;
  fullWidth?: boolean;
}
export type StyleType =
  | 'primarySolid'
  | 'primarySmooth'
  | 'primaryOutline'
  | 'primaryGhost'
  | 'primaryLinkText'
  | 'primaryReverseSolid'
  | 'primaryReverseSmooth'
  | 'primaryReverseOutline'
  | 'primaryReverseGhost'
  | 'primaryReverseLinkText'
  | 'secondarySolid'
  | 'secondarySmooth'
  | 'secondaryOutline'
  | 'secondaryGhost'
  | 'secondaryLinkText'
  | 'dangerSolid'
  | 'dangerSmooth'
  | 'dangerOutline'
  | 'dangerGhost'
  | 'dangerLinkText'
  | 'commonSolid'
  | 'commonSmooth'
  | 'commonOutline'
  | 'commonGhost'
  | 'commonLinkText';

export type Size = 'large' | 'medium' | 'small' | 'xSmall';
