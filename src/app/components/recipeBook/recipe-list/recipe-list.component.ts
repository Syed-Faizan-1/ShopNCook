import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { Recipe } from '../recipe.modal';
import { NgFor } from '@angular/common';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent,NgFor],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes!: Recipe[];

  constructor(private recipeService: RecipeService, private router:Router, private route:ActivatedRoute){
  }
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onClickNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route})
  }
}
