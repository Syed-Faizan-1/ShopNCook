import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { DropdownDirective } from '../../../shared/dropdown.directive';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-recipe-item-detail',
  standalone: true,
  imports: [DropdownDirective,NgFor],
  templateUrl: './recipe-item-detail.component.html',
  styleUrl: './recipe-item-detail.component.css'
})
export class RecipeItemDetailComponent {
  @Input() recipe!: Recipe;
}
