import { NgModule } from "@angular/core";
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeService } from './employee/employee.service';
import { CommonModule } from '@angular/common';
import { PrimaryButtonModule } from 'src/shared/directives/primary-button.module';

@NgModule({
    declarations: [
        EmployeeComponent,
        EmployeeListComponent
    ],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        PrimaryButtonModule
    ],
    providers: [
        EmployeeService
    ]
})
export class EmployeeModule { }