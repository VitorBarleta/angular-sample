import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input() public employeeList: Employee[];
 
  constructor() { }

  ngOnInit(): void {
  }

}
