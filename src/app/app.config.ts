import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ShoppingListService } from './components/shoppingList/shopping-list.service';
import { RecipeService } from './components/recipeBook/recipe.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), ShoppingListService, RecipeService]
};
