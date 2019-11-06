import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TableModel } from './table.model';
import { TableRowModel } from './table-row.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DialogModel } from '../dialog/dialog.model';
import { TableHeaderModel } from './table-header.model';
import { TableRowActionModel } from './table-row-action.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() tableModel: TableModel;

  @Output() onDelete: EventEmitter<TableRowModel> = new EventEmitter();
  @Output() onUpdate: EventEmitter<TableRowModel> = new EventEmitter();
  @Output() onSort: EventEmitter<TableHeaderModel> = new EventEmitter();
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
    if (row instanceof TableRowModel) {
      this.onDelete.emit(row);
    }
  }

  onConfirmDelete() {
    this.dialog.doConfirm();

  }

  onModifiersRow(row: TableRowModel) {
    if (row instanceof TableRowModel) {
      this.onUpdate.emit(row);
    }
  }

  onSortRows(column: TableHeaderModel) {
    if (column instanceof TableHeaderModel) {
      this.onSort.emit(column);
    }
  }

  onExtraActionRow(row: TableRowModel, action: TableRowActionModel) {
		if (action.callback) {
			action.callback(row);
		}
  }
}
