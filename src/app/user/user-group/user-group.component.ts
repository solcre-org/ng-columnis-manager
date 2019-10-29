import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserGroup } from './user-group.model';
import { ApiService } from 'src/app/share/apiService/api.service';
import { ApiResponseModel } from 'src/app/share/apiService/api-response.model';
import { ApiHalPagerModel } from 'src/app/share/apiService/api-hal-pager.model';
import { TableModel } from 'src/app/share/table/table.model';
import { TableHeaderModel } from 'src/app/share/table/table-header.model';
import { TableRowModel } from 'src/app/share/table/table-row.model';
import { stringify } from '@angular/compiler/src/util';
import { DialogService } from 'src/app/share/dialog/dialog.service';
import { LoaderService } from 'src/app/share/loader/loader.service';
import { SimplePanelService } from 'src/app/share/simple-panel/simple-panel.service';
import { SimplePanelOptions } from 'src/app/share/simple-panel/simple-panel.model';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css'],
  providers: [DialogService, SimplePanelService]
})
export class UserGroupComponent implements OnInit {

  tableModel: TableModel;
  simplePanelOptions: SimplePanelOptions;

  constructor(
    private apiService: ApiService,
    private simplePanelService: SimplePanelService,

    private dialogService: DialogService,
    private loaderService: LoaderService

  ) { }


  ngOnInit() {
    this.tableModel = new TableModel([
      new TableHeaderModel('Id', 'id'),
      new TableHeaderModel('Nombre', 'name')
    ]);

    this.simplePanelOptions = new SimplePanelOptions(
      environment.userGroupsURI
    );
    // this.getUserGroups(1, 'name');
    // this.userGroupForm = this.formBuilder.group({
    //   'id': this.formBuilder.control(null, []),
    //   'name': this.formBuilder.control(null, [Validators.required]),
    //   'model': this.formBuilder.control(null, []),
    // });
  }

  onLoad() {
    this.loaderService.open();
  }

  // onChangePage(page) {
  //   this.loaderService.open();
  //   this.tableModel.removeBody();
  //   this.getUserGroups(page, 'name');

  // }

  onParseRow(userGroup: UserGroup) {
    //Get each row from simple panel
    let groupToAdd: UserGroup = new UserGroup();
    //parse this row to UG
    groupToAdd.fromJSON(userGroup);

    let data: string[] = [ groupToAdd.id.toString(), groupToAdd.name ];
    let row: TableRowModel = new TableRowModel(groupToAdd.id, groupToAdd, data);
    this.tableModel.addRow(row);
  }

  // getUserGroups(current_page, key) {
  //   this.body = [];
  //   this.apiService.fetchData(environment.userGroupsURI, { page: current_page }).subscribe((response: ApiResponseModel) => {
  //     const array_data = response.data;
  //     this.apiHalPagerModel = response.pager;
  //     for (let user_group in array_data) {
  //       let groupToAdd: UserGroup = new UserGroup();
  //       groupToAdd.fromJSON(array_data[user_group]);
  //       let data: string[] = [stringify(groupToAdd.id), groupToAdd.name];
  //       let body_temp: TableRowModel = new TableRowModel(groupToAdd.id, groupToAdd, data);
  //       this.body.push(body_temp);
  //     }
  //     this.tableModel = new TableModel(this.headers, this.body);
  //     this.simplePanelOptions = new SimplePanelOptions(environment.userGroupsURI);
  //     this.loaderService.close();
  //   },
  //     (error: HttpErrorResponse) => {
  //       console.log(error['error']);
  //       this.loaderService.close();
  //     })
  // }

  basicSort() { //Sorting without api request
    for (let group in this.tableModel.body) {
      for (let groupToComprare in this.tableModel.body) {
        let compare = this.compare(this.tableModel.body[group].data[1], this.tableModel.body[groupToComprare].data[1], true);
        if (compare == -1) {
          let temp = this.tableModel.body[group];
          this.tableModel.body[group] = this.tableModel.body[groupToComprare];
          this.tableModel.body[groupToComprare] = temp;
        }
      }
    }
  }

  compare(a: string, b: string, isAsc: boolean) {
    a = a.toUpperCase();
    b = b.toUpperCase();
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  onSort(column: TableHeaderModel) {
    let key: string = column.key;
    console.log(key);
    // this.getUserGroups(1, key);
  }

  // onSave() {
  //   if (this.userGroupForm.value.id == null) {
  //     this.onAddGroup();
  //   } else {
  //     let group = this.userGroupForm.value.model;
  //     this.onUpdateGroup(group);
  //   }
  // }

  onAddRow(name: string) {
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
    //this.userGroupForm.reset();
  }

  // onDelete(row: TableRowModel) {

  //   //Open dialog
  //   this.dialogService.open(new DialogModel("Titulo", "Estas seguro que desea eliminar el item: " + row.data[1] + "?", () => {
  //     this.loaderService.open();
  //     //Delete the usergroup
  //     this.apiService.deleteObj(environment.userGroupsURI, row.id).subscribe((data: any) => {
  //       this.loaderService.close();
  //       this.tableModel.removeRow(row.id);
  //     },
  //       (error: HttpErrorResponse) => {
  //         this.loaderService.close();
  //         console.log(error['error']);
  //       }
  //     )
  //   }));

  // }



  onUpdate(row: TableRowModel) {
    let value: UserGroup = row.model;

    //TODO: Patchvalue to form
    /*this.userGroupForm.patchValue({
      "id": value.id,
      "name": value.name,
      "model": value
    })*/
  }

  onUpdateGroup(group: UserGroup) {
   /* const id = group.id;
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
    this.userGroupForm.reset();*/
  }
}
