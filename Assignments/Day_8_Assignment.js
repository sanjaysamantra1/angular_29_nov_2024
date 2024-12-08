let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

//1. declare array of employees & sort them in ascending order(empId)
employees.sort((a,b) => a.eId - b.eId );
console.log(employees);
console.log('==================================')

//2. declare array of employees & sort them in ascending order by name.
employees.sort((a, b) => a.name.localeCompare(b.name));
console.log(employees);
console.log('==================================')

//3. declare array of employees & filter the employees whose sal>6000;
let filteredEmployees = employees.filter(emp => emp.sal > 6000);
console.log(filteredEmployees);
console.log('==================================')

//4. declare array of employees & increase sal of every employee by 500; 
employees.forEach(employee => {
    employee.sal += 500;
});
console.log(employees);
console.log('==================================')

//5. declare array of employees & add "comp:ibm" to every employee;
employees.forEach(employee => {
    employee.corp = 'IBM';
});
console.log(employees);
console.log('==================================')

//6. convert array of letters to array of words
const inputArr = ['b', 'a', 'k', 'e', '',
                  'c', 'a', 'k', 'e', '',
                  'e', 'a', 't'
                 ];
const output = inputArr.reduce((arr, char) => {
    if (char === '') {
        arr.push(''); 
    } else {
        arr[arr.length - 1] = (arr[arr.length - 1] || '') + char; 
    }
    return arr;
}, ['']);
console.log(output);                 
console.log('==================================')

//7. add Dept info for each employee
employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
     { eId: 104, name: "reena", sal: 8000, gender: "female" }]
departments = [{ eId: 101, dept: "sales" },
     { eId: 104, dept: "marketing" }]

employees.forEach(emp => {
        let dept = departments.find(dept => dept.eId === emp.eId);
        emp.dept = dept.dept;
    });
console.log(employees);
console.log('==================================')

//8.⁠ ⁠declare array of employees & groupBy employees-name
//sample output: {
//    'sanjay' : [{},{}],
//    'alok' : [{}]
//}
let emplyObj = {};
employees.forEach(emp =>{
    if(emplyObj[emp.name]){
        emplyObj[emp.name].push(emp);
    }else {
        emplyObj[emp.name] = [emp];
    }
}) 
console.log("result: ",emplyObj);
console.log('==================================')

// 9. intersection of 2 number arrays
console.log("------------------Task-9--------");
let arr1 =[15, 25, 35, 45, 55];
let arr2 = [30, 40, 45, 55, 70];
let intersection = arr1.filter(num => arr2.includes(num));
console.log(intersection);
console.log('==================================')

// 10. WAP to print the occurance of each elements
console.log("------------------Task-10--------");
let input  = [10,20,30,40,50,10,30,50];
let obj = {};
for(let element of input){
    if(obj[element]){
        obj[element]++;
    }else{
        obj[element] = 1;
    }
}
console.log("result: ",obj);
