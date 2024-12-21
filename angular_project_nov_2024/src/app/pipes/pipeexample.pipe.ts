import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeexample'
})
export class PipeexamplePipe implements PipeTransform {
  a: number = 0;
  len: number = 0;

  transform(value: number): unknown {
    if(value==0) return null;
    this.len = value.toString().length;
    this.a =value%10;
    console.log(this.len);
    console.log(this.a);
    if((this.len!=2)&&(this.a==1)){
      return value.toString()+'st';
    }
    else if((this.len!=2)&&(this.a==2)){
      return value.toString()+'nd';
    }
    else if((this.len!=2)&&(this.a==3)){
      return value.toString()+'rd';
    }
    else{
      return value.toString()+'th';
    }
  }

  

}
