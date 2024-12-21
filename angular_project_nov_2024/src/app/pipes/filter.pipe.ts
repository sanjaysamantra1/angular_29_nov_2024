import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByValue'
})
export class FilterPipe implements PipeTransform {

  transform(employees: any[], filterText: string): any[] {
    const filterKey = filterText.toLowerCase();
    return employees.filter((emp) => emp.name?.toLowerCase().includes(filterKey));
  }
  

}