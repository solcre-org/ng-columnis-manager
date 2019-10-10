import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './auth-guard-service';
import { LoginComponent } from './auth/login/login.component';
import { PlatformComponent } from './platform/platform.component';
import { UserGroupComponent } from './user/user-group/user-group.component';
import { platform } from 'os';

const routes: Routes = [
  { path: 'oauth', component: LoginComponent },
  { path: '', canActivate: [AuthGuard], component: PlatformComponent },
  { path: 'platform', canActivate: [AuthGuard], component: PlatformComponent },
  { path: 'user_groups', canActivate: [AuthGuard], component: UserGroupComponent } 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
