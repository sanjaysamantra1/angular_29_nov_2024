import { Component, computed, isSignal, signal, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-demo1',
  imports: [],
  templateUrl: './signal-demo1.component.html',
  styleUrl: './signal-demo1.component.css'
})
export class SignalDemo1Component {
  a=20;
  num : WritableSignal<number> = signal(1);
  numDouble: Signal<number> = computed(()=>this.num()*3); // if we want to update based on other signal we will use computed and it is read only
  numSquare: Signal<number> = computed(()=>this.num()*this.num());

  constructor(){} 

  increment(){
this.num.update(val=>val+1);
  }


  decrement(){
    this.num.update(val=>val-1);
  }

  ngOnInit(){
    console.log("a is "+this.a);
    console.log("num val is "+this.num());  // we used getter func to get the signal value
    console.log("a is a signal? "+isSignal(this.a));
    console.log("num is a signal? "+ isSignal(this.num)); // to check whether it is signal or not we use isSignal()
    
    
    
  }
}
