import { DataBaseModelInterface } from 'src/app/share/apiService/data-base-model.interface';

export class UserGroup implements DataBaseModelInterface {

    constructor(
        public id?: number,
        public name?: string
    ) { }

    getId() {
        return this.id;
    }
    fromJSON(json: any): void {
        this.id = json.id;
        this.name = json.name;
    }
    toJSON() {
        let newJson: any = {};
        if (this.id != null) {
            newJson.id = this.id;
        }
        newJson.name = this.name;
        return newJson;
    }

}