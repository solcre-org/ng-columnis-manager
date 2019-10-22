import { TableHeaderModel } from './table-header.model';
import { TableRowModel } from './table-row.model';

export class TableModel {
	constructor(
		public header?: TableHeaderModel[],
		public body?: TableRowModel[]
	) { }

	public addRow(row: TableRowModel): void {
		this.body.unshift(row);
	}


	public removeRow(id: any) {

		const index: number = this.body.map((row: TableRowModel) => {
			return row.id;
		}).indexOf(id);

		if (index > -1) {
			this.body.splice(index, 1);
		}
	}
}