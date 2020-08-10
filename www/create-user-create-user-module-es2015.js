(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-user-create-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-user/create-user.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-user/create-user.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>createUser</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/create-user/create-user-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/create-user/create-user-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CreateUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserPageRoutingModule", function() { return CreateUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-user.page */ "./src/app/create-user/create-user.page.ts");




const routes = [
    {
        path: '',
        component: _create_user_page__WEBPACK_IMPORTED_MODULE_3__["CreateUserPage"]
    }
];
let CreateUserPageRoutingModule = class CreateUserPageRoutingModule {
};
CreateUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateUserPageRoutingModule);



/***/ }),

/***/ "./src/app/create-user/create-user.module.ts":
/*!***************************************************!*\
  !*** ./src/app/create-user/create-user.module.ts ***!
  \***************************************************/
/*! exports provided: CreateUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserPageModule", function() { return CreateUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-user-routing.module */ "./src/app/create-user/create-user-routing.module.ts");
/* harmony import */ var _create_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-user.page */ "./src/app/create-user/create-user.page.ts");







let CreateUserPageModule = class CreateUserPageModule {
};
CreateUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateUserPageRoutingModule"]
        ],
        declarations: [_create_user_page__WEBPACK_IMPORTED_MODULE_6__["CreateUserPage"]]
    })
], CreateUserPageModule);



/***/ }),

/***/ "./src/app/create-user/create-user.page.scss":
/*!***************************************************!*\
  !*** ./src/app/create-user/create-user.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS11c2VyL2NyZWF0ZS11c2VyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/create-user/create-user.page.ts":
/*!*************************************************!*\
  !*** ./src/app/create-user/create-user.page.ts ***!
  \*************************************************/
/*! exports provided: CreateUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserPage", function() { return CreateUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CreateUserPage = class CreateUserPage {
    constructor() { }
    ngOnInit() {
    }
};
CreateUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-user.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-user/create-user.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-user.page.scss */ "./src/app/create-user/create-user.page.scss")).default]
    })
], CreateUserPage);



/***/ })

}]);
//# sourceMappingURL=create-user-create-user-module-es2015.js.map