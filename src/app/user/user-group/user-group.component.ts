import { Component, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserGroup } from './user-group.model';
import { ApiService } from 'src/app/share/apiService/api.service';
import { ApiResponseModel } from 'src/app/share/apiService/api-response.model';
import { ApiHalPagerModel } from 'src/app/share/apiService/api-hal-pager.model';
import { TableModel } from 'src/app/share/table/table.model';
import { TableHeaderModel } from 'src/app/share/table/table-header.model';
import { TableRowModel } from 'src/app/share/table/table-row.model';
import { stringify } from '@angular/compiler/src/util';
import { DialogModel } from 'src/app/share/dialog/dialog.model';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {

  tableModel: TableModel;
  headers: TableHeaderModel[] = [];
  body: TableRowModel[] = [];
  dialog: DialogModel = new DialogModel("titulo", "Estás seguro que deseas borrar el ítem: ", this.onConfirmDelete);

  apiHalPagerModel: ApiHalPagerModel;
  userGroupForm: FormGroup;
  filteredStatus = '';
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,

  ) { }


  ngOnInit() {
    let header_1: TableHeaderModel = new TableHeaderModel('Id');
    let header_2: TableHeaderModel = new TableHeaderModel('Nombre');
    this.headers = [header_1, header_2];
    this.getUserGroups(1);
    this.userGroupForm = this.formBuilder.group({
      'id': this.formBuilder.control(null, []),
      'name': this.formBuilder.control(null, [Validators.required]),
      'model': this.formBuilder.control(null, []),
    });
  }

  onChangePage(page) {
    this.tableModel.removeBody();
    this.getUserGroups(page);
  }

  getUserGroups(current_page) {
    this.body = [];
    this.apiService.fetchData(environment.userGroupsURI, { page: current_page }).subscribe((response: ApiResponseModel) => {
      const array_data = response.data;
      this.apiHalPagerModel = response.pager;
      for (let user_group in array_data) {
        let groupToAdd: UserGroup = new UserGroup();
        groupToAdd.fromJSON(array_data[user_group]);

        let data: string[] = [stringify(groupToAdd.id), groupToAdd.name];
        let body_temp: TableRowModel = new TableRowModel(groupToAdd.id, groupToAdd, data);
        this.body.push(body_temp);

      }
      this.tableModel = new TableModel(this.headers, this.body);
    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      })
  }

  onSave() {
    if (this.userGroupForm.value.id == null) {
      this.onAddGroup();
    } else {
      let group = this.userGroupForm.value.model;
      this.onUpdateGroup(group);
    }
  }

  onAddGroup() {
    let name: string = this.userGroupForm.value.name;
    let groupToAdd: UserGroup = new UserGroup(null, name);
    let json = groupToAdd.toJSON();

    this.apiService.createObj(environment.userGroupsURI, json).subscribe((response: ApiResponseModel) => {
      let groupToAdd: UserGroup = new UserGroup();
      groupToAdd.fromJSON(response.data);

      let tableRowModel: TableRowModel = new TableRowModel(groupToAdd.id, groupToAdd, [stringify(groupToAdd.id), groupToAdd.name])
      this.tableModel.addRow(tableRowModel);
    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      });
    this.userGroupForm.reset();
  }

  onDelete(row: TableRowModel) {
    let message = this.dialog.message;
    this.dialog.message = this.dialog.message + row.data[1];
    console.log(this.dialog);
    this.onConfirmDelete(row);
    // this.dialog.confirmCallback(row); //ERROR
    this.dialog.message = message;
  }
  
  onConfirmDelete(row: TableRowModel) {
    this.apiService.deleteObj(environment.userGroupsURI, row.id).subscribe((data: any) => {
      this.tableModel.removeRow(row.id);
    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      }
    )
  }

  onUpdate(row: TableRowModel) {
    let value: UserGroup = row.model;

    //TODO: Patchvalue to form
    this.userGroupForm.patchValue({
      "id": value.id,
      "name": value.name,
      "model": value
    })
  }

  onUpdateGroup(group: UserGroup) {
    const id = group.id;
    const name = this.userGroupForm.value.name;
    let groupToUpdate: UserGroup = new UserGroup(id, name);
    let json = groupToUpdate.toJSON();
    this.apiService.updateObj(environment.userGroupsURI, json).subscribe((response: any) => {
      let tableRowModel: TableRowModel = new TableRowModel(groupToUpdate.id, groupToUpdate, [stringify(groupToUpdate.id), groupToUpdate.name])
      this.tableModel.updateRow(tableRowModel);
    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      })
    this.userGroupForm.reset();
  }
}
