let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];


// 1. declare array of employees & sort them in ascending order (empId)
console.log("Employees List with Employee Id in Ascending order");
employees.sort((a, b) => a.eId - b.eId);
console.log(employees);
console.log(`------------------------------------------------------------`)
  
// 2. declare array of employees & sort them in ascending order by name.
console.log(`Employees List with Employee Name in Ascending Order`)
employees.sort((a,b)=>a.name.localeCompare(b.name));
console.log(employees);
console.log(`------------------------------------------------------------`)
// 3. declare array of employees & filter the employees whose sal>6000;
console.log(`Employees List with Salary>6000`)
let filteredEmp=employees.filter(employees=>employees.sal>6000);
console.log(filteredEmp);
console.log(`------------------------------------------------------------`)

// 4. declare array of employees & increase sal of every employee by 500;
console.log(`Employees List with Increased Salary`)
let incrementedSalEmployees = employees.map((emp) => {
    emp.sal = emp.sal + 500;
    return emp;
});
console.log(incrementedSalEmployees);
console.log(`------------------------------------------------------------`)

// 5. declare array of employees & add "comp:ibm" to every employee;
console.log(`Employees List with Increased Salary`)
let Emp= employees.map( (emp)=>{emp['comp']='ibm';
    return emp;
})
console.log(Emp);
console.log(`------------------------------------------------------------`)
// 6. convert array of letters to array of words
// 		const inputArr = [ 
// 				'b', 'a', 'k', 'e', '',
// 				'c', 'a', 'k', 'e', '',
// 				'e', 'a', 't'
// 				];
// 	   output = ['bake','cake','eat'];

const inputArr = [  'b', 'a', 'k', 'e', '',
     				'c', 'a', 'k', 'e', '',
     				'e', 'a', 't'];

let tempString='';
const resultArr=[];
for(let val in inputArr){
    if(inputArr[val]===''){
        resultArr.push(tempString);
        tempString = '';
    }else {
        tempString+=inputArr[val];
    }
}
if(tempString!==''){
    resultArr.push(tempString);
}
console.log(resultArr);

for(let val in inputArr){
    if(inputArr[val]==='' || inputArr.length-1===val){
        
    }
}

// 7. add Dept info for each employee
//   employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
// 				{ eId: 104, name: "reena", sal: 8000, gender: "female" }]
// 	departments = [{ eId: 101, dept: "sales" },
// 				{ eId: 104, dept: "marketing" }]

  
  let departments = [
    { eId: 101, dept: "sales" },
    { eId: 104, dept: "marketing" }
  ];
  
  for (let employee of employees) {
    for (let department of departments) {
      if (employee.eId === department.eId) {
        employee.dept = department.dept;
        break;
      }
    }
  }
  
  console.log(employees);
  

// 8. declare array of employees & groupBy employees-name
//     sample output: {
// 		'sanjay' : [{},{}],
// 		'alok' : [{}]
// 	}

// 9. intersection of 2 number arrays

// 10. WAP to print the occurance of each elements 
//     input = [10,20,30,40,50,10,30,50]
// 	output = {10:2, 20:1, 30:2 , 40:1, 50:2}


