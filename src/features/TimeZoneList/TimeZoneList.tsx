import Clock from '@/shared/ui/Clock/Clock';
import './TimeZoneList.scss';
import { IClock } from '@/shared/domains/clock';

interface ITimeZoneListProps {
  clocks: IClock[];
  deleteClock: (id: string) => void;
}

function TimeZoneList({ clocks, deleteClock }: ITimeZoneListProps) {
  const listItems = clocks.map((clock) => (
    <Clock key={clock.id} clock={clock} deleteClock={deleteClock} />
  ));

  return <ul className="app_timezone-list">{listItems}</ul>;
}

export default TimeZoneList;
