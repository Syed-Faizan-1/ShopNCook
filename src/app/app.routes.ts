import { Routes } from '@angular/router';
import { RecipesComponent } from './components/recipeBook/recipes/recipes.component';
import { ShoppingListComponent } from './components/shoppingList/shopping-list/shopping-list.component';

export const routes: Routes = [
    {path:'', redirectTo: '/recipes', pathMatch: 'full'},
    {path:'recipes', component: RecipesComponent},
    {path:'shoppinglist',component: ShoppingListComponent}
];
