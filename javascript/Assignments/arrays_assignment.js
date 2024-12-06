let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

// 1. Declare array of employees & sort them in ascending order (empId)
let res1 = employees.sort((x, y) => x.eId - y.eId);
console.log(res1);

// 2. Declare array of employees & sort them in ascending order by name.
let res2 = employees.sort((a, b) => a.name.localeCompare(b.name));
console.log(res2);

// 3. Declare array of employees & filter the employees whose sal > 6000;
let res3 = employees.filter((emp) => emp.sal > 6000);
console.log(res3);

// 4. Declare array of employees & increase sal of every employee by 500;
let res4 = employees.map((emp) => {
    emp.sal = emp.sal + 500;
    return emp;
});
console.log(res4);

// 5. Declare array of employees & add "comp:ibm" to every employee

let res5 = employees.map((emp) => {
    emp.comp = 'ibm';
    return emp;
});
console.log(res5);

/*6. convert array of letters to array of words
	const inputArr = [ 'b', 'a', 'k', 'e', '', 'c', 'a', 'k', 'e', '','e', 'a', 't'];
    output = ['bake','cake','eat'];
*/
const inputArr = ['b', 'a', 'k', 'e', '', 'c', 'a', 'k', 'e', '', 'e', 'a', 't'];
let words = ''; 
const output = []; 
inputArr.forEach(letters => {
    if (letters == '') {
        if (words) {
            output.push(words);
            words = ''; 
        }
    } else {
        words += letters;
    }
});

if (words) {
    output.push(words);
}
console.log(output);

/*
7. add Dept info for each employee
    employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
                { eId: 104, name: "reena", sal: 8000, gender: "female" }]
    departments = [{ eId: 101, dept: "sales" },
                  { eId: 104, dept: "marketing" }]
*/

let employees1 = [
    { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 104, name: "reena", sal: 8000, gender: "female" }
];
let departments = [
    { eId: 101, dept: "sales" },
    { eId: 104, dept: "marketing" }
];

let res7 = employees1.map(emp => {
    let dept;
    let department = departments.find(d => d.eId === emp.eId);
    if (department) {
        dept = department.dept;
    } else {
        dept = "Not assigned";
    }
    emp.dept = dept;
    return emp;
});

console.log(res7);

/*
8. declare array of employees & groupBy employees-name
    sample output: {
		'sanjay' : [{},{}],
		'alok' : [{}]
	}


let employees2 = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sanjay', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];
const res8 = Object.groupBy(employees2, ({ type }) => employees2.name);
console.log(res8)
*/

let employees2 = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    //{ eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sanjay', sal: 7000, gender: 'male' },
    //{ eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'alok', sal: 8000, gender: 'male' }
  ];
  
  let res8 = employees2.reduce((a, emp) => {
    a[emp.name] = a[emp.name] || [];
    a[emp.name].push({});
    return a;
  }, {});
  
  console.log(res8);
  


//9. intersection of 2 number arrays
let a1 = [10, 20, 30, 40, 50];
let a2 = ['10',40,60];

const res9 = a1.filter(value => a2.includes(value));
console.log(res9); 

/*
10. WAP to print the occurance of each elements 
    input = [10,20,30,40,50,10,30,50]
	output = {10:2, 20:1, 30:2 , 40:1, 50:2}
*/
const input = [10, 20, 30, 40, 50, 10, 30, 50];
const res10 = {};
input.forEach(num => {
  if (res10[num]) {
    res10[num] += 1;
  } else {
    res10[num] = 1;
  }
});
console.log(res10);

