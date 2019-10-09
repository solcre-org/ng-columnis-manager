import { LocalStorageService } from 'angular-2-local-storage';

export class AuthService {
    public localStorage:any;
    constructor (private localStorageService: LocalStorageService) {}

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.localStorageService.get('loggedIn'));
                }, 800);
            }
        )
        return promise;
    }

    login() {
        this.localStorageService.set('loggedIn', true);
    }
   
    logout() {
        this.localStorage = this.localStorageService.set('loggedIn', false);
    }

}