import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { EveningEvent } from '../models/evening-event.interface';
import { Schedule } from '../models/schedule.interface';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  constructor(private httpClient: HttpClient) { }

  getAllEvents(): Observable<EveningEvent[]> {
    return this.httpClient
                .get<Schedule>('assets/schedules.json')
                .pipe(
                  map(res => res.events)
                );
  }

  search(term: string): Observable<EveningEvent[]> {
    const termLowerCase = term.toLocaleLowerCase();
    return this.httpClient
                .get<Schedule>('assets/schedules.json')
                .pipe(
                  map(res => res.events.filter(evt => evt.title.toLocaleLowerCase().indexOf(termLowerCase) > -1 || evt.description.toLocaleLowerCase().indexOf(termLowerCase) > -1))
                );
  }

}
