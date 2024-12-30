import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if(!items || !searchText){
      return items;
    }

    return items.filter(item=>
      Object.values(item)
      .join(' ')
      .toLowerCase()
      .includes(searchText.toLowerCase())
    );
  }

}
