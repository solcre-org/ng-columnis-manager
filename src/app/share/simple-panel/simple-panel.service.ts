import { Injectable, EventEmitter } from '@angular/core';
import { ApiService } from '../apiService/api.service';
import { ApiResponseModel } from '../apiService/api-response.model';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { SimplePanelModel } from './simple-panel.model';
import { UserGroup } from 'src/app/user/user-group/user-group.model';
import { stringify } from '@angular/compiler/src/util';
import { TableRowModel } from '../table/table-row.model';
import { TableModel } from '../table/table.model';
import { TableHeaderModel } from '../table/table-header.model';
import { Observable } from 'rxjs';

export class SimplePanelService {
  public onGet: EventEmitter<SimplePanelModel> = new EventEmitter();
  tableModel: TableModel;
  headers: TableHeaderModel[] = [];
  body: TableRowModel[] = [];

    constructor(
        private apiService: ApiService
    ){}

	public fetchData(model?: SimplePanelModel){
       this.apiService.fetchData(model.URI).subscribe((response: ApiResponseModel) => {
        console.log(response);
        let array_data = response.data;
        console.log(array_data);
      for (let user_group in array_data) {
        let groupToAdd: UserGroup = new UserGroup();
        groupToAdd.fromJSON(array_data[user_group]);
        let header_1: TableHeaderModel = new TableHeaderModel('Id', 'id');
        let header_2: TableHeaderModel = new TableHeaderModel('Nombre', 'name');
        this.headers = [header_1, header_2];
       
        let data: string[] = [stringify(groupToAdd.id), groupToAdd.name];
        let body_temp: TableRowModel = new TableRowModel(groupToAdd.id, groupToAdd, data);
        this.body.push(body_temp);
  
    
    
    // return this.apiService.fetchData(model.URI);
      }
})}


    // public get(model: SimplePanelModel): TableModel {
    //   this.apiService.fetchData(model.URI).subscribe((response: ApiResponseModel) => {
    //     console.log(response);
    //     let array_data = response.data;
    //     console.log(array_data);
    //   for (let user_group in array_data) {
    //     let groupToAdd: UserGroup = new UserGroup();
    //     groupToAdd.fromJSON(array_data[user_group]);
    //     let header_1: TableHeaderModel = new TableHeaderModel('Id', 'id');
    //     let header_2: TableHeaderModel = new TableHeaderModel('Nombre', 'name');
    //     this.headers = [header_1, header_2];
       
    //     let data: string[] = [stringify(groupToAdd.id), groupToAdd.name];
    //     let body_temp: TableRowModel = new TableRowModel(groupToAdd.id, groupToAdd, data);
    //     this.body.push(body_temp);
  
    
    //   }
    //   this.tableModel = new TableModel(this.headers, this.body);
    //   console.log(this.tableModel);
    //   return this.tableModel;
    //   }, 
    //     (error: HttpErrorResponse) => {
    //       console.log(error['error']);

    //     })
      
    // }

}