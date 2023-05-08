import { Input, InputType } from '@/shared/ui/Input';
import { memo } from 'react';

interface ITimeZoneNameProps {
  value: string;
  onVary: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

function TimeZoneNameBased({ value, onVary }: ITimeZoneNameProps) {
  return (
    <Input
      id="time_zone_name"
      label="Название"
      type={InputType.TEXT}
      value={value}
      onVary={onVary}
    />
  );
}

function areEqual(prevProps: ITimeZoneNameProps, nextProps: ITimeZoneNameProps) {
  return prevProps.value === nextProps.value;
}

const TimeZoneValue = memo(TimeZoneNameBased, areEqual); // stop rerendering if value is the same

export default TimeZoneValue;
