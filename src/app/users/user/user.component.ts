import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableModel } from 'src/app/shared/table/table.model';
import { SimplePanelOptions } from 'src/app/shared/panel/simple-panel/simple-panel-options.model';
import { TableHeaderModel } from 'src/app/shared/table/table-header.model';
import { environment } from 'src/environments/environment';
import { TableRowModel } from 'src/app/shared/table/table-row.model';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: []
})
export class UserComponent implements OnInit {

  tableModel: TableModel;
  simplePanelOptions: SimplePanelOptions;
  primaryForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.tableModel = new TableModel("Usuarios", [
      new TableHeaderModel('Id', 'id'),
      new TableHeaderModel('Email', 'email'),
      new TableHeaderModel('Usuario', 'user'),
      new TableHeaderModel('Nombre', 'fullName'),
      new TableHeaderModel('Apellido', 'fullName'),

    ]);

    this.simplePanelOptions = new SimplePanelOptions(
      environment.usersURI,
    );

    this.primaryForm = this.formBuilder.group({
      'id': this.formBuilder.control(null, []),
      'user': this.formBuilder.control(null, [Validators.required])
    });
  }
  
  onParseRow(user: any): TableRowModel {
    //Get each row from simple panel
    let userToAdd: User = new User();
    //parse this row to Permission
    userToAdd.fromJSON(user);
    let data: string[] = [userToAdd.id.toString(), userToAdd.user];
    let row: TableRowModel = new TableRowModel(userToAdd.id, userToAdd, data);
    return row;
  }

}
