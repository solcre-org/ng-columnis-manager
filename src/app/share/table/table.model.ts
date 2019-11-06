import { TableHeaderModel } from './table-header.model';
import { TableRowModel } from './table-row.model';

export class TableModel {
	constructor(
		public title?: string,
		public header?: TableHeaderModel[],
		public body?: TableRowModel[]
	) { }

	public removeBody(): void {
		this.body = [];
	}

	public addRow(row: TableRowModel): void {
		if (!this.body) {
			this.body = [];
		}
		this.body.unshift(row);
	}

	public findRow(id: any): TableRowModel {
		return this.body.find((row: TableRowModel) => {
			return row.model.getId() == id;
		});
	}

	public removeRow(id: any) {
		const index: number = this.body.map((row: TableRowModel) => {
			return row.id;
		}).indexOf(id);
		if (index > -1) {
			this.body.splice(index, 1);
		}
	}

	public updateRow(row: TableRowModel) {
		const index: number = this.body.map((row: TableRowModel) => {
			return row.id;
		}).indexOf(row.id);
		this.body[index] = row;
	}
}