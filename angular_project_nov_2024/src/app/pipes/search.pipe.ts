import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employees: any[], searchText: string): any[] {
    if (!searchText) return employees; 
    searchText = searchText.toLowerCase();
    return employees.filter(employee => 
      employee.name.toLowerCase().includes(searchText) ||
      employee.gender.toLowerCase().includes(searchText) ||
      employee.position.toLowerCase().includes(searchText) ||
      employee.age.toString().includes(searchText)
    );
  }

}
