import { IClock } from '@/widgets/TimeZoneSelector';

interface ITimeZoneListProps {
  clocks: IClock[];
}
function TimeZoneList({ clocks }: ITimeZoneListProps) {
  const listItems = clocks.map(({ timeName, timeValue, id }) => (
    <li key={id}>
      {timeName}, {timeValue}
    </li>
  ));

  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}

export default TimeZoneList;
