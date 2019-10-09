import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './auth-guard-service';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'oauth', component: LoginComponent },
  { path: '', canActivate: [AuthGuard], component: HeaderComponent },
  { path: 'platform', canActivate: [AuthGuard], component: HeaderComponent } 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
