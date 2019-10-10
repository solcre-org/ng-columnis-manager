import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlatformComponent } from './platform/platform.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core.module';
import { NavbarComponent } from './navbar/navbar.component';
import { UserGroupComponent } from './user/user-group/user-group.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlatformComponent,
    NavbarComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
