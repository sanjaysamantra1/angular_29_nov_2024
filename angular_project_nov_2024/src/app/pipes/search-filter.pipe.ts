import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(emps: any, value: string): any {
    if(value==""){
      return emps;
    }
    else{
      emps = emps.filter((emp: any)=>{
        return emp.name.toLowerCase().includes(value.toLowerCase());
      });
      return emps;      
    }
  }
}
