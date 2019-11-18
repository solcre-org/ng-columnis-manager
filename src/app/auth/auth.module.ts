import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { LoaderComponent } from '../shared/loader/loader.component';
import { DialogService } from '../shared/dialog/dialog.service';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { InputHolderComponent } from '../shared/input-holder/input-holder.component';
import { ShareModule } from '../shared/share.module';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
    declarations: [
        LoginComponent,
    ], 
    imports: [
        LocalStorageModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        TranslateModule,
        ShareModule,

    ],
    exports: [
        LoginComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        DialogService]
})
export class AuthModule { } 