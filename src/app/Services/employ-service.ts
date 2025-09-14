import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployService {
  private http=inject(HttpClient);
  private readonly API='http://localhost:8080/employees';
  



  getEmployees():Observable<Employee[]>{
      return this.http.get<Employee[]>(this.API);
  }


}
