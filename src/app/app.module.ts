import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard-service';
import { LoaderService } from './shared/loader/loader.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ShareModule } from './shared/share.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,    
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
    ReactiveFormsModule,
    AuthModule,
    CoreModule,
    ShareModule,
    UsersModule
  ],
  providers: [AuthService, AuthGuard, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
