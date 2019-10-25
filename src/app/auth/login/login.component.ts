import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoaderService } from 'src/app/share/loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

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
