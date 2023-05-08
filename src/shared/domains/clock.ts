import { UUID } from "./uuid";

export interface IClock {
  timeName: string;
  timeValue: number;
  id: UUID;
}