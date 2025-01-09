import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(name : string, gender :string): unknown {
    return (gender == "male" ? "Mr " + name : "Ms " + name);

  }



}
