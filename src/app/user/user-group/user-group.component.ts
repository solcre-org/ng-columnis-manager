import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserGroup } from './user-group.model';
import { TableModel } from 'src/app/share/table/table.model';
import { TableHeaderModel } from 'src/app/share/table/table-header.model';
import { TableRowModel } from 'src/app/share/table/table-row.model';
import { SimplePanelService } from 'src/app/share/simple-panel/simple-panel.service';
import { SimplePanelOptions } from 'src/app/share/simple-panel/simple-panel-options.model';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css'],
  providers: [SimplePanelService]
})
export class UserGroupComponent implements OnInit {

  tableModel: TableModel;
  simplePanelOptions: SimplePanelOptions;
  rowForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.tableModel = new TableModel([
      new TableHeaderModel('Id', 'id'),
      new TableHeaderModel('Nombre', 'name')
    ]);

    this.simplePanelOptions = new SimplePanelOptions(
      environment.userGroupsURI,
    );

    this.rowForm = this.formBuilder.group({
      'id': this.formBuilder.control(null, []),
      'name': this.formBuilder.control(null, [Validators.required]),
      'model': this.formBuilder.control(null, []),
    });
  }


  onParseRow(userGroup: UserGroup) {
    //Get each row from simple panel
    let groupToAdd: UserGroup = new UserGroup();
    //parse this row to UG
    groupToAdd.fromJSON(userGroup);

    let data: string[] = [groupToAdd.id.toString(), groupToAdd.name];
    let row: TableRowModel = new TableRowModel(groupToAdd.id, groupToAdd, data);
    this.tableModel.addRow(row);
  }

  onGetDataBaseModel(json: any): UserGroup {
    let groupToAdd: UserGroup = new UserGroup(null, json.name);
    return groupToAdd;
  }

  onBeforeUpdate(row: TableRowModel): void {
    let userGroup: UserGroup = row.model;
    //TODO: Patchvalue to form
    this.rowForm.patchValue({
    })
  }

  onParseFromInput(model: UserGroup): any {
    let userGroupToUpdate: UserGroup = model;
    userGroupToUpdate.id = this.rowForm.value.id;
    userGroupToUpdate.name = this.rowForm.value.name;

    return userGroupToUpdate;

  }

}
