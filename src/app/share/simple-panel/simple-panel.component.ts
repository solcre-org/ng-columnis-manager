import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
import { TableSortEnum } from '../table/table-sort.enum';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'angular-2-local-storage';

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

  @Input() onParseRow: (row: any) => TableRowModel;

  //Functions to send to parent before update or add a row
  @Input() onGetDataBaseModel: (json: any) => DataBaseModelInterface;

  @Output() onExtraAction: EventEmitter<any> = new EventEmitter();

  //start apihalpager in currentpage = 1
  apiHalPagerModel: ApiHalPagerModel = new ApiHalPagerModel(1);

  currentSorting: any = {};
  currentKeySorting: string; // clicked column

  onShowForm: boolean = false;
  onShowSave: boolean = false;

  domainCode: string;

  constructor(
    private simplePanelService: SimplePanelService,
    private apiService: ApiService,
    private dialogService: DialogService,
    private loaderService: LoaderService,
    private translateService: TranslateService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    if (this.tableModel instanceof TableModel) {
      this.domainCode = this.localStorageService.get('code');
      this.onGetRows();
    }
  }

  onChangePage(page) {
    //Save the new page number 
    this.apiHalPagerModel.currentPage = page;
    this.tableModel.removeBody();
    this.loaderService.start();
    this.onGetRows();
  }

  onGetRows() {
    //set the query paramaters 
    let params: any = {};
    if (this.simplePanelOptions instanceof SimplePanelOptions) {
      this.tableModel.removeBody();
      if (this.currentKeySorting) {
        params = {
          page: this.apiHalPagerModel.currentPage,
          ["sort[" + this.currentKeySorting + "]"]: this.currentSorting[this.currentKeySorting]
        };
      } else {
        params = {
          page: this.apiHalPagerModel.currentPage
        };
      };

      this.apiService.fetchData(this.domainCode + this.simplePanelOptions.URI, params).subscribe((response: ApiResponseModel) => {
        if (response.hasCollectionResponse()) {
          this.apiHalPagerModel = response.pager;
          response.data.forEach((response: any) => {

            // Send each row to the corresponding model
            let row: TableRowModel = this.onParseRow(response);
            this.tableModel.addRow(row);
          });
          //BasicSort by name
          // this.basicSort();
        }
        this.loaderService.done();
      })
    }
  }

  onSave() {
    //if null -> is a new row
    if (this.rowForm.value.id == null) {
      this.onAdd(this.rowForm.value);
      //else is modified row
    } else {
      this.onUpdateRow(this.rowForm.value);
    }
  }

  onShowAdd() {
    this.onShowForm = true;
  }

  onHideForm() {
    //check if the user change the input values
    if (this.rowForm.dirty) {
      let warning: string;
      //get the translate message and save in let
      this.translateService.get('share.dialog.warning').subscribe(response => {
        warning = response;
      });
      this.dialogService.open(new DialogModel(warning, () => {
        this.rowForm.reset();
        this.onShowForm = false;
        this.onShowSave = false;
      }));
    } else {
      this.rowForm.reset();
      this.onShowForm = false;
      this.onShowSave = false;
    }
  }

  onAdd(model: any) {
    this.loaderService.start();
    let rowToAdd: DataBaseModelInterface;
    if (model) {
      rowToAdd = this.onGetDataBaseModel(model);
    }
    if (rowToAdd) {
      let json: any = rowToAdd.toJSON();
      this.apiService.createObj(this.domainCode + this.simplePanelOptions.URI, json).subscribe((response: ApiResponseModel) => {
        if (response.hasSingleResponse()) {
          let row: TableRowModel = this.onParseRow(response.data);
          this.tableModel.addRow(row);
          this.onShowForm = false;
        }
        this.loaderService.done();
      },
        (error: HttpErrorResponse) => {
          this.dialogService.open(new DialogModel(error.error.detail));
          this.loaderService.done();
        });
    }
    this.rowForm.reset();
  }

  onUpdate(row: TableRowModel) {
    this.onShowForm = true;
    this.onShowSave = true;
    //parse the fields to input.
    if (row instanceof TableRowModel) {
      this.rowForm.patchValue(row.model);
    }
  }

  onUpdateRow(model: any) {
    this.loaderService.start();
    let rowToAdd: DataBaseModelInterface;
    //Parse inputs value to model to update
    if (model) {
      rowToAdd = this.onGetDataBaseModel(model);
    }
    if (rowToAdd) {
      let json: any = rowToAdd.toJSON();
      //save the model
      this.apiService.updateObj(this.domainCode + this.simplePanelOptions.URI, json).subscribe((response: any) => {
        if (response.hasSingleResponse()) {
          let newRow: TableRowModel = this.onParseRow(response.data);
          let row: TableRowModel = this.tableModel.findRow(model.id);
          if (row instanceof TableRowModel) {
            //update the data and model 
            row.data = newRow.data;
            row.model = newRow.model;
            this.tableModel.updateRow(row);
            this.onShowForm = false;
          }
        }
        this.loaderService.done();
      },
        (error: HttpErrorResponse) => {
          this.dialogService.open(new DialogModel(error.error.detail));
          this.loaderService.done();
        })
    }
    this.rowForm.reset();
    this.loaderService.done();
  }

  onDelete(row: TableRowModel) {
    //Open dialog
    if (row instanceof TableRowModel) {
      let message: string;
      //get the translate message and save in let
      this.translateService.get('share.dialog.message').subscribe(response => {
        message = response;
      });
      this.loaderService.start();
      //row.data[1] is the name 
      this.dialogService.open(new DialogModel(message + row.data[1] + "?", () => {
        //Delete the usergroup
        this.apiService.deleteObj(this.domainCode + this.simplePanelOptions.URI, row.id).subscribe((response: any) => {
          this.tableModel.removeRow(row.id);
          this.loaderService.done();
          this.onShowForm = false;

        },
          (error: HttpErrorResponse) => {
            this.dialogService.open(new DialogModel(error.error.detail));
            this.loaderService.done();
          }
        )
      }));
    }
  }

  onExtraActionClick(data: any) {
    this.onExtraAction.emit(data);
  }

  onSort(column: TableHeaderModel) {
    this.loaderService.start();
    const current: string = this.currentSorting[column.key];
    //Switch between states   
    if (!current) {
      this.currentSorting[column.key] = TableSortEnum.ASC;
      this.currentKeySorting = column.key
    } else if (current === TableSortEnum.ASC) {
      this.currentSorting[column.key] = TableSortEnum.DESC;
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