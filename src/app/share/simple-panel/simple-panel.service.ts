import { Injectable, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../apiService/api.service';
import { ApiResponseModel } from '../apiService/api-response.model';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { SimplePanelOptions } from './simple-panel-options.model';
import { UserGroup } from 'src/app/user/user-group/user-group.model';
import { stringify } from '@angular/compiler/src/util';
import { TableRowModel } from '../table/table-row.model';
import { TableModel } from '../table/table.model';
import { TableHeaderModel } from '../table/table-header.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class SimplePanelService {

    tableModel: TableModel;
    public onAddRow: EventEmitter<TableRowModel> = new EventEmitter();


    constructor(
        private apiService: ApiService
    ) { }

    onAdd(tableRowModel: TableRowModel) {
        let json = tableRowModel.model.toJSON();
        // let row: any = tableRowModel.model;
        this.apiService.createObj(environment.userGroupsURI, json).subscribe((response: ApiResponseModel) => {
            tableRowModel.model.fromJSON(response.data);
            tableRowModel.id = tableRowModel.model.getId();
            tableRowModel.data[0] = tableRowModel.model.getId();
            console.log(tableRowModel);
            this.onAddRow.emit(tableRowModel);


            // let tableRowModel: TableRowModel = new TableRowModel(row.id, row, [stringify(row.id), row.name])
            //   this.tableModel.addRow(tableRowModel);
        },
            (error: HttpErrorResponse) => {
                console.log(error['error']);
            });

    }

    onSave(){
        console.log("save");
    }

}