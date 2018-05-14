import { Component } from '@angular/core';

@Component({
  selector: 'main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent {
  cards = [
    { title: 'A la carte', cols: 2, rows: 1 },
    { title: 'Burgers', cols: 1, rows: 1 },
    { title: 'Galettes/crêpes', cols: 1, rows: 2 },
    { title: 'Pizza', cols: 1, rows: 1 }
  ];
}
