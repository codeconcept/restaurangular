import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  constructor(private httpClient: HttpClient) { }

  search(term): Observable<Object> {
    return this.httpClient
                .get('assets/schedules.json')
                .pipe(
                  tap(res => console.log("res", res)),
                  map(res => res['events'].filter(evt => evt.title.indexOf(term) > -1)),
                  tap(filteredEvents => console.log("filteredEvents", filteredEvents)) 
                );
  }

}
