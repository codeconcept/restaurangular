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

  search(term: string): Observable<EveningEvent[]> {
    return this.httpClient
                .get<Schedule>('assets/schedules.json')
                .pipe(
                  tap(res => console.log("res", res)),
                  map(res => res.events.filter(evt => evt.title.indexOf(term) > -1 || evt.description.indexOf(term) > -1)),
                  tap(filteredEvents => console.log("filteredEvents", filteredEvents)) 
                );
  }

}
