import { Component, OnInit } from '@angular/core';
import { Permission } from './permission.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/share/apiService/api.service';
import { ApiHalPagerModel } from 'src/app/share/apiService/api-hal-pager.model';
import { ApiResponseModel } from 'src/app/share/apiService/api-response.model';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {

  permissions: Permission[] = [];
  newPermissionForm: FormGroup;
  updatePermissionForm: FormGroup;
  filteredStatus = '';

  apiHalPagerModel: ApiHalPagerModel;


  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.getPermissions(5);
    console.log(this.authService.getAccessToken());
    this.newPermissionForm = this.formBuilder.group({
      'newPermissionName': this.formBuilder.control(null, [Validators.required]),
      'newPermissionDescription': this.formBuilder.control('')
    });
    this.updatePermissionForm = this.formBuilder.group({
      'updatePermissionName': this.formBuilder.control(null, [Validators.required]),
      'updatePermissionDescription': this.formBuilder.control('')
    })
  }

  onChangePage(page) {
    this.permissions = [];
    this.getPermissions(page);
  } 

  getPermissions(current_page: number) {
    this.apiService.fetchData(environment.permissionsURI, { page: current_page }).subscribe((response: ApiResponseModel) => {
      const array_data = response.data;
      this.apiHalPagerModel = response.pager;
      for (let permission in array_data) {
        let permissionToAdd: Permission = new Permission();
        permissionToAdd.fromJSON(array_data[permission]);
        this.permissions.push(permissionToAdd);
      }
    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      })
  }



  onAddPermission() {
    let name = this.newPermissionForm.value.newPermissionName;
    let description = this.newPermissionForm.value.newPermissionDescription;
    let permissionToAdd: Permission = new Permission(null, name, description);
    let json = permissionToAdd.toJSON(permissionToAdd);
    this.apiService.createObj(environment.permissionsURI, json).subscribe((response: ApiResponseModel) => {
      const permissionToAdd: Permission = new Permission ();
      permissionToAdd.fromJSON(response.data);
      this.permissions.push(permissionToAdd);
    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      });
    this.newPermissionForm.reset();
  }

  onDeletePermission(permission: Permission) {
    this.apiService.deleteObj(environment.permissionsURI, permission.id).subscribe((data: any) => {
      const index = this.permissions.indexOf(permission);
      this.permissions.splice(index, 1);
    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      });

  }

  onUpdatePermission(permission: Permission) {
    let id = permission.id;
    let name = this.updatePermissionForm.value.updatePermissionName;
    let description = this.updatePermissionForm.value.updatePermissionDescription;
    let permissionToUp: Permission = new Permission ( id, name, description );
    let json = permission.toJSON(permissionToUp);
    this.apiService.updateObj(environment.permissionsURI, json).subscribe((response: ApiResponseModel) => {
      const index = this.permissions.indexOf(permission);
      this.permissions[index].name = this.updatePermissionForm.value.updatePermissionName;
      this.permissions[index].description = this.updatePermissionForm.value.updatePermissionDescription;
    })
  }

}