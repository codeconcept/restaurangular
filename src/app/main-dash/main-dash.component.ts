import { Component, OnInit } from "@angular/core";

import { QuickLunchService } from "../services/quick-lunch.service";
import { Food } from "../models/food.interface";

@Component({
  selector: "main-dash",
  templateUrl: "./main-dash.component.html",
  styleUrls: ["./main-dash.component.css"]
})
export class MainDashComponent implements OnInit {
  burgers: Food[];
  pizzas: Food[];
  galettes: Food[];

  constructor(private qls: QuickLunchService) {}

  ngOnInit(): void {
    this.burgers = this.qls.burgers;
    this.pizzas = this.qls.pizzas;
    this.galettes = this.qls.galettes;
  }

  cards = [
    { title: "Burgers", cols: 2, rows: 1, id: 'brg' },
    { title: "Galettes/crêpes", cols: 2, rows: 1, id: 'glt' },
    { title: "Pizza", cols: 2, rows: 1, id: 'pzz' }
  ];
}
