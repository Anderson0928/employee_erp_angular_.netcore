import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeAddComponent } from './modules/employee/components/employee-add/employee-add.component';
import { EmployeeDetailComponent } from './modules/employee/components/employee-detail/employee-detail.component';
import { EmployeesListComponent } from './modules/employee/components/employees-list/employees-list.component';
import { EmployeeUpdateComponent } from './modules/employee/components/employee-update/employee-update.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'addemployee', component: EmployeeAddComponent },
  { path: 'update/:id', component: EmployeeUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
