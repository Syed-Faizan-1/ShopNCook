import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit {
  recipe!: Recipe;
  @Input() index!: number;

  constructor(private recipeService:RecipeService){}
  ngOnInit() {
    this.recipe = this.recipeService.getRecipe(this.index);
  }
}
