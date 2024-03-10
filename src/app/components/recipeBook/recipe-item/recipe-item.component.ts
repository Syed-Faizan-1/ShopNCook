import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;
  
  constructor(private recipeService: RecipeService){}

  onClickRecipe(){
    this.recipeService.selectedRecipe.emit(this.recipe);
  }
  
}
