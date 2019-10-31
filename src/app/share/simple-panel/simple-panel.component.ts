import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableModel } from '../table/table.model';
import { TableRowModel } from '../table/table-row.model';
import { SimplePanelService } from './simple-panel.service';
import { SimplePanelOptions } from './simple-panel-options.model';
import { ApiResponseModel } from '../apiService/api-response.model';
import { ApiService } from '../apiService/api.service';
import { DialogService } from '../dialog/dialog.service';
import { DialogModel } from '../dialog/dialog.model';
import { LoaderService } from '../loader/loader.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiHalPagerModel } from '../apiService/api-hal-pager.model';
import { FormGroup } from '@angular/forms';
import { DataBaseModelInterface } from '../apiService/data-base-model.interface';
import { TableHeaderModel } from '../table/table-header.model';

@Component({
  selector: 'app-simple-panel',
  templateUrl: './simple-panel.component.html',
  styleUrls: ['./simple-panel.component.css'],
  providers: [DialogService]
})
export class SimplePanelComponent implements OnInit {

  @Input() tableModel: TableModel;
  @Input() simplePanelOptions: SimplePanelOptions;
  @Input() rowForm: FormGroup;

  @Output() onParseRow: EventEmitter<any> = new EventEmitter();

  //Functions to send to parent before update or add a row
  @Input() onGetDataBaseModel: (json: any) => DataBaseModelInterface;
  @Input() onBeforeUpdate: (row: TableRowModel) => void;
  @Input() onParseFromInput: (model: DataBaseModelInterface) => any;


  apiHalPagerModel: ApiHalPagerModel;
  currentPage: number = 1;

  currentSorting: any = {};
  currentKeySorting: string; // clicked column

  constructor(
    private simplePanelService: SimplePanelService,
    private apiService: ApiService,
    private dialogService: DialogService,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.onGetRows();
  }

  onChangePage(page) {
    this.currentPage = page;
    this.tableModel.removeBody();
    this.loaderService.start();
    this.onGetRows();
  }

  onGetRows() {
    this.tableModel.removeBody();
    //set the query paramaters 
    let params: any = {};
    if (this.currentKeySorting) {
      params = {
        page: this.currentPage,
        ["sort[" + this.currentKeySorting + "]"]: this.currentSorting[this.currentKeySorting]
      };
    } else {
      params = { page: this.currentPage };
    };

    console.log(params);
    this.apiService.fetchData(this.simplePanelOptions.URI, params).subscribe((response: ApiResponseModel) => {
      if (response.hasCollectionResponse()) {
        this.apiHalPagerModel = response.pager;
        response.data.forEach((element: any) => {
          // Send each row to the corresponding model
          this.onParseRow.emit(element);
        });
        this.loaderService.done();
        //BasicSort by name
        this.basicSort();
      }
    })
  }

  onSave() {
    //if null -> is a new row
    if (this.rowForm.value.id == null) {
      let model: DataBaseModelInterface = this.onGetDataBaseModel(this.rowForm.value);
      this.onAdd(model);
      //else is modified row
    } else {
      this.onUpdateRow(this.rowForm.value.model);
    }

  }

  onAdd(model: DataBaseModelInterface) {
    this.loaderService.start();
    let json = model.toJSON();
    this.apiService.createObj(this.simplePanelOptions.URI, json).subscribe((response: ApiResponseModel) => {
      this.onParseRow.emit(response.data);
      this.loaderService.done();
    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
        this.loaderService.done();
      });
    this.rowForm.reset();
  }



  onUpdate(row: TableRowModel) {
    this.onBeforeUpdate(row);
  }

  onUpdateRow(model: DataBaseModelInterface) {
    this.loaderService.start();
    //Parse inputs value to model to update
    let rowToAdd = this.onParseFromInput(model);
    const id: number = model.getId();
    let json = rowToAdd.toJSON();
    this.apiService.updateObj(this.simplePanelOptions.URI, json).subscribe((response: any) => {

      //Add each field from the model to data[]
      let data: string[] = [];
      for (let field in rowToAdd) {
        data.push(rowToAdd[field]);
      }

      let tableRowModel: TableRowModel = new TableRowModel(id, response.data, data)
      this.tableModel.updateRow(tableRowModel);
      this.loaderService.done();
    },
      (error: HttpErrorResponse) => {
        console.log(error['error']);
        this.loaderService.done();

      })
    this.rowForm.reset();
  }

  onDelete(row: TableRowModel) {
    //Open dialog
    this.dialogService.open(new DialogModel("", "¿Estás seguro que deseas borrar el ítem: " + row.data[1] + "?", () => {
      this.loaderService.start();
      //Delete the usergroup
      this.apiService.deleteObj(this.simplePanelOptions.URI, row.id).subscribe((data: any) => {
        this.tableModel.removeRow(row.id);
        this.loaderService.done();
      },
        (error: HttpErrorResponse) => {
          console.log(error['error']);
          this.loaderService.done();
        }
      )
    }));

  }

  onSort(column: TableHeaderModel) {
    this.loaderService.start();
    const current: string = this.currentSorting[column.key];

    //Switch between states   
    if (!current) {
      this.currentSorting[column.key] = "ASC";
      this.currentKeySorting = column.key
    } else if (current === 'ASC') {
      this.currentSorting[column.key] = "DESC";
      this.currentKeySorting = column.key
    } else {
      delete this.currentSorting[column.key];
      this.currentKeySorting = null;
    }
    console.log(this.currentSorting);
    this.onGetRows();

  }

  basicSort() { //Sorting without api request
    for (let row in this.tableModel.body) {
      for (let rowToComprare in this.tableModel.body) {
        let compare = this.compare(this.tableModel.body[row].data[1], this.tableModel.body[rowToComprare].data[1], true);
        if (compare == -1) {
          let temp = this.tableModel.body[row];
          this.tableModel.body[row] = this.tableModel.body[rowToComprare];
          this.tableModel.body[rowToComprare] = temp;
        }
      }
    }
  }

  compare(a: string, b: string, isAsc: boolean) {
    a = a.toUpperCase();
    b = b.toUpperCase();
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}

