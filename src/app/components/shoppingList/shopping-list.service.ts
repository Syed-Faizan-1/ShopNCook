import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.modal';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients:Ingredient[] = [
    new Ingredient('Ingredient 1',22), 
    new Ingredient('Ingredient 2',7),
    new Ingredient('Ingredient 3',12),
  ];
  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ings:Ingredient[]){
    this.ingredients.push(...ings);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  constructor() { }
}
 