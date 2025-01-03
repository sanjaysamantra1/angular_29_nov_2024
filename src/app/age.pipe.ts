import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

 
  transform(birthDate: string|Date): number  {
    const birth=new Date(birthDate);
    const today=new Date();
    let yearage=today.getFullYear() - birth.getFullYear();
    const months=today.getMonth()-birth.getMonth();
   
    if(months<0 || months===0 && today.getDate() < birth.getDate())
    {
      yearage--;
    }
  return yearage;
  }


}
