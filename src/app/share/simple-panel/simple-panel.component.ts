import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableModel } from '../table/table.model';
import { TableRowModel } from '../table/table-row.model';
import { TableHeaderModel } from '../table/table-header.model';
import { SimplePanelService } from './simple-panel.service';
import { SimplePanelOptions } from './simple-panel.model';
import { ApiResponseModel } from '../apiService/api-response.model';
import { environment } from 'src/environments/environment';
import { ApiService } from '../apiService/api.service';
import { UserGroup } from 'src/app/user/user-group/user-group.model';
import { DialogService } from '../dialog/dialog.service';
import { DialogModel } from '../dialog/dialog.model';
import { LoaderService } from '../loader/loader.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiHalPagerModel } from '../apiService/api-hal-pager.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-panel',
  templateUrl: './simple-panel.component.html',
  styleUrls: ['./simple-panel.component.css']
})
export class SimplePanelComponent implements OnInit {

  @Input() tableModel: TableModel;
  @Input() simplePanelOptions: SimplePanelOptions;

  @Output() onParseRow: EventEmitter<any> = new EventEmitter();




  /*
  @Output() onAddRow: EventEmitter<TableRowModel> = new EventEmitter();
  @Output() onDeleteRow: EventEmitter<TableRowModel> = new EventEmitter();
  @Output() onUpdateRow: EventEmitter<TableRowModel> = new EventEmitter();
  @Output() onSort: EventEmitter<TableHeaderModel> = new EventEmitter();
  */

  //model: SimplePanelOptions;
  rowForm: FormGroup;
  apiHalPagerModel: ApiHalPagerModel;
  currentPage: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private simplePanelService: SimplePanelService,
    private apiService: ApiService,
    private dialogService: DialogService,
    private loaderService: LoaderService

  ) { }

  ngOnInit() {
    this.onGetRows();

    //this.simplePanelOptions.fromJSON("aa");

    this.rowForm = this.formBuilder.group({
      'id': this.formBuilder.control(null, []),
      'name': this.formBuilder.control(null, [Validators.required]),
      'model': this.formBuilder.control(null, []),
    });
    // this.simplePanelService.fetchData(new SimplePanelOptions(environment.userGroupsURI));
  }

  onChangePage(page) {
    this.currentPage = page;
    this.tableModel.removeBody();
    this.loaderService.open();
    this.onGetRows();
    // this.tableModel.removeBody();
  }

  onGetRows() {
    this.apiService.fetchData(this.simplePanelOptions.URI, { page: this.currentPage }).subscribe((response: ApiResponseModel) => {
      if (response.hasCollectionResponse()) {
        this.apiHalPagerModel = response.pager;

        response.data.forEach((element: any) => {
          // Send each row to the corresponding model
          this.onParseRow.emit(element);
        });
        this.loaderService.close();

      }
    })
  }

  /*onSave() {
    if (this.rowForm.value.id == null) {
      this.onAdd();
    } else {
      let row = this.rowForm.value.model;
      // this.onUpdateRow.emit(row);
    }
  }

  onAdd() {
    this.onAddRow.emit(this.rowForm.value.name);
  }

  onUpdate(row: TableRowModel) {
    let value: any = row.model;
    console.log(value);

    //TODO: Patchvalue to form
    this.rowForm.patchValue({
      "id": value.id,
      "name": value.name,
      "model": value
    })
  }
  onDelete(row: TableRowModel) {
    //Open dialog
    this.dialogService.open(new DialogModel("Titulo", "Estas seguro que desea eliminar el item: " + row.data[1] + "?", () => {
      this.loaderService.open();
      //Delete the usergroup
      this.apiService.deleteObj(environment.userGroupsURI, row.id).subscribe((data: any) => {
        this.loaderService.close();
        this.tableModel.removeRow(row.id);
      },
        (error: HttpErrorResponse) => {
          this.loaderService.close();
          console.log(error['error']);
        }
      )
    }));

  }*/



}

