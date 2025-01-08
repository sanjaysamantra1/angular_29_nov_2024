import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByValue'
})
export class FilterPipe implements PipeTransform {

  transform(employees: any[], filterText: string) {
    return employees.filter((emp: any) => {
      return emp.name.toLowerCase().includes(filterText.toLowerCase());
    });
  }

}