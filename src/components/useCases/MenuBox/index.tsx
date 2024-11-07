import Text from '@/src/components/typographies/Text';
import * as style from './index.css';
import OutwardArrowIcon from '@/src/assets/icons/ic_arrow_outward.svg';
import { COLORS } from '@/src/styles/colors';
import DefaultProfileImage from '@/src/assets/images/img_profile_default.svg';
import { outlink } from '@/src/assets/data/outlink';

const MenuBox = ({ isVisible }: { isVisible: boolean }) => {
  return (
    isVisible && (
      <div className={style.menuContainer}>
        <div className={style.profileContainer}>
          {true ? (
            <img
              className={style.profile}
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAzMTFfMTcz%2FMDAxNzEwMTM1MTI3Mzg5.Rbubo-ahAj4TTo7fu3FKlujqsmNnNB6S5NHR7Wm3gwog.-mtIIyoxy6O__olgj2Ju-FaDAVwAhl2xZJ_QHEmlv9cg.PNG%2Fimage.png&type=a340"
            />
          ) : (
            <DefaultProfileImage />
          )}
          <div>
            <Text type="heading4_600" color={'GRAY_80'}>
              윤주혜
            </Text>
            <br />
            <Text type="caption1_400" color={'GRAY_60'}>
              goodoc_sd@google.co.kr
            </Text>
          </div>
        </div>
        <menu className={style.listContainer}>
          <li className={style.listItem}>
            <Text type="body1_400" color={'GRAY_80'}>
              내 정보
            </Text>
          </li>
          <li className={style.listItem} onClick={() => window.open(outlink.guideOfUse)}>
            <Text type="body1_400" color={'GRAY_80'}>
              이용가이드
            </Text>
            <OutwardArrowIcon width={16} height={16} color={COLORS.GRAY_50} />
          </li>
          <li className={style.listItem}>
            <Text type="body1_400" color={'GRAY_80'}>
              원격지원 프로그램
            </Text>
          </li>
        </menu>
        <menu className={style.listContainer}>
          <li
            className={style.listItem}
            onClick={() => window.open(outlink.privacyPolicy)}
          >
            <Text type="body1_600" color={'GRAY_80'}>
              개인정보처리방침
            </Text>
            <OutwardArrowIcon width={16} height={16} color={COLORS.GRAY_50} />
          </li>
          <li className={style.listItem} onClick={() => window.open(outlink.termsOfUse)}>
            <Text type="body1_400" color={'GRAY_80'}>
              서비스이용약관
            </Text>
            <OutwardArrowIcon width={16} height={16} color={COLORS.GRAY_50} />
          </li>
        </menu>
        <menu className={style.listContainer}>
          <li className={style.listItem}>
            <Text type="body1_400" color={'GRAY_80'}>
              로그아웃
            </Text>
          </li>
        </menu>
      </div>
    )
  );
};

export default MenuBox;
