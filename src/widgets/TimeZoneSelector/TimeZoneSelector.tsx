import TimeZoneBar from '@/features/TimeZoneBar';
import TimeZoneList from '@/features/TimeZoneList';
import { IClock } from '@/shared/domains/clock';
import { useState } from 'react';

function TimeZoneSelector() {
  const [clocks, setClocks] = useState<IClock[]>([]);

  const onSubmit = (clock: IClock) => {
    setClocks([...clocks, clock]);
  };

  return (
    <>
      <TimeZoneBar onSubmit={onSubmit} />
      <TimeZoneList clocks={clocks}/>
    </>
  );
}

export default TimeZoneSelector;
