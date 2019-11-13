(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- HEADER -->\n<app-header></app-header>    \n<app-navbar></app-navbar>\n\n<!-- Start: Routed views go here -->\n<div class=\"router-outlet-holder\">\n\t<router-outlet></router-outlet>\n</div>\n<!-- End: Routed views go here -->\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlayed-screen\">\n    <div class=\"holder scrollable align-m\">\n        <div class=\"align\">\n            <h1 class=\"logo\">\n                <span class=\"notVisible\">Columnis</span>\n            </h1>\n            <form class=\"styled-form\" [formGroup]=\"signinForm\" (ngSubmit)=\"onSubmit()\">\n                <div>\n                    <input class=\"input\" type=\"text\" (blur)=\"onBlur($event)\" id=\"email\" formControlName=\"email\" placeholder=\"{{ 'auth.login.user' | translate }}\" name=\"email\"><br>\n                </div>\n                <div>\n                    <input class=\"input\" type=\"password\" id=\"password\" formControlName=\"password\" name=\"password\" placeholder=\"{{ 'auth.login.password' | translate }}\"><br>\n                </div>\n                <button class=\"rounded-btn\" type=\"submit\" [disabled]=\"!signinForm.valid\">{{ 'auth.login.enter' | translate }}</button>\n            </form>         \n        </div>   \n    </div>\n<app-dialog></app-dialog>\n<app-loader></app-loader>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/footer/footer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>footer works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/header/header.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/header/header.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"fixed-holder\">\n        <a routerLink=\"/\">\n            <h1 class=\"logo eva\"><span class=\"notVisible\">EVA</span></h1>\n        </a>\n    </div>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/navbar/navbar.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/navbar/navbar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-left\">\n    <div class=\"collapse\" id=\"navbarToggleExternalContent\">\n      <div class=\"bg-dark p-4\">\n          <div class=\"col-xs-12\">\n              <a routerLink=\"/\" class=\"btn btn-primary\">Inicio</a>\n          </div>\n          <div class=\"col-xs-12\">\n              <a routerLink=\"/user_groups\" class=\"btn btn-primary\">Grupos</a>\n          </div>\n          <div class=\"col-xs-12\">\n            <a routerLink=\"/permissions\" class=\"btn btn-primary\">Permisos</a>\n        </div>\n          <div class=\"col-xs-12\">\n              <button class=\"btn btn-primary\" (click)=\"onLogout()\">Salir</button>\n          </div>\n      </div>\n    </div>\n    <nav class=\"navbar navbar-dark bg-dark\">\n      \n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggleExternalContent\" aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"select\">\n        <select class=\"input\" #language (change)=\"onLanguageChange(language.value)\">\n          <option disabled selected value=\"\">En/Es</option>\n          <option value=\"es\">{{ \"common.spanish\" | translate }}</option>\n          <option value=\"en\">{{ \"common.english\" | translate }}</option>\n        </select>\n      </div>\n    </nav>\n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/share/apiService/pager/pager.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/share/apiService/pager/pager.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pager\" [class.loading]=\"loading\" *ngIf=\"range.length > 1\">\n  <a class=\"arrow prev\" \n\t(click)=\"onPrev()\"\n\t[title]=\"'Pager.descPrev' | translate\"\n    [class.disabled]=\"(first === current)\"></a>\n\n  <!-- GENERATE EACH ITEM IN RANGE -->\n  <ng-container *ngFor=\"let r of range\">\n      <a (click)=\"onPage(r)\" *ngIf=\"r && (r !== current)\">{{ r }}</a>\n      <span class=\"current\" *ngIf=\"r === current\">{{ r }}</span>\n      <span class=\"ellipsis\" *ngIf=\"!r\">...</span>\n  </ng-container>\n  \n  <a class=\"arrow next\"\n\t  (click)=\"onNext()\"\n\t  [title]=\"'Pager.descNext' | translate\"\n    [class.disabled]=\"last === current\"></a>\n</div> <!-- .pager -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/share/dialog/dialog.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/share/dialog/dialog.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"popup xs internal align-m\" [class.active]=\"isActive\">\n\t<div class=\"holder align\">\n\t\t<div class=\"confirm-box\">\n\t\t\t<p *ngIf=\"model\" class=\"text bold\">\n\t\t\t\t{{ model.message | translate}} <br class=\"hidden-mobile\">\n\t\t\t</p>\n\t\t\t<div class=\"btns margin-t-6\">\n\t\t\t\t<button class=\"btn filled-btn error\" (click)=\"onConfirm()\">{{ \"share.dialog.accept\" | translate }}</button>\n\t\t\t\t<button class=\"btn filled-btn\" *ngIf=\"isCancel\" (click)=\"onCancel()\">{{ \"share.dialog.cancel\" | translate }}</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"overlay\" (click)=\"onCancel()\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/share/input-holder/input-holder.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/share/input-holder/input-holder.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-holder required\">\n    <ng-content></ng-content>\n    <label \n        *ngIf=\"formControl.hasError(required)\"\n        class=\"error\" \n        for=\"{{ inputId }}\">formControl</label>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/share/loader/loader.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/share/loader/loader.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader text-center\">\n\t<span *ngIf=\"isActive\" class=\"spinner\"></span>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/share/modal/modal.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/share/modal/modal.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal active\"\n    [class.active]=\"state\">\n    <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/share/simple-panel/simple-panel.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/share/simple-panel/simple-panel.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-available edit-view\">\n   <div class=\"panel-content hideOnInternalModal\">\n      <div class=\"wrapper\">\n         <div class=\"section\">\n            <p class=\"subtitle display-inline-block margin-r-4\">\n               {{ tableModel.title | translate}}\n            </p>\n                  <!-- ADD ITEM -->\n               <a class=\"bold-link\" \n                     (click)=\"onShowAdd($event)\"\n                     >{{ \"share.simplePanel.add\"  | translate}}</a>\n                  \n               <app-table \n               *ngIf=\"tableModel\" \n               [tableModel]=\"tableModel\"\n               (onAddRow)=\"onAddRow($event)\" \n               (onDelete)=\"onDelete($event)\"\n               (onUpdate)=\"onUpdate($event)\"\n               (onSort)=\"onSort($event)\"\n               (onExtraActionClick)=\"onExtraActionClick($event)\">\n            </app-table>\n         </div>\n      </div>\n\n      <div class=\"footer fixed-bottom\"> \n\t\t\t<div class=\"fixed-holder holder\">\n\t\t\t\t<div class=\"content desktop\">\n\t\t\t\t\t<div class=\"wrapper align-m\">\n\t\t\t\t\t\t<div class=\"align\">\n                     <app-pager \n                        *ngIf=\"apiHalPagerModel.totalItems\"\n                        [pager]=\"apiHalPagerModel\" \n                        (onChange)=\"onChangePage($event)\">\n                     </app-pager>\n\t\t\t\t\t   </div> \n\t\t\t\t\t</div> \n\t\t\t\t</div> \n\t\t\t</div> \n\t\t</div> \n      <div class=\"wrapper section\">\n            <app-loader></app-loader>\n      </div>\n   </div>\n</div>\n<app-modal\n   [(state)]=\"onShowForm\">\n   <div class=\"holder\" *ngIf=\"onShowForm\">\n      <div class=\"modal-head align-m\">\n         <div class=\"align\">\n            <button \n               (click)=\"onHideForm()\"\n               type=\"button\"\n               class=\"link cancel\">\n               {{ \"share.simplePanel.cancel\"  | translate }}\n            </button>\n\n            <p class=\"text\">\n\t\t\t\t\t<span *ngIf=\"!onShowSave\">Agregar nuevo</span>\n               <span *ngIf=\"onShowSave\">Modificar</span>\n\t\t\t\t</p>\n\n            <button *ngIf=\"!onShowSave\" class=\"link confirm\" \n               type=\"button\" \n               [disabled]=\"!rowForm.valid\"\n               (click)=\"onSave()\">\n               {{ \"share.simplePanel.add\" | translate }}</button>\n            <button *ngIf=\"onShowSave\" class=\"link confirm\" \n               type=\"button\" \n               [disabled]=\"!rowForm.valid\"\n               (click)=\"onSave()\">\n               {{ \"share.simplePanel.save\" | translate }}</button>\n         </div>\n\n      </div>\n      <div class=\"scrollable wrapper section\">\n         <form *ngIf=\"onShowForm\" [formGroup]=\"rowForm\" (ngSubmit)=\"onSave()\">\n            <ng-content select=\".primary-form\"></ng-content>\n         </form>\n      </div>\n   </div>\n</app-modal>\n<app-dialog></app-dialog>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/share/table/table.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/share/table/table.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-viewport margin-t-3\">\n\t<div class=\"styled-table\">\n        <table class=\"table\" *ngIf=\"tableModel.body\">\n            <ng-content select=\".add-button\"></ng-content>\n            <thead class=\"head\">\n                <tr class=\"row\">\n                    <th class=\"cell sortable desc\"\n                        (click)=\"onSortRows(th)\" *ngFor=\"let th of tableModel.header\">\n                        <div class=\"content\" [title]=\"th.display | translate\">{{ th.display | translate }}</div>\n\t\t\t\t\t\t<div class=\"sort-items\">\n\t\t\t\t\t\t\t<div class=\"loader\"><div class=\"spinner\"></div></div>\n                            <div class=\"arrows\"></div>\n                        </div>\n                    </th>\n                    <th class=\"cell show-on-edit\"></th>\n                </tr>\n            </thead>\n            <tbody class=\"body\">\n                <tr class=\"row\" *ngFor=\"let tr of tableModel.body | filter:filteredStatus:'data'\">\n                    <td class=\"cell\" *ngFor=\"let td of tr.data\">\n                        {{ td }}\n                    </td>\n                    <td class=\"cell actions-holder\">\n\t\t\t\t\t\t<a \n                            *ngFor=\"let action of tr.extraActions\"\n\t\t\t\t\t\t\t(click)=\"onExtraActionRow(action.key, tr)\"\n\t\t\t\t\t\t\tclass=\"bold-link action\">{{ action.description | translate }}</a>\n\t\t\t\t\t\t<button \n                            *ngFor=\"let action of tr.extraActions\"\n\t\t\t\t\t\t\ttype=\"button\" \n\t\t\t\t\t\t\t(click)=\"onExtraActionRow(tr, action)\"\n\t\t\t\t\t\t\t[title]=\"action.description | translate\"\n\t\t\t\t\t\t\t[disabled]=\"action.disabled\"\n\t\t\t\t\t\t\tclass=\"action show-on-edit action-btn icon-btn text-info {{ action.classes }}\"></button>\n\t\t\t\t\t\t<button \n\t\t\t\t\t\t\ttype=\"button\" \n                            (click)=\"onModifiersRow(tr)\"\t\t\t\t\t\t\t\n                            [title]=\"'share.table.modify'| translate\"\n\t\t\t\t\t\t\tclass=\"action show-on-edit action-btn icon-btn icon-edit text-info\"></button>\n\t\t\t\t\t\t<button \n\t\t\t\t\t\t\ttype=\"button\" \n\t\t\t\t\t\t\t(click)=\"onDeleteRow(tr)\"\n\t\t\t\t\t\t\t[title]=\"'share.table.delete' | translate \"\n\t\t\t\t\t\t\tclass=\"action show-on-edit action-btn icon-btn icon-delete text-error\"></button>\n                    </td>\n                    \n                    <!-- <div class=\"btn-group mr-2\">\n                        <button class=\"btn btn-primary\"\n                        *ngFor=\"let action of tr.extraActions\"\n                            type=\"button\" \n                            (click)=\"onExtraActionRow(action.key, tr)\">{{ action.description }}\n                        </button>\n                    </div>\n                    <div class=\"btn-group mr-2\">\n                        <button class=\"btn btn-primary\" (click)=\"onModifiersRow(tr)\">{{ \"share.table.modify\" | translate }}</button>\n                    </div>\n\n                    <div class=\"btn-group mr-2\">\n                        <button class=\"btn btn-primary\" (click)=\"onDeleteRow(tr)\">{{ \"share.table.delete\" | translate }}</button>\n                    </div> -->\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/permission/permission.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/permission/permission.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout responsive\">\n   <app-simple-panel \n      *ngIf=\"tableModel\" \n      [simplePanelOptions]=\"simplePanelOptions\"\n      [rowForm]=\"rowForm\"\n      [tableModel]=\"tableModel\"\n      [onParseRow]=\"onParseRow\"\n      [onGetDataBaseModel]=\"onGetDataBaseModel\"\n      (onExtraAction)=\"onExtraAction($event)\">\n      <div class=\"primary-form styled-form\" [formGroup]=\"rowForm\">\n         <div>\n            <label class=\"label\" for=\"newPermission\">{{ 'users.permission.name' | translate }}</label>\n            <input \n               type=\"text\" \n               class=\"input\"\n               id = \"newPermission\"\n               formControlName=\"name\"\n               placeholder=\"{{ 'users.permission.name' | translate }}\"\n               name=\"newPermission\">\n         </div>\n         <div>\n            <label class=\"label\" for=\"description\">{{ 'users.permission.description' | translate }}</label>\n            <input \n               type=\"text\" \n               class=\"input\"\n               id=\"description\"\n               formControlName=\"description\"\n               placeholder=\"{{ 'users.permission.description' | translate }}\"\n               name=\"newPermission\">\n         </div>\n      </div>\n   </app-simple-panel>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/user-group/user-group.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/user-group/user-group.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout responsive\">\n   <app-simple-panel \n      *ngIf=\"tableModel\" \n      [simplePanelOptions]=\"simplePanelOptions\"\n      [rowForm]=\"rowForm\"\n      [tableModel]=\"tableModel\"\n      [onParseRow]=\"onParseRow\"\n      [onGetDataBaseModel]=\"onGetDataBaseModel\">\n      <div class=\"primary-form styled-form\" [formGroup]=\"rowForm\">\n         <app-input-holder\n            inputId=\"app-user-groups-name\"\n            [formControl]=\"rowForm.controls.name\">\n            <label \n                  class=\"label\" \n                  for=\"app-user-groups-name\">{{ 'users.userGroup.name' | translate }}</label>\n            <input \n                  type=\"text\" \n                  class=\"input\" \n                  model=\"newRow\"\n                  id=\"app-user-groups-name\" \n                  formControlName=\"name\" \n                  [class.error]=\"!rowForm.get('name').valid && rowForm.get('name').touched\"\n                  placeholder=\"{{ 'users.userGroup.name' | translate }}\"\n                  name=\"name\"><br>\n         </app-input-holder>\n\n         </div>\n   </app-simple-panel>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/user/user.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/user/user.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-header></app-header>\n<div class=\"row-form\" [formGroup]=\"rowForm\">\n        <input \n           type=\"text\" \n           class=\"form-control\" \n           model=\"newRow\"\n           id=\"newRow\" \n           formControlName=\"name\" \n           placeholder=\"Agregar nuevo\"\n           name=\"newRow\"><br>\n</div>\n<app-simple-panel \n   *ngIf=\"tableModel\" \n   [simplePanelOptions]=\"simplePanelOptions\"\n   [rowForm]=\"rowForm\"\n   [tableModel]=\"tableModel\"\n   [onParseRow]=\"onParseRow\"\n   [onGetDataBaseModel]=\"onGetDataBaseModel\">\n</app-simple-panel>\n"

/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth-guard-service */ "./src/app/auth/auth-guard-service.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _users_user_group_user_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/user-group/user-group.component */ "./src/app/users/user-group/user-group.component.ts");
/* harmony import */ var _users_permission_permission_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/permission/permission.component */ "./src/app/users/permission/permission.component.ts");
/* harmony import */ var _users_user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/user/user.component */ "./src/app/users/user/user.component.ts");








// import { platform } from 'os';
const routes = [
    { path: 'oauth', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: '', canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _users_user_group_user_group_component__WEBPACK_IMPORTED_MODULE_5__["UserGroupComponent"] },
    { path: 'user_groups', canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _users_user_group_user_group_component__WEBPACK_IMPORTED_MODULE_5__["UserGroupComponent"] },
    { path: 'permissions', canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _users_permission_permission_component__WEBPACK_IMPORTED_MODULE_6__["PermissionComponent"] },
    { path: 'users', canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _users_user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let AppComponent = class AppComponent {
    constructor(translate) {
        this.translate = translate;
        this.title = 'columnis-manager';
        translate.use('es');
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/fesm2015/angular-2-local-storage.js");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _users_user_group_user_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/user-group/user-group.component */ "./src/app/users/user-group/user-group.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth-guard-service */ "./src/app/auth/auth-guard-service.ts");
/* harmony import */ var _users_permission_permission_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users/permission/permission.component */ "./src/app/users/permission/permission.component.ts");
/* harmony import */ var _share_fiter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./share/fiter.pipe */ "./src/app/share/fiter.pipe.ts");
/* harmony import */ var _share_apiService_pager_pager_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./share/apiService/pager/pager.component */ "./src/app/share/apiService/pager/pager.component.ts");
/* harmony import */ var _share_table_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./share/table/table.component */ "./src/app/share/table/table.component.ts");
/* harmony import */ var _share_loader_loader_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./share/loader/loader.service */ "./src/app/share/loader/loader.service.ts");
/* harmony import */ var _share_simple_panel_simple_panel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./share/simple-panel/simple-panel.component */ "./src/app/share/simple-panel/simple-panel.component.ts");
/* harmony import */ var _users_user_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./users/user/user.component */ "./src/app/users/user/user.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _share_modal_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./share/modal/modal.component */ "./src/app/share/modal/modal.component.ts");
/* harmony import */ var _share_input_holder_input_holder_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./share/input-holder/input-holder.component */ "./src/app/share/input-holder/input-holder.component.ts");
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _users_user_group_user_group_component__WEBPACK_IMPORTED_MODULE_9__["UserGroupComponent"],
            _users_permission_permission_component__WEBPACK_IMPORTED_MODULE_12__["PermissionComponent"],
            _users_user_user_component__WEBPACK_IMPORTED_MODULE_18__["UserComponent"],
            _share_fiter_pipe__WEBPACK_IMPORTED_MODULE_13__["FilterPipe"],
            _share_apiService_pager_pager_component__WEBPACK_IMPORTED_MODULE_14__["PagerComponent"],
            _share_table_table_component__WEBPACK_IMPORTED_MODULE_15__["TableComponent"],
            _share_simple_panel_simple_panel_component__WEBPACK_IMPORTED_MODULE_17__["SimplePanelComponent"],
            _share_modal_modal_component__WEBPACK_IMPORTED_MODULE_22__["ModalComponent"],
            _share_input_holder_input_holder_component__WEBPACK_IMPORTED_MODULE_23__["InputHolderComponent"]
        ],
        imports: [
            angular_2_local_storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageModule"].forRoot({
                prefix: 'columnis-manager',
                storageType: 'localStorage'
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"]]
                }
            }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"]
        ],
        providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], _share_loader_loader_service__WEBPACK_IMPORTED_MODULE_16__["LoaderService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_21__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "./src/app/auth/auth-guard-service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard-service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.authService.isAuthenticated();
        if (isAuth) {
            return true;
        }
        else {
            this.router.navigate(['/oauth']);
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/fesm2015/angular-2-local-storage.js");
/* harmony import */ var _share_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../share/loader/loader.component */ "./src/app/share/loader/loader.component.ts");
/* harmony import */ var _share_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../share/dialog/dialog.service */ "./src/app/share/dialog/dialog.service.ts");
/* harmony import */ var _share_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../share/dialog/dialog.component */ "./src/app/share/dialog/dialog.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");












let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _share_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"],
            _share_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"]
        ],
        imports: [
            angular_2_local_storage__WEBPACK_IMPORTED_MODULE_7__["LocalStorageModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"]
        ],
        exports: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _share_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"],
            _share_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"]
        ],
        providers: [_share_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/fesm2015/angular-2-local-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _share_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share/loader/loader.service */ "./src/app/share/loader/loader.service.ts");
/* harmony import */ var _share_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/dialog/dialog.service */ "./src/app/share/dialog/dialog.service.ts");
/* harmony import */ var _share_dialog_dialog_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share/dialog/dialog.model */ "./src/app/share/dialog/dialog.model.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








class AuthService {
    constructor(dialogService, translateService, loaderService, router, httpClient, localStorageService) {
        this.dialogService = dialogService;
        this.translateService = translateService;
        this.loaderService = loaderService;
        this.router = router;
        this.httpClient = httpClient;
        this.localStorageService = localStorageService;
    }
    isAuthenticated() {
        let currentUser = this.localStorageService.get('access_token');
        let refreshToken = this.localStorageService.get('refresh_token');
        this.codeDomain = this.localStorageService.get('code');
        if (currentUser) {
            this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + this.codeDomain + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].oauthURI, {
                "client_id": "columnis_manager",
                "grant_type": "refresh_token",
                "refresh_token": refreshToken
            }).subscribe((response) => {
                // this.localStorageService.set('access_token', response['access_token']);
                console.log("Logged in", response);
            }, (error) => {
                console.log("Token vencido");
                return false;
            });
            return true;
        }
        return false;
    }
    signIn(email, password) {
        this.loaderService.start();
        let username = email.split("@");
        this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + this.codeDomain + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].oauthURI, {
            "client_id": "columnis_manager",
            "grant_type": "password",
            "username": username[0],
            "password": password
        }).subscribe((response) => {
            this.localStorageService.set('code', this.codeDomain);
            this.localStorageService.set('access_token', response['access_token']);
            this.localStorageService.set('refresh_token', response['refresh_token']);
            console.log("Logged in", response);
            this.router.navigate(['/user_groups']);
            this.loaderService.done();
        }, (error) => {
            let message;
            this.translateService.get('share.dialog.errorPassword').subscribe(response => {
                message = response;
            });
            console.log(message);
            this.dialogService.open(new _share_dialog_dialog_model__WEBPACK_IMPORTED_MODULE_6__["DialogModel"](message));
            console.log(error.error.detail);
            this.loaderService.done();
        });
    }
    logout() {
        this.localStorageService.clearAll();
        console.log("Logged out");
        this.router.navigate(['/oauth']);
    }
    getAccessToken() {
        return this.localStorageService.get('access_token');
    }
    getCode(domain) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('domain', domain);
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].codeURI, { params }).subscribe((response) => {
            this.codeDomain = response.code;
        }, (error) => {
            console.log(error);
        });
    }
}
AuthService.ctorParameters = () => [
    { type: _share_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _share_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"] }
];


/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 30px;\n}\n\ninput.ng-invalid.ng-touched {\n    background-color: lightcoral;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");




let LoginComponent = class LoginComponent {
    constructor(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
    }
    ngOnInit() {
        this.signinForm = this.formBuilder.group({
            'email': this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'password': this.formBuilder.control(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    onSubmit() {
        this.authService.signIn(this.signinForm.value.email, this.signinForm.value.password);
    }
    onBlur() {
        if (this.signinForm.value.email.indexOf('@') > -1) {
            let data = (this.signinForm.value.email).split("@", 2);
            let domain = data[1];
            this.authService.getCode(domain);
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/core/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");







let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]
        ],
        declarations: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]
        ],
        exports: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]
        ]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/core/footer/footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/core/navbar/navbar.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");




let NavbarComponent = class NavbarComponent {
    constructor(authService, translateSevice) {
        this.authService = authService;
        this.translateSevice = translateSevice;
    }
    ngOnInit() {
    }
    onLogout() {
        this.authService.logout();
    }
    onLanguageChange(language) {
        if (language) {
            this.translateSevice.use(language);
        }
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/core/navbar/navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/share/apiService/api-hal-pager.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/share/apiService/api-hal-pager.model.ts ***!
  \*********************************************************/
/*! exports provided: ApiHalPagerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiHalPagerModel", function() { return ApiHalPagerModel; });
class ApiHalPagerModel {
    //Pager constructor
    constructor(currentPage, totalPages, totalItems) {
        this.currentPage = currentPage;
        this.totalPages = totalPages;
        this.totalItems = totalItems;
    }
    //parse from json
    fromJSON(json) {
        //Check json object
        if (json) {
            //Load current page
            if (json.page) {
                this.currentPage = json.page;
            }
            //Load page count
            if (json.page_count) {
                this.totalPages = json.page_count;
            }
            //Load total items
            if (json.total_items) {
                this.totalItems = json.total_items;
            }
        }
    }
}
ApiHalPagerModel.ctorParameters = () => [
    { type: Number },
    { type: Number },
    { type: Number }
];


/***/ }),

/***/ "./src/app/share/apiService/api-response.model.ts":
/*!********************************************************!*\
  !*** ./src/app/share/apiService/api-response.model.ts ***!
  \********************************************************/
/*! exports provided: ApiResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiResponseModel", function() { return ApiResponseModel; });
/* harmony import */ var _api_hal_pager_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-hal-pager.model */ "./src/app/share/apiService/api-hal-pager.model.ts");

class ApiResponseModel {
    constructor(data) {
        this.data = data;
        //Defaults
        this.pager = new _api_hal_pager_model__WEBPACK_IMPORTED_MODULE_0__["ApiHalPagerModel"]();
    }
    hasCollectionResponse() {
        return (this.data instanceof Array && this.data.length > 0);
    }
    hasSingleResponse() {
        return (this.data && this.data.id);
    }
}
ApiResponseModel.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/share/apiService/api.service.ts":
/*!*************************************************!*\
  !*** ./src/app/share/apiService/api.service.ts ***!
  \*************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_response_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-response.model */ "./src/app/share/apiService/api-response.model.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







// import { FormUtility } from '../utilities/form.utility';
let ApiService = class ApiService {
    //Service constructor
    constructor(authService, httpClient) {
        this.authService = authService;
        this.httpClient = httpClient;
    }
    //Fetch
    fetchData(uri, params) {
        //Check cache of observables
        //Get options
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.getAccessToken(),
                'Accept': "application/vnd.columnis.v2+json"
            }),
            params: params
        };
        //Do request
        return this.httpClient
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiURL + uri, httpOptions)
            .pipe(
        //Map response
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            return this.parseCollectionResponse(response);
        }));
    }
    //Fetch
    getObj(uri, id) {
        //Check cache of observables
        //Get options
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.getAccessToken(),
                'Accept': "application/vnd.columnis.v2+json"
            })
        };
        //Do request
        return this.httpClient
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiURL + uri + (id ? '/' + id : ''), httpOptions)
            .pipe(
        //Map response
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            //Return api response model
            return this.parseSingleResponse(response);
        }));
    }
    //Update an object using PATCH
    partialUpdateObj(uri, id, obj) {
        //Post options
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.getAccessToken(),
                'Accept': "application/vnd.columnis.v2+json"
            })
        };
        //Url
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiURL + uri + '/' + id;
        //Do request
        return this.httpClient
            .patch(url, obj, httpOptions)
            .pipe(
        //Map response
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            //Return api response model
            return this.parseSingleResponse(response);
        }));
    }
    //Delete an object using DELETE
    deleteObj(uri, id) {
        //Post options
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.getAccessToken(),
                'Accept': "application/vnd.columnis.v2+json"
            })
        };
        //Url
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiURL + uri + (id ? '/' + id : '');
        //Do request
        return this.httpClient
            .delete(url, httpOptions)
            .pipe(
        //Map response
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            //Return api response model
            return true;
        }));
    }
    partialUpdateList(uri, data) {
        //Post options
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.getAccessToken(),
                'Accept': "application/vnd.columnis.v2+json"
            })
        };
        //Url
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiURL + uri;
        //Do request
        return this.httpClient
            .patch(url, data, httpOptions)
            //.retry(this.environmentService.getHttpRetryTimes())
            .pipe(
        //Map response
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            //Return api response model
            return this.parseSingleResponse(response);
        }));
    }
    getAccessToken() {
        if (!this.authService.getAccessToken()) {
            return;
        }
        return this.authService.getAccessToken();
    }
    //Create an object with POST
    createObj(uri, obj) {
        //Post options
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.getAccessToken(),
                'Accept': "application/vnd.columnis.v2+json"
            })
        };
        //Url
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiURL + uri;
        //check form data
        // if(FormUtility.needFormData(obj)){
        // 	obj = FormUtility.jsonToFormData(obj);
        // }
        //Do request
        return this.httpClient
            .post(url, obj, httpOptions)
            .pipe(
        //.retry(this.environmentService.getHttpRetryTimes())
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            //Return api response model
            return this.parseSingleResponse(response);
        }));
    }
    /*public downloadFile(uri: string, params: any, type: string, fileName:string ): Observable<Blob>{
        //Do request
        return this.httpClient
            .get(this.environmentService.getApiUrl() + uri, {
                headers: new HttpHeaders({
                    'Authorization': 'Bearer ' + this.authService.getAccessToken().token
                }),
                params: params,
                responseType: 'blob'
            })
            //.retry(this.environmentService.getHttpRetryTimes())
            .map((response: any) => {
                //Return api response model
                return new Blob([response], {
                    type: type
                });
            }).do((response: Blob) => {
                saveAs(response, fileName)
            });
    }
 ​
    public getObj(uri: string, id?: any): Observable<ApiResponseModel>{
        //Get options
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.authService.getAccessToken().token
            })
        };
 ​
        //Parse uri
        const parsedUri: string = this.environmentService.getApiUrl() + uri + ( id ? '/' + id : '' );
 ​
        //Do request
        return this.httpClient
            .get(parsedUri, httpOptions)
            //.retry(this.environmentService.getHttpRetryTimes())
            .map((response: any) => {
                //Return api response model
                return this.parseSingleResponse(response);
            });
    }
 ​
    //Save obj
    public saveObj(uri: string, obj: any): Observable<ApiResponseModel>{
        //Check object if
        if(obj.id){
            return this.updateObj(uri, obj);
        }
        return this.createObj(uri, obj);
    }
 ​
    //Create an object with POST
    public createObj(uri: string, obj): Observable<ApiResponseModel>{
        //Post options
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.authService.getAccessToken().token
            })
        };
 ​
        //Url
        const url: string = this.environmentService.getApiUrl() + uri;
 ​
        //check form data
        if(FormUtility.needFormData(obj)){
            obj = FormUtility.jsonToFormData(obj);
        }
 ​
        //Do request
        return this.httpClient
            .post(url, obj, httpOptions)
            //.retry(this.environmentService.getHttpRetryTimes())
            .map((response: any) => {
                //Return api response model
                return this.parseSingleResponse(response);
            });
    }
        */
    //Update an object using PUT
    updateObj(uri, obj) {
        //Post options
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.getAccessToken(),
                'Accept': "application/vnd.columnis.v2+json"
            })
        };
        //Url
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiURL + uri + '/' + obj.id;
        //Do request
        return this.httpClient
            .put(url, obj, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            //Return api response model
            return this.parseSingleResponse(response);
        }));
    }
    /*
 ​
    public partialUpdateList(uri: string, data: any[]): Observable<ApiResponseModel>{
        //Post options
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.authService.getAccessToken().token
            })
        };
 ​
        //Url
        const url: string = this.environmentService.getApiUrl() + uri;
 ​
        //Do request
        return this.httpClient
            .patch(url, data, httpOptions)
            //.retry(this.environmentService.getHttpRetryTimes())
            .map((response: any) => {
                //Return api response model
                return this.parseCollectionResponse(response);
            });
    }
 ​
    public deleteList(uri: string, data: any): Observable<boolean>{
        //Post options
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.authService.getAccessToken().token
            }),
            body: data
        };
 ​
        //Url
        const url: string = this.environmentService.getApiUrl() + uri;
 ​
        //Do request
        return this.httpClient
            .delete(url, httpOptions)
            //.retry(this.environmentService.getHttpRetryTimes())
            .map((response: any) => {
                return true;
            });
    }
 ​
    */
    //Parse collection response
    parseCollectionResponse(response) {
        //Current response
        let resp = new _api_response_model__WEBPACK_IMPORTED_MODULE_4__["ApiResponseModel"]();
        //CHECK RESPONSE
        if (response
            && response._embedded
            && Object.keys(response._embedded).length > 0) {
            //load pager
            resp.pager.fromJSON(response);
            //Load data
            resp.data = response._embedded[Object.keys(response._embedded)[0]];
        }
        else {
            resp.data = response;
        }
        //Return api response model
        return resp;
    }
    //Parse single response
    parseSingleResponse(response) {
        //Current response
        let resp = new _api_response_model__WEBPACK_IMPORTED_MODULE_4__["ApiResponseModel"]();
        //CHECK RESPONSE
        if (response) {
            //Load data
            resp.data = response;
        }
        //Return api response model
        return resp;
    }
};
ApiService.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ApiService);



/***/ }),

/***/ "./src/app/share/apiService/pager/pager.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/share/apiService/pager/pager.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL2FwaVNlcnZpY2UvcGFnZXIvcGFnZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/share/apiService/pager/pager.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/share/apiService/pager/pager.component.ts ***!
  \***********************************************************/
/*! exports provided: PagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_hal_pager_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-hal-pager.model */ "./src/app/share/apiService/api-hal-pager.model.ts");



let PagerComponent = class PagerComponent {
    //Constructor
    constructor() {
        //Outputs
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    //On init component
    ngOnInit() {
        //Load from pager
        this.init();
    }
    //On prev arrow clicked
    onPrev() {
        //Check current
        if (this.current != this.first) {
            //Decrease
            this.current--;
            //Generate range angain
            this.range = this.generateRange(this.current, this.last);
            //Trigger
            this.onChange.emit(this.current);
        }
    }
    onNext() {
        //Check current
        if (this.current != this.last) {
            //Increase
            this.current++;
            //Generate range angain
            this.range = this.generateRange(this.current, this.last);
            //Trigger
            this.onChange.emit(this.current);
        }
    }
    onPage(page) {
        //Check current
        if (this.current != page) {
            //Set
            this.current = page;
            //Generate range angain
            this.range = this.generateRange(this.current, this.last);
            //Trigger
            this.onChange.emit(this.current);
        }
    }
    //Helper methods
    generateRange(current, last) {
        //Init vars
        //SOURCE: https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
        const delta = 2;
        const left = current - delta;
        const right = current + delta + 1;
        let range = [];
        let rangeWithDots = [];
        let l;
        //Generate range
        for (let i = 1; i <= last; i++) {
            if (i == 1 || i == last || i >= left && i < right) {
                range.push(i);
            }
        }
        //Load dots (use the 0 value) using range generated in previous step
        for (let i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                }
                else if (i - l !== 1) {
                    rangeWithDots.push(0);
                }
            }
            rangeWithDots.push(i);
            l = i;
        }
        return rangeWithDots;
    }
    init() {
        //Load from pager
        if (this.pager instanceof _api_hal_pager_model__WEBPACK_IMPORTED_MODULE_2__["ApiHalPagerModel"]) {
            //First is allways 1
            this.first = 1;
            this.last = this.pager.totalPages;
            this.current = this.pager.currentPage;
            this.range = this.generateRange(this.current, this.last);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _api_hal_pager_model__WEBPACK_IMPORTED_MODULE_2__["ApiHalPagerModel"])
], PagerComponent.prototype, "pager", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], PagerComponent.prototype, "onChange", void 0);
PagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pager',
        template: __webpack_require__(/*! raw-loader!./pager.component.html */ "./node_modules/raw-loader/index.js!./src/app/share/apiService/pager/pager.component.html"),
        styles: [__webpack_require__(/*! ./pager.component.scss */ "./src/app/share/apiService/pager/pager.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PagerComponent);



/***/ }),

/***/ "./src/app/share/dialog/dialog.component.css":
/*!***************************************************!*\
  !*** ./src/app/share/dialog/dialog.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/share/dialog/dialog.component.ts":
/*!**************************************************!*\
  !*** ./src/app/share/dialog/dialog.component.ts ***!
  \**************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dialog_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.model */ "./src/app/share/dialog/dialog.model.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog.service */ "./src/app/share/dialog/dialog.service.ts");




let DialogComponent = class DialogComponent {
    //Inject services
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    //On component init
    ngOnInit() {
        //Watch on open
        this.dialogService.onOpen.subscribe((model) => {
            this.model = model;
            if (this.model.confirmCallback) {
                this.isCancel = true;
            }
            else {
                this.isCancel = false;
            }
            //Open
            this.isActive = true;
        });
    }
    //Custom events
    onConfirm() {
        //Close
        this.isActive = false;
        if (this.model instanceof _dialog_model__WEBPACK_IMPORTED_MODULE_2__["DialogModel"]) {
            this.model.doConfirm();
        }
    }
    onCancel() {
        this.isActive = false;
    }
};
DialogComponent.ctorParameters = () => [
    { type: _dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }
];
DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog',
        template: __webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/share/dialog/dialog.component.html"),
        styles: [__webpack_require__(/*! ./dialog.component.css */ "./src/app/share/dialog/dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]])
], DialogComponent);



/***/ }),

/***/ "./src/app/share/dialog/dialog.model.ts":
/*!**********************************************!*\
  !*** ./src/app/share/dialog/dialog.model.ts ***!
  \**********************************************/
/*! exports provided: DialogModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModel", function() { return DialogModel; });
class DialogModel {
    constructor(message, confirmCallback) {
        this.message = message;
        this.confirmCallback = confirmCallback;
    }
    doConfirm() {
        if (this.confirmCallback) {
            this.confirmCallback();
        }
    }
}
DialogModel.ctorParameters = () => [
    { type: String },
    { type: Function }
];


/***/ }),

/***/ "./src/app/share/dialog/dialog.service.ts":
/*!************************************************!*\
  !*** ./src/app/share/dialog/dialog.service.ts ***!
  \************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class DialogService {
    constructor() {
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    open(model) {
        this.onOpen.emit(model);
    }
}


/***/ }),

/***/ "./src/app/share/fiter.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/share/fiter.pipe.ts ***!
  \*************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(value, filterString, propName) {
        if (value.length === 0 || filterString === '') {
            return value;
        }
        const resultArray = [];
        for (const item of value) {
            let description = item.model.description;
            if ((item.model.name.toUpperCase()).includes(filterString.toUpperCase())) {
                resultArray.push(item);
            }
            else if (description != null && (description.toUpperCase()).includes(filterString.toUpperCase())) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter',
        pure: false
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/share/input-holder/input-holder.component.css":
/*!***************************************************************!*\
  !*** ./src/app/share/input-holder/input-holder.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL2lucHV0LWhvbGRlci9pbnB1dC1ob2xkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/share/input-holder/input-holder.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/share/input-holder/input-holder.component.ts ***!
  \**************************************************************/
/*! exports provided: InputHolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputHolderComponent", function() { return InputHolderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputHolderComponent = class InputHolderComponent {
    constructor() { }
    ngOnInit() {
    }
};
InputHolderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input-holder',
        template: __webpack_require__(/*! raw-loader!./input-holder.component.html */ "./node_modules/raw-loader/index.js!./src/app/share/input-holder/input-holder.component.html"),
        styles: [__webpack_require__(/*! ./input-holder.component.css */ "./src/app/share/input-holder/input-holder.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InputHolderComponent);



/***/ }),

/***/ "./src/app/share/loader/loader.component.css":
/*!***************************************************!*\
  !*** ./src/app/share/loader/loader.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n    background: transparent;\n    margin: auto;\n}\n\n.isActive {\n    display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmUvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmUvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5pc0FjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/share/loader/loader.component.ts":
/*!**************************************************!*\
  !*** ./src/app/share/loader/loader.component.ts ***!
  \**************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.service */ "./src/app/share/loader/loader.service.ts");



let LoaderComponent = class LoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.isActive = true;
    }
    ngOnInit() {
        this.loaderService.onOpen.subscribe(() => {
            //Open
            this.isActive = true;
        });
        this.loaderService.onClose.subscribe(() => {
            //Close
            this.isActive = false;
        });
    }
};
LoaderComponent.ctorParameters = () => [
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
];
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader',
        template: __webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/index.js!./src/app/share/loader/loader.component.html"),
        styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/share/loader/loader.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
], LoaderComponent);



/***/ }),

/***/ "./src/app/share/loader/loader.service.ts":
/*!************************************************!*\
  !*** ./src/app/share/loader/loader.service.ts ***!
  \************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class LoaderService {
    constructor() {
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    start() {
        this.onOpen.emit();
    }
    done() {
        this.onClose.emit();
    }
}


/***/ }),

/***/ "./src/app/share/modal/modal.component.css":
/*!*************************************************!*\
  !*** ./src/app/share/modal/modal.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/share/modal/modal.component.ts":
/*!************************************************!*\
  !*** ./src/app/share/modal/modal.component.ts ***!
  \************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalComponent = class ModalComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ModalComponent.prototype, "state", void 0);
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/share/modal/modal.component.html"),
        styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/share/modal/modal.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ModalComponent);



/***/ }),

/***/ "./src/app/share/simple-panel/simple-panel-options.model.ts":
/*!******************************************************************!*\
  !*** ./src/app/share/simple-panel/simple-panel-options.model.ts ***!
  \******************************************************************/
/*! exports provided: SimplePanelOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePanelOptions", function() { return SimplePanelOptions; });
/* harmony import */ var _table_table_row_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../table/table-row.model */ "./src/app/share/table/table-row.model.ts");

class SimplePanelOptions {
    constructor(URI, tableRowModel) {
        this.URI = URI;
        this.tableRowModel = tableRowModel;
    }
    fromJSON(json) {
        this.tableRowModel.id = json.id;
        for (let i in this.tableRowModel.model) {
            this.tableRowModel.model[i] = json[i];
        }
        ;
    }
}
SimplePanelOptions.ctorParameters = () => [
    { type: String },
    { type: _table_table_row_model__WEBPACK_IMPORTED_MODULE_0__["TableRowModel"] }
];


/***/ }),

/***/ "./src/app/share/simple-panel/simple-panel.component.css":
/*!***************************************************************!*\
  !*** ./src/app/share/simple-panel/simple-panel.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test { \n    background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmUvc2ltcGxlLXBhbmVsL3NpbXBsZS1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmUvc2ltcGxlLXBhbmVsL3NpbXBsZS1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3QgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/share/simple-panel/simple-panel.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/share/simple-panel/simple-panel.component.ts ***!
  \**************************************************************/
/*! exports provided: SimplePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePanelComponent", function() { return SimplePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _table_table_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../table/table.model */ "./src/app/share/table/table.model.ts");
/* harmony import */ var _table_table_row_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../table/table-row.model */ "./src/app/share/table/table-row.model.ts");
/* harmony import */ var _simple_panel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simple-panel.service */ "./src/app/share/simple-panel/simple-panel.service.ts");
/* harmony import */ var _simple_panel_options_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simple-panel-options.model */ "./src/app/share/simple-panel/simple-panel-options.model.ts");
/* harmony import */ var _apiService_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../apiService/api.service */ "./src/app/share/apiService/api.service.ts");
/* harmony import */ var _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialog/dialog.service */ "./src/app/share/dialog/dialog.service.ts");
/* harmony import */ var _dialog_dialog_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog/dialog.model */ "./src/app/share/dialog/dialog.model.ts");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../loader/loader.service */ "./src/app/share/loader/loader.service.ts");
/* harmony import */ var _apiService_api_hal_pager_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../apiService/api-hal-pager.model */ "./src/app/share/apiService/api-hal-pager.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _table_table_sort_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../table/table-sort.enum */ "./src/app/share/table/table-sort.enum.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/fesm2015/angular-2-local-storage.js");















let SimplePanelComponent = class SimplePanelComponent {
    constructor(simplePanelService, apiService, dialogService, loaderService, translateService, localStorageService) {
        this.simplePanelService = simplePanelService;
        this.apiService = apiService;
        this.dialogService = dialogService;
        this.loaderService = loaderService;
        this.translateService = translateService;
        this.localStorageService = localStorageService;
        this.onExtraAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //start apihalpager in currentpage = 1
        this.apiHalPagerModel = new _apiService_api_hal_pager_model__WEBPACK_IMPORTED_MODULE_10__["ApiHalPagerModel"](1);
        this.currentSorting = {};
        this.onShowForm = false;
        this.onShowSave = false;
    }
    ngOnInit() {
        if (this.tableModel instanceof _table_table_model__WEBPACK_IMPORTED_MODULE_2__["TableModel"]) {
            this.domainCode = this.localStorageService.get('code');
            this.onGetRows();
        }
    }
    onChangePage(page) {
        //Save the new page number 
        this.apiHalPagerModel.currentPage = page;
        this.tableModel.removeBody();
        this.loaderService.start();
        this.onGetRows();
    }
    onGetRows() {
        //set the query paramaters 
        let params = {};
        if (this.simplePanelOptions instanceof _simple_panel_options_model__WEBPACK_IMPORTED_MODULE_5__["SimplePanelOptions"]) {
            this.tableModel.removeBody();
            if (this.currentKeySorting) {
                params = {
                    page: this.apiHalPagerModel.currentPage,
                    ["sort[" + this.currentKeySorting + "]"]: this.currentSorting[this.currentKeySorting]
                };
            }
            else {
                params = {
                    page: this.apiHalPagerModel.currentPage
                };
            }
            ;
            this.apiService.fetchData(this.domainCode + this.simplePanelOptions.URI, params).subscribe((response) => {
                if (response.hasCollectionResponse()) {
                    this.apiHalPagerModel = response.pager;
                    response.data.forEach((response) => {
                        // Send each row to the corresponding model
                        let row = this.onParseRow(response);
                        this.tableModel.addRow(row);
                    });
                    //BasicSort by name
                    // this.basicSort();
                }
                this.loaderService.done();
            });
        }
    }
    onSave() {
        //if null -> is a new row
        if (this.rowForm.value.id == null) {
            this.onAdd(this.rowForm.value);
            //else is modified row
        }
        else {
            this.onUpdateRow(this.rowForm.value);
        }
    }
    onShowAdd() {
        this.onShowForm = true;
    }
    onHideForm() {
        //check if the user change the input values
        if (this.rowForm.dirty) {
            let warning;
            //get the translate message and save in let
            this.translateService.get('share.dialog.warning').subscribe(response => {
                warning = response;
            });
            this.dialogService.open(new _dialog_dialog_model__WEBPACK_IMPORTED_MODULE_8__["DialogModel"](warning, () => {
                this.rowForm.reset();
                this.onShowForm = false;
                this.onShowSave = false;
            }));
        }
        else {
            this.rowForm.reset();
            this.onShowForm = false;
            this.onShowSave = false;
        }
    }
    onAdd(model) {
        this.loaderService.start();
        let rowToAdd;
        if (model) {
            rowToAdd = this.onGetDataBaseModel(model);
        }
        if (rowToAdd) {
            let json = rowToAdd.toJSON();
            this.apiService.createObj(this.domainCode + this.simplePanelOptions.URI, json).subscribe((response) => {
                if (response.hasSingleResponse()) {
                    let row = this.onParseRow(response.data);
                    this.tableModel.addRow(row);
                    this.onShowForm = false;
                }
                this.loaderService.done();
            }, (error) => {
                this.dialogService.open(new _dialog_dialog_model__WEBPACK_IMPORTED_MODULE_8__["DialogModel"](error.error.detail));
                this.loaderService.done();
            });
        }
        this.rowForm.reset();
    }
    onUpdate(row) {
        this.onShowForm = true;
        this.onShowSave = true;
        //parse the fields to input.
        if (row instanceof _table_table_row_model__WEBPACK_IMPORTED_MODULE_3__["TableRowModel"]) {
            this.rowForm.patchValue(row.model);
        }
    }
    onUpdateRow(model) {
        this.loaderService.start();
        let rowToAdd;
        //Parse inputs value to model to update
        if (model) {
            rowToAdd = this.onGetDataBaseModel(model);
        }
        if (rowToAdd) {
            let json = rowToAdd.toJSON();
            //save the model
            this.apiService.updateObj(this.domainCode + this.simplePanelOptions.URI, json).subscribe((response) => {
                if (response.hasSingleResponse()) {
                    let newRow = this.onParseRow(response.data);
                    let row = this.tableModel.findRow(model.id);
                    if (row instanceof _table_table_row_model__WEBPACK_IMPORTED_MODULE_3__["TableRowModel"]) {
                        //update the data and model 
                        row.data = newRow.data;
                        row.model = newRow.model;
                        this.tableModel.updateRow(row);
                        this.onShowForm = false;
                    }
                }
                this.loaderService.done();
            }, (error) => {
                this.dialogService.open(new _dialog_dialog_model__WEBPACK_IMPORTED_MODULE_8__["DialogModel"](error.error.detail));
                this.loaderService.done();
            });
        }
        this.rowForm.reset();
        this.loaderService.done();
    }
    onDelete(row) {
        //Open dialog
        if (row instanceof _table_table_row_model__WEBPACK_IMPORTED_MODULE_3__["TableRowModel"]) {
            let message;
            //get the translate message and save in let
            this.translateService.get('share.dialog.message').subscribe(response => {
                message = response;
            });
            this.loaderService.start();
            //row.data[1] is the name 
            this.dialogService.open(new _dialog_dialog_model__WEBPACK_IMPORTED_MODULE_8__["DialogModel"](message + row.data[1] + "?", () => {
                //Delete the usergroup
                this.apiService.deleteObj(this.domainCode + this.simplePanelOptions.URI, row.id).subscribe((response) => {
                    this.tableModel.removeRow(row.id);
                    this.loaderService.done();
                    this.onShowForm = false;
                }, (error) => {
                    this.dialogService.open(new _dialog_dialog_model__WEBPACK_IMPORTED_MODULE_8__["DialogModel"](error.error.detail));
                    this.loaderService.done();
                });
            }));
        }
    }
    onExtraActionClick(data) {
        this.onExtraAction.emit(data);
    }
    onSort(column) {
        this.loaderService.start();
        const current = this.currentSorting[column.key];
        //Switch between states   
        if (!current) {
            this.currentSorting[column.key] = _table_table_sort_enum__WEBPACK_IMPORTED_MODULE_12__["TableSortEnum"].ASC;
            this.currentKeySorting = column.key;
        }
        else if (current === _table_table_sort_enum__WEBPACK_IMPORTED_MODULE_12__["TableSortEnum"].ASC) {
            this.currentSorting[column.key] = _table_table_sort_enum__WEBPACK_IMPORTED_MODULE_12__["TableSortEnum"].DESC;
            this.currentKeySorting = column.key;
        }
        else {
            delete this.currentSorting[column.key];
            this.currentKeySorting = null;
        }
        console.log(this.currentSorting);
        this.onGetRows();
    }
    basicSort() {
        for (let row in this.tableModel.body) {
            for (let rowToComprare in this.tableModel.body) {
                let compare = this.compare(this.tableModel.body[row].data[1], this.tableModel.body[rowToComprare].data[1], true);
                if (compare == -1) {
                    let temp = this.tableModel.body[row];
                    this.tableModel.body[row] = this.tableModel.body[rowToComprare];
                    this.tableModel.body[rowToComprare] = temp;
                }
            }
        }
    }
    compare(a, b, isAsc) {
        a = a.toUpperCase();
        b = b.toUpperCase();
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
};
SimplePanelComponent.ctorParameters = () => [
    { type: _simple_panel_service__WEBPACK_IMPORTED_MODULE_4__["SimplePanelService"] },
    { type: _apiService_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] },
    { type: _loader_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"] },
    { type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_14__["LocalStorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _table_table_model__WEBPACK_IMPORTED_MODULE_2__["TableModel"])
], SimplePanelComponent.prototype, "tableModel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _simple_panel_options_model__WEBPACK_IMPORTED_MODULE_5__["SimplePanelOptions"])
], SimplePanelComponent.prototype, "simplePanelOptions", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"])
], SimplePanelComponent.prototype, "rowForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
], SimplePanelComponent.prototype, "onParseRow", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
], SimplePanelComponent.prototype, "onGetDataBaseModel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SimplePanelComponent.prototype, "onExtraAction", void 0);
SimplePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-simple-panel',
        template: __webpack_require__(/*! raw-loader!./simple-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/share/simple-panel/simple-panel.component.html"),
        providers: [_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]],
        styles: [__webpack_require__(/*! ./simple-panel.component.css */ "./src/app/share/simple-panel/simple-panel.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_simple_panel_service__WEBPACK_IMPORTED_MODULE_4__["SimplePanelService"],
        _apiService_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
        _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"],
        _loader_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"],
        angular_2_local_storage__WEBPACK_IMPORTED_MODULE_14__["LocalStorageService"]])
], SimplePanelComponent);



/***/ }),

/***/ "./src/app/share/simple-panel/simple-panel.service.ts":
/*!************************************************************!*\
  !*** ./src/app/share/simple-panel/simple-panel.service.ts ***!
  \************************************************************/
/*! exports provided: SimplePanelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePanelService", function() { return SimplePanelService; });
/* harmony import */ var _apiService_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apiService/api.service */ "./src/app/share/apiService/api.service.ts");

class SimplePanelService {
    constructor(apiService) {
        this.apiService = apiService;
    }
}
SimplePanelService.ctorParameters = () => [
    { type: _apiService_api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"] }
];


/***/ }),

/***/ "./src/app/share/table/table-header.model.ts":
/*!***************************************************!*\
  !*** ./src/app/share/table/table-header.model.ts ***!
  \***************************************************/
/*! exports provided: TableHeaderModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHeaderModel", function() { return TableHeaderModel; });
class TableHeaderModel {
    constructor(display, key) {
        this.display = display;
        this.key = key;
    }
}
TableHeaderModel.ctorParameters = () => [
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/share/table/table-row-action.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/share/table/table-row-action.model.ts ***!
  \*******************************************************/
/*! exports provided: TableRowActionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRowActionModel", function() { return TableRowActionModel; });
class TableRowActionModel {
    constructor(key, description, callback) {
        this.key = key;
        this.description = description;
        this.callback = callback;
    }
}
TableRowActionModel.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: Function }
];


/***/ }),

/***/ "./src/app/share/table/table-row.model.ts":
/*!************************************************!*\
  !*** ./src/app/share/table/table-row.model.ts ***!
  \************************************************/
/*! exports provided: TableRowModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRowModel", function() { return TableRowModel; });
class TableRowModel {
    constructor(id, model, data, extraActions) {
        this.id = id;
        this.model = model;
        this.data = data;
        this.extraActions = extraActions;
    }
}
TableRowModel.ctorParameters = () => [
    { type: Number },
    { type: undefined },
    { type: Array },
    { type: Array }
];


/***/ }),

/***/ "./src/app/share/table/table-sort.enum.ts":
/*!************************************************!*\
  !*** ./src/app/share/table/table-sort.enum.ts ***!
  \************************************************/
/*! exports provided: TableSortEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSortEnum", function() { return TableSortEnum; });
var TableSortEnum;
(function (TableSortEnum) {
    TableSortEnum["ASC"] = "ASC";
    TableSortEnum["DESC"] = "DESC";
})(TableSortEnum || (TableSortEnum = {}));


/***/ }),

/***/ "./src/app/share/table/table.component.css":
/*!*************************************************!*\
  !*** ./src/app/share/table/table.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/share/table/table.component.ts":
/*!************************************************!*\
  !*** ./src/app/share/table/table.component.ts ***!
  \************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _table_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.model */ "./src/app/share/table/table.model.ts");
/* harmony import */ var _table_row_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-row.model */ "./src/app/share/table/table-row.model.ts");
/* harmony import */ var _table_header_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-header.model */ "./src/app/share/table/table-header.model.ts");





let TableComponent = class TableComponent {
    constructor() {
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onExtraActionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filteredStatus = '';
    }
    ngOnInit() {
    }
    onDeleteRow(row) {
        if (row instanceof _table_row_model__WEBPACK_IMPORTED_MODULE_3__["TableRowModel"]) {
            this.onDelete.emit(row);
        }
    }
    onConfirmDelete() {
        this.dialog.doConfirm();
    }
    onModifiersRow(row) {
        if (row instanceof _table_row_model__WEBPACK_IMPORTED_MODULE_3__["TableRowModel"]) {
            this.onUpdate.emit(row);
        }
    }
    onSortRows(column) {
        if (column instanceof _table_header_model__WEBPACK_IMPORTED_MODULE_4__["TableHeaderModel"]) {
            this.onSort.emit(column);
            console.log(column.key);
        }
    }
    onExtraActionRow(key, row) {
        this.onExtraActionClick.emit({ key, row });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _table_model__WEBPACK_IMPORTED_MODULE_2__["TableModel"])
], TableComponent.prototype, "tableModel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TableComponent.prototype, "onDelete", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TableComponent.prototype, "onUpdate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TableComponent.prototype, "onSort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TableComponent.prototype, "onExtraActionClick", void 0);
TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table',
        template: __webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/index.js!./src/app/share/table/table.component.html"),
        styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/share/table/table.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TableComponent);



/***/ }),

/***/ "./src/app/share/table/table.model.ts":
/*!********************************************!*\
  !*** ./src/app/share/table/table.model.ts ***!
  \********************************************/
/*! exports provided: TableModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModel", function() { return TableModel; });
class TableModel {
    constructor(title, header, body) {
        this.title = title;
        this.header = header;
        this.body = body;
    }
    removeBody() {
        this.body = [];
    }
    addRow(row) {
        if (!this.body) {
            this.body = [];
        }
        this.body.unshift(row);
    }
    findRow(id) {
        return this.body.find((row) => {
            return row.model.getId() == id;
        });
    }
    removeRow(id) {
        const index = this.body.map((row) => {
            return row.id;
        }).indexOf(id);
        if (index > -1) {
            this.body.splice(index, 1);
        }
    }
    updateRow(row) {
        const index = this.body.map((row) => {
            return row.id;
        }).indexOf(row.id);
        this.body[index] = row;
    }
}
TableModel.ctorParameters = () => [
    { type: String },
    { type: Array },
    { type: Array }
];


/***/ }),

/***/ "./src/app/users/permission/permission.component.css":
/*!***********************************************************!*\
  !*** ./src/app/users/permission/permission.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3Blcm1pc3Npb24vcGVybWlzc2lvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/permission/permission.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/users/permission/permission.component.ts ***!
  \**********************************************************/
/*! exports provided: PermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionComponent", function() { return PermissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _permission_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permission.model */ "./src/app/users/permission/permission.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_share_table_table_header_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/table/table-header.model */ "./src/app/share/table/table-header.model.ts");
/* harmony import */ var src_app_share_table_table_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/table/table.model */ "./src/app/share/table/table.model.ts");
/* harmony import */ var src_app_share_table_table_row_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/table/table-row.model */ "./src/app/share/table/table-row.model.ts");
/* harmony import */ var src_app_share_simple_panel_simple_panel_options_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/share/simple-panel/simple-panel-options.model */ "./src/app/share/simple-panel/simple-panel-options.model.ts");
/* harmony import */ var src_app_share_simple_panel_simple_panel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/share/simple-panel/simple-panel.service */ "./src/app/share/simple-panel/simple-panel.service.ts");
/* harmony import */ var src_app_share_table_table_row_action_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/share/table/table-row-action.model */ "./src/app/share/table/table-row-action.model.ts");











let PermissionComponent = class PermissionComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.tableModel = new src_app_share_table_table_model__WEBPACK_IMPORTED_MODULE_6__["TableModel"]("users.permission.title", [
            new src_app_share_table_table_header_model__WEBPACK_IMPORTED_MODULE_5__["TableHeaderModel"]('Id', 'id'),
            new src_app_share_table_table_header_model__WEBPACK_IMPORTED_MODULE_5__["TableHeaderModel"]('users.headers.name', 'name'),
            new src_app_share_table_table_header_model__WEBPACK_IMPORTED_MODULE_5__["TableHeaderModel"]('users.headers.description', 'description')
        ]);
        this.simplePanelOptions = new src_app_share_simple_panel_simple_panel_options_model__WEBPACK_IMPORTED_MODULE_8__["SimplePanelOptions"](src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].permissionsURI);
        //setup the form
        this.rowForm = this.formBuilder.group({
            'id': this.formBuilder.control(null, []),
            'name': this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'description': this.formBuilder.control(null, [])
        });
    }
    onParseRow(permission) {
        //Get each row from simple panel
        let permissionToAdd = new _permission_model__WEBPACK_IMPORTED_MODULE_2__["Permission"]();
        //parse this row to Permission
        permissionToAdd.fromJSON(permission);
        let data = [permissionToAdd.id.toString(), permissionToAdd.name, permissionToAdd.description];
        //Declare the extra actions 
        let extraActions = [
            new src_app_share_table_table_row_action_model__WEBPACK_IMPORTED_MODULE_10__["TableRowActionModel"]("highlight", "Destacar"),
            new src_app_share_table_table_row_action_model__WEBPACK_IMPORTED_MODULE_10__["TableRowActionModel"]("double", "Duplicar")
        ];
        let row = new src_app_share_table_table_row_model__WEBPACK_IMPORTED_MODULE_7__["TableRowModel"](permissionToAdd.id, permissionToAdd, data, extraActions);
        return row;
    }
    onGetDataBaseModel(json) {
        //return the specific model with attributes
        let permissionToAdd = new _permission_model__WEBPACK_IMPORTED_MODULE_2__["Permission"](json.id, json.name, json.description);
        return permissionToAdd;
    }
    //Declare the functions of the actions
    onExtraAction(data) {
        switch (data.key) {
            case "highlight": {
                console.log(data.key);
            }
            case "double": {
                console.log(data.key);
                this.tableModel.addRow(data.row);
            }
        }
    }
};
PermissionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
PermissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-permission',
        template: __webpack_require__(/*! raw-loader!./permission.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/permission/permission.component.html"),
        providers: [src_app_share_simple_panel_simple_panel_service__WEBPACK_IMPORTED_MODULE_9__["SimplePanelService"]],
        styles: [__webpack_require__(/*! ./permission.component.css */ "./src/app/users/permission/permission.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], PermissionComponent);



/***/ }),

/***/ "./src/app/users/permission/permission.model.ts":
/*!******************************************************!*\
  !*** ./src/app/users/permission/permission.model.ts ***!
  \******************************************************/
/*! exports provided: Permission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permission", function() { return Permission; });
class Permission {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    getId() {
        return this.id;
    }
    fromJSON(json) {
        this.id = json.id;
        this.name = json.name;
        this.description = json.description;
    }
    toJSON() {
        let newJson = {};
        if (this.id != null) {
            newJson['id'] = this.id;
        }
        newJson['name'] = this.name;
        newJson['description'] = this.description;
        return newJson;
    }
}
Permission.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/users/user-group/user-group.component.css":
/*!***********************************************************!*\
  !*** ./src/app/users/user-group/user-group.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXItZ3JvdXAvdXNlci1ncm91cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/user-group/user-group.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/users/user-group/user-group.component.ts ***!
  \**********************************************************/
/*! exports provided: UserGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupComponent", function() { return UserGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_group_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-group.model */ "./src/app/users/user-group/user-group.model.ts");
/* harmony import */ var src_app_share_table_table_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/table/table.model */ "./src/app/share/table/table.model.ts");
/* harmony import */ var src_app_share_table_table_header_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/table/table-header.model */ "./src/app/share/table/table-header.model.ts");
/* harmony import */ var src_app_share_table_table_row_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/table/table-row.model */ "./src/app/share/table/table-row.model.ts");
/* harmony import */ var src_app_share_simple_panel_simple_panel_options_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/share/simple-panel/simple-panel-options.model */ "./src/app/share/simple-panel/simple-panel-options.model.ts");
/* harmony import */ var src_app_share_simple_panel_simple_panel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/share/simple-panel/simple-panel.service */ "./src/app/share/simple-panel/simple-panel.service.ts");










let UserGroupComponent = class UserGroupComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.tableModel = new src_app_share_table_table_model__WEBPACK_IMPORTED_MODULE_5__["TableModel"]("users.userGroup.title", [
            new src_app_share_table_table_header_model__WEBPACK_IMPORTED_MODULE_6__["TableHeaderModel"]('Id', 'id'),
            new src_app_share_table_table_header_model__WEBPACK_IMPORTED_MODULE_6__["TableHeaderModel"]('users.headers.name', 'name')
        ]);
        this.simplePanelOptions = new src_app_share_simple_panel_simple_panel_options_model__WEBPACK_IMPORTED_MODULE_8__["SimplePanelOptions"](src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].userGroupsURI);
        //setup the form
        this.rowForm = this.formBuilder.group({
            'id': this.formBuilder.control(null, []),
            'name': this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
    }
    onParseRow(userGroup) {
        //Get each row from simple panel
        let groupToAdd = new _user_group_model__WEBPACK_IMPORTED_MODULE_4__["UserGroup"]();
        //parse this row to UG
        groupToAdd.fromJSON(userGroup);
        let data = [groupToAdd.id.toString(), groupToAdd.name];
        let row = new src_app_share_table_table_row_model__WEBPACK_IMPORTED_MODULE_7__["TableRowModel"](groupToAdd.id, groupToAdd, data);
        return row;
    }
    onGetDataBaseModel(json) {
        //Return the UG modified or added
        let groupToAdd = new _user_group_model__WEBPACK_IMPORTED_MODULE_4__["UserGroup"](json.id, json.name);
        return groupToAdd;
    }
};
UserGroupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
UserGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-group',
        template: __webpack_require__(/*! raw-loader!./user-group.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/user-group/user-group.component.html"),
        providers: [src_app_share_simple_panel_simple_panel_service__WEBPACK_IMPORTED_MODULE_9__["SimplePanelService"]],
        styles: [__webpack_require__(/*! ./user-group.component.css */ "./src/app/users/user-group/user-group.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], UserGroupComponent);



/***/ }),

/***/ "./src/app/users/user-group/user-group.model.ts":
/*!******************************************************!*\
  !*** ./src/app/users/user-group/user-group.model.ts ***!
  \******************************************************/
/*! exports provided: UserGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroup", function() { return UserGroup; });
class UserGroup {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    fromJSON(json) {
        this.id = json.id;
        this.name = json.name;
    }
    toJSON() {
        let newJson = {};
        if (this.id != null) {
            newJson.id = this.id;
        }
        newJson.name = this.name;
        return newJson;
    }
}
UserGroup.ctorParameters = () => [
    { type: Number },
    { type: String }
];


/***/ }),

/***/ "./src/app/users/user/user.component.css":
/*!***********************************************!*\
  !*** ./src/app/users/user/user.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/users/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_share_simple_panel_simple_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/simple-panel/simple-panel.service */ "./src/app/share/simple-panel/simple-panel.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_share_table_table_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share/table/table.model */ "./src/app/share/table/table.model.ts");
/* harmony import */ var src_app_share_simple_panel_simple_panel_options_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/simple-panel/simple-panel-options.model */ "./src/app/share/simple-panel/simple-panel-options.model.ts");
/* harmony import */ var src_app_share_table_table_header_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/table/table-header.model */ "./src/app/share/table/table-header.model.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_share_table_table_row_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/share/table/table-row.model */ "./src/app/share/table/table-row.model.ts");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user.model */ "./src/app/users/user/user.model.ts");










let UserComponent = class UserComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.tableModel = new src_app_share_table_table_model__WEBPACK_IMPORTED_MODULE_4__["TableModel"]("Usuarios", [
            new src_app_share_table_table_header_model__WEBPACK_IMPORTED_MODULE_6__["TableHeaderModel"]('Id', 'id'),
            new src_app_share_table_table_header_model__WEBPACK_IMPORTED_MODULE_6__["TableHeaderModel"]('Email', 'email'),
            new src_app_share_table_table_header_model__WEBPACK_IMPORTED_MODULE_6__["TableHeaderModel"]('Usuario', 'user'),
            new src_app_share_table_table_header_model__WEBPACK_IMPORTED_MODULE_6__["TableHeaderModel"]('Nombre', 'fullName'),
            new src_app_share_table_table_header_model__WEBPACK_IMPORTED_MODULE_6__["TableHeaderModel"]('Apellido', 'fullName'),
        ]);
        this.simplePanelOptions = new src_app_share_simple_panel_simple_panel_options_model__WEBPACK_IMPORTED_MODULE_5__["SimplePanelOptions"](src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].usersURI);
        this.rowForm = this.formBuilder.group({
            'id': this.formBuilder.control(null, []),
            'user': this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
    }
    onParseRow(user) {
        //Get each row from simple panel
        let userToAdd = new _user_model__WEBPACK_IMPORTED_MODULE_9__["User"]();
        //parse this row to Permission
        userToAdd.fromJSON(user);
        let data = [userToAdd.id.toString(), userToAdd.user];
        let row = new src_app_share_table_table_row_model__WEBPACK_IMPORTED_MODULE_8__["TableRowModel"](userToAdd.id, userToAdd, data);
        return row;
    }
};
UserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/user/user.component.html"),
        providers: [src_app_share_simple_panel_simple_panel_service__WEBPACK_IMPORTED_MODULE_2__["SimplePanelService"]],
        styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/users/user/user.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], UserComponent);



/***/ }),

/***/ "./src/app/users/user/user.model.ts":
/*!******************************************!*\
  !*** ./src/app/users/user/user.model.ts ***!
  \******************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(id, user) {
        this.id = id;
        this.user = user;
    }
    getId() {
        return this.id;
    }
    fromJSON(json) {
        this.id = json.id;
        this.user = json.user;
    }
    toJSON() {
        let newJson = {};
        if (this.id != null) {
            newJson.id = this.id;
        }
        newJson.user = this.user;
        return newJson;
    }
}
User.ctorParameters = () => [
    { type: Number },
    { type: String }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiURL: "https://api.columnis.com/",
    codeURI: "001/columnis/clients",
    oauthURI: '/oauth',
    userGroupsURI: '/columnis/user_groups',
    permissionsURI: '/columnis/permissions',
    usersURI: '/columnis/users'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node ./src/main.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/matiasfuster/Desktop/columnis-manager/ng-columnis-manager/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node");
module.exports = __webpack_require__(/*! /Users/matiasfuster/Desktop/columnis-manager/ng-columnis-manager/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map