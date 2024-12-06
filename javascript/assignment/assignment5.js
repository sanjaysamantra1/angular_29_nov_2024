
let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

//1. declare array of employees & sort them in ascending order (empId)
const sorteId = employees.sort((a, b)=> a.eId - b.eId);
for( emp of sorteId){
    console.log(emp);
}

//2. declare array of employees & sort them in ascending order by name.
const sortName = employees.sort((a, b)=> a.name.localeCompare(b.name));
for( emp of sortName){
    console.log(emp);
}


//3. declare array of employees & filter the employees whose sal>6000;
const filterarr = employees.filter((emp)=> emp.sal>6000);
for( emp of filterarr){
    console.log(emp);
}



//4. declare array of employees & increase sal of every employee by 500;
const increaseSal = employees.map((emp)=>{
    emp.sal= emp.sal+500;
    return emp;
});
for( emp of increaseSal){
    console.log(emp);
}


//5. declare array of employees & add "comp:ibm" to every employee;
const addComp = employees.map((emp)=>{
    emp.comp = 'ibm';
    return emp;
});
for( emp of addComp){
    console.log(emp);
}



//6. convert array of letters to array of words
const inputArr = ['b', 'a', 'k', 'e', '','c', 'a', 'k', 'e', '','e', 'a', 't'];
let str = '';
const output1 =[];
for ( s of inputArr){
    str+=s;
    if(s===''){
        output1.push(str);
        str=''; 
    }
}
output.push(str);
console.log(output1);




//7. add Dept info for each employee
employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
            { eId: 104, name: "reena", sal: 8000, gender: "female" }]
departments = [{ eId: 101, dept: "sales" },
            { eId: 104, dept: "marketing" }]
let dep;
const addComp1 = employees.map((emp, index)=>{
    dep = departments[index].dept;
    emp.dept = dep;
    return emp;
});
for( emp of addComp1){
    console.log(emp);
}



//8. declare array of employees & groupBy employees-name
/*sample output: {
    'sanjay' : [{},{}],
    'alok' : [{}]
}*/
employees = [
    {eId : 1, eName : 'sanjay', sal : 2000},
    {eId : 2, eName : 'alok',  sal : 2500},
    {eId : 1, eName : 'sanjay', sal : 2000},
];
var valu = employees.reduce((x, y)=>{
    (x[y.eName] = (x[y.eName] || [])).push({});
    return x;
},{});
console.log(JSON.stringify(valu ));









//9. intersection of 2 number arrays
const arr1 = [1, 3,5 ,66, 12,46,8 ,32, 6,8 ];
const arr2 = [4,3 ,6 ,8,5,21,6 ,58 ,79 , 523, 3];
const combi=[...arr1,...arr2];
const sortedArr1 = combi.sort((a, b)=> a-b);
console.log(combi);




//10. WAP to print the occurance of each elements 
//input = [10,20,30,40,50,10,30,50]
//output = {10:2, 20:1, 30:2 , 40:1, 50:2}

const input = [10,20,30,40,50,10,30,50]
const output = {}
for(let ele of input){
    if(output[ele] == undefined){
        output[ele] = 1;
    }
    else{
       output[ele] = output[ele]+1;
    }
}
console.log(output);
