import { useEffect, useRef, useState } from 'react';

import * as styles from './index.css';
import { COLORS } from '@/src/styles/colors';
import Text from '@/src/components/typographies/Text';

interface TimeSelectProps {
  value: {
    hour: string;
    minute: string;
  };
  disabled?: boolean;
  minuteInterval?: number;
  onChange: (hour: string, minute: string) => void;
}

const Time = ({
  value,
  disabled = false,
  minuteInterval = 1,
  onChange
}: TimeSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hour, setHour] = useState(value.hour || '00');
  const [minute, setMinute] = useState(value?.minute || '00');
  const timeSelectRef = useRef<HTMLDivElement | null>(null);

  const hours = Array.from(Array(24).keys()).map((item) =>
    item.toString().padStart(2, '0')
  );
  const minutes = Array.from(Array(60).keys())
    .filter((item) => item % minuteInterval === 0)
    .map((item) => item.toString().padStart(2, '0'));

  useEffect(() => {
    if (!document) return;
    document.addEventListener('mousedown', (event) => {
      if (
        timeSelectRef &&
        timeSelectRef?.current &&
        !timeSelectRef?.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    });
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const hourOptionsId = document.getElementById('selectHourOptions');
    const minuteOptionsId = document.getElementById('selectMinuteOptions');
    hourOptionsId?.scroll({ top: hours.indexOf(hour) * 36 });
    minuteOptionsId?.scroll({ top: minutes.indexOf(minute) * 36 });
  }, [isOpen]);

  useEffect(() => {
    const hourOptionsId = document.getElementById('selectHourOptions');
    hourOptionsId?.scroll({ top: hours.indexOf(hour) * 36 });
  }, [hours, hour]);

  useEffect(() => {
    const minuteOptionsId = document.getElementById('selectMinuteOptions');
    minuteOptionsId?.scroll({ top: minutes.indexOf(minute) * 36 });
  }, [minutes, minute]);

  useEffect(() => {
    setHour(value?.hour);
    setMinute(value?.minute);
  }, [value]);

  return (
    <div
      className={styles.wrapper({ disabled })}
      style={
        isOpen
          ? { border: `1px solid ${COLORS.GRAY_100}` }
          : { border: `1px solid ${COLORS.GRAY_40}` }
      }
      ref={timeSelectRef}
    >
      <button
        disabled={disabled}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Text type="body1_500" color={'GRAY_90'}>
          {hour}:{minute}
        </Text>
      </button>
      {isOpen && (
        <div className={styles.optionsWrapper}>
          <div className={styles.optionWrapper} id="selectHourOptions">
            {hours.map((optionHour, index) => (
              <div
                className={optionHour === hour ? styles.selectedOption : styles.option}
                key={index}
                onClick={() => {
                  setHour(optionHour);
                  onChange(optionHour, minute);
                }}
              >
                <Text type="body2_400" color={'GRAY_90'}>
                  {optionHour}
                </Text>
              </div>
            ))}
          </div>
          <div className={styles.optionWrapper} id="selectMinuteOptions">
            {minutes.map((optionMinute, index) => (
              <div
                className={
                  optionMinute === minute ? styles.selectedOption : styles.option
                }
                key={index}
                onClick={() => {
                  setMinute(optionMinute);
                  onChange(hour, optionMinute);
                }}
              >
                <Text type="body2_400" color={'GRAY_90'}>
                  {optionMinute}
                </Text>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Time;
