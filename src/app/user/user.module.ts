import { NgModule } from "@angular/core";
import { UserGroupComponent } from './user-group/user-group.component';

@NgModule({
    declarations: [UserGroupComponent],
    exports: [
        UserGroupComponent
    ]
})

export class UserModule {}
