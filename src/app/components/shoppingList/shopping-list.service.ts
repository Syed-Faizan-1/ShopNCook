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
    new Ingredient('Ingredient 1', 22),
    new Ingredient('Ingredient 2', 7),
    new Ingredient('Ingredient 3', 12),
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
