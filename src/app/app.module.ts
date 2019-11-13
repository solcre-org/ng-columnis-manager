import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { UserGroupComponent } from './users/user-group/user-group.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard-service';
import { PermissionComponent } from './users/permission/permission.component';
import { FilterPipe } from './share/fiter.pipe';
import { PagerComponent } from './share/apiService/pager/pager.component';
import { TableComponent } from './share/table/table.component';
import { LoaderService } from './share/loader/loader.service';
import { SimplePanelComponent } from './share/simple-panel/simple-panel.component';
import { UserComponent } from './users/user/user.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ModalComponent } from './share/modal/modal.component';
import { InputHolderComponent } from './share/input-holder/input-holder.component';

@NgModule({
  declarations: [
    AppComponent,
    UserGroupComponent,
    PermissionComponent,
    UserComponent,
    FilterPipe,
    PagerComponent,
    TableComponent,
    SimplePanelComponent,
    ModalComponent
  ],
  imports: [
    LocalStorageModule.forRoot({
      prefix: 'columnis-manager',
      storageType: 'localStorage'
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
    CoreModule
  ],
  providers: [AuthService, AuthGuard, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
