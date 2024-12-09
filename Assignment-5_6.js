const employees = [
    { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 104, name: "reena", sal: 8000, gender: "female" }
  ];
  
  const departments = [
    { eId: 101, dept: "sales" },
    { eId: 104, dept: "marketing" }
  ];
  
  const updatedEmployees = employees.map(employee => {
    // Find the corresponding department for each employee by matching eId
    const department = departments.find(dept => dept.eId === employee.eId);
    
    // Return a new object that combines employee data and department info
    return {
      ...employee,
      dept: department ? department.dept : null // Add dept property, or null if not found
    };
  });
  
  console.log(updatedEmployees);
  