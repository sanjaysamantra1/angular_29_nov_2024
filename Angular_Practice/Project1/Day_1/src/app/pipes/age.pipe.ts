import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  
  transform(value:any ){
   if(!value) return ''

   const currentyear= new Date().getFullYear();
   const dob=new Date(value).getFullYear();

   const old=currentyear-dob;
   return old+'years old';
  }

 
}
