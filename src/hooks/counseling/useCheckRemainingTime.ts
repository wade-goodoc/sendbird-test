import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

type CheckRemainingTimeProps = {
  targetDateTime: string;
};

const useCheckRemainingTime = ({ targetDateTime }: CheckRemainingTimeProps) => {
  const [remainingTime, setRemainingTime] = useState('');

  const updateRemainingTime = () => {
    const targetDate = dayjs(targetDateTime);
    const now = dayjs();

    const diffInMilliseconds = targetDate.diff(now);
    const diffInHours = targetDate.diff(now, 'hour');

    if (diffInHours < 0) return '';

    if (diffInHours < 24) {
      const duration = dayjs.duration(diffInMilliseconds);
      const hours = String(duration.hours());
      const minutes = String(duration.minutes()).padStart(2, '0');
      setRemainingTime(`${hours}시간 ${minutes}분 후 예정`);
      return;
    }

    const diffInDays = targetDate.diff(now, 'day');
    setRemainingTime(`${diffInDays}일 후 예정`);
  };

  useEffect(() => {
    updateRemainingTime();
    const intervalId = setInterval(updateRemainingTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return {
    remainingTime
  };
};

export default useCheckRemainingTime;
