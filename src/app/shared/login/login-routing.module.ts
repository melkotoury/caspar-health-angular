import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthGuardsService } from './../auth/auth-guards.service';
import {AuthService} from '../auth/auth.service';
import {LoginComponent} from './login.component';


const loginRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
  providers: [AuthGuardsService, AuthService]
})
export class LoginRoutingModule {}
