import TimeZoneBar from '@/features/TimeZoneBar';
import TimeZoneList from '@/features/TimeZoneList';
import { IClock } from '@/shared/domains/clock';
import { useState } from 'react';

function TimeZoneSelector() {
  const [clocks, setClocks] = useState<IClock[]>([]);

  const onSubmit = (clock: IClock) => {
    setClocks([...clocks, clock]);
  };

  const deleteClock = (id: string) => {
    setClocks(clocks.filter((clock) => clock.id !== id));
  };

  return (
    <>
      <TimeZoneBar onSubmit={onSubmit} />
      {clocks.length > 0 && (
        <TimeZoneList clocks={clocks} deleteClock={deleteClock} />
      )}
    </>
  );
}

export default TimeZoneSelector;
