import { Component, OnInit, Input } from '@angular/core';
import { TableModel } from '../table/table.model';
import { ApiService } from '../apiService/api.service';
import { environment } from 'src/environments/environment';
import { ApiHalPagerModel } from '../apiService/api-hal-pager.model';
import { UserGroup } from 'src/app/user/user-group/user-group.model';

@Component({
  selector: 'app-simple-panel',
  templateUrl: './simple-panel.component.html',
  styleUrls: ['./simple-panel.component.css']
})
export class SimplePanelComponent implements OnInit {

  @Input() options: any;
  @Input() tableModel: TableModel;
  
  apiHalPagerModel: ApiHalPagerModel;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    
  }



}
