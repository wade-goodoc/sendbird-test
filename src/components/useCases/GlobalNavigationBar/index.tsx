import * as style from './index.css';
import { Routes } from '@/src/assets/data/routes';
import Link from 'next/link';
import Text from '@/src/components/typographies/Text';
import { usePathname } from 'next/navigation';
import { COLORS } from '@/src/styles/colors';
import MessageIcon from '@/src/assets/icons/ic_message.svg';
import LogoImage from '@/src/assets/images/img_logo.svg';
import MenuBox from '@/src/components/useCases/MenuBox';
import React, { useEffect, useRef, useState } from 'react';
import DefaultProfileImage from '@/src/assets/images/img_profile_default.svg';

const GlobalNavigationBar = () => {
  const pathname = usePathname();
  const [isVisibleMenuBox, setIsVisibleMenuBox] = useState(false);
  const menuBoxRef = useRef<HTMLDivElement | null>(null);

  const count = 0;

  useEffect(() => {
    if (!document) return;
    document.addEventListener('click', (event) => {
      if (menuBoxRef?.current && !menuBoxRef?.current?.contains(event?.target as Node)) {
        setIsVisibleMenuBox(false);
      }
    });
  }, []);

  return (
    <header className={style.headerContainer}>
      <div className={style.container}>
        <div className={style.leftContainer}>
          <LogoImage />
          <div className={style.tabContainer}>
            {Routes.map((item) => (
              <Link
                key={item.path}
                href={item.children[0].path}
                className={`${style.tab} ${pathname.includes(item.path) ? style.selectedTab : ''}`}
              >
                <Text
                  type="body1_700"
                  color={pathname.includes(item.path) ? 'GRAY_100' : 'GRAY_60'}
                >
                  {item.name}
                </Text>
              </Link>
            ))}
          </div>
        </div>
        <div className={style.rightContainer}>
          <div className={style.rightIconContainer} onClick={async () => {}}>
            <MessageIcon
              className={style.message}
              color={COLORS.GRAY_90}
              width={32}
              height={32}
            />
            {count ? (
              <div className={style.messageCount}>
                <Text type="caption2_500" color={'WHITE'}>
                  {count > 99 ? '99+' : count}
                </Text>
              </div>
            ) : null}
            {/*<SendbirdChat />*/}
          </div>
          <div
            ref={menuBoxRef}
            className={style.rightIconContainer}
            onClick={() => setIsVisibleMenuBox(true)}
          >
            {true ? (
              <img
                className={style.profile}
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAzMTFfMTcz%2FMDAxNzEwMTM1MTI3Mzg5.Rbubo-ahAj4TTo7fu3FKlujqsmNnNB6S5NHR7Wm3gwog.-mtIIyoxy6O__olgj2Ju-FaDAVwAhl2xZJ_QHEmlv9cg.PNG%2Fimage.png&type=a340"
              />
            ) : (
              <DefaultProfileImage />
            )}
            <MenuBox isVisible={isVisibleMenuBox} />
          </div>
        </div>
      </div>
    </header>
  );
};
export default GlobalNavigationBar;
