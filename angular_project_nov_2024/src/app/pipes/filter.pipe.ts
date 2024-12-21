import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(employees: any[], searchText: string): any[] {
    if (!employees) return [];
    if (!searchText) return employees;

    searchText = searchText.toLowerCase().trim();
    
    return employees.filter(emp => {  
          const value = emp.name + emp.position;
          return value && value.toString().toLowerCase().includes(searchText);
        });
  }
}