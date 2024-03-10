import { Component, OnInit } from '@angular/core';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeItemDetailComponent } from '../recipe-item-detail/recipe-item-detail.component';
import { Recipe } from '../recipe.modal';
import { NgIf } from '@angular/common';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeListComponent, RecipeItemDetailComponent, NgIf],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe!: Recipe;

  constructor(private recipeService: RecipeService) { }
  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    )
  }

  onRecipeWasSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
