import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[numberonly]'
})
export class NumberonlyDirective {

  @HostBinding('style.background-color')
  myBgColor: string = '';

  @HostListener('keyup', ['$event.target.value'])
  handleKeyUp(value: string) {
    let regex = new RegExp(/^[0-9]*$/);
    if (!regex.test(value)) {
      this.myBgColor = 'red';
    } else {
      this.myBgColor = 'cyan';
    }
  }

}
