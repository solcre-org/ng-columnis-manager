import { LocalStorageService } from 'angular-2-local-storage';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

export class AuthService {

    constructor(private router: Router, private httpClient: HttpClient, private localStorageService: LocalStorageService) { }

    isAuthenticated() {
        const currentUser = this.localStorageService.get('access_token');
        if (currentUser) {
            return true;
        }
        return false;
    }

    signIn(email: string, password: string) {
        let username = email.split("@");
        this.httpClient.post(environment.apiURL + environment.oauthURI, {
            "client_id": "columnis_manager",
            "grant_type": "password",
            "username": username[0],
            "password": password
        }).subscribe(
            (data: any) => {
                this.localStorageService.set('access_token', data['access_token']);
                console.log("Logged in", data);
                this.router.navigate(['/user_groups']);

            },
            (error: HttpErrorResponse) => {
                console.log("Logged failed");
            }
        );
    }

    logout() {
        this.localStorageService.clearAll();
        console.log("Logged out");
        this.router.navigate(['/oauth']);
    }

    getToken() {
        return this.localStorageService.get('access_token');
    }

}