import * as style from './index.css';
import { usePathname } from 'next/navigation';
import { Routes } from '@/src/assets/data/routes';
import Link from 'next/link';
import Text from '@/src/components/typographies/Text';
import { COLORS } from '@/src/styles/colors';
import React, { ReactElement } from 'react';

const SideNavigationBar = () => {
  const pathname = usePathname();

  return (
    <>
      {Routes.filter((item) => pathname.includes(item.path)).length > 0 && (
        <nav className={style.navContainer}>
          {Routes.filter((item) => pathname.includes(item.path))[0].children.map(
            (item) => (
              <Link key={item.path} href={item.path} className={style.navItem}>
                {item.icon
                  ? React.cloneElement(item.icon as ReactElement, {
                      color: pathname.includes(item.path)
                        ? COLORS.GRAY_100
                        : COLORS.GRAY_60
                    })
                  : null}
                <Text
                  type={pathname.includes(item.path) ? 'body1_700' : 'body1_500'}
                  color={pathname.includes(item.path) ? 'GRAY_100' : 'GRAY_60'}
                >
                  {item.name}
                </Text>
              </Link>
            )
          )}
        </nav>
      )}
    </>
  );
};

export default SideNavigationBar;
