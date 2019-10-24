import { Component, OnInit } from '@angular/core';
import { Permission } from './permission.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/share/apiService/api.service';
import { ApiHalPagerModel } from 'src/app/share/apiService/api-hal-pager.model';
import { ApiResponseModel } from 'src/app/share/apiService/api-response.model';
import { TableHeaderModel } from 'src/app/share/table/table-header.model';
import { TableModel } from 'src/app/share/table/table.model';
import { TableRowModel } from 'src/app/share/table/table-row.model';
import { stringify } from '@angular/compiler/src/util';
import { DialogService } from 'src/app/share/dialog/dialog.service';
import { DialogModel } from 'src/app/share/dialog/dialog.model';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {

  permissions: Permission[] = [];
  permissionForm: FormGroup;
  updatePermissionForm: FormGroup;
  filteredStatus = '';

  apiHalPagerModel: ApiHalPagerModel;
  tableModel: TableModel;
  headers: TableHeaderModel[] = [];
  body: TableRowModel[] = [];

  constructor(
    private dialogService: DialogService,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    let header_1: TableHeaderModel = new TableHeaderModel('Id');
    let header_2: TableHeaderModel = new TableHeaderModel('Nombre');
    let header_3: TableHeaderModel = new TableHeaderModel('Descripción');

    this.headers = [header_1, header_2, header_3];
    this.getPermissions(1);

    this.permissionForm = this.formBuilder.group({
      'id': this.formBuilder.control(null, []),
      'description': this.formBuilder.control(null, []),
      'name': this.formBuilder.control(null, [Validators.required]),
      'model': this.formBuilder.control(null, []),
    });
  }

  onChangePage(page) {
    this.tableModel.removeBody();
    this.getPermissions(page);
  }

  getPermissions(current_page: number) {
    this.body = [];
    this.apiService.fetchData(environment.permissionsURI, { page: current_page }).subscribe((response: ApiResponseModel) => {
      let array_data = response.data;
      this.apiHalPagerModel = response.pager;
      for (let permission in array_data) {
        let permissionToAdd: Permission = new Permission();
        permissionToAdd.fromJSON(array_data[permission]);
        let data: string[] = [stringify(permissionToAdd.id), permissionToAdd.name, permissionToAdd.description];
        let body_temp: TableRowModel = new TableRowModel(permissionToAdd.id, permissionToAdd, data);
        this.body.push(body_temp);
      }
      this.tableModel = new TableModel(this.headers, this.body);

    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      })
  }

  onSave() {
    if (this.permissionForm.value.id == null) {
      this.onAddPermission();
    } else {
      let permission = this.permissionForm.value.model;
      this.onUpdatePermission(permission);
    }
  }

  onAddPermission() {
    let name: string = this.permissionForm.value.name;
    let description: string = this.permissionForm.value.description;
    let permissionToAdd: Permission = new Permission(null, name, description);
    let json = permissionToAdd.toJSON();

    this.apiService.createObj(environment.permissionsURI, json).subscribe((response: ApiResponseModel) => {
      let permissionToAdd: Permission = new Permission();
      permissionToAdd.fromJSON(response.data);

      let tableRowModel: TableRowModel = new TableRowModel(permissionToAdd.id, permissionToAdd, [stringify(permissionToAdd.id), permissionToAdd.name, permissionToAdd.description])
      this.tableModel.addRow(tableRowModel);
    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      });
    this.permissionForm.reset();
  }

  onDelete(row: TableRowModel) {
    //Open dialog
    this.dialogService.open(new DialogModel("Titulo", "Estas seguro que desea eliminar el item: " + row.data[1] + "?", () => {

      //Delete the usergroup
      this.apiService.deleteObj(environment.permissionsURI, row.id).subscribe((data: any) => {
        this.tableModel.removeRow(row.id);
      },
        (error: HttpErrorResponse) => {
          console.log(error['error']);
        }
      )
    }));

  }

  onUpdate(row: TableRowModel) {
    let value: Permission = row.model;

    //TODO: Patchvalue to form
    this.permissionForm.patchValue({
      "id": value.id,
      "name": value.name,
      "description": value.description,
      "model": value
    })
  }
  onUpdatePermission(permission: Permission) {
    let id = permission.id;
    let name = this.permissionForm.value.name;
    let description = this.permissionForm.value.description;
    let permissionToUp: Permission = new Permission(id, name, description);
    let json = permissionToUp.toJSON();
    this.apiService.updateObj(environment.permissionsURI, json).subscribe((response: ApiResponseModel) => {
      let tableRowModel: TableRowModel = new TableRowModel(permissionToUp.id, permissionToUp, [stringify(permissionToUp.id), permissionToUp.name, permissionToUp.description])
      this.tableModel.updateRow(tableRowModel);
    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      })
    this.permissionForm.reset();
  }

}