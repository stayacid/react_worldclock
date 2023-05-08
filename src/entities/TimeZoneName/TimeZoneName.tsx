import { Input, InputType } from '@/shared/Input';
import { useEffect } from 'react';

interface ITimeZoneNameProps {
  value: string;
  onVary: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

function TimeZoneName({ value, onVary }: ITimeZoneNameProps) {
  // TODO: удалить после тестирования
  useEffect(() => {
    console.log('TimeZoneName mounted');
    return () => {
      console.log('TimeZoneName unmounted');
    };
  }, []);

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

export default TimeZoneName;
