import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeeComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class EmployeeRoutingModule { }