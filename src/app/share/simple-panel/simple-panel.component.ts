import { Component, OnInit, Input } from '@angular/core';
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

  //start apihalpager in currentpage = 1
  apiHalPagerModel: ApiHalPagerModel = new ApiHalPagerModel(1);

  currentSorting: any = {};
  currentKeySorting: string; // clicked column

  onShow: boolean = false;

  constructor(
    private simplePanelService: SimplePanelService,
    private apiService: ApiService,
    private dialogService: DialogService,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    if (this.tableModel instanceof TableModel) {
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

      this.apiService.fetchData(this.simplePanelOptions.URI, params).subscribe((response: ApiResponseModel) => {
        if (response.hasCollectionResponse()) {
          this.apiHalPagerModel = response.pager;
          response.data.forEach((data: any) => {
            // Send each row to the corresponding model
            let row: TableRowModel = this.onParseRow(data);
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
    this.onShow = true;
  }

  onAdd(model: any) {
    this.loaderService.start();
    let rowToAdd: DataBaseModelInterface;
    if (model) {
      rowToAdd = this.onGetDataBaseModel(model);
    }
    if (rowToAdd) {
      let json: any = rowToAdd.toJSON();
      this.apiService.createObj(this.simplePanelOptions.URI, json).subscribe((response: ApiResponseModel) => {
        if (response.hasSingleResponse()) {
          let row: TableRowModel = this.onParseRow(response.data);
          this.tableModel.addRow(row);
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
      this.apiService.updateObj(this.simplePanelOptions.URI, json).subscribe((response: any) => {
        if (response.hasSingleResponse()) {
          let newRow: TableRowModel = this.onParseRow(response.data);
          let row: TableRowModel = this.tableModel.findRow(model.id);
          if (row instanceof TableRowModel) {
            //update the data and model 
            row.data = newRow.data;
            row.model = newRow.model;
            this.tableModel.updateRow(row);
          }
        }
        this.loaderService.done();
      },
        (error: HttpErrorResponse) => {
          this.dialogService.open(new DialogModel(error.error.detail));
          this.loaderService.done();
        })
    }
    this.loaderService.done();
    this.rowForm.reset();
  }

  onDelete(row: TableRowModel) {
    //Open dialog
    if (row instanceof TableRowModel) {
      this.dialogService.open(new DialogModel("¿Estás seguro que deseas borrar el ítem: " + row.data[1] + "?", () => {
        this.loaderService.start();
        //Delete the usergroup
        this.apiService.deleteObj(this.simplePanelOptions.URI, row.id).subscribe((data: any) => {
          this.tableModel.removeRow(row.id);
          this.loaderService.done();
        },
          (error: HttpErrorResponse) => {
            this.dialogService.open(new DialogModel(error.error.detail));
            this.loaderService.done();
          }
        )
      }));
    }
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