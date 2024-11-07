import Text from '@/src/components/typographies/Text';
import SearchIcon from '@/public/assets/icons/ic_search.svg';

import * as style from './index.css';
import { ReactNode } from 'react';

interface EmptyListProps {
  icon?: ReactNode;
  title?: string;
  contents?: string;
}
const EmptyList = ({
  icon = <SearchIcon width={48} height={48} stroke={'GRAY_40'} />,
  title = '검색 결과가 없어요',
  contents = '검색어나 검색조건을 변경해보세요'
}: EmptyListProps) => {
  return (
    <div className={style.container}>
      {icon}
      <Text type="body1_600" className={style.title} color={'GRAY_80'}>
        {title}
      </Text>
      <Text type="body2_400" color={'GRAY_60'}>
        {contents}
      </Text>
    </div>
  );
};

export default EmptyList;
