import { Input, InputType } from '@/shared/ui/Input';
import { useEffect } from 'react';

interface ITimeZoneValue {
  value: number | string;
  onVary: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

function TimeZoneValue({ value, onVary }: ITimeZoneValue) {
  // TODO: удалить после тестирования
  useEffect(() => {
    console.log('TimeZoneValue mounted');
    return () => {
      console.log('TimeZoneValue unmounted');
    };
  }, []);

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

export default TimeZoneValue;
