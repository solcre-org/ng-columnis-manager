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
        this.name = json.grupo;
    }
    toJSON(json: UserGroup) {
        let newJson: any = {};
        if (json.id != null) {
            newJson['id'] = json.id;
        }
        newJson['grupo'] = json.name;
        return newJson;
    }

}