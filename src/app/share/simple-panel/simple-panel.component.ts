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
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataBaseModelInterface } from '../apiService/data-base-model.interface';

@Component({
  selector: 'app-simple-panel',
  templateUrl: './simple-panel.component.html',
  styleUrls: ['./simple-panel.component.css']
})
export class SimplePanelComponent implements OnInit {

  @Input() tableModel: TableModel;
  @Input() simplePanelOptions: SimplePanelOptions;

  @Output() onParseRow: EventEmitter<any> = new EventEmitter();

  @Output() onParseNewRow: EventEmitter<TableRowModel> = new EventEmitter();

  @Input() rowForm: FormGroup;

  @Output() onSaveRow: EventEmitter<TableRowModel> = new EventEmitter();

  @Input() onGetDataBaseModel: (json: any) => DataBaseModelInterface;
  @Input() onBeforeUpdate: (row: TableRowModel) => void;
  @Input() onParseFromInput: (model: DataBaseModelInterface) => any;


  apiHalPagerModel: ApiHalPagerModel;
  currentPage: number = 1;

  constructor(
    private simplePanelService: SimplePanelService,
    private apiService: ApiService,
    private dialogService: DialogService,
    private loaderService: LoaderService

  ) { }

  ngOnInit() {
    this.onGetRows();
    this.simplePanelService.onAddRow.subscribe((tableRowModel: TableRowModel) => {
      //add Row on table
      this.onParseNewRow.emit(tableRowModel);

    })

    // this.simplePanelOptions.fromJSON("aa");

    // this.rowForm = this.formBuilder.group({
    //   'id': this.formBuilder.control(null, []),
    //   'name': this.formBuilder.control(null, [Validators.required]),
    //   'model': this.formBuilder.control(null, []),
    // });

    // this.simplePanelService.fetchData(new SimplePanelOptions(environment.userGroupsURI));
  }

  onChangePage(page) {
    this.currentPage = page;
    this.tableModel.removeBody();
    this.loaderService.start();
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
        this.loaderService.done();
        //BasicSort by name
        this.basicSort();
      }
    })
  }

  onSave() {
    if (this.rowForm.value.id == null) {
      let model: DataBaseModelInterface = this.onGetDataBaseModel(this.rowForm.value);
      this.onAdd(model);
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


  // transformJsonBeforeSend(value: any) {
  //   value.model.fromJSON();
  //   return value;
  // }


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

