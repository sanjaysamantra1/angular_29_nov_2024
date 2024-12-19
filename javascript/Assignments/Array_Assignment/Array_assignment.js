let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

//Sort the array in ascending order by eId
 employees.sort((a, b) => a.eId - b.eId);
 console.log(employees);

// // Sort the array in ascending order by name
 employees.sort((a, b) => a.name.localeCompare(b.name));

 console.log(employees);

//  Filter employees whose salary is greater than 6000
 let filteredEmployees = employees.filter(emp => emp.sal > 6000);

console.log(filteredEmployees);

// // Increase salary of each employee by 500
let updatedEmployees = employees.map(emp => {
    // Directly modify the existing emp object
    emp.sal = emp.sal + 500;
    return emp;  // Return the updated employee object
});

console.log( updatedEmployees);

// // Add "comp: ibm" property to each employee
let employeesWithCompany = employees.map(emp => {
    // Directly modify the emp object by adding the 'comp' property
    emp.comp = 'ibm';
    return emp;  // Return the updated employee object
});
console.log( employeesWithCompany);


