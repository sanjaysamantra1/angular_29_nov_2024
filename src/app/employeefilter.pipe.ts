import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeefilter'
})
export class EmployeefilterPipe implements PipeTransform {

  transform(employeesData:any[],searchQuery:string): any[] {

    if (!employeesData || !searchQuery) {
      return employeesData; // Return all employees if no search query
    }

    searchQuery = searchQuery.toLowerCase();

    return employeesData.filter(employee =>
      Object.values(employee).some(val => {
        if (typeof val === 'string' || typeof val === 'number') {
          return val.toString().toLowerCase().includes(searchQuery.toLowerCase());
        }
        return false; // Ignore non-string or non-number values
      })
    );
    
  }


}
