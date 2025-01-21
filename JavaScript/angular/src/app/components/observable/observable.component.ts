import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, concatMap, filter, forkJoin, from, interval, map, mergeMap, Observable, of, range, take } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [CommonModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {

  // num :Number | undefined;

  constructor(private http:HttpClient){}
  
  ngOnInit(){
    // this.fromDemo();
    // this.ofDemo();
    // this.intervalDemo();
    // this.rangeDemo();
    // this.forkjoinDemo();
    // this.mergeMapDemo();
    this.concatMapDemo();
  }

  fromDemo(){
    let cars = ['benz','bmw','ferraari','audi'];
    let carsObservable = from(cars);
    carsObservable.subscribe(car=>console.log(car));
  }

  ofDemo(){
    let carsObservable = of('benz','bmw','ferraari','audi');
    carsObservable.subscribe(car=>console.log(car));
  }

  num:any;
  intervalDemo(){
    this.num = interval(1000);
    this.num.subscribe((val: any)=>console.log(val));
  }

  time =new Observable<string>(observer => {
    setInterval(()=> observer.next(new Date().toLocaleDateString()),1000);
  })

  // value:any;
  rangeDemo(){
    let val = range(10,20);
    // val.subscribe((val:any)=>console.log(val));

    // here input and output is observable 
    let even_num = val.pipe(filter(e=>e%2==0));
    even_num.subscribe((val:any)=> console.log(even_num));
   
    let square = val.pipe(map((e)=>e*e));
    square.subscribe((val:any)=>console.log(val));

    let only5 = val.pipe(take(5));
    only5.subscribe((val:any)=>console.log(val));

  }


  // forkjoinDemo(){
  //   let userName = ['rudrapatirohith'];

  //   let allObservables = userName.map(userNme => {
  //     return this.http.get(`https://api.github.com/users/${userNme}`)
  //   });

  //   forkJoin(allObservables).subscribe((res)=>console.log(res));
  // }


  forkjoinDemo() {
    let userName = ['rudrapatirohith'];
  
    let allObservables = userName.map(userNme => {
      return this.http.get(`https://api.github.com/users/${userNme}`);
    });
  
    forkJoin(allObservables).subscribe(
      (res) => console.log(res),
      (err) => console.error(err)
    );
  }
  

  // inner api calls depends on the outer first api call, if one inner observable fails all the rem  will be canceled
  mergeMapDemo(){

    let outerObservable = of(1,2,3,4,5);
    outerObservable.pipe(mergeMap(userId=>{
      if(userId===3){
      return this.http.get(`https://jonplaceholder.typicode.com/users/${userId}`).pipe(catchError(err=>{
        console.error('Error Fetching user 3 :',err);
        return of(undefined);
      }))
    }
      else{
        return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`) 
      }
  
    })).subscribe(innerObservable=>{
      console.log(innerObservable);
      
    })

    
  }



// to get response in sequence
  concatMapDemo(){

    let outerObservable = of(1,2,3,4,5);
    outerObservable.pipe(concatMap(userId=>{
      if(userId===3){
      return this.http.get(`https://jonplaceholder.typicode.com/users/${userId}`).pipe(catchError(err=>{
        console.error('Error Fetching user 3 :',err);
        return of(undefined);
      }))
    }
      else{
        return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`) 
      }
  
    })).subscribe(innerObservable=>{
      console.log(innerObservable);
      
    }) 
  }



  //switch map is used to make calls for every input and cancled all if the typing stops and gives the api call for the latest one(this deals with query)
  

  //exaust map is used for each button click to make only one api call instead of calling for every clicks(this deals with button)
  // it is used to temp till the api calls once we send one api req

  
}
