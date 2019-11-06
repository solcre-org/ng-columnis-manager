import { DataBaseModelInterface } from '../apiService/data-base-model.interface';
import { TableRowActionModel } from './table-row-action.model';

export class TableRowModel {
    constructor(
        public id?: number,
        public model?: DataBaseModelInterface,
        public data?: string[],
        public extraActions?: TableRowActionModel[]) 
        {}
}