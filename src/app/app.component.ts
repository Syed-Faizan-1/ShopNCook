import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipeBook/recipes/recipes.component';
import { ShoppingListComponent } from './components/shoppingList/shopping-list/shopping-list.component';
import { NgIf } from '@angular/common';
import { DropdownDirective } from './shared/dropdown.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,RecipesComponent,ShoppingListComponent,NgIf,DropdownDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loadedFeature = 'Shopping List';
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
  
}
