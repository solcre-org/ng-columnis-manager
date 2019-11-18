import { NgModule } from "@angular/core";
import { UserGroupComponent } from './user-group/user-group.component';
import { PermissionComponent } from './permission/permission.component';
import { UserComponent } from './user/user.component';
import { ShareModule } from '../shared/share.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
    declarations: [
        UserGroupComponent, 
        PermissionComponent, 
        UserComponent
    ],
    imports: [
        ShareModule,
        CommonModule,
        ReactiveFormsModule,
        TranslateModule,
        UsersRoutingModule,

    ],
    exports: [
        UserGroupComponent,
        PermissionComponent,
        UserComponent
    ]
})

export class UsersModule {}
