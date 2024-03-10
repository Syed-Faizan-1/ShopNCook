import { Component, EventEmitter, Output } from '@angular/core';
import { DropdownDirective } from '../../shared/dropdown.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DropdownDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() recipesClicked= new EventEmitter<string>();
  @Output() shoppingListClicked= new EventEmitter<string>();
  onSelect(feature: string){
    if(feature === 'Shopping List')
      this.shoppingListClicked.emit(feature);
    else if(feature === 'Recipes')
    this.recipesClicked.emit(feature);
  }

}
