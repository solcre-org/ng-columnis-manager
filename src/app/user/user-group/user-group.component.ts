import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {
  user_groups = [];

  constructor(private httpClient: HttpClient, private authService: AuthService){ }


  ngOnInit() {
    this.getUserGroups();
  }

  getUserGroups() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'text/html; charset=UTF-8',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };

    this.httpClient.get(environment.apiURL + environment.user_groupsURI, httpOptions).subscribe(data => {
      for (let user_group in data['_embedded']['user_groups']) {
        // console.log(user_group);
        this.user_groups.push(data["_embedded"]['user_groups'][user_group]['grupo'])
      } 
      // console.log(data["_embedded"]['user_groups']); 

    });
  }

}
