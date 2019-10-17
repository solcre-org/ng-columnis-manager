import { DataBaseModelInterface } from 'src/app/share/apiService/data-base-model.interface';

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
        this.name = json.nombre;
        this.description = json.descripcion;
    }
    toJSON(json: Permission) {
        let newJson: any = {};
        if (json.id != null) {
            newJson['id'] = json.id;
        }
        newJson['nombre'] = json.name;
        newJson['descripcion'] = json.description;
        return newJson;
    }

}