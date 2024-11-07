'use client';
import * as style from './layout.css';
import GlobalNavigationBar from '@/src/components/useCases/GlobalNavigationBar';
import SideNavigationBar from '@/src/components/useCases/SideNavigationBar';
import FooterNavigationBar from '@/src/components/useCases/FooterNavigationBar';
import React, { ReactNode } from 'react';

const ServicesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <GlobalNavigationBar />
      <SideNavigationBar />
      <section className={style.layout}>
        <section className={style.mainLayout}>{children}</section>
        <FooterNavigationBar />
      </section>
    </>
  );
};

export default ServicesLayout;
