//1. declare array of employees & sort them in ascending order (empId)
let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];
employees.sort((a, b) => a.eId - b.eId);
console.log(employees);
console.log("==========================================================");
//2. declare array of employees & sort them in ascending order by name.
let emps = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];
  // Sort employees by name in ascending order
emps.sort((a, b) => a.name.localeCompare(b.name));
console.log(emps);
console.log("==========================================================");
//3. declare array of employees & filter the employees whose sal>6000;
let emp = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];
  let high_sal_emps = emp.filter((e) => e.sal >6000);
  console.log(high_sal_emps);
  console.log("==========================================================");
//4. declare array of employees & increase sal of every employee by 500;
let employee_details = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];
  let incrementedSalEmployees = employee_details.map((e) => {
    e.sal = e.sal + 500;
    return e;
});
console.log(incrementedSalEmployees);
console.log("==========================================================");
//5. declare array of employees & add "comp:ibm" to every employee;
let employee = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

// Add "comp: 'ibm'" to every employee
employee.forEach(e => {
    e.comp = 'ibm';
});

console.log(employee);
console.log("==========================================================");
/*6. convert array of letters to array of words
		const inputArr = [ 
				'b', 'a', 'k', 'e', '',
				'c', 'a', 'k', 'e', '',
				'e', 'a', 't'
				];
	   output = ['bake','cake','eat'];*/
       const inputArr = [ 
        'b', 'a', 'k', 'e', '',
        'c', 'a', 'k', 'e', '',
        'e', 'a', 't'
    ];
    
    // Convert the array to words
    let output = [];
    let currentWord = [];
    
    // Iterate through the array and form words
    inputArr.forEach(letter => {
        if (letter === '') {
            // If empty string, join currentWord and add to output, then reset currentWord
            output.push(currentWord.join(''));
            currentWord = [];
        } else {
            // If letter is not empty, add it to currentWord
            currentWord.push(letter);
        }
    });
    
    // If there's any remaining word after the loop
    if (currentWord.length > 0) {
        output.push(currentWord.join(''));
    }
    
    console.log(output);
    
console.log("==========================================================");
/*7. add Dept info for each employee
    employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
		{ eId: 104, name: "reena", sal: 8000, gender: "female" }]
	departments = [{ eId: 101, dept: "sales" },
				{ eId: 104, dept: "marketing" }] */
let empl = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'reena', sal: 8000, gender: 'female' }
];

let departments = [
    { eId: 101, dept: 'sales' },
    { eId: 104, dept: 'marketing' }
];

// Add department info to each employee
empl.forEach(emp => {
    let deptInfo = departments.find(dept => dept.eId === emp.eId);
    if (deptInfo) {
        emp.dept = deptInfo.dept;
    }
});

console.log(empl);
console.log("==========================================================");
/*8. declare array of employees & groupBy employees-name
    sample output: {
		'sanjay' : [{},{}],
		'alok' : [{}] 
	}*/
    let emp1 = [
        { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
        { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
        { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
        { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
        { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
    ];
    
    // Group employees by their name
    let groupedByName = employees.reduce((acc, emp) => {
        if (!acc[emp.name]) {
            acc[emp.name] = [];
        }
        acc[emp.name].push(emp);
        return acc;
    }, {});
    
    console.log(groupedByName);
    
console.log("==========================================================");
//9. intersection of 2 number arrays
let array1 = [10, 20, 30, 40, 50];
let array2 = [30, 40, 60, 70];

// Find intersection
let intersection = array1.filter(value => array2.includes(value));

console.log(intersection);

console.log("==========================================================");
/*10. WAP to print the occurance of each elements 
    input = [10,20,30,40,50,10,30,50]
	output = {10:2, 20:1, 30:2 , 40:1, 50:2}*/

let input = [10, 20, 30, 40, 50, 10, 30, 50];

// Object to store occurrences
let occurrences = {};

// Loop through the array and count occurrences
input.forEach(num => {
    occurrences[num] = (occurrences[num] || 0) + 1;
});

console.log(occurrences);
console.log("==========================================================");