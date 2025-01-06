import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByChar'
})
export class FilterPipe implements PipeTransform {

  transform(employees: any[], text: string): any[] {
    let key = text.toLowerCase();
    return employees.filter((emp) => emp.name?.toLowerCase().includes(key));
  }
  

}