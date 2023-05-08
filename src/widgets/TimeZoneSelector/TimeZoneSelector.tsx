import TimeZoneBar from '@/features/TimeZoneBar';
import TimeZoneList from '@/features/TimeZoneList';
import { UUID } from '@/shared/domains/uuid';
import { useState } from 'react';

export interface IClock {
  timeName: string;
  timeValue: number | string;
  id: UUID;
}

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
