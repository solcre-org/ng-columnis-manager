export interface DataBaseModelInterface{
	getId(): any;
	fromJSON(json: any): void;
	toJSON(json: any): any
}
