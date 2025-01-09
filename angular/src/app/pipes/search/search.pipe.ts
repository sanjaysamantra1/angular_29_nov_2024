import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(emp : any [], searchtext: string):any{
    if(!emp || !searchtext){
      return emp;
    }

    searchtext: String;

    return emp.filter(f => Object.values(f).join(' ').toLowerCase().includes(searchtext.toLowerCase()))

  }
  

  }


