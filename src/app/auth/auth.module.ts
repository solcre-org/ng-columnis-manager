import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { LoaderComponent } from '../share/loader/loader.component';
import { DialogService } from '../share/dialog/dialog.service';
import { DialogComponent } from '../share/dialog/dialog.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { InputHolderComponent } from '../share/input-holder/input-holder.component';

@NgModule({
    declarations: [
        LoginComponent,
        LoaderComponent,
        DialogComponent,
        InputHolderComponent
    ], 
    imports: [
        LocalStorageModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    exports: [
        LoginComponent,
        LoaderComponent,
        DialogComponent,
        InputHolderComponent
    ],
    providers: [DialogService]
})
export class AuthModule { } 