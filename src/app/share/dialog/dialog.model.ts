import { TableRowModel } from '../table/table-row.model';

export class DialogModel {
    constructor(
        public title?: string, 
        public message?: string,
        public confirmCallback?: Function
    ){}

    public doConfirm(row: TableRowModel) {
        if(this.confirmCallback){
            this.confirmCallback(row);
        }
    }


}