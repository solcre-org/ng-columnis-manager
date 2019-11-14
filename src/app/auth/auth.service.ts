import { LocalStorageService } from 'angular-2-local-storage';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { LoaderService } from '../shared/loader/loader.service';
import { DialogService } from '../shared/dialog/dialog.service';
import { DialogModel } from '../shared/dialog/dialog.model';
import { TranslateService } from '@ngx-translate/core';
import { EventEmitter } from '@angular/core';

export class AuthService {

    codeDomain: string;
	public searchingCode: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private dialogService: DialogService,
        private translateService: TranslateService,
        private loaderService: LoaderService,
        private router: Router,
        private httpClient: HttpClient,
        private localStorageService: LocalStorageService
    ) { }

    isAuthenticated() {
        let currentUser = this.localStorageService.get('access_token');
        let refreshToken = this.localStorageService.get('refresh_token');
        this.codeDomain = this.localStorageService.get('code');
        if (currentUser) {
            this.httpClient.post(environment.apiURL + this.codeDomain + environment.oauthURI, {
                "client_id": "columnis_manager",
                "grant_type": "refresh_token",
                "refresh_token": refreshToken
            }).subscribe(
                (response: any) => {
                    // this.localStorageService.set('access_token', response['access_token']);
                    console.log("Logged in", response);

                },
                (error: HttpErrorResponse) => {
                    console.log("Token vencido");
                    return false;
                }
            );
            return true;
        }
        return false;
    }

    signIn(email: string, password: string) {
        this.loaderService.start();
        let username = email.split("@");

        this.httpClient.post(environment.apiURL + this.codeDomain + environment.oauthURI, {
            "client_id": "columnis_manager",
            "grant_type": "password",
            "username": username[0],
            "password": password
        }).subscribe(
            (response: any) => {
                this.localStorageService.set('code', this.codeDomain);
                this.localStorageService.set('access_token', response['access_token']);
                this.localStorageService.set('refresh_token', response['refresh_token']);
                console.log("Logged in", response);
                this.router.navigate(['/']);
                this.loaderService.done();
            },
            (error: HttpErrorResponse) => {
                let message: string;
                this.translateService.get('share.dialog.errorPassword').subscribe(response => {
                    message = response;
                });
                console.log(message);
                this.dialogService.open(new DialogModel(message));
                console.log(error.error.detail);
                this.loaderService.done();
            }


        );
    }

    logout() {
        this.localStorageService.clearAll();
        console.log("Logged out");
        this.router.navigate(['/oauth']);
    }

    getAccessToken(): string {
        return this.localStorageService.get('access_token');
    }

    setCode(domain: string) {
        this.searchingCode.emit(true);
        console.log("Start");
        this.loaderService.start();
        let params = new HttpParams().set('domain', domain);
        this.httpClient.get(environment.apiURL + environment.codeURI, { params }).subscribe((response: any) => {
            this.codeDomain = response.code;
            if (!((this.codeDomain) == '000')) {
                this.searchingCode.emit(false);
            } else {
                //avisar que el dominio es invalido
            }
        }, (error: HttpErrorResponse) => {
            console.log(error);
        });
    }

    getCode(): string {
        return this.localStorageService.get('code');
    }

}