import { Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.modal';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startEdit = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('E', 1),
    new Ingredient('A', 2),
    new Ingredient('G', 1),
    new Ingredient('C', 1),
    new Ingredient('D', 1),
    new Ingredient('B', 4),
    new Ingredient('F', 1),
    new Ingredient('H', 1),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ings: Ingredient[]) {
    this.ingredients.push(...ings);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newingredient: Ingredient) {
    this.ingredients[index] = newingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  constructor() { }
}
