import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'list',
        pathMatch:'full'
    },
    {
        path:'list',
        loadComponent:()=> import('./features/employee/employee-list/employee-list').then((m)=>m.EmployeeList)
    }
];
