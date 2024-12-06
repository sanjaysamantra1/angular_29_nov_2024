let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];
// find the first female employee in this list
let first_female_emp = employees.find((emp) => emp.gender == 'female');
console.log(first_female_emp);

// at what index the first female employee is present
let first_female_emp_ind = employees.findIndex((emp) => emp.gender == 'female');
console.log(first_female_emp_ind);

// who is the last female employee in the list
let last_female_emp = employees.findLast((emp) => emp.gender == 'female');
console.log(last_female_emp);

// at what index the last female employee is present
let last_female_emp_ind = employees.findLastIndex((emp) => emp.gender == 'female');
console.log(last_female_emp_ind);

// give me all the female employees
let all_female_emps = employees.filter((emp) => emp.gender == 'female');
console.log(all_female_emps)