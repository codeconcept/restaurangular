import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, tap, switchMap } from 'rxjs/operators';

import { ScheduleService } from '../services/schedule.service';
import { EveningEvent } from '../models/evening-event.interface';

@Component({
  selector: 'cc-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  searchTerm = new FormControl();
  searchTerms$: Observable<string> = this.searchTerm.valueChanges;
  result:EveningEvent[] = [];

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.searchTerms$
      .pipe(
        debounceTime(1000),
        switchMap(term => this.scheduleService.search(term))
      )
      .subscribe(data => this.result = data, err => console.error(err));
  }

}
