import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { UserGroupComponent } from './user/user-group/user-group.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard-service';
import { PermissionComponent } from './user/permission/permission.component';
import { FilterPipe } from './share/fiter.pipe';
import { PagerComponent } from './share/apiService/pager/pager.component';
import { TableComponent } from './share/table/table.component';
import { DialogComponent } from './share/dialog/dialog.component';
import { LoaderComponent } from './share/loader/loader.component';
import { LoaderService } from './share/loader/loader.service';
import { SimplePanelComponent } from './share/simple-panel/simple-panel.component';
import { UserComponent } from './user/user/user.component';
import { SimplePanelService } from './share/simple-panel/simple-panel.service';


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
  ],
  imports: [
    LocalStorageModule.forRoot({
      prefix: 'columnis-manager',
      storageType: 'localStorage'
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
