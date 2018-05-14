import { Component } from '@angular/core';

@Component({
  selector: 'main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent {
  cards = [
    { title: 'Burgers', cols: 2, rows: 1 },
    { title: 'Galettes/crêpes', cols: 2, rows: 1 },
    { title: 'Pizza', cols: 2, rows: 1 }
  ];
}
