import { NgModule } from "@angular/core";
import { FilterPipe } from './fiter.pipe';
import { ApiService } from './apiService/api.service';
import { PagerComponent } from './apiService/pager/pager.component';
import { ApiHalPagerModel } from './apiService/api-hal-pager.model';
import { TableComponent } from './table/table.component';
import { SimplePanelComponent } from './simple-panel/simple-panel.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './dialog/dialog.service';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';
import { SimplePanelService } from './simple-panel/simple-panel.service';

@NgModule({
    declarations: [
        FilterPipe,
        ApiService,
        PagerComponent,
        TableComponent,
        SimplePanelComponent,
        DialogService,
        DialogComponent,
        LoaderComponent,
        LoaderService,
        SimplePanelService
    ],
    exports: [
        FilterPipe,
        ApiService,
        PagerComponent,
        TableComponent,
        SimplePanelComponent,
        DialogService,
        DialogComponent,
        LoaderService,
        LoaderComponent, 
        SimplePanelService
    ]

})
export class ShareModule {

}