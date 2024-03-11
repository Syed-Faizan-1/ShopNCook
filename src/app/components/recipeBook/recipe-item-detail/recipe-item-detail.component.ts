import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { DropdownDirective } from '../../../shared/dropdown.directive';
import { NgFor } from '@angular/common';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item-detail',
  standalone: true,
  imports: [DropdownDirective, NgFor],
  templateUrl: './recipe-item-detail.component.html',
  styleUrl: './recipe-item-detail.component.css'
})

export class RecipeItemDetailComponent implements OnInit {
  recipe!: Recipe;
  id!: number;
  constructor(private recipeService: RecipeService,private router:Router ,private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onClickAddToShopping() {
    this.recipeService.addIngredients(this.recipe.ingredients);
  }
  onClickEditRecipe(){
    this.router.navigate(['edit'],{relativeTo: this.route})
  }

}
