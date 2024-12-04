let a =[1, 2, 3, 4, 5];

let b = a.map(ar => ar*5 );

console.log(b);

function mul(ele){
    return ele*5;
}

let c = a.map(mul);

console.log(c);



class student{
    firstName= 'vamsi';
    lastName= 'kandula';
    print(){
        console.log(this.firstName+ ' '+ this.lastName);
    }

    printArrow(){
        console.log(this.firstName+ " asdf "+ this.lastName);
    }

}
let stu = new student();
console.log(stu.firstName);
console.log(stu.lastName);
stu.print();
stu.printArrow();
