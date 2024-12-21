import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchname'
})
export class SearchnamePipe implements PipeTransform {
  employee = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];
  transform(value: any, s: string): any {
    if(s==null){
      return value;
    } 
    else{
    s=s.toLowerCase();
    value=value.filter((eachProduct: any) => {
    if((eachProduct.name).toLowerCase().includes(s)){
      return eachProduct;
    }    
  });
  }
  return value;
  }
}