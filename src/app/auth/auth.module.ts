import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { LoaderComponent } from '../share/loader/loader.component';
import { LoaderService } from '../share/loader/loader.service';

@NgModule({
    declarations: [
        LoginComponent,
        LoaderComponent
    ], 
    imports: [
        LocalStorageModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    exports: [
        LoginComponent,
        LoaderComponent
    ]
})
export class AuthModule { } 