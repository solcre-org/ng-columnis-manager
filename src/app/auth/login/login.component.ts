import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private localStorageService: LocalStorageService
    ) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({      
      'email' : this.formBuilder.control(null, [Validators.required, Validators.email]),
      'password' : this.formBuilder.control(null, Validators.required)
    })
  }

  onSubmit() {
    this.authService.signIn(this.signinForm.value.email, this.signinForm.value.password);
  }

  onBlur() {
    if (this.signinForm.value.email.indexOf('@') > -1) {
      let data: string = (this.signinForm.value.email).split("@", 2);
      let domain: string = data[1];
      // this.authService.getCode(domain);
    }
  }

}
