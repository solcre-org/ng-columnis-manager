import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {
  user_groups = {};
  user_groups_names = [];

  newGroupForm: FormGroup;
  updateGroupForm: FormGroup;

  constructor(
    private httpClient: HttpClient, 
    private authService: AuthService,
    private formBuilder: FormBuilder
    ){ }


  ngOnInit() {
    this.getUserGroups();
    console.log(this.authService.getToken());
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
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };

    this.httpClient.get(environment.apiURL + environment.user_groupsURI, httpOptions).subscribe((data: any) => {
      console.log(data);
      for (let user_group in data['_embedded']['user_groups']) {

        const id = data["_embedded"]['user_groups'][user_group]['id'];
        const name = data["_embedded"]['user_groups'][user_group]['grupo'];
        this.user_groups[name] = id;

        this.user_groups_names.push(name);
        

      }
      console.log(this.user_groups);

      // console.log(data["_embedded"]['user_groups']); 

    }), (error: HttpErrorResponse)  => {console.log(error)};;
  }

  onAddGroup(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json;charset=UTF-8',
        'Authorization': 'Bearer ' + this.authService.getToken(),
      })
    };
    this.httpClient.post(environment.apiURL + environment.user_groupsURI, {'grupo': this.newGroupForm.value.newGroup} ,  httpOptions ).subscribe((data: any) => {
      console.log(data);
      const name = data['grupo'];
      const id = data['id'];
      this.user_groups[name] = id;  
      this.user_groups_names.push(name);

    }, 
    (error: HttpErrorResponse) => {
      console.log(error['error']);
    })
    this.newGroupForm.reset();
  }

  onDeleteGroup(group){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken(),
      })
    };
    this.httpClient.delete(environment.apiURL + environment.user_groupsURI + '/' + this.user_groups[group] + '?' ,  httpOptions ).subscribe((data:any) => {
      console.log(data);

      this.user_groups[this.updateGroupForm.value.updateGroup] = this.user_groups[group];
      delete this.user_groups[group];
      const index = this.user_groups_names.indexOf(group);

      this.user_groups_names.splice(index, 1);
    }, 
    (error: HttpErrorResponse) => {
      console.log(error['error']);
    }
    )
  }

  onUpdateGroup(group) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken(),
      })
    };
    this.httpClient.put(environment.apiURL + environment.user_groupsURI + '/' + this.user_groups[group] + '?' , {"grupo": this.updateGroupForm.value.updateGroup} ,httpOptions ).subscribe((data:any) => {
      console.log(data);

      this.user_groups[this.updateGroupForm.value.updateGroup] = this.user_groups[group];
      delete this.user_groups[group];
      const index = this.user_groups_names.indexOf(group);
      this.user_groups_names[index] = this.updateGroupForm.value.updateGroup;
    }, 
    (error: HttpErrorResponse) => {
      console.log(error['error']);
    })
    // this.updateGroupForm.reset();

  }

}
