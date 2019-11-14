import { NgModule } from "@angular/core";
import { FilterPipe } from './fiter.pipe';
import { ApiService } from './api/api.service';
import { PagerComponent } from './api/pager/pager.component';
import { TableComponent } from './table/table.component';
import { SimplePanelComponent } from './simple-panel/simple-panel.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './dialog/dialog.service';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';
import { SimplePanelService } from './simple-panel/simple-panel.service';
import { ModalComponent } from './modal/modal.component';
import { InputHolderComponent } from './input-holder/input-holder.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        FilterPipe,
        PagerComponent,
        TableComponent,
        SimplePanelComponent,
        ModalComponent,
        InputHolderComponent,
        LoaderComponent,
        DialogComponent
    ],
    imports: [
        TranslateModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        FilterPipe,
        PagerComponent,
        TableComponent,
        SimplePanelComponent,
        ModalComponent,
        InputHolderComponent,
        LoaderComponent,
        DialogComponent
    ],
    providers: [
        ApiService,
        DialogService,
        LoaderService,
        SimplePanelService,
    ]

})
export class ShareModule {

}