import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserGroup } from './user-group.model';
import { ApiService } from 'src/app/share/apiService/api.service';
import { ApiResponseModel } from 'src/app/share/apiService/api-response.model';
import { ApiHalPagerModel } from 'src/app/share/apiService/api-hal-pager.model';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {
  user_groups: UserGroup[] = [];

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
      }
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
      const groupToAdd: UserGroup = new UserGroup ();
      groupToAdd.fromJSON(response.data);
      this.user_groups.push(groupToAdd);
    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      });
    this.newGroupForm.reset();
  }


  onDeleteGroup(group: UserGroup) {

    this.apiService.deleteObj(environment.user_groupsURI, group.id).subscribe((data: any) => {
      const index = this.user_groups.indexOf(group);
      this.user_groups.splice(index, 1);

    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      }
    )
  }

  onUpdateGroup(group: UserGroup) {
    const id = group.id;
    const name = this.updateGroupForm.value.updateGroup;
    let groupToUpdate: UserGroup = new UserGroup( id, name );
    let json = group.toJSON(groupToUpdate);
    this.apiService.updateObj(environment.user_groupsURI, json).subscribe((response: any) => {
      const index = this.user_groups.indexOf(group);
      this.user_groups[index].name = this.updateGroupForm.value.updateGroup;

    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      })

  }

}
