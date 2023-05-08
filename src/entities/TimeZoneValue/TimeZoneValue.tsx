import { Input, InputType } from '@/shared/ui/Input';
import { memo } from 'react';

interface ITimeZoneValue {
  value: number | string;
  onVary: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

function TimeZoneValueBased({ value, onVary }: ITimeZoneValue) {
  // скрывать ноль при загрузке компонента - код ниже не работает

  return (
    <Input
      id="time_zone_value"
      label="Временная зона"
      type={InputType.NUMBER}
      value={value}
      onVary={onVary}
    />
  );
}

function areEqual(prevProps: ITimeZoneValue, nextProps: ITimeZoneValue) {
  return prevProps.value === nextProps.value;
}

const TimeZoneValue = memo(TimeZoneValueBased, areEqual); // stop rerendering if value is the same

export default TimeZoneValue;
