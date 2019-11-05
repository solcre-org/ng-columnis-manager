import { ApiService } from '../apiService/api.service';
import { TableModel } from '../table/table.model';

export class SimplePanelService {

    tableModel: TableModel;

    constructor(
        private apiService: ApiService
    ) { }

}