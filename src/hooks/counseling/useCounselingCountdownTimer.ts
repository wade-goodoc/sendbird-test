import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

type CounselingCountdownTimerProps = {
  targetDateTime: string;
};

const useCounselingCountdownTimer = ({
  targetDateTime
}: CounselingCountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [minutes, setMinutes] = useState<number | null>(null);
  const [seconds, setSeconds] = useState<number | null>(null);

  useEffect(() => {
    const targetTime = dayjs(targetDateTime);

    const checkTimeDifference = () => {
      const now = dayjs();
      const timeDiff = targetTime.diff(now, 'second');

      if (timeDiff <= 0) {
        setTimeLeft(null);
        setIsTimerStarted(false);
        setMinutes(null);
        setSeconds(null);
        return;
      }

      if (timeDiff <= 600 && !isTimerStarted) {
        setIsTimerStarted(true);
        setTimeLeft(timeDiff);
        setMinutes(Math.floor(timeDiff / 60));
        setSeconds(timeDiff % 60);
      }
    };

    checkTimeDifference();

    const checkInterval = setInterval(checkTimeDifference, 1000);

    const countdownInterval = setInterval(() => {
      if (isTimerStarted && timeLeft !== null) {
        const now = dayjs();
        const timeDiff = targetTime.diff(now, 'second');

        if (timeDiff <= 0) {
          clearInterval(countdownInterval);
          setTimeLeft(null);
          setMinutes(null);
          setSeconds(null);
        } else {
          setTimeLeft(timeDiff);
          setMinutes(Math.floor(timeDiff / 60));
          setSeconds(timeDiff % 60);
        }
      }
    }, 1000);

    return () => {
      clearInterval(checkInterval);
      clearInterval(countdownInterval);
    };
  }, [targetDateTime, isTimerStarted, timeLeft]);

  return {
    isTimerStarted,
    minutes,
    seconds
  };
};

export default useCounselingCountdownTimer;
