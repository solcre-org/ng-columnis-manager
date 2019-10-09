import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoggingService } from '../../_services/logging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoggingService]
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private loggingService: LoggingService, private router: Router) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({      
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    this.loggingService.signIn(this.signinForm.value.email, this.signinForm.value.password);
  }

}
