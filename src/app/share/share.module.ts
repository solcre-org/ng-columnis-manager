import { NgModule } from "@angular/core";
import { FilterPipe } from './fiter.pipe';
import { ApiService } from './apiService/api.service';
import { PagerComponent } from './apiService/pager/pager.component';
import { ApiHalPagerModel } from './apiService/api-hal-pager.model';
import { TableComponent } from './table/table.component';
import { SimplePanelComponent } from './simple-panel/simple-panel.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
    declarations: [
        FilterPipe,
        ApiService,
        PagerComponent,
        TableComponent,
        SimplePanelComponent,
        DialogComponent
    ],
    exports: [
        FilterPipe,
        ApiService,
        PagerComponent,
        TableComponent,
        SimplePanelComponent,
        DialogComponent
    ]

})
export class ShareModule {

}