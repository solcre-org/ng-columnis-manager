import { LocalStorageService } from 'angular-2-local-storage';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { LoaderService } from '../share/loader/loader.service';
import { DialogService } from '../share/dialog/dialog.service';
import { DialogModel } from '../share/dialog/dialog.model';

export class AuthService {

    constructor(
        private dialogService: DialogService,
        private loaderService: LoaderService, 
        private router: Router, 
        private httpClient: HttpClient, 
        private localStorageService: LocalStorageService) { }

    isAuthenticated() {
        const currentUser = this.localStorageService.get('access_token');
        const refreshToken = this.localStorageService.get('refresh_token');
        if (currentUser) {
            this.httpClient.post(environment.apiURL + environment.oauthURI, {
                "client_id": "columnis_manager",
                "grant_type": "refresh_token",
                "refresh_token": refreshToken
            }).subscribe(
                (data: any) => {
                    // this.localStorageService.set('access_token', data['access_token']);
                    console.log("Logged in", data);

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
        this.httpClient.post(environment.apiURL + environment.oauthURI, {
            "client_id": "columnis_manager",
            "grant_type": "password",
            "username": username[0],
            "password": password
        }).subscribe(
            (data: any) => {
                this.localStorageService.set('access_token', data['access_token']);
                this.localStorageService.set('refresh_token', data['refresh_token']);
                console.log("Logged in", data);
                console.log(this.localStorageService);
                this.router.navigate(['/user_groups']);
                this.loaderService.done();

            },
            (error: HttpErrorResponse) => {
                this.dialogService.open(new DialogModel(error.error.detail));
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

}