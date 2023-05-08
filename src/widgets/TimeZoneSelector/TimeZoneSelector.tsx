import TimeZoneBar from "../../features/TimeZoneBar";
import TimeZoneList from "../../features/TimeZoneList";

export interface ITimeZoneSelectorProps {
  timeName: string;
  timeValue: number | string;
}

function TimeZoneSelector() {
  const onSubmit = ({ timeName, timeValue}: ITimeZoneSelectorProps) => { 
    console.log("submit", timeName, timeValue);
  };

  return ( <>
  <TimeZoneBar onSubmit={onSubmit}/>
  <TimeZoneList />
  </> );
}

export default TimeZoneSelector;