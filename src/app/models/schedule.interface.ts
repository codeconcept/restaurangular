import { EveningEvent } from "./evening-event.interface";

export interface Schedule {
    version: string;
    events: EveningEvent[];
}