import { NgModule } from "@angular/core";
import { UserGroupComponent } from './user-group/user-group.component';
import { PermissionComponent } from './permission/permission.component';
import { UserComponent } from './user/user.component';

@NgModule({
    declarations: [UserGroupComponent, PermissionComponent, UserComponent],
    exports: [
        UserGroupComponent,
        PermissionComponent,
        UserComponent
    ]
})

export class UserModule {}
