import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterEmployee',
})
export class FilterPipe implements PipeTransform {
    transform(
        employees: any[],
        searchText: string,
        searchFilter: string | null = null
    ): any[] {
        if (!employees) {
            return [];
        }
        if (!searchText) {
            return employees;
        }
        if (searchFilter) {
            return employees.filter((employee: any) =>
                employee[searchFilter]
                    .toLowerCase()
                    .includes(searchText.toLocaleLowerCase())
            );
        } else {
            return employees.filter((employee: any) => {
                console.log(employee.toString());
                return employee
                    .toString()
                    .toLowerCase()
                    .includes(searchText.toLocaleLowerCase());
            });
        }
    }
}
