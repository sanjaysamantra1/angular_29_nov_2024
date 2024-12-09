let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepika", "sal": 8000, "gender": "female" }
];


// ***********if using regular functions use return statement, else no result will be passed to the result variable and will be undefined.************


// first female employee in the list

let first_female_employee = employees.find((emp) => emp.gender == 'female');
console.log(first_female_employee);

// first female employee index;

let first_female_employee_index = employees.findIndex((emp) => emp.gender == 'female');
console.log(first_female_employee_index)


// who is the last female employee in the list
let last_female_employee = employees.findLast((employee) => employee.gender == 'female');
console.log(last_female_employee);

// last female employee index
let last_female_employee_index = employees.findLastIndex((employee) => employee.gender === 'female');
console.log(last_female_employee_index)

// get all female employees
let all_female_employees = employees.filter((employee) => employee.gender === 'female');
console.log(all_female_employees);
