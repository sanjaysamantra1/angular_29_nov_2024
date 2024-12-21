import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees: any[], filterText: string) {
    
    return employees.filter((emp: any) => 
      emp.name.toLowerCase().includes(filterText.toLowerCase())
  );
  
  }
  

}
