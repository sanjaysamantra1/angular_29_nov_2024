import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameMrMissPipe'
})
export class NameMrMissPipePipe implements PipeTransform {

  transform(value: unknown, s: string): unknown {
    if(s.toLowerCase() == "m" || s.toLowerCase() == "male"){
      return "mr."+value;
    }
    else if(s.toLowerCase() == "f" || s.toLowerCase() == "female"){
      return "miss."+value;
    }
    else{
      return value;
    }
  }

}
