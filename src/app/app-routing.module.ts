import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth-guard-service';
import { LoginComponent } from './auth/login/login.component';
import { UserGroupComponent } from './user/user-group/user-group.component';
import { PermissionComponent } from './user/permission/permission.component';
// import { platform } from 'os';

const routes: Routes = [
  { path: 'oauth', component: LoginComponent },
  { path: '', canActivate: [AuthGuard], component: UserGroupComponent },
  { path: 'user_groups', canActivate: [AuthGuard], component: UserGroupComponent },
  { path: 'permissions', canActivate: [AuthGuard], component: PermissionComponent } 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
