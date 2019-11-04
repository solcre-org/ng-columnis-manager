import { Component, OnInit } from '@angular/core';
import { SimplePanelService } from 'src/app/share/simple-panel/simple-panel.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableModel } from 'src/app/share/table/table.model';
import { SimplePanelOptions } from 'src/app/share/simple-panel/simple-panel-options.model';
import { TableHeaderModel } from 'src/app/share/table/table-header.model';
import { environment } from 'src/environments/environment';
import { TableRowModel } from 'src/app/share/table/table-row.model';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [SimplePanelService]
})
export class UserComponent implements OnInit {

  tableModel: TableModel;
  simplePanelOptions: SimplePanelOptions;
  rowForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.tableModel = new TableModel([
      new TableHeaderModel('Id', 'id'),
      new TableHeaderModel('Email', 'email'),
      new TableHeaderModel('Usuario', 'user'),
      new TableHeaderModel('Nombre', 'fullName'),
      new TableHeaderModel('Apellido', 'fullName'),

    ]);

    this.simplePanelOptions = new SimplePanelOptions(
      environment.usersURI,
    );

    this.rowForm = this.formBuilder.group({
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
