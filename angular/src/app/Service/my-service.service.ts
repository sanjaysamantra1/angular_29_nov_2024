import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }


  TableisVisable :boolean = true;

  private employees = [
    {
      id: 1,
      name: "John Doe",
      img: "https://example.com/images/john.jpg",
      link: "https://example.com/employees/john",
      gender: "Male",
      position: "Software Engineer"
    },
    {
      id: 2,
      name: "Jane Smith",
      img: "https://example.com/images/jane.jpg",
      link: "https://example.com/employees/jane",
      gender: "Female",
      position: "Project Manager"
    },
    {
      id: 3,
      name: "Michael Brown",
      img: "https://example.com/images/michael.jpg",
      link: "https://example.com/employees/michael",
      gender: "Male",
      position: "UX Designer"
    },
    {
      id: 4,
      name: "Emily Davis",
      img: "https://example.com/images/emily.jpg",
      link: "https://example.com/employees/emily",
      gender: "Female",
      position: "Data Scientist"
    },
    {
      id: 5,
      name: "Chris Wilson",
      img: "https://example.com/images/chris.jpg",
      link: "https://example.com/employees/chris",
      gender: "Male",
      position: "DevOps Engineer"
    },
    {
      id: 6,
      name: "Sophia Martinez",
      img: "https://example.com/images/sophia.jpg",
      link: "https://example.com/employees/sophia",
      gender: "Female",
      position: "QA Engineer"
    }
  ];
  
getemployees(){
  return this.employees;
}

filterEmployees(filter: string): any[] {
  if (filter === 'maleEmployees') {
    return this.employees.filter((emp) => emp.gender === 'Male');
  } else if (filter === 'femaleEmployees') {
    return this.employees.filter((emp) => emp.gender === 'Female');
  }
  return this.employees; 
}

}
