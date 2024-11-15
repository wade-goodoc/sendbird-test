import { useState } from 'react';
import * as style from './index.css';
import ArrowIcon from '@/src/assets/icons/ic_arrow_down_regular.svg';
import CheckIcon from '@/src/assets/icons/ic_check_light.svg';
import Text from '@/src/components/typographies/Text';
import { COLORS } from '@/src/styles/colors';

type AccordionItem = {
  id: number;
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

const Accordion = ({ items, className }: AccordionProps) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedItem((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`${style.accordionContainer} ${className}`}>
      {items.map((item) => {
        const isExpanded = item.id === expandedItem;
        return (
          <div key={item.id}>
            <div
              className={`${style.accordionItem}`}
              onClick={() => handleToggle(item.id)}
            >
              <div className={style.accordionTitleWrap}>
                <div className={style.accordionTitle}>
                  <button type={'button'}>
                    <CheckIcon width={24} height={24} color={COLORS.GRAY_40} />
                  </button>
                  <Text type={'body2_400'} color={'GRAY_70'}>
                    {item.title}
                  </Text>
                </div>
                <div
                  className={`${style.arrowIcon} ${
                    style.arrowVariants[isExpanded ? 'expanded' : 'collapsed']
                  }`}
                >
                  <ArrowIcon width={18} height={18} color={COLORS.GRAY_40} />
                </div>
              </div>
            </div>
            <div
              className={`${style.contentWrapper} ${isExpanded ? style.contentExpanded : ''}`}
            >
              {isExpanded && (
                <Text type={'caption1_400'} color={'GRAY_70'}>
                  {item.content}
                </Text>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
