import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[numberOnly]'
})
export class NumberOnlyDirective {

  // constructor(private ele: ElementRef) { 
  //     console.log("Number only", ele);
  //   }

  @HostBinding('style.background-color')
  myBgColor: string = ' ';

  @HostListener('keyup', ['$event.target.value'])
  handleKeyUp(value: string) {
    if (value == '') {
      this.myBgColor = '';
    } else {
      let regex = new RegExp(/^[0-9]*$/);
      if (!regex.test(value)) {
        this.myBgColor = 'red';
        // this.ele.nativeElement.style.background = 'red';
      } else {
        this.myBgColor = 'cyan';
        // this.ele.nativeElement.style.background = 'cyan';
        // this.dhanush();
      }
    }
  }

  // dhanush() {
  //   this.myBgColor = this.ele.nativeElement.style.background = 'pink';
  // }


}
