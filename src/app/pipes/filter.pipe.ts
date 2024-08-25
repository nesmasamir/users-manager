import { Pipe, PipeTransform } from '@angular/core';
import { Iuser } from '../model/user.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any | Iuser[], searchText: string): any[] {

    if (!items) {
      return []
    }
    if (!searchText) {
      return items
    }
    return items.filter((elment: Iuser) => {
      return (elment.id.toString().includes(searchText) || elment.first_name.includes(searchText) || elment.last_name.includes(searchText) || elment.email.includes(searchText))
    })

  }

}
