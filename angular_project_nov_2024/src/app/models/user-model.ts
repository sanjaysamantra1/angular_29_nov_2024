export class User {
    id: number;
    firstName: string;
    lastName: string;
    sal: number;
    gender: string;

    constructor(id: number, firstName: string, lastName: string, sal: number, gender: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.sal = sal;
        this.gender = gender;
    }

    getFullName(): string {
        return `${this.lastName} ${this.firstName}`;
    }
    getYearlySalary(): number {
        return 12 * this.sal;
    }
}
