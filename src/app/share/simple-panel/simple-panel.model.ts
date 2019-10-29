import { TableRowModel } from '../table/table-row.model';

export class SimplePanelOptions {

    constructor(
        public URI: string,
        public tableRowModel?: TableRowModel
    ){}

    fromJSON(json: any): void {
        for (let i in this.tableRowModel.model) {
            console.log(i);
            console.log(this.tableRowModel.model[i]);
        };
        console.log(this.tableRowModel.model);
        // this.tableRowModel.data.forEach(element => {
        //     console.log(element);
        //     console.log(this.tableRowModel);
        //     console.log(this.tableRowModel.data.indexOf(element));
        // });
    }
}