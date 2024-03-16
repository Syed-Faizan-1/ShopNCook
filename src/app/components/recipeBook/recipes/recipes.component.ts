import { Component, OnInit } from '@angular/core';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeItemDetailComponent } from '../recipe-item-detail/recipe-item-detail.component';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeListComponent, RecipeItemDetailComponent, NgIf, RouterOutlet],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: []
})
export class RecipesComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
