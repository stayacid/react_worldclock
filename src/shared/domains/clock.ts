import { UUID } from "./uuid";

export interface IClock {
  timeName: string;
  timeValue: number | string;
  id: UUID;
}