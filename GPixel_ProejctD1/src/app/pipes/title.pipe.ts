import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
  standalone: true
})
export class TitlePipe implements PipeTransform {

  transform(name:string, gender: string ): any {
    if(gender ==='Male'){
      return 'Mr.'+name;
    } else{
      return 'Mrs.'+name;
    }
  }

}
