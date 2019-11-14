import { Component, OnInit } from '@angular/core';
import { Permission } from './permission.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { TableHeaderModel } from 'src/app/shared/table/table-header.model';
import { TableModel } from 'src/app/shared/table/table.model';
import { TableRowModel } from 'src/app/shared/table/table-row.model';
import { SimplePanelOptions } from 'src/app/shared/simple-panel/simple-panel-options.model';
import { SimplePanelService } from 'src/app/shared/simple-panel/simple-panel.service';
import { TableRowActionModel } from 'src/app/shared/table/table-row-action.model';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css'],
  providers: [SimplePanelService]
})
export class PermissionComponent implements OnInit {

  tableModel: TableModel;
  simplePanelOptions: SimplePanelOptions;
  primaryForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.tableModel = new TableModel("users.permission.title", [
      new TableHeaderModel('Id', 'id'),
      new TableHeaderModel('users.headers.name', 'name'),
      new TableHeaderModel('users.headers.description', 'description')]);

    this.simplePanelOptions = new SimplePanelOptions(
      environment.permissionsURI,
    );
    //setup the form
    this.primaryForm = this.formBuilder.group({
      'id': this.formBuilder.control(null, []),
      'name': this.formBuilder.control(null, [Validators.required]),
      'description': this.formBuilder.control(null, [])
    });
  }

  onParseRow(permission: any): TableRowModel {
    //Get each row from simple panel
    let permissionToAdd: Permission = new Permission();
    //parse this row to Permission
    permissionToAdd.fromJSON(permission);
    let data: string[] = [permissionToAdd.id.toString(), permissionToAdd.name, permissionToAdd.description];

    //Declare the extra actions 
    let extraActions: TableRowActionModel[] = [
      new TableRowActionModel("highlight", "Destacar"),
      new TableRowActionModel("double", "Duplicar")
    ];

    let row: TableRowModel = new TableRowModel(
      permissionToAdd.id,
      permissionToAdd,
      data,
      extraActions
    );
    return row;
  }

  onGetDataBaseModel(json: any): Permission {
    //return the specific model with attributes
    let permissionToAdd: Permission = new Permission(json.id, json.name, json.description);
    return permissionToAdd;
  }

  //Declare the functions of the actions
  onExtraAction(data: any) {
    switch (data.key) {
      case "highlight": {
        console.log(data.key);
      }
      case "double": {
        console.log(data.key);
        this.tableModel.addRow(data.row);
      }
    }
  }
}