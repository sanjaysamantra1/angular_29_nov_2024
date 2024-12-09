const employees = [
    { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 102, name: "alok", sal: 6000, gender: "male" },
    { eId: 103, name: "sanjay", sal: 7000, gender: "male" },
    { eId: 104, name: "reena", sal: 8000, gender: "female" },
    { eId: 105, name: "alok", sal: 6500, gender: "male" }
  ];
  
  const groupedByName = employees.reduce((acc, employee) => {
    // Check if the employee's name is already a key in the accumulator
    if (!acc[employee.name]) {
      acc[employee.name] = [];
    }
    
    // Push the employee object into the array corresponding to their name
    acc[employee.name].push(employee);
    
    return acc;
  }, {});
  
  console.log(groupedByName);
  