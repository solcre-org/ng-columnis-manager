import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LocalStorageModule } from 'angular-2-local-storage';

@NgModule({
    declarations: [
        LoginComponent
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
        LoginComponent
    ]
})
export class AuthModule { } 