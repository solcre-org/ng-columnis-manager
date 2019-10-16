import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserGroup } from './user-group.model';
import { ApiService } from 'src/app/share/apiService/api.service';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {
  user_groups: UserGroup[] = [];

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



  getUserGroups(current_page) {
    this.apiService.fetchData(environment.user_groupsURI + '?page=' + current_page).subscribe((data: any) => {
      const array_data = data['data'];
      console.log(data);
      for (let user_group in array_data) {
        const id = array_data[user_group]['id'];
        const grupo = array_data[user_group]['grupo'];
        const groupToAdd: UserGroup = { id, grupo };
        this.user_groups.push(groupToAdd);
      }
    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      })
  }

  onAddGroup() {
    const grupo: string = this.newGroupForm.value.newGroup;
    const groupToAdd: any = { grupo };
    console.log(groupToAdd);
    this.apiService.createObj(environment.user_groupsURI, groupToAdd).subscribe((data: any) => {
      const grupo = data['data']['grupo'];
      const id = data['data']['id'];
      const groupToAdd: UserGroup = { id, grupo };
      this.user_groups.push(groupToAdd);
    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      })
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
    const grupo = this.updateGroupForm.value.updateGroup;
    const groupToUpdate: any = { id, grupo };
    console.log(groupToUpdate);
    this.apiService.updateObj(environment.user_groupsURI, groupToUpdate).subscribe((data: any) => {
      const index = this.user_groups.indexOf(group);
      this.user_groups[index].grupo = grupo;
      // this.updateGroupForm.reset();

    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
      })

  }

}
