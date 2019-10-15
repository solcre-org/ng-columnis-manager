import { Component, OnInit } from '@angular/core';
import { Permission } from './permission.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {

  permissions: Permission[] = [];
  newPermissionForm: FormGroup;

  constructor(
    private httpClient: HttpClient, 
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private apiService: ApiService

  ) { }

  ngOnInit() {
    this.getPermissions();
    console.log(this.authService.getAccessToken());
    this.newPermissionForm = this.formBuilder.group({
      'newPermission' : this.formBuilder.control(null, [Validators.required])
    });
  }

  getPermissions() {


      this.apiService.fetchData(environment.permissionsURI).subscribe((data: any) => {
        console.log(data);
   
      }, 
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      })
    
      //   for (let permission in data['_embedded']['permissions']) {

    //     let id = data["_embedded"]['permissions'][permission]['id'];
    //     let name = data["_embedded"]['permissions'][permission]['nombre'];        
    //     let description = data["_embedded"]['permissions'][permission]['descripcion'];
    //     let temp : Permission = {id, name, description};
    //     this.permissions.push(temp);
    //   }
    //   console.log(this.permissions);
      
    // }), (error: HttpErrorResponse)  => {
    //   console.log(error)
    // };;

    }

}
