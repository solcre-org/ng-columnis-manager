import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarService } from './navbar/navbar.service';
import { ShareModule } from '../shared/share.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        NavbarComponent,
        DashboardComponent
    ],
    imports: [
        RouterModule,
        TranslateModule,
        ShareModule,

    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        NavbarComponent
    ]

})
export class CoreModule {

}