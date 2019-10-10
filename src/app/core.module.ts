import { NgModule } from '@angular/core';
import { AuthGuard } from './auth-guard-service';
import { AuthService } from './auth/auth.service';

@NgModule({
    providers: [AuthService, AuthGuard],
})
export class CoreModule {

}