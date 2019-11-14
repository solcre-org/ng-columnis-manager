import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth-guard-service';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
// import { platform } from 'os';

const routes: Routes = [
  { path: 'oauth', component: LoginComponent },
  { path: '', canActivate: [AuthGuard], component: DashboardComponent },
  { 
    path: 'users', 
    loadChildren: () => import('./users/users.module').then(mod => mod.UsersModule),
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
