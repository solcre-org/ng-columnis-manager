import { DataBaseModelInterface } from 'src/app/share/apiService/data-base-model.interface';

export class User implements DataBaseModelInterface {

    constructor(
        public id?: number,
        public user?: string
    ) { }

    getId() {
        return this.id;
    }
    fromJSON(json: any): void {
        this.id = json.id;
        this.user = json.user;
    }
    toJSON() {
        let newJson: any = {};
        if (this.id != null) {
            newJson.id = this.id;
        }
        newJson.user = this.user;
        return newJson;
    }

}