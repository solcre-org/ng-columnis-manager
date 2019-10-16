import { NgModule } from "@angular/core";
import { FilterPipe } from './fiter.pipe';
import { ApiService } from './apiService/api.service';

@NgModule({
    declarations: [
        FilterPipe,
        ApiService
    ],
    exports: [
        FilterPipe,
        ApiService
    ]

})
export class ShareModule {

}