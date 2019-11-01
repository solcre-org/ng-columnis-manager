import { Component, OnInit } from '@angular/core';
import { Permission } from './permission.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { TableHeaderModel } from 'src/app/share/table/table-header.model';
import { TableModel } from 'src/app/share/table/table.model';
import { TableRowModel } from 'src/app/share/table/table-row.model';
import { SimplePanelOptions } from 'src/app/share/simple-panel/simple-panel-options.model';
import { SimplePanelService } from 'src/app/share/simple-panel/simple-panel.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css'],
  providers: [SimplePanelService]

})
export class PermissionComponent implements OnInit {

  tableModel: TableModel;
  simplePanelOptions: SimplePanelOptions;
  rowForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.tableModel = new TableModel([
      new TableHeaderModel('Id', 'id'),
      new TableHeaderModel('Nombre', 'name'),
      new TableHeaderModel('Descripción', 'description')]);

    this.simplePanelOptions = new SimplePanelOptions(
      environment.permissionsURI,
    );

    this.rowForm = this.formBuilder.group({
      'id': this.formBuilder.control(null, []),
      'description': this.formBuilder.control(null, []),
      'name': this.formBuilder.control(null, [Validators.required]),
      'model': this.formBuilder.control(null, []),
    });

  }

  onParseRow(permission: Permission) {
    //Get each row from simple panel
    let permissionToAdd: Permission = new Permission();
    //parse this row to Permission
    permissionToAdd.fromJSON(permission);

    let data: string[] = [permissionToAdd.id.toString(), permissionToAdd.name, permissionToAdd.description];
    let row: TableRowModel = new TableRowModel(permissionToAdd.id, permissionToAdd, data);
    this.tableModel.addRow(row);
  }

  onGetDataBaseModel(json: any): Permission {
    let permissionToAdd: Permission = new Permission(null, json.name, json.description);
    return permissionToAdd;
  }

  onBeforeUpdate(row: TableRowModel): void {
    let permission: Permission = row.model;
    //TODO: Patchvalue to form
    this.rowForm.patchValue({
      "description": permission.description,
    })
  }

  onParseFromInput(model: Permission): any {
    let permissionToUpdate: Permission = model;
    permissionToUpdate.id = this.rowForm.value.id;
    permissionToUpdate.name = this.rowForm.value.name;
    permissionToUpdate.description = this.rowForm.value.description;

    return permissionToUpdate;

  }

}