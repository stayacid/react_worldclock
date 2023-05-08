import { useState } from 'react';
import './TimeZoneBar.scss';

import TimeZoneValue from '@/entities/TimeZoneValue';
import TimeZoneName from '@/entities/TimeZoneName';
import Button from '@/shared/ui/Button';
import { IClock } from '@/shared/domains/clock';
import { generateId } from '@/shared/domains/uuid';

interface ITimeZoneBarProps {
  onSubmit: (clock: IClock) => void;
}


function TimeZoneBar({ onSubmit }: ITimeZoneBarProps) {
  const [timeName, setName] = useState('');
  const [timeValue, setTimeValue] = useState<number>(0);

  const setNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const setTimeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeValue(parseInt(e.target.value, 10));
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    console.log(timeName); // выводит пустую строку
    if (timeName) {
      onSubmit({ timeName, timeValue: Number(timeValue), id: generateId() });
      setName('');
      setTimeValue(0);
    }
  };

  return (
    <form className="app_timezone-bar">
      <TimeZoneName value={timeName} onVary={setNameHandler} />
      <TimeZoneValue value={timeValue} onVary={setTimeValueHandler} />
      <Button text="Добавить" type="submit" onPress={onSubmitHandler} />
    </form>
  );
}

export default TimeZoneBar;
