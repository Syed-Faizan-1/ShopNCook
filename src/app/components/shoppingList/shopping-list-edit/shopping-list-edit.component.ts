import { Component } from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.modal';
import { ShoppingListService } from '../shopping-list.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {

  constructor(private shoppingListService:ShoppingListService){

  }

  onAddItem(form:NgForm) {
    const value = form.value;
    const newingredient = new Ingredient(value.name,value.amount)
    this.shoppingListService.addIngredient(newingredient);
  }
}
