import { Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';
import { Ingredient } from '../../shared/ingredient.modal';
import { ShoppingListService } from '../shoppingList/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Broast',
      'A Super Tasty Broast by my Mom',
      'https://i.ytimg.com/vi/B8aNC_t3aTw/maxresdefault.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Garlic', 100)
      ]
    ),
    new Recipe(
      'Fried Fish',
      'A Super Tasty Fried Fish by my Mom',
      'https://soulfoodcooking101.com/wp-content/uploads/2023/05/Southern-Fried-Fish.jpeg',
      [
        new Ingredient('Fish', 2),
        new Ingredient('Garlic', 7)
      ]
    ),
    new Recipe(
      'Burger',
      'A Super Tasty Zinger Burger by my Mom',
      'https://upload.wikimedia.org/wikipedia/commons/b/b0/Hamburger_%2812164386105%29.jpg',
      [
        new Ingredient('Meat', 10),
        new Ingredient('Salad', 5)
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
  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }
  updateRecipe(index:number,newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }
  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice())
  }
  constructor(private slService:ShoppingListService) { }
}
