import { DataBaseModelInterface } from '../apiService/data-base-model.interface';

export class TableRowModel {
    constructor(
        public id?: number,
        public model?: DataBaseModelInterface,
        public data?: string[]
    ) { }
}