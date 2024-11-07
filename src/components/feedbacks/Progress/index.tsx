'use client';
import * as styles from './index.css';
import Text from '@/src/components/typographies/Text';

export default function Progress({
  currentPage,
  page
}: {
  currentPage: number;
  page: number;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `calc(${currentPage / page} * 100%` }}
        />
      </div>
      <p className={styles.pageNumber}>
        <Text type="body2_600" color={'GRAY_90'}>
          {currentPage}
        </Text>
        <Text type="body2_400" color={'GRAY_50'}>
          /
        </Text>
        <Text type="body2_400" color={'GRAY_50'}>
          {page}
        </Text>
      </p>
    </div>
  );
}
