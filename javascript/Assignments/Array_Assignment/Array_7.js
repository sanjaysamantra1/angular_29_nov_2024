let employees = [
    { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 104, name: "reena", sal: 8000, gender: "female" }
];

let departments = [
    { eId: 101, dept: "sales" },
    { eId: 104, dept: "marketing" }
];

// Add department info to each employee without using the spread operator
let updatedEmployees = employees.map(emp => {
    // Find the department for the current employee based on eId
    let deptInfo = departments.find(dept => dept.eId === emp.eId);
    
    // Add the dept property directly to the employee object
    emp.dept = deptInfo ? deptInfo.dept : 'Not assigned';
    
    return emp;
});

console.log(updatedEmployees);
