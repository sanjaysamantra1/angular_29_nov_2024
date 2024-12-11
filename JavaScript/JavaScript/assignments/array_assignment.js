let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

// 1. declare array of employees & sort them in ascending order (empId)
let e1 = employees.sort((a,b)=>a.eId-b.eId);
console.log(e1);



// 2. declare array of employees & sort them in ascending order by name.
let e2 = employees.sort((a,b)=>a.name.localeCompare(b.name));
console.log(e2);


// 3. declare array of employees & filter the employees whose sal>6000;
let e3= employees.filter((emp)=>emp.sal>6000);
console.log(e3);


// 4. declare array of employees & increase sal of every employee by 500;
let e4= employees.map((emp)=>{
    emp.sal+=500;
    return emp;
})
console.log(e4);



// 5. declare array of employees & add "comp:ibm" to every employee;
let e5 = employees.map((emp)=>{
    emp.comp="ibm";
    return emp;
});
console.log(e5);



// 6. convert array of letters to array of words
		const inputArr = [ 
				'b', 'a', 'k', 'e', '',
				'c', 'a', 'k', 'e', '',
				'e', 'a', 't' 
				];
// 	   output = ['bake','cake','eat'];

e6 = [];
emp ='';
inputArr.forEach((val)=>{
    if(val===''){
        if(emp){
            e6.push(emp);
            emp='';
        }
    }
    else{
        emp+=val;
    }
})
if(emp){
    e6.push(emp);
};
console.log(e6);






// 7. add Dept info for each employee
    employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
				{ eId: 104, name: "reena", sal: 8000, gender: "female" }]
	departments = [{ eId: 101, dept: "sales" },
				{ eId: 104, dept: "marketing" }]
    
employees = employees.map((e)=>{
    const c = departments.find((d)=>d.eId===e.eId);
    if(c){
        e.dept=c.dept;
    }
    return e;
})

console.log(employees);





// 8. declare array of employees & groupBy employees-name
//     sample output: {
// 		'sanjay' : [{},{}],
// 		'alok' : [{}]
// 	}

let groupName = employees.reduce((result,employee)=>{
    let key= employee.name;
    if(!result[key]){
        result[key]=[];
    }
    result[key].push(employee);
    return result;
})
console.log(groupName);



// 9. intersection of 2 number arrays
let arr1 = [1,2,3,4,5,6];
let arr2 = [2,4,6,8,10,12,14];
let arr3=[];
    for(i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i]) ){
            arr3.push(arr1[i])
        }
    }
    console.log(arr3);

// if(arr1.length>arr2.length){
//     for(i=0;i<arr1.length;i++){
//         if(arr2.includes(arr1[i]) ){
//             arr3.push(arr1[i])
//         }
//     }
// }
// else if(arr1.length<arr2.length){
//     for(i=0;i<arr2.length;i++){
//         if(arr1.includes(arr2[i]) ){
//             arr3.push(arr2[i])
//     }
// }
// }



// 10. WAP to print the occurance of each elements 
    input = [10,20,30,40,50,10,30,50]
// 	output = {10:2, 20:1, 30:2 , 40:1, 50:2}

let val = input.reduce((val,i)=>{
    
    if(val[i]){
        // console.log(val);

        val[i]++;
    }
    else{
        val[i]=1;
    }
    return val;
},{});

console.log(val);
