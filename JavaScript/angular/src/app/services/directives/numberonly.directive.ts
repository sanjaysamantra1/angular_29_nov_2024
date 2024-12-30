import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberonly]'
})
export class NumberonlyDirective {


  @HostBinding('style.background-color')
  myBgColor : string ='';


  @HostListener('keyup',['$event.target.value'])
  handleKeyUp(value:string){
    let regex = new RegExp(/^[a-z]*$/);
    if(!regex.test(value)){
      this.myBgColor = 'red';
    }
    else{
      this.myBgColor='cyan';
    }
  }
  

}
