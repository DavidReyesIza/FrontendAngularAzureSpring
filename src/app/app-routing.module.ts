import { ApiRestTestComponent } from './api-rest-test/api-rest-test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEditComponent } from './create-edit/create-edit.component';

const routes: Routes = [
  {path: '', component: ApiRestTestComponent},
  {path: 'add', component: CreateEditComponent},
  {path: 'edit/:id', component: CreateEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
