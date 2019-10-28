import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableModel } from '../table/table.model';
import { TableRowModel } from '../table/table-row.model';
import { TableHeaderModel } from '../table/table-header.model';
import { SimplePanelService } from './simple-panel.service';
import { environment } from 'src/environments/environment.prod';
import { SimplePanelModel } from './simple-panel.model';

@Component({
  selector: 'app-simple-panel',
  templateUrl: './simple-panel.component.html',
  styleUrls: ['./simple-panel.component.css']
})
export class SimplePanelComponent implements OnInit {

  @Input() simplePanelModel: SimplePanelModel;
  @Input() tableModel: TableModel;

  @Output() onParseRow: EventEmitter<any> = new EventEmitter();

  @Output() onDeleteRow: EventEmitter<TableRowModel> = new EventEmitter();
  @Output() onUpdate: EventEmitter<TableRowModel> = new EventEmitter();
  @Output() onSort: EventEmitter<TableHeaderModel> = new EventEmitter();
  model: SimplePanelModel;


  constructor(
    private simplePanelService: SimplePanelService
  ) { }

  ngOnInit() {
    // this.simplePanelService.fetchData(this.simplePanelModel.URI).subscribe();
    // array.forEach(element => {
      
    // });
  }


}

