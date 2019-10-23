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
    toJSON() {
        let newJson: any = {};
        if (this.id != null) {
            newJson['id'] = this.id;
        }
        newJson['nombre'] = this.name;
        newJson['descripcion'] = this.description;
        return newJson;
     }

}