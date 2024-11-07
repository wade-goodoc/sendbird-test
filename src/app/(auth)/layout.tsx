import * as style from './layout.css';
import { ReactNode } from 'react';
import Logo from '@/public/images/logo.svg';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Logo />
      </header>
      <main className={style.content}>{children}</main>
    </div>
  );
};

export default AuthLayout;
