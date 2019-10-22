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

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {
  user_groups: UserGroup[] = [];

  tableModel: TableModel;
  headers: TableHeaderModel[] = [];
  body: TableRowModel[] = [];

  apiHalPagerModel: ApiHalPagerModel;
  newGroupForm: FormGroup;
  updateGroupForm: FormGroup;
  filteredStatus = '';
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private apiService: ApiService

  ) { }


  ngOnInit() {
    let header_1: TableHeaderModel = new TableHeaderModel('Id');
    let header_2: TableHeaderModel = new TableHeaderModel('Nombre');
    this.headers = [header_1, header_2];
    this.getUserGroups(1);
    console.log(this.authService.getAccessToken());
    this.newGroupForm = this.formBuilder.group({
      'newGroup': this.formBuilder.control(null, [Validators.required])
    });
    this.updateGroupForm = this.formBuilder.group({
      'updateGroup': this.formBuilder.control(null, [Validators.required])
    })
  }


  onChangePage(page) {
    this.user_groups = [];
    this.getUserGroups(page);
  }

  getUserGroups(current_page) {
    this.apiService.fetchData(environment.user_groupsURI, { page: current_page }).subscribe((response: ApiResponseModel) => {
      const array_data = response.data;
      this.apiHalPagerModel = response.pager;
      for (let user_group in array_data) {
        let groupToAdd: UserGroup = new UserGroup();
        groupToAdd.fromJSON(array_data[user_group]);
        this.user_groups.push(groupToAdd);


        let data: string[] = [stringify(groupToAdd.id), groupToAdd.name];
        let body_temp: TableRowModel = new TableRowModel(groupToAdd.id, data);
        this.body.push(body_temp);

      }

      this.tableModel = new TableModel(this.headers, this.body);

    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      })
  }

  onAddGroup() {
    let name = this.newGroupForm.value.newGroup;
    let groupToAdd: UserGroup = new UserGroup(null, name);
    let json = groupToAdd.toJSON(groupToAdd);
    this.apiService.createObj(environment.user_groupsURI, json).subscribe((response: ApiResponseModel) => {
      const groupToAdd: UserGroup = new UserGroup();
      groupToAdd.fromJSON(response.data);
      // this.user_groups.push(groupToAdd);
      let tableRowModel: TableRowModel = new TableRowModel(groupToAdd.id, [stringify(groupToAdd.id), groupToAdd.name])
      this.tableModel.addRow(tableRowModel);
    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      });
    // this.newGroupForm.reset();
  }

  onDelete(id: number) {
    this.apiService.deleteObj(environment.user_groupsURI, id).subscribe((data: any) => {
      this.tableModel.removeRow(id);
    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      }
    )
  }

  // onDeleteGroup(group: UserGroup) {

  //   this.apiService.deleteObj(environment.user_groupsURI, group.id).subscribe((data: any) => {
  //     const index = this.user_groups.indexOf(group);
  //     this.user_groups.splice(index, 1);

  //   },
  //     (error: HttpErrorResponse) => {
  //       console.log(error['error']);
  //     }
  //   )
  // }

  // onUpdateGroup(group: UserGroup) {
  //   const id = group.id;
  //   const name = this.updateGroupForm.value.updateGroup;
  //   let groupToUpdate: UserGroup = new UserGroup( id, name );
  //   let json = group.toJSON(groupToUpdate);
  //   this.apiService.updateObj(environment.user_groupsURI, json).subscribe((response: any) => {
  //     const index = this.user_groups.indexOf(group);
  //     this.user_groups[index].name = this.updateGroupForm.value.updateGroup;

  //   },
  //     (error: HttpErrorResponse) => {
  //       console.log(error['error']);
  //     })

  // }

}
