import * as style from './index.css';
import Text from '@/src/components/typographies/Text';
import OutwardArrowIcon from '@/src/assets/icons/ic_arrow_outward.svg';
import { COLORS } from '@/src/styles/colors';
import { outlink } from '@/src/assets/data/outlink';

const FooterNavigationBar = () => {
  return (
    <footer id="footer" className={style.container}>
      <div className={style.content}>
        <section>
          <div className={style.title}>
            <Text type="body2_600" color={'GRAY_70'}>
              주식회사 굿닥
            </Text>
          </div>

          <ul className={style.footerTab}>
            <span className={style.information}>
              <Text type="caption1_400" color={'GRAY_60'}>
                대표 임진석
              </Text>
            </span>
            <span className={style.information}>
              <Text type="caption1_400" color={'GRAY_60'}>
                서울특별시 강남구 역삼로 2길 16, 6 ~ 9층
              </Text>
            </span>
            <span className={style.information}>
              <Text type="caption1_400" color={'GRAY_60'}>
                사업자등록번호 431-88-01818
              </Text>
            </span>
          </ul>
        </section>

        <section>
          <div className={style.title}>
            <Text type="body2_600" color={'GRAY_70'}>
              고객센터
            </Text>
          </div>
          <Text type="caption1_400" color={'GRAY_60'}>
            <span>1661-8173 (운영시간 09:00 ~ 19:00)</span>
          </Text>
        </section>

        <section className={style.guide}>
          <div className={style.title} onClick={() => window.open(outlink.guideOfUse)}>
            <Text type="body2_600" color={'GRAY_70'}>
              이용가이드
            </Text>
            <OutwardArrowIcon width={16} height={16} color={COLORS.GRAY_50} />
          </div>
        </section>
      </div>
      <ul className={style.footerContainer}>
        <li
          onClick={() => {
            window.open(outlink.termsOfUse);
          }}
          className={style.footerText}
        >
          <Text type={'caption2_400'} color={'GRAY_60'}>
            이용약관
          </Text>
        </li>
        <li
          onClick={() => {
            window.open(outlink.privacyPolicy);
          }}
          className={style.footerText}
        >
          <Text type={'caption2_700'} color={'GRAY_60'}>
            개인정보 처리방침
          </Text>
        </li>
        <li className={style.footerText}>
          <Text type={'caption2_400'} color={'GRAY_60'}>
            All Right Reserved. ©goodoc
          </Text>
        </li>
      </ul>
    </footer>
  );
};
export default FooterNavigationBar;
