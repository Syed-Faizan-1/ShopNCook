import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';
import { Ingredient } from '../../shared/ingredient.modal';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Broast',
      'A Super Tasty Broast by my Mom',
      '',
      [
        new Ingredient('Meat',2),
        new Ingredient('Garlic',100)
      ]
    ),
    new Recipe(
      'Fried Fish',
      'A Super Tasty Fried Fish by my Mom',
      '',
      [
        new Ingredient('Fish',2),
        new Ingredient('Garlic',100)
      ]
    )
  ];
  selectedRecipe = new EventEmitter<Recipe>();
  getRecipe(){
    return this.recipes.slice();
  }
  constructor() { }
}
