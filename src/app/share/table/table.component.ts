import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TableModel } from './table.model';
import { TableRowModel } from './table-row.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DialogModel } from '../dialog/dialog.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() tableModel: TableModel;

  @Output() onDelete: EventEmitter<TableRowModel> = new EventEmitter();
  @Output() onUpdate: EventEmitter<TableRowModel> = new EventEmitter();

  dialog: DialogModel;
  newRowForm: FormGroup;
  filteredStatus = '';
  updateGroupForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

  }


  onDeleteRow(row: TableRowModel) {
    this.onDelete.emit(row);
  }

  onConfirmDelete() {
    this.dialog.doConfirm();

  }

  onModifiersRow(row: TableRowModel) {
    this.onUpdate.emit(row);
  }

  onSortRows(column: TableRowModel){ 
    console.log(column);
  }

}
