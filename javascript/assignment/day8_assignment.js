<<<<<<< HEAD
console.log("------------------------------------------1. Sort employees by empId-------------------------------------------");
let employees = [
  { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
  { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
  { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
  { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
  { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];
employees.sort((a, b) => a.eId - b.eId);git 
console.log("Sorted by empId:", employees);

console.log("-----------------------------------------2. Sort employees by name-----------------------------------------");
employees.sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted by name:", employees);

console.log("------------------------------------3. Filter employees whose salary is greater than 6000-------------------------------");
let highSalaryEmployees = employees.filter(emp => emp.sal > 6000);
console.log("Filtered employees (sal > 6000):", highSalaryEmployees);

console.log("--------------------------------------4. Increase sal of every employee by 500---------------------------------");
employees.forEach(emp => {
  emp.sal += 500;
});
console.log("Increased salary:", employees);

console.log("------------------------------------5. Add comp: ibm to every employee---------------------------------");
employees.forEach(emp => {
  emp.comp = 'ibm';
});
console.log("Added company:", employees);


console.log("--------------------------------6. Convert array of letters to words----------------------------------");
const inputArr = ['b', 'a', 'k', 'e', '', 'c', 'a', 'k', 'e', '', 'e', 'a', 't'];
const output = inputArr.join('').split(' ').filter(Boolean);
console.log("Words:", output);

console.log("-----------------------------------------7. Add department info to each employee----------------------------");
let departments = [
  { eId: 101, dept: "sales" },
  { eId: 104, dept: "marketing" }
];
let employeesWithDept = employees.map(emp => ({
  ...emp,
  dept: departments.find(d => d.eId === emp.eId)?.dept || null
}));
console.log("Employees with department info:", employeesWithDept);

console.log("-------------------------------8. Group employees by name-------------------------------------");
let groupedByName = employees.reduce((acc, emp) => {
  acc[emp.name] = acc[emp.name] || [];
  acc[emp.name].push(emp);
  return acc;
}, {});
console.log("Employees grouped by name:", groupedByName);

console.log("--------------------------------9. Find the intersection of two arrays-------------------------------");
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
let intersection = arr1.filter(num => arr2.includes(num));
console.log("Intersection of arrays:", intersection);

console.log("---------------------------------10. Count occurrences of elements in an array--------------------------------------");
const input = [10, 20, 30, 40, 50, 10, 30, 50];
let occurrences = input.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
console.log("Occurrences of elements:", occurrences);