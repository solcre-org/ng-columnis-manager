import { NgModule } from "@angular/core";
import { FilterPipe } from './fiter.pipe';
import { ApiService } from './apiService/api.service';
import { PagerComponent } from './apiService/pager/pager.component';
import { ApiHalPagerModel } from './apiService/api-hal-pager.model';

@NgModule({
    declarations: [
        FilterPipe,
        ApiService,
        PagerComponent
    ],
    exports: [
        FilterPipe,
        ApiService,
        PagerComponent
    ]

})
export class ShareModule {

}