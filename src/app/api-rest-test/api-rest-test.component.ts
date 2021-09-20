import { Router } from '@angular/router';
import { employee } from './../models/Employee/employee';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-api-rest-test',
  templateUrl: './api-rest-test.component.html',
  styleUrls: ['./api-rest-test.component.css']
})
export class ApiRestTestComponent implements OnInit {
  form: FormGroup;
  public employees: employee[];
  constructor(private employeeSrv: EmployeeService,
    private router: Router
    ) {


    }



  ngOnInit(): void {
    this.getEmployees();
  }



  getEmployees(){
    this.employeeSrv.getEmployees().subscribe((resp : any) => {
      this.employees = resp;
      console.log(resp);
    })
  }

  deleteEmpleado(id: number){
    this.employeeSrv.deleteEmployee(id).subscribe(resp =>{
      this.router.navigate(['']);
      swal.fire('Empleado Eliminado!',
      ` Empleado Eliminado con exito.`,
      'success')
      this.getEmployees();
    })
  }
}
