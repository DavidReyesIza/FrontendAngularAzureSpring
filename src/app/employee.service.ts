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


  get headers(){

    return{
      headers:{
        'Ocp-Apim-Subscription-Key': 'c9f74cae76704985874bf0bc5bbfe7b5',
        'Ocp-Apim-Trace':'true'
      }

    }
  }

  postEmployee(data: employee){
    return this.http.post<employee>(this.urlBase+'/employee',data, this.headers);
  }

  getEmployees(){
    return this.http.get<employee>(this.urlBase + '/employees',this.headers);
  }

  putEmployees(data: employee){
    return this.http.put<employee>(this.urlBase + '/employee/' + data.id , data,this.headers);
  }

  deleteEmployee(id: number){
    return this.http.delete<employee>(this.urlBase + '/employee/' +id);
  }

  getEmployee(id: number){
    return this.http.get<employee>(this.urlBase + '/employee/'+ id);
  }
}
