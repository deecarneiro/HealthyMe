(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["professional-list-professional-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/professional-list/professional-list.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/professional-list/professional-list.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>professionalList</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/professional-list/professional-list-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/professional-list/professional-list-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProfessionalListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalListPageRoutingModule", function() { return ProfessionalListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _professional_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./professional-list.page */ "./src/app/professional-list/professional-list.page.ts");




const routes = [
    {
        path: '',
        component: _professional_list_page__WEBPACK_IMPORTED_MODULE_3__["ProfessionalListPage"]
    }
];
let ProfessionalListPageRoutingModule = class ProfessionalListPageRoutingModule {
};
ProfessionalListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfessionalListPageRoutingModule);



/***/ }),

/***/ "./src/app/professional-list/professional-list.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/professional-list/professional-list.module.ts ***!
  \***************************************************************/
/*! exports provided: ProfessionalListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalListPageModule", function() { return ProfessionalListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _professional_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./professional-list-routing.module */ "./src/app/professional-list/professional-list-routing.module.ts");
/* harmony import */ var _professional_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./professional-list.page */ "./src/app/professional-list/professional-list.page.ts");







let ProfessionalListPageModule = class ProfessionalListPageModule {
};
ProfessionalListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _professional_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfessionalListPageRoutingModule"]
        ],
        declarations: [_professional_list_page__WEBPACK_IMPORTED_MODULE_6__["ProfessionalListPage"]]
    })
], ProfessionalListPageModule);



/***/ }),

/***/ "./src/app/professional-list/professional-list.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/professional-list/professional-list.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc3Npb25hbC1saXN0L3Byb2Zlc3Npb25hbC1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/professional-list/professional-list.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/professional-list/professional-list.page.ts ***!
  \*************************************************************/
/*! exports provided: ProfessionalListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalListPage", function() { return ProfessionalListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProfessionalListPage = class ProfessionalListPage {
    constructor() { }
    ngOnInit() {
    }
};
ProfessionalListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-professional-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./professional-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/professional-list/professional-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./professional-list.page.scss */ "./src/app/professional-list/professional-list.page.scss")).default]
    })
], ProfessionalListPage);



/***/ })

}]);
//# sourceMappingURL=professional-list-professional-list-module-es2015.js.map