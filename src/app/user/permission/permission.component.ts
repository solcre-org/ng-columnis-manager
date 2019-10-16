import { Component, OnInit } from '@angular/core';
import { Permission } from './permission.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/share/apiService/api.service';
import { ApiHalPagerModel } from 'src/app/share/apiService/api-hal-pager.model';

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

  apiHalPagerModel: ApiHalPagerModel = null;


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
      'newPermissionDescription': this.formBuilder.control(null)
    });
    this.updatePermissionForm = this.formBuilder.group({
      'updatePermissionName': this.formBuilder.control(null, [Validators.required]),
      'updatePermissionDescription': this.formBuilder.control('')
    })
  }

  getPermissions(current_page: number) {
    this.apiService.fetchData(environment.permissionsURI, { page: current_page }).subscribe((data: any) => {
      const array_data = data['data'];
      console.log(data.pager);
      this.apiHalPagerModel = data.pager;
      console.log(this.apiHalPagerModel);
      for (let permission in array_data) {
        const id = array_data[permission]['id'];
        const nombre = array_data[permission]['nombre'];
        const descripcion = array_data[permission]['descripcion'];
        const permissionToAdd: Permission = { id, nombre, descripcion };
        this.permissions.push(permissionToAdd);
      }
    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      })
  }



  onAddPermission() {
    const nombre: string = this.newPermissionForm.value.newPermissionName;
    const descripcion = this.newPermissionForm.value.newPermissionDescription;
    const permissionToAdd: any = { nombre, descripcion };
    this.apiService.createObj(environment.permissionsURI, permissionToAdd).subscribe((data: any) => {
      const id = data['data']['id'];
      const nombre = data['data']['nombre'];
      const descripcion = data['data']['descripcion'];
      const permissionToAdd: Permission = { id, nombre, descripcion };
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
    console.log(permission);
    const id = permission.id;
    const nombre = this.updatePermissionForm.value.updatePermissionName;
    const descripcion = this.updatePermissionForm.value.updatePermissionDescription;
    const permissionToUp: any = { id, nombre, descripcion };
    this.apiService.updateObj(environment.permissionsURI, permissionToUp).subscribe((data: any) => {
      console.log(data);
      const index = this.permissions.indexOf(permission);
      this.permissions[index].nombre = this.updatePermissionForm.value.updatePermissionName;
      this.permissions[index].descripcion = this.updatePermissionForm.value.updatePermissionDescription;
    })
  }
}
