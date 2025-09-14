import { Component, inject, OnInit, signal } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { EmployService } from '../../../Services/employ-service';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-employee-list',
  standalone:true,
  imports: [TableModule,CardModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList implements OnInit{
  
  private employeeService=inject(EmployService);
  employees=signal<Employee[]>([]);

  ngOnInit(): void {
    
    this.employeeService.getEmployees().subscribe({
      next:(employee)=>{
        this.employees.set(employee)
      },
      error:(error)=>{
        console.log("Error fetching employees",error);
        
      }
    })
  }


}
