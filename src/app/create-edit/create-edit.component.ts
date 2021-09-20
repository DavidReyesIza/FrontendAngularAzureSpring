import { EmployeeService } from './../employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css']
})
export class CreateEditComponent implements OnInit {
  form: FormGroup;
  url;
  constructor(private fb: FormBuilder,
   private activatedRoute: ActivatedRoute,
   private employeeService: EmployeeService,
   private router: Router,) {

      this.form = this.fb.group({
        id: [''],
        name: ['', [Validators.required]],
        dept: ['', [Validators.required]],
        salary: ['', [Validators.required]],

      });
  }

  ngOnInit(): void {
    this.cargar();
  }

  cargar() : void {
    this.activatedRoute.params.subscribe(params => {

      let id = params['id'];
      console.log('el id es ',id)
      this.url= id;
      if(id){
        this.getEmployee();
      }


    })
  }

  getEmployee(){
    this.employeeService.getEmployee(this.url).subscribe((resp : any) => {

      this.form.setValue(resp);
    })
  }

  crearEmpleado(){
    this.employeeService.postEmployee(this.form.value).subscribe(resp =>{
      this.router.navigate(['']);
      swal.fire('Empleado Agregado!',
      `Nuevo Empleado Agregado con exito.`,
      'success')
    })
  }

  actualizarEmpleado(){
    this.employeeService.putEmployees(this.form.value).subscribe(resp =>{
      this.router.navigate(['']);
      swal.fire('Empleado editado!',
      ` Empleado editado con exito.`,
      'success')
    })
  }



}
