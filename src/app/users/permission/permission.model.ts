import { DataBaseModelInterface } from 'src/app/shared/api/data-base-model.interface';

export class Permission implements DataBaseModelInterface {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string
    ) { }

    getId() {
        return this.id;
    }
    fromJSON(json: any): void {
        this.id = json.id;
        this.name = json.name;
        this.description = json.description;
    }
    toJSON() {
        let newJson: any = {};
        if (this.id != null) {
            newJson['id'] = this.id;
        }
        newJson['name'] = this.name;
        newJson['description'] = this.description;
        return newJson;
     }

}