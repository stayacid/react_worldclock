import './Clock.scss';
import { IClock } from '@/shared/domains/clock';

interface IClockProps {
  clock: IClock;
}

function Clock({ clock }: IClockProps) {
  return (
    <li className="app_clock">
      <header className='app_clock_header'>
        <h3>{clock.timeName}</h3>
        <button>X</button>
      </header>
      <div>{clock.timeValue}</div>
    </li>
  );
}

export default Clock;
