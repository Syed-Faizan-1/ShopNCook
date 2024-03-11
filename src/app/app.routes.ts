import { Routes } from '@angular/router';
import { RecipesComponent } from './components/recipeBook/recipes/recipes.component';
import { ShoppingListComponent } from './components/shoppingList/shopping-list/shopping-list.component';
import { RecipeStartComponent } from './components/recipeBook/recipe-start/recipe-start.component';
import { RecipeItemDetailComponent } from './components/recipeBook/recipe-item-detail/recipe-item-detail.component';
import { RecipeEditComponent } from './components/recipeBook/recipe-edit/recipe-edit.component';

export const routes: Routes = [
    {path:'', redirectTo: '/recipes', pathMatch: 'full'},
    {path:'recipes', component: RecipesComponent, children: [
        {path:'' , component: RecipeStartComponent},
        {path:'new' , component: RecipeEditComponent},
        {path:':id' , component: RecipeItemDetailComponent},
        {path:':id/edit' , component: RecipeEditComponent}
    ]},
    {path:'shoppinglist',component: ShoppingListComponent}
];
