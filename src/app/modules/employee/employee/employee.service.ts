import { Injectable } from "@angular/core";

export interface Employee {
    name: string;
    birthDate: Date;
    function: string;
    salary: string;
}

@Injectable()
export class EmployeeService {

    getAllEmployees(): Employee[] {
        return [
            {
                name: 'Júlia',
                birthDate: new Date('1999/12/15'),
                function: 'Front Dev',
                salary: 'R$ 7000'
            },
            {
                name: 'Jubileu',
                birthDate: new Date(),
                function: 'dancer',
                salary: 'pipoca'
            }
        ] as Employee[];
    }
}