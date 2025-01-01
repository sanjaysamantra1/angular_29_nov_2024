import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {
  transform(employees: any[], searchTerm: string): any[] {
    if (!searchTerm) {
      return employees;
    }
    searchTerm = searchTerm.toLowerCase();
    return employees.filter(employee => 
      employee.name.toLowerCase().includes(searchTerm) ||
      employee.gender.toLowerCase().includes(searchTerm) ||
      employee.age.toString().includes(searchTerm)
    );
  }
}
