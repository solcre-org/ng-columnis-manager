import { NgModule } from "@angular/core";
import { UserGroupComponent } from './user-group/user-group.component';
import { PermissionComponent } from './permission/permission.component';

@NgModule({
    declarations: [UserGroupComponent, PermissionComponent],
    exports: [
        UserGroupComponent,
        PermissionComponent
    ]
})

export class UserModule {}
