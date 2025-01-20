export class UserModel {

    eId: number;
    firstName: string;
    lastName: string;
	gender: string;
	sal: number;

    constructor(eId: number, firstName: string, lastName: string, gender: string, sal: number){
        this.eId = eId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.sal = sal;
    }

    getFullName(): string{
        return `${this.lastName} ${this.firstName}`;
    }

    getYearlySalary(): number{
        return this.sal*12;
    }
}
