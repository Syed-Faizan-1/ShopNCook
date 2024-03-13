import { Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.modal';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
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
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ings:Ingredient[]){
    this.ingredients.push(...ings);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  constructor() { }
}
 