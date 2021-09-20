import { employee } from './../models/Employee/employee';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-api-rest-test',
  templateUrl: './api-rest-test.component.html',
  styleUrls: ['./api-rest-test.component.css']
})
export class ApiRestTestComponent implements OnInit {
  form: FormGroup;
  public employees: employee[];
  constructor(private employeeSrv: EmployeeService,
    private fb: FormBuilder,) {

      this.form = this.fb.group({
        name: ['', [Validators.required]],
        dept: ['', [Validators.required]],
        salary: ['', [Validators.required]],

      });
    }



  ngOnInit(): void {
    this.employeeSrv.getEmployees().subscribe((resp : any) => {
      this.employees = resp;
      console.log(resp);
    })
  }

}
