import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TableModel } from './table.model';
import { TableRowModel } from './table-row.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() tableModel: TableModel;

  @Output() onDelete: EventEmitter<TableRowModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  onDeleteRow(row: any){
    console.log(row);

    this.onDelete.emit(row);
	}

}
