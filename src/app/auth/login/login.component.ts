import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({      
      'email' : this.formBuilder.control(null, [Validators.required, Validators.email]),
      'password' : this.formBuilder.control(null, Validators.required)
    })
  }

  onSubmit() {
    this.authService.signIn(this.signinForm.value.email, this.signinForm.value.password);
  }

}
