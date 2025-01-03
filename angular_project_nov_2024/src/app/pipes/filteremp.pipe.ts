import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteremp'
})
export class FilterempPipe implements PipeTransform {
  transform(employees: any, value: any) {
    if (value == '') {
      return employees;
    } else {
      return employees.filter((s: any) => s.name.toLowerCase().includes(value.toLowerCase()));
    }
  }
}
