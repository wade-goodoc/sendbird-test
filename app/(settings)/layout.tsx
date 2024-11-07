'use client';
import * as style from './layout.css';
import GlobalNavigationBar from '@/src/components/useCases/GlobalNavigationBar';
import FooterNavigationBar from '@/src/components/useCases/FooterNavigationBar';
import React, { ReactNode } from 'react';

const ServicesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <GlobalNavigationBar />
      <div className={style.mainLayout}>
        {children}
        <FooterNavigationBar />
      </div>
    </>
  );
};

export default ServicesLayout;
