let employees = [
    { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 102, name: "alok", sal: 6000, gender: "male" },
    { eId: 103, name: "sanjay", sal: 7000, gender: "male" },
    { eId: 104, name: "reena", sal: 8000, gender: "female" }
];

// Group employees by name using reduce
let groupedByName = employees.reduce((result, emp) => {
    // If the name doesn't exist in the result, initialize it with an empty array
    if (!result[emp.name]) {
        result[emp.name] = [];
    }
    // Add the employee to the corresponding name group
    result[emp.name].push(emp);
    return result;
}, {});

console.log(groupedByName);
