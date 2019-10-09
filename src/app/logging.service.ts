import { HttpClientModule, HttpClient} from  '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../environments/environment';

export class LoggingService {
    constructor(private httpClient: HttpClient, private router: Router) {}

    logStatusChange( status: string) {
        console.log('A server status changed: ' + status );
    }


    signIn(email: string, password: string) {
        let username = email.split("@");
        this.httpClient.post(environment.apiUrl, {
            "client_id":  "columnis_manager",
            "grant_type":  "password",
            "username": username[0],
            "password": password
        }).subscribe(
            data  => {
                console.log("Logged in");
                this.router.navigate(['/platform']);

            },
            error  => {
                console.log("Logged failed");
            }
        );
    }
}