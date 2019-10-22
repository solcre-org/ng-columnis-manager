import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TableModel } from './table.model';
import { TableRowModel } from './table-row.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() tableModel: TableModel;

  @Output() onDelete: EventEmitter<TableRowModel> = new EventEmitter();

  newRowForm: FormGroup;
  filteredStatus = '';
  updateGroupForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

  }

  // onAddRow() { 
  //   let name = this.newRowForm.value.name;
  //   this.onAdd.emit(row);
  // }

  onDeleteRow(row: any) {
    this.onDelete.emit(row);
    this.tableModel.removeRow(row);
  }

  onModifiersRow(row: any) {
    console.log(row);
  }


}
