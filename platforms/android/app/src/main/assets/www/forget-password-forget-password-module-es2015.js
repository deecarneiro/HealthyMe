(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forget-password-forget-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forget-password/forget-password.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forget-password/forget-password.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"logo\">\n\n  </div>\n  <form>\n    <ion-item>\n      <ion-input type=\"text\" name=\"email\" placeholder=\"Email\"></ion-input>\n    </ion-item>\n    <ion-button color=\"danger\">Enviar</ion-button>\n    <p>\n      <a [routerLink]=\"['/login']\"> << Voltar </a>\n      <br />\n    </p>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/forget-password/forget-password-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/forget-password/forget-password-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ForgetPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageRoutingModule", function() { return ForgetPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _forget_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forget-password.page */ "./src/app/forget-password/forget-password.page.ts");




const routes = [
    {
        path: '',
        component: _forget_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgetPasswordPage"]
    }
];
let ForgetPasswordPageRoutingModule = class ForgetPasswordPageRoutingModule {
};
ForgetPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgetPasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/forget-password/forget-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/forget-password/forget-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageModule", function() { return ForgetPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget-password-routing.module */ "./src/app/forget-password/forget-password-routing.module.ts");
/* harmony import */ var _forget_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget-password.page */ "./src/app/forget-password/forget-password.page.ts");







let ForgetPasswordPageModule = class ForgetPasswordPageModule {
};
ForgetPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordPageRoutingModule"]
        ],
        declarations: [_forget_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPasswordPage"]]
    })
], ForgetPasswordPageModule);



/***/ }),

/***/ "./src/app/forget-password/forget-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/forget-password/forget-password.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('login.png') 0 0/100% 100% no-repeat;\n  display: flex;\n  --flex-direction: row;\n}\nion-content > div.logo {\n  flex: 2;\n  margin: 20% 20% 0%;\n  background: url('logo.png') 0 0/100% 100% no-repeat;\n  width: 220px;\n  height: 150px;\n  align-self: center;\n  align-content: center;\n}\nion-content > form {\n  padding: 10% 10%;\n}\nion-content > form > ion-item {\n  padding-bottom: 25px;\n  --border-radius: 5px;\n}\nion-content > form > ion-button {\n  width: 100%;\n}\nion-content > form > p {\n  padding: 0 10% 0 10%;\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n}\nion-content > form > p > a:link {\n  text-decoration: none;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlZWNhcm5laXJvL8OBcmVhIGRlIFRyYWJhbGhvL0Vudmlyb25tZW50IElvbmljIDUvd2lsbGlhcnRzL0hlYWx0aHlNZS9zcmMvYXBwL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNEQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FDQ0o7QURBSTtFQUNJLE9BQUE7RUFDQSxrQkFBQTtFQUNBLG1EQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDRVI7QURBSTtFQUNJLGdCQUFBO0FDRVI7QUREUTtFQUNJLG9CQUFBO0VBQ0Esb0JBQUE7QUNHWjtBRERRO0VBQ0ksV0FBQTtBQ0daO0FERFE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDR1Y7QURGVTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQ0lkIiwiZmlsZSI6InNyYy9hcHAvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9zcmMvYXNzZXRzL2ltZy9sb2dpbi5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLS1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgID5kaXYubG9nb3tcbiAgICAgICAgZmxleDogMjtcbiAgICAgICAgbWFyZ2luOiAyMCUgMjAlIDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vc3JjL2Fzc2V0cy9pbWcvbG9nby5wbmcpICAgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgID5mb3Jte1xuICAgICAgICBwYWRkaW5nOiAxMCUgMTAlO1xuICAgICAgICA+aW9uLWl0ZW17XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICAgID5pb24tYnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgPnB7XG4gICAgICAgICAgcGFkZGluZzogMCAxMCUgMCAxMCU7ICBcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgID5hOmxpbmt7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9zcmMvYXNzZXRzL2ltZy9sb2dpbi5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtLWZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5pb24tY29udGVudCA+IGRpdi5sb2dvIHtcbiAgZmxleDogMjtcbiAgbWFyZ2luOiAyMCUgMjAlIDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vc3JjL2Fzc2V0cy9pbWcvbG9nby5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgPiBmb3JtIHtcbiAgcGFkZGluZzogMTAlIDEwJTtcbn1cbmlvbi1jb250ZW50ID4gZm9ybSA+IGlvbi1pdGVtIHtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaW9uLWNvbnRlbnQgPiBmb3JtID4gaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgPiBmb3JtID4gcCB7XG4gIHBhZGRpbmc6IDAgMTAlIDAgMTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tY29udGVudCA+IGZvcm0gPiBwID4gYTpsaW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/forget-password/forget-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/forget-password/forget-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ForgetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPage", function() { return ForgetPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ForgetPasswordPage = class ForgetPasswordPage {
    constructor() { }
    ngOnInit() {
    }
};
ForgetPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forget-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forget-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forget-password/forget-password.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forget-password.page.scss */ "./src/app/forget-password/forget-password.page.scss")).default]
    })
], ForgetPasswordPage);



/***/ })

}]);
//# sourceMappingURL=forget-password-forget-password-module-es2015.js.map