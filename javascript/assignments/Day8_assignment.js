// 1. declare array of employees & sort them in ascending order (empId)
let employees = [
        { eId: 101, ename: 'sanjay', sal: 5000, gender: 'male' },
        { eId: 104, ename: 'geeta', sal: 8000, gender: 'female' },
        { eId: 103, ename: 'sameer', sal: 7000, gender: 'male' },
        { eId: 102, ename: 'sita', sal: 9000, gender: 'female' },
    	{ eId: 105, ename: 'deepak', sal: 8000, gender: 'male' }
      ];
employees.sort((a,b) => a.eId - b.eId);
console.log(employees);


// 2. declare array of employees & sort them in ascending order by name.
let employees1 = [
    { eId: 101, ename: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, ename: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, ename: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, ename: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, ename: 'deepak', sal: 8000, gender: 'male' }
  ];

employees1.sort((a,b) => {
    a.ename.localeCompare(b.ename);
});
console.log(employees1);


// 3. declare array of employees & filter the employees whose sal>6000;
let employees2 = [
    { eId: 101, ename: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, ename: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, ename: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, ename: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, ename: 'deepak', sal: 8000, gender: 'male' }
  ];  

let reqEmp = employees2.filter((emp) => emp.sal > 6000);
console.log(reqEmp)


// 4. declare array of employees & increase sal of every employee by 500;
let employees3 = [
    { eId: 101, ename: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, ename: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, ename: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, ename: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, ename: 'deepak', sal: 8000, gender: 'male' }
  ];  

let hikedDetails = employees3.map((emp) => {
    emp.sal += 500;
    return emp
});
console.log(hikedDetails)


// 5. declare array of employees & add "comp:ibm" to every employee;
let employees4 = [
    { eId: 101, ename: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, ename: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, ename: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, ename: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, ename: 'deepak', sal: 8000, gender: 'male' }
  ];  

let updatedEmpDetails = employees4.map((emp) => {
    emp.comp = 'ibm';
    return emp
});
console.log(updatedEmpDetails)


// 6. convert array of letters to array of words
// 		const inputArr = [ 
// 				'b', 'a', 'k', 'e', '',
// 				'c', 'a', 'k', 'e', '',
// 				'e', 'a', 't'
// 				];
// 	   output = ['bake','cake','eat'];

const inputArr = [
  'b', 'a', 'k', 'e', '',
  'c', 'a', 'k', 'e', '',
  'e', 'a', 't'
];

const convertToWords = (arr) => {
  const listOfWords = [];
  let word = '';

  for (let char of arr) {
    if (char == '') {
      listOfWords.push(word); // Add the word to the array
        word = ''; // Reset for the next word
    } else {
      word += char; // Add the character to the current word
    }
  }
  // Add the last word if it exists
  if (word.length > 0) {
    listOfWords.push(word);
  }
  return listOfWords;
};
console.log(convertToWords(inputArr));


// 7. add Dept info for each employee
//     employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
// 				{ eId: 104, name: "reena", sal: 8000, gender: "female" }]
// 	departments = [{ eId: 101, dept: "sales" },
// 				{ eId: 104, dept: "marketing" }]

const employees7 = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" }, 				
      { eId: 104, name: "reena", sal: 8000, gender: "female" }]
const departments = [{ eId: 101, dept: "sales" },
  { eId: 104, dept: "marketing" }]

let empWithDept = employees7.map(emp => {
  const deptInfo = departments.find(d => d.eId == emp.eId);
  return {
    ...emp,
    dept: deptInfo ? deptInfo.dept: null
  };
});
console.log('With departments:', empWithDept);



// 8. declare array of employees & groupBy employees-name
//     sample output: {
// 		'sanjay' : [{},{}],
// 		'alok' : [{}]
// 	}
const employees8 = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" }, 				
  { eId: 104, name: "reena", sal: 8000, gender: "female" }]

let groupByName = employees8.reduce((acc, emp) => {
  if(!acc[emp.name]){
    acc[emp.name] = [];
  }
  acc[emp.name].push(emp);
  return acc;
}, {});
console.log('Grouped by Name:', groupByName);

// 9. intersection of 2 number arrays
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const intersection = (arr1, arr2) => {
  return arr1.filter((num) => arr2.includes(num));
};
console.log(intersection(array1, array2));


// 10. WAP to print the occurance of each elements 
//     input = [10,20,30,40,50,10,30,50]
// 	output = {10:2, 20:1, 30:2 , 40:1, 50:2}

input = [10, 20, 30, 40, 50, 10, 30, 50]

const eleOccurence = (arr) => {
  const output = {};
  for (let num of arr) {
    if (output[num] >= 1)
      output[num] += 1;
    else
      output[num] = 1;
  }
  return output
};
console.log(eleOccurence(input))
