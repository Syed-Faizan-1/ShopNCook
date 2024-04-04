import { Pipe, PipeTransform } from '@angular/core';
import { Ingredient } from './shared/ingredient.modal';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(value: Array<Ingredient>, sortDirection: string): Array<Ingredient> {
    let sd = -1;
    if (sortDirection.toLowerCase() == 'asc') {
      sd = 1;
    }
    return value.sort((a, b) => {
      if (a.name > b.name) {
        return 1 * sd;
      } else {
        return -1 * sd;
      }
    });
  }

}
