import { Component, OnInit } from '@angular/core';
import { ShoppingListEditComponent } from '../shopping-list-edit/shopping-list-edit.component';
import { Ingredient } from '../../../shared/ingredient.modal';
import { NgFor } from '@angular/common';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingListEditComponent, NgFor],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  providers: []
})
export class ShoppingListComponent implements OnInit {
  ingredients!: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    })
  }
}
