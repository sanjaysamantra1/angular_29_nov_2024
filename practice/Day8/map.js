let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];

let all_female_employees = employees.filter((employee) => employee.gender === 'female');
console.log(all_female_employees);

let incrementedSalEmployees = employees.map((emp) => {
    emp.sal += 500;
    return emp;
});

console.log(incrementedSalEmployees);