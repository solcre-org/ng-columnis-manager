import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClientModule, HttpClient} from  '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url= "https://api.columnis.com/004/oauth";

  user = {
    email: '',
    password: ''
  };
  signinForm: FormGroup;
  
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.signinForm  = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    this.user.email = this.signinForm.value.email;
    this.user.password = this.signinForm.value.password;
    // console.log(this.signinForm);
    // console.log(this.user);
    let username = this.user.email.split("@");
    this.httpClient.post(this.url, {
      "client_id":  "columnis_manager",
      "grant_type":  "password",
      "username": username[0],
      "password": this.user.password
    }).subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      this.router.navigate(['/platform']);

    },
    error  => {
      console.log("Error", error);
    }

    );
  }

}
