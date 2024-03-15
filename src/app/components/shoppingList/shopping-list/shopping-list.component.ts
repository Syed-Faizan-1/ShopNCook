import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingListEditComponent } from '../shopping-list-edit/shopping-list-edit.component';
import { Ingredient } from '../../../shared/ingredient.modal';
import { NgFor } from '@angular/common';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingListEditComponent, NgFor],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[];
  private igChangedSub!: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }
  ngOnDestroy() {
    this.igChangedSub.unsubscribe();
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangedSub = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    })
  }

  onEditItem(index: number) {
    this.shoppingListService.startEdit.next(index);
  }
}
