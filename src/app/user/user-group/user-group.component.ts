import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserGroup } from './user-group.model';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {
  user_groups: UserGroup[] = [];

  newGroupForm: FormGroup;
  updateGroupForm: FormGroup;

  constructor(
    private httpClient: HttpClient, 
    private authService: AuthService,
    private formBuilder: FormBuilder
    ){ }


  ngOnInit() {
    this.getUserGroups();
    console.log(this.authService.getAccessToken());
    this.newGroupForm = this.formBuilder.group({
      'newGroup' : this.formBuilder.control(null, [Validators.required])
    });
    this.updateGroupForm = this.formBuilder.group({
      'updateGroup' : this.formBuilder.control(null, [Validators.required])
    })
  }

 

  getUserGroups() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'text/html; charset=UTF-8',
        'Authorization': 'Bearer ' + this.authService.getAccessToken()
      })
    };

    this.httpClient.get(environment.apiURL + environment.user_groupsURI, httpOptions).subscribe((data: any) => {
      console.log(data);
      for (let user_group in data['_embedded']['user_groups']) {

        let id = data["_embedded"]['user_groups'][user_group]['id'];
        let name = data["_embedded"]['user_groups'][user_group]['grupo'];        
        let temp : UserGroup = {id, name};
        this.user_groups.push(temp);

      }
      console.log(this.user_groups);

      // console.log(data["_embedded"]['user_groups']); 

    }), (error: HttpErrorResponse)  => {
      console.log(error)
    };;
  }

  onAddGroup(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json;charset=UTF-8',
        'Authorization': 'Bearer ' + this.authService.getAccessToken(),
      })
    };
    this.httpClient.post(environment.apiURL + environment.user_groupsURI, {'grupo': this.newGroupForm.value.newGroup} ,  httpOptions ).subscribe((data: any) => {
      console.log(data);
      const name = data['grupo'];
      const id = data['id'];

      let temp : UserGroup = {id, name};
      this.user_groups.push(temp);

    }, 
    (error: HttpErrorResponse) => {
      console.log(error['error']);
    })
    this.newGroupForm.reset();
  }

  onDeleteGroup(group: UserGroup){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.authService.getAccessToken(),
      })
    };
      this.httpClient.delete(environment.apiURL + environment.user_groupsURI + '/' + group.id + '?' ,  httpOptions ).subscribe((data:any) => {
      console.log(data);
      const index = this.user_groups.indexOf(group);
      console.log(this.user_groups.splice(index, 1));

    }, 
    (error: HttpErrorResponse) => {
      console.log(error['error']);
    }
    )
  }

  onUpdateGroup(group: UserGroup) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.authService.getAccessToken(),
      })
    };
    this.httpClient.put(environment.apiURL + environment.user_groupsURI + '/' + group.id + '?' , {"grupo": this.updateGroupForm.value.updateGroup} ,httpOptions ).subscribe((data:any) => {
      console.log(data);

      const index = this.user_groups.indexOf(group);
      this.user_groups[index].name = this.updateGroupForm.value.updateGroup;
      this.updateGroupForm.reset();

    }, 
    (error: HttpErrorResponse) => {
      console.log(error['error']);
    })

  }

}
