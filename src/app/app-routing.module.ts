import { LoginComponent } from './login/login.component';
import { TestFormComponent } from './test-form/test-form.component';
import { RfsComponent } from './rfs/rfs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'rfs',
    component: RfsComponent
  },
  {
    path:'testForm',
    component: TestFormComponent
  },
  {
    path:'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
