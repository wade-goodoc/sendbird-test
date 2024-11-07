declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare global {
  interface Window {}
}

import { SVGProps } from 'react';
import * as React from 'react';

const component: React.FC<SVGProps<SVGSVGElement>>;
export default component;
