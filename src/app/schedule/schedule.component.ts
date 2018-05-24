import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable, Subscription } from "rxjs";
import { debounceTime, map, tap, switchMap, take } from "rxjs/operators";

import { ScheduleService } from "../services/schedule.service";
import { EveningEvent } from "../models/evening-event.interface";

@Component({
  selector: "cc-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.css"]
})
export class ScheduleComponent implements OnInit, OnDestroy {
  searchTerm = new FormControl();
  searchTerms$: Observable<string> = this.searchTerm.valueChanges;
  result: EveningEvent[] = [];
  searchSubscription: Subscription;
  
  constructor(private scheduleService: ScheduleService) {}
  
  ngOnInit() {
    this.getAllEvents();
    
    this.searchSubscription = this.searchTerms$
    .pipe(
      debounceTime(1000),
      switchMap(term => this.scheduleService.search(term))
    )
    .subscribe(data => (this.result = data), err => console.error(err));
  }
  
  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  getAllEvents() {
    this.scheduleService
      .getAllEvents()
      .pipe(take(1))
      .subscribe(
        data => (this.result = data),
        err => console.error(err),
        () => console.log("done")
      );
  }
}
