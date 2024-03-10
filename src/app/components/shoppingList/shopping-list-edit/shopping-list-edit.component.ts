import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.modal';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  standalone: true,
  imports: [],
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef!: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef!: ElementRef;

  constructor(private shoppingListService:ShoppingListService){

  }

  onAddItem() {
    const newingredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value)
    this.shoppingListService.addIngredient(newingredient);
  }
}
