import { NgModule } from '@angular/core';

import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EnrollComponent } from './pages/enroll/enroll.component';


const routes: Routes = [{
  path: '',
  children : [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'enroll',
      component: EnrollComponent
    },
    {
      path: '**',
      redirectTo: 'login'
    }
  ]
}];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
