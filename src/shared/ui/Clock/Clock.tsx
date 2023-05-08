import { memo, useEffect, useRef, useState } from 'react';
import './Clock.scss';
import { IClock } from '@/shared/domains/clock';

interface IClockProps {
  clock: IClock;
  deleteClock: (id: string) => void;
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
  return { hours, minutes, seconds };
};

function BaseClock({ clock, deleteClock }: IClockProps) {
  const [time, setTime] = useState<ITime>(createClock(clock.timeValue));
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setTime(createClock(clock.timeValue)); // run every second
    }, 1000);

    return () => clearTimeout(timerRef.current);
  });

  function getHoursAngle(hours: ITime['hours'], minutes: ITime['minutes']) {
    return hours * 30 + minutes * 0.5;
  }

  function getMinutesAngle(minutes: ITime['minutes']) {
    return minutes * 6;
  }

  function getSecondAngle(seconds: ITime['minutes']) {
    return seconds * 6;
  }

  const hoursStyle = {
    transform: `rotate(${getHoursAngle(time.hours, time.minutes)}deg)`,
  };

  const minutesStyle = {
    transform: `rotate(${getMinutesAngle(time.minutes)}deg)`,
  };

  const secondsStyle = {
    transform: `rotate(${getSecondAngle(time.seconds)}deg)`,
  };

  return (
    <li className="app_clock">
      <header className="app_clock_header">
        <h3>{clock.timeName}</h3>
        <button onClick={() => deleteClock(clock.id)}></button>
      </header>
      <div className="app_clock_body">
        <ul className="app_clock_hours_marks">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="app_clock_hours_arrow" style={hoursStyle}></div>
        <div className="app_clock_hours_minutes" style={minutesStyle}></div>
        <div className="app_clock_hours_seconds" style={secondsStyle}></div>
        <p className="app_clock_digits">
          {time.hours}:{time.minutes}:{time.seconds}
        </p>
      </div>
    </li>
  );
}

function areEqual(prevProps: IClockProps, nextProps: IClockProps) {
  return prevProps.clock.timeValue === nextProps.clock.timeValue;
}

const Clock = memo(BaseClock, areEqual); // stop rerendering if timeValue is the same

export default Clock;
