import { Routes, RouterModule } from '@angular/router';
import { UserGroupComponent } from './user-group/user-group.component';
import { NgModule } from '@angular/core';
import { PermissionComponent } from './permission/permission.component';

const usersRoutes: Routes = [
    {
        path: 'groups',
        component: UserGroupComponent,
        canActivate: []
    },
    {
        path: 'permissions',
        component: PermissionComponent,
        canActivate: []
    },

]

@NgModule({
    imports: [ RouterModule.forChild(usersRoutes)],
    exports: [ RouterModule ],
    providers: [
        
    ]
})
export class UsersRoutingModule { }