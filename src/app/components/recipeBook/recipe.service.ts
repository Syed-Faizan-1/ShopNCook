import { Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';
import { Ingredient } from '../../shared/ingredient.modal';
import { ShoppingListService } from '../shoppingList/shopping-list.service';

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
        new Ingredient('Meat', 2),
        new Ingredient('Garlic', 100)
      ]
    ),
    new Recipe(
      'Fried Fish',
      'A Super Tasty Fried Fish by my Mom',
      '',
      [
        new Ingredient('Fish', 2),
        new Ingredient('Garlic', 100)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id:number){
    return this.recipes[id];
  }
  addIngredients(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  constructor(private slService:ShoppingListService) { }
}
