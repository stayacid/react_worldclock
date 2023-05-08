import TimeZoneValue from "@/entities/TimeZoneValue/TimeZoneValue";
import TimeZoneName from "@/entities/TimeZoneName";
import "./TimeZoneBar.scss";
import Button from "@/shared/Button";
import { memo, useState } from "react";
import { ITimeZoneSelectorProps } from "@/widgets/TimeZoneSelector/TimeZoneSelector";

interface ITimeZoneBarProps {
  onSubmit: ({ timeName, timeValue }: ITimeZoneSelectorProps) => void;
}

const MemotizedTimeZoneName = memo(TimeZoneName);
const MemotizedTimeZoneValue = memo(TimeZoneValue);

function TimeZoneBar({ onSubmit}: ITimeZoneBarProps) {
  const [ timeName, setName ] = useState('');
  const [ timeValue, setTimeValue ] = useState<number | string>('');


  const setNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const setTimeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeValue(parseInt(e.target.value, 10) || '');
  }

  const onSubmitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (timeName && timeValue) {
      onSubmit({ timeName, timeValue});
      setName('');
      setTimeValue('');
    }
  }

  return (
    <form className="app_timezone-bar">
      <MemotizedTimeZoneName value={timeName} onVary={setNameHandler}/>
      <MemotizedTimeZoneValue value={timeValue} onVary={setTimeValueHandler}/>
      <Button text="Добавить" type="submit" onPress={onSubmitHandler} />
    </form>
  );
}

export default TimeZoneBar;