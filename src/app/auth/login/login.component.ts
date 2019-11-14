import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;
  searchingCode: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      'email': this.formBuilder.control(null, [Validators.required, Validators.email]),
      'password': this.formBuilder.control(null, Validators.required)
    });
    this.authService.searchingCode.subscribe((state: boolean) => {
      this.searchingCode = state;
    });
  }

  onSubmit() {
    this.authService.signIn(this.signinForm.value.email, this.signinForm.value.password);
  }

  onBlur() {
    this.signinForm.invalid;
    if (this.signinForm.value.email && this.signinForm.value.email.indexOf('@') > -1) {
      let data: string = (this.signinForm.value.email).split("@", 2);
      let domain: string = data[1];
      this.authService.setCode(domain);
    }
  }
}
