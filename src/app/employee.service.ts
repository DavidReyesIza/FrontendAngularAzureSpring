import { environment } from './../environments/environment';
import { employee } from './models/Employee/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
   urlBase = environment.base_url;
  constructor(private http: HttpClient) { }


  postEmployee(data: employee){
    return this.http.post<employee>(this.urlBase+'/employee',data);
  }

  getEmployees(){
    return this.http.get<employee>(this.urlBase + '/employees');
  }

  putEmployees(data: employee){
    return this.http.put<employee>(this.urlBase + '/employee/' + data.id , data);
  }

  deleteEmployee(id: number){
    return this.http.delete<employee>(this.urlBase + '/employee/' +id);
  }

  getEmployee(id: number){
    return this.http.get<employee>(this.urlBase + '/employee/'+ id);
  }
}
