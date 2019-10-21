import { TableHeaderModel } from './table-header.model';
import { TableRowModel } from './table-row.model';

export class TableModel {
    constructor(
        public header?: TableHeaderModel[],
        public body?: TableRowModel[]
    ){}
}