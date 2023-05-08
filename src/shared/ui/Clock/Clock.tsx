import { memo, useEffect, useRef, useState } from 'react';
import './Clock.scss';
import { IClock } from '@/shared/domains/clock';

interface IClockProps {
  clock: IClock;
}

interface ITime {
  hours: number;
  minutes: number;
  seconds: number;
}

const createClock = (offset: number) => {
  const date = new Date();
  const utc = date.getTime() - date.getTimezoneOffset() * 60000; // take gmt 0
  const newDate = new Date(utc + Number(offset) * 3600000); // add hours offset
  let hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  const seconds = newDate.getSeconds();

  if (hours == 0) {
    hours = 12;
  }

  if (hours > 12) {
    hours = hours - 12;
  }
  return { hours, minutes, seconds }
};

function BaseClock({ clock }: IClockProps) {
  const [time, setTime] = useState<ITime>(createClock(clock.timeValue));
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const deleteClock = () => {
    console.log('delete');
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setTime(createClock(clock.timeValue)); // run every second
    }, 1000);
    
    return () => clearTimeout(timerRef.current);
  });

  return (
    <li className="app_clock">
      <header className="app_clock_header">
        <h3>{clock.timeName}</h3>
        <button>X</button>
      </header>
      <div>
        {time.hours} {time.minutes} {time.seconds}
      </div>
    </li>
  );
}

function areEqual(prevProps: IClockProps, nextProps: IClockProps) {
  return prevProps.clock.timeValue === nextProps.clock.timeValue;
}

const Clock = memo(BaseClock, areEqual);

export default Clock;