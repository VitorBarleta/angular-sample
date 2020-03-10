import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getAllEmployees();
  }

  refreshEmployees(): void {
    this.employees.push({
      name: 'Lucas',
      birthDate: new Date('1995/7/6'),
      function: 'Dev',
      salary: 'R$ 8000'
    });
  }
}
