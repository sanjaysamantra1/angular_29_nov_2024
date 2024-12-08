let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

// 1. declare array of employees & sort them in ascending order (empId)
console.log('===========================================================================');
let employees_by_eid_asc = employees.sort((emp1, emp2) => {
    return emp1.eId - emp2.eId;
});
console.log(employees_by_eid_asc);

console.log('===========================================================================');
// 2. declare array of employees & sort them in ascending order by name.
let employees_by_name_asc = employees.sort((emp1, emp2) => {
    return emp1.name.localeCompare(emp2.name)
});
console.log(employees_by_name_asc);

console.log('===========================================================================');
// 3. declare array of employees & filter the employees whose sal>6000;

let employees_by_salary = employees.filter((emp) => {
    if (emp.sal > 6000) {
        return emp;
    }
});
console.log(employees_by_salary);

console.log('===========================================================================');
// 4. declare array of employees & increase sal of every employee by 500;

let increase_emp_salary = employees.map((emp) => {
    emp.sal += 500;
    return emp;
});
console.log(increase_emp_salary);

console.log('===========================================================================');
// 5. declare array of employees & add "comp:ibm" to every employee;

let add_comp_to_emp = employees.map((emp) => {
    emp.comp = 'ibm';
    return emp;
});
console.log(add_comp_to_emp);


console.log('===========================================================================');
// 6. convert array of letters to array of words
// 		const inputArr = [ 
// 				'b', 'a', 'k', 'e', '',
// 				'c', 'a', 'k', 'e', '',
// 				'e', 'a', 't'
// 				];
// 	   output = ['bake','cake','eat'];


const inputArr = [
    'b', 'a', 'k', 'e', '',
    'c', 'a', 'k', 'e', '',
    'e', 'a', 't'
];

function words_array(input) {
    let words = [];
    let str = '';
    for (let i = 0; i < input.length; i++) {
        if (!input[i] == '') {
            str += input[i];
        } else {
            words.push(str);
            str = '';
        }
        if ((i == input.length - 1)) {
            words.push(str);
            str = '';
            break;
        }
    }
    return words;
}
let output = words_array(inputArr);
console.log(output);

console.log('===========================================================================');
// 7. add Dept info for each employee
//     employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
// 				{ eId: 104, name: "reena", sal: 8000, gender: "female" }]
// 	departments = [{ eId: 101, dept: "sales" },
// 				{ eId: 104, dept: "marketing" }]


let departments = [
    { eId: 101, dept: "sales" },
    { eId: 104, dept: "marketing" }
];
let employees_with_dept = employees.map((emp) => {
    departments.map((dept) => {
        if (emp.eId == dept.eId) {
            emp.dept = dept.dept;
        }
    })
    return emp;

});
console.log(employees_with_dept);

console.log('===========================================================================');
// 8. declare array of employees & groupBy employees-name
//     sample output: {
// 		'sanjay' : [{},{}],
// 		'alok' : [{}]
// 	}

const employees1 = [
    { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 102, name: "alok", sal: 7000, gender: "male" },
    { eId: 103, name: "sanjay", sal: 5500, gender: "male" }
];
const groupedByName = employees1.reduce((acc, employee) => {
    const key = employee.name;
    if (!acc[key]) {
        acc[key] = [];
    }
    acc[key].push(employee);
    return acc;
}, {});

console.log("Grouped by Name:", groupedByName);



console.log('===========================================================================');
// 9. intersection of 2 number arrays

const array1 = [10, 20, 30, 40, 50];
const array2 = [30, 40, 50, 60, 70];
const intersection = array1.filter(num => array2.includes(num));
console.log("Intersection:", intersection);


console.log('===========================================================================');
// 10. WAP to print the occurance of each elements
//     input = [10,20,30,40,50,10,30,50]
// 	output = {10:2, 20:1, 30:2 , 40:1, 50:2}

let input = [10, 20, 30, 40, 50, 10, 30, 50];
let output1 = new Map();
for (let i = 0; i < input.length; i++) {
    let key = input[i];
    if (output1.has(key)) {
        output1.set(key, output1.get(key) + 1);
    } else {
        output1.set(key, 1);
    }
}
console.log(output1);











