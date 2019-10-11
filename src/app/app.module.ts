import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core.module';
import { UserGroupComponent } from './user/user-group/user-group.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard-service';


@NgModule({
  declarations: [
    AppComponent,
    UserGroupComponent
  ],
  imports: [
    LocalStorageModule.forRoot({
      prefix: 'columnis-manager',
      storageType: 'localStorage'
  }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
    CoreModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
