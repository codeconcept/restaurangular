import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';

@Component({
  selector: 'cc-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  searchTerm = new FormControl();
  searchTerms$: Observable<string> = this.searchTerm.valueChanges;
  result = '';

  constructor() { }

  ngOnInit() {
    this.searchTerms$
      .pipe(
        tap(x => console.log(x)),
        map(term => term.toUpperCase()),
        map(uppercased => this.reverse(uppercased)),
        debounceTime(2000),
      )
      .subscribe(term => this.result = term)
  }

  reverse(word) {
    return word.split('').reverse().join('');
  }

}
