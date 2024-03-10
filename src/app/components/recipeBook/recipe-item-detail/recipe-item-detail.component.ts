import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { DropdownDirective } from '../../../shared/dropdown.directive';
import { NgFor } from '@angular/common';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item-detail',
  standalone: true,
  imports: [DropdownDirective,NgFor],
  templateUrl: './recipe-item-detail.component.html',
  styleUrl: './recipe-item-detail.component.css'
})

export class RecipeItemDetailComponent {
  @Input() recipe!: Recipe;

  constructor(private recipeService:RecipeService){}

  onClickAddToShopping(){
    this.recipeService.addIngredients(this.recipe.ingredients);
  }

}
