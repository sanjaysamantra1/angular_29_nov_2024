let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

//1. declare array of employees & sort them in ascending order (empId)

//console.log(employees);
employees.sort((a,b)=> (a.eId-b.eId));
console.log(employees);

//2. declare array of employees & sort them in ascending order by name.
employees.sort((a,b)=> (a.name).localeCompare((b.name)));
console.log(employees);

//3. declare array of employees & filter the employees whose sal>6000;

let empsal=employees.filter((emp)=> {
  if(emp.sal>6000){
    return emp;
  }
})
console.log(empsal);

//declare array of employees & increase sal of every employee by 500;
employees.map((emp)=>{
  emp.sal+=500;

})
console.log(employees);

//declare array of employees & add "comp:ibm" to every employee;
employees.forEach(emp => {
  emp.comp='ibm';
});
console.log(employees);

//convert array of letters to array of words
const inputArr = [ 
  'b', 'a', 'k', 'e', '',
  'c', 'a', 'k', 'e', '',
  'e', 'a', 't'
  ];

//output = ['bake','cake','eat'];
let output=[];
let str='';
for(let i=0;i<inputArr.length;i++){
  if(!inputArr[i]==''){
    str= str + inputArr[i];
    //console.log
  }
  else{
    output.push(str);
    str='';
  } 
  if(i==inputArr.length-1){
    output.push(str);
    str='';
  }
}
console.log(output);

//8. declare array of employees & groupBy employees-name
const employees1 = [
  { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
  { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
  { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
  { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
  { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
  { eId: 106, name: 'sanjay', sal: 6000, gender: 'male' } //
];

const grouped = employees1.reduce((res, employee) => {
  if (!res[employee.name]) {
      res[employee.name] = [];
  }
  
  // Push the current employee into the array corresponding to their name
  res[employee.name].push(employee);
  
  return res;
}, );

console.log(grouped);

//9. intersection of 2 number arrays
let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7];
  let set1 = new Set(array1);
  let intersection = array2.filter(num => set1.has(num));
console.log("Intersection:", intersection);

//10  WAP to print the occurance of each elements 
    let input = [10,20,30,40,50,10,30,50]
    
    let output1 = new Map();
    let abc=''
    for(let i=0;i<input.length;i++){
      abc=input[i];
      if(output1.has(abc)){
        output1.set(input[i],(output1.get(input[i])+1));
    }
    else{
      output1.set(input[i],1);
    }
    }
    console.log(output1);

