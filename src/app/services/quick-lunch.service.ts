import { Injectable } from "@angular/core";
import { Food } from "../models/food.interface";

@Injectable({
  providedIn: "root"
})
export class QuickLunchService {
  burgers: Food[] = [
    { id: 1, title: "Hamburger", description: 'steak, tomate, salade iceberg, oigons rouges, sauce maison', price:6.40 },
    { id: 2, title: "Cheeseburger", description: 'steak, cheddar, tomate, salade iceberg, oignons rouges, sauce maison', price: 7.00 },
    { id: 3, title: "Burger du moment", price: 7.00 }
  ];

  pizzas: Food[] = [
    {id: 1, title: 'Marguerite', description: 'base tomate, mozzarella, olives', price: 7.70},
    {id: 2, title: 'Reine', description: 'base tomate, jambon blanc, champignons, mozzarella', price: 8.90},
    {id: 3, title: 'Royale', description: 'base tomate, jambon blanc, champignons, mozzarella, œuf, crème', price: 10.00},
    {id: 4, title: 'Verde', description: 'base tomate, fondue de poireaux, poivrons, tomates fraîches, mozzarella, roquette, persillade', price: 9.30}
  ];

  galettes: Food[] = [
    {id: 1, title: 'Formule complète', description: 'galette complète, crêpe beurre sucre, bolée de cidre fermier', price: 9.90},
    {id: 2, title: 'Formule du jour', description: 'galette du jour, crêpe du jour, bolée de cidre', price: 9.30}
  ]

  constructor() {}

  getBurgers(): Food[] {
    return this.burgers;
  }

  getPizzas(): Food[] {
    return this.pizzas;
  }

  getGalettes(): Food[] {
    return this.galettes;
  }
}
