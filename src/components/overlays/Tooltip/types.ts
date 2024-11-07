export type Placement =
  | 'top'
  | 'topStart'
  | 'topEnd'
  | 'right'
  | 'rightStart'
  | 'rightEnd'
  | 'bottom'
  | 'bottomStart'
  | 'bottomEnd'
  | 'left'
  | 'leftStart'
  | 'leftEnd';

export interface Position {
  top?: number;
  left?: number;
}
