import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { filter, forkJoin, from, interval, map, mergeMap, Observable, of, range, take } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [CommonModule],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css'
})
export class ObservableDemo2Component {
  numbers:any;
  constructor(private httpClient:HttpClient){}
  ngOnInit(){
    //this.fromDemo();
    //this.OfDemo();
    // this.intervalDemo();
    // this.rangeDemo();
    // this.forkJoinDemo();
    this.mergeMapDemo();
  }
  //creating an observable using from()
fromDemo(){
 let cars=['Tata','Honda','Maruthi','Hundai'];//Array
 let carsObservable= from(cars); //converting array to observable using from()
 carsObservable.subscribe(car=>console.log(car)); // subscribing to observable
}
//creating an observable using of()
OfDemo(){
let carsObservable= of('Audi','BMW','Toyota'); //converting values to observable using of()
 carsObservable.subscribe(car=>console.log(car)); // subscriing to observable
}
intervalDemo(){
this.numbers =interval(1000);//after every 1000 ms it will return a new number
  this.numbers.subscribe((val:any)=>console.log(val));
}
// time = new Observable<string>(observer => {
//   setInterval(() => observer.next(new Date().toString()), 1000);
// });
rangeDemo(){
  let myObs= range(1,10);// range(10,20) from 10 give me next 20 values
  //myObs.subscribe((val:any)=>console.log(val));
  let evennums=myObs.pipe(filter(ele=>ele%2==0));//filter pipes helps to 
  //filter the even numbers.
  //console.log(evennums);
  evennums.subscribe((val:any)=>console.log(val));

  let square =myObs.pipe(map(ele=>ele*ele));// pipe map helps us to 
  // map the element to the square of the element 
  square.subscribe(val=>console.log(val));
  //take pipe takes only first required elements
  let only_5= myObs.pipe(take(5));
  only_5.subscribe((val:any)=> console.log(val));
}

forkJoinDemo(){
  let userNames=['sanjaysamantra1','TanjoT','BalajiPavan'];

  let allObservables= userNames.map(username=>{
    return this.httpClient.get(`https://api.github.com/users/${username}`)
  });
  forkJoin(allObservables).subscribe(responses=>{
    console.log(responses);
  })
}
mergeMapDemo(){
  let outerObservable= of(1,2,3,4,5);
  outerObservable.pipe(mergeMap(OuterObservableResponse => {
    return this.httpClient.get(`https://fakestoreapi.com/carts/${OuterObservableResponse}`)
  })).subscribe(innerObservableResponse => {
    console.log(innerObservableResponse)
  })
}
}
