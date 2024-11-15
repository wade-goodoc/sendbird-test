import dayjs from 'dayjs';

import Text from '@/src/components/typographies/Text';
import ArrowLeft from '@/src/assets/icons/ic_arrow_left.svg';
import ArrowRight from '@/src/assets/icons/ic_arrow_right.svg';
import { COLORS } from '@/src/styles/colors';

import * as styles from './index.css';
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';

type CustomDatePickerHeaderProps = ReactDatePickerCustomHeaderProps & {
  autoSelectDates?: (dayOfWeeks: number) => void;
};

const DateHeader = (props: CustomDatePickerHeaderProps) => {
  const {
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
    autoSelectDates
  } = props;

  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div className={styles.container}>
      <div className={styles.monthContainer}>
        <button
          className={styles.iconButton}
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
        >
          <ArrowLeft
            width={20}
            height={20}
            color={prevMonthButtonDisabled ? COLORS.ALPHA_GRAY_40 : COLORS.GRAY_90}
          />
        </button>
        <Text type={'body1_700'} color={'GRAY_100'}>
          {dayjs(date).format('YYYY년')} {dayjs(date).format('MM월')}
        </Text>
        <button
          className={styles.iconButton}
          onClick={increaseMonth}
          disabled={nextMonthButtonDisabled}
        >
          <ArrowRight
            width={20}
            height={20}
            color={nextMonthButtonDisabled ? COLORS.ALPHA_GRAY_40 : COLORS.GRAY_90}
          />
        </button>
      </div>

      {autoSelectDates && (
        <div className={styles.dayOfWeekContainer}>
          {dayOfWeek.map((day, index) => {
            return (
              <button
                key={`${day}-${index}`}
                className={styles.iconButton}
                onClick={() => {
                  autoSelectDates(index);
                }}
              >
                <Text
                  key={index}
                  type={'body2_400'}
                  color={index === 0 ? 'RED_70' : 'GRAY_70'}
                >
                  {day}
                </Text>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DateHeader;
