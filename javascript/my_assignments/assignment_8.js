let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];

// 1. Sort employees by empId in ascending order
let sortedById = employees.sort((a, b) => a.eId - b.eId);
console.log('Sorted by ID:', sortedById);

// 2. Sort employees by name in ascending order
let sortedByName = employees.sort((a, b) => a.name.localeCompare(b.name));
console.log('Sorted by name:', sortedByName);

// 3. Filter employees with salary > 6000
let highSalaryEmps = employees.filter(emp => emp.sal > 6000);
console.log('High salary employees:', highSalaryEmps);

// 4. Increase salary by 500 for all employees
let incrementedSalary = employees.map(emp => ({
    ...emp,
    sal: emp.sal + 500
}));
console.log('Incremented salary:', incrementedSalary);

// 5. Add company:ibm to all employees
let withCompany = employees.map(emp => ({
    ...emp,
    comp: 'ibm'
}));
console.log('With company:', withCompany);

// 6. Convert array of letters to array of words
const inputArr = ['b','a','k','e','','c','a','k','e','','e','a','t'];
let word = '';
let output = inputArr.reduce((acc, curr) => {
    if(curr === '') {
        acc.push(word);
        word = '';
    } else {
        word += curr;
    }
    return acc;
}, []);
if(word) output.push(word);
console.log('Words array:', output);

// 7. Add department info to employees
const departments = [
    { eId: 101, dept: "sales" },
    { eId: 104, dept: "marketing" }
];

let employeesWithDept = employees.map(emp => {
    const deptInfo = departments.find(d => d.eId === emp.eId);
    return {
        ...emp,
        dept: deptInfo ? deptInfo.dept : null
    };
});
console.log('With departments:', employeesWithDept);

// 8. Group employees by name
let groupedByName = employees.reduce((acc, emp) => {
    if(!acc[emp.name]) {
        acc[emp.name] = [];
    }
    acc[emp.name].push(emp);
    return acc;
}, {});
console.log('Grouped by name:', groupedByName);

// 9. Intersection of 2 arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];
let intersection = arr1.filter(num => arr2.includes(num));
console.log('Intersection:', intersection);

// 10. Count occurrences of elements
let input = [10, 20, 30, 40, 50, 10, 30, 50];
let occurrences = input.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log('Occurrences:', occurrences);