function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-user-create-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/create-user/create-user.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-user/create-user.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCreateUserCreateUserPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <form [formGroup]=\"registrationForm\" (ngSubmit)=\"submit()\">\n    <!-- I, as Willarts, want my professional user has name,\n    email, code, birthday, profile Image, zipcode, address and the professional type. \n    And a list of clients -->\n    <ion-avatar id=\"avatar\" >\n      <ion-icon (click)=\"selectedPhoto()\" name=\"camera\">\n      </ion-icon>\n      <!-- <ion-input id=\"profile-file\"  type=\"file\" formControlName=\"profileImage\"></ion-input> -->\n    </ion-avatar>\n\n    <ion-item>\n      <ion-input formControlName=\"name\" inputmode=\"text\" type=\"text\" placeholder=\"Nome Completo\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.name\">\n      <ng-container *ngIf=\"nameCtrl.hasError(error.type) && (nameCtrl.dirty || nameCtrl.touched)\">\n        <small class=\"error-message\">{{error.message}}</small>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-input formControlName=\"email\" inputmode=\"email\" type=\"email\" placeholder=\"E-mail\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.email\">\n      <ng-container *ngIf=\"emailCtrl.hasError(error.type) && (emailCtrl.dirty || emailCtrl.touched)\">\n        <small class=\"error-message\">{{error.message}}</small>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-input formControlName=\"password\" inputmode=\"password\" type=\"password\" placeholder=\"Senha\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.password\">\n      <ng-container *ngIf=\"passwordCtrl.hasError(error.type) && (passwordCtrl.dirty || passwordCtrl.touched)\">\n        <small class=\"error-message\">{{error.message}}</small>\n      </ng-container>\n    </div>\n\n\n    <ion-item>\n      <ion-input formControlName=\"code\" inputmode=\"text\" type=\"text\" placeholder=\"CPF\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.code\">\n      <ng-container *ngIf=\"codeCtrl.hasError(error.type) && (codeCtrl.dirty || codeCtrl.touched)\">\n        <small class=\"error-message\">{{error.message}}</small>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label>Data de Nascimento</ion-label>\n      <ion-input formControlName=\"birthday\" inputmode=\"date\" type=\"date\" placeholder=\"Data de Nascimento\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.birthday\">\n      <ng-container *ngIf=\"birthdayCtrl.hasError(error.type) && (birthdayCtrl.dirty || birthdayCtrl.touched)\">\n        <small class=\"error-message\">{{error.message}}</small>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-input formControlName=\"zipcode\" inputmode=\"text\" type=\"text\" placeholder=\"CEP\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.zipcode\">\n      <ng-container *ngIf=\"zipcodeCtrl.hasError(error.type) && (zipcodeCtrl.dirty || zipcodeCtrl.touched)\">\n        <small class=\"error-message\">{{error.message}}</small>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-input formControlName=\"address\" inputmode=\"text\" type=\"text\" placeholder=\"Endereço\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.address\">\n      <ng-container *ngIf=\"addressCtrl.hasError(error.type) && (addressCtrl.dirty || addressCtrl.touched)\">\n        <small class=\"error-message\">{{error.message}}</small>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label>Profissional da Saúde</ion-label>\n      <ion-select formControlName=\"professional\" interface=\"action-sheet\" cancel-text=\"Cancelar\">\n        <ion-select-option value=\"1\">Sim</ion-select-option>\n        <ion-select-option value=\"0\">Não</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.professional\">\n      <ng-container\n        *ngIf=\"professionalCtrl.hasError(error.type) && (professionalCtrl.dirty || professionalCtrl.touched)\">\n        <small class=\"error-message\">{{error.message}}</small>\n      </ng-container>\n    </div>\n\n    <ion-item *ngIf=\"professionalCtrl.value == 1\">\n      <ion-label>Qual sua especialidade?</ion-label>\n      <ion-select formControlName=\"type\" interface=\"action-sheet\" cancel-text=\"Cancelar\">\n        <ion-select-option *ngFor=\"let speciality of professionalSpeciality\" value=\"{{speciality.value}}\">\n          {{speciality.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-button type=\"submit\" [disabled]=\"!this.registrationForm.valid\" color=\"danger\">Cadastrar</ion-button>\n    <p>\n      <a [routerLink]=\"['/login']\">\n        << Voltar </a>\n          <br />\n    </p>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/create-user/create-user-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/create-user/create-user-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CreateUserPageRoutingModule */

  /***/
  function srcAppCreateUserCreateUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateUserPageRoutingModule", function () {
      return CreateUserPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _create_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./create-user.page */
    "./src/app/create-user/create-user.page.ts");

    var routes = [{
      path: '',
      component: _create_user_page__WEBPACK_IMPORTED_MODULE_3__["CreateUserPage"]
    }];

    var CreateUserPageRoutingModule = function CreateUserPageRoutingModule() {
      _classCallCheck(this, CreateUserPageRoutingModule);
    };

    CreateUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CreateUserPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/create-user/create-user.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/create-user/create-user.module.ts ***!
    \***************************************************/

  /*! exports provided: CreateUserPageModule */

  /***/
  function srcAppCreateUserCreateUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateUserPageModule", function () {
      return CreateUserPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _create_user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./create-user-routing.module */
    "./src/app/create-user/create-user-routing.module.ts");
    /* harmony import */


    var _create_user_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./create-user.page */
    "./src/app/create-user/create-user.page.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var CreateUserPageModule = function CreateUserPageModule() {
      _classCallCheck(this, CreateUserPageModule);
    };

    CreateUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _create_user_routing_module__WEBPACK_IMPORTED_MODULE_4__["CreateUserPageRoutingModule"]],
      declarations: [_create_user_page__WEBPACK_IMPORTED_MODULE_5__["CreateUserPage"]]
    })], CreateUserPageModule);
    /***/
  },

  /***/
  "./src/app/create-user/create-user.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/create-user/create-user.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCreateUserCreateUserPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".error-message {\n  color: red;\n}\n\nion-content {\n  --background: url('login.png') 0 0/100% 100% no-repeat;\n  display: flex;\n  --flex-direction: row;\n}\n\nion-content > form {\n  padding: 10% 10%;\n}\n\nion-content > form > ion-avatar {\n  flex: 2;\n  margin: 0% 0% 5% 40%;\n  align-self: center;\n  align-content: center;\n  border: 2px #e8ebea double;\n  background: url('avatar.svg');\n}\n\nion-content > form > ion-avatar > ion-icon {\n  margin: 25% 0% 0% 20%;\n  color: #e8ebea;\n  font-size: 35px;\n}\n\nion-content > form > ion-avatar #profile-file {\n  margin-top: -80%;\n  overflow: hidden;\n  opacity: 0;\n}\n\nion-content > form > ion-item {\n  padding-bottom: 25px;\n  --border-radius: 5px;\n}\n\nion-content > form > ion-button {\n  width: 100%;\n}\n\nion-content > form > p {\n  padding: 0 10% 0 10%;\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n}\n\nion-content > form > p > a:link {\n  text-decoration: none;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlZWNhcm5laXJvL8OBcmVhIGRlIFRyYWJhbGhvL0Vudmlyb25tZW50IElvbmljIDUvd2lsbGlhcnRzL0hlYWx0aHlNZS9zcmMvYXBwL2NyZWF0ZS11c2VyL2NyZWF0ZS11c2VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY3JlYXRlLXVzZXIvY3JlYXRlLXVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKOztBRENBO0VBQ0ksc0RBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUNFSjs7QURESTtFQUNJLGdCQUFBO0FDR1I7O0FERFE7RUFDSSxPQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQ0daOztBREZZO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0loQjs7QURGWTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDSWhCOztBRERRO0VBQ0ksb0JBQUE7RUFDQSxvQkFBQTtBQ0daOztBRERRO0VBQ0ksV0FBQTtBQ0daOztBRERRO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0daOztBREZZO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FDSWhCIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLXVzZXIvY3JlYXRlLXVzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2Uge1xuICAgIGNvbG9yOiByZWRcbn1cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9zcmMvYXNzZXRzL2ltZy9sb2dpbi5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLS1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgID4gZm9ybSB7XG4gICAgICAgIHBhZGRpbmc6IDEwJSAxMCU7XG4gICAgXG4gICAgICAgID4gaW9uLWF2YXRhciB7XG4gICAgICAgICAgICBmbGV4OiAyO1xuICAgICAgICAgICAgbWFyZ2luOiAwJSAwJSA1JSA0MCU7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXI6IDJweCAjZThlYmVhIGRvdWJsZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2F2YXRhci5zdmcpO1xuICAgICAgICAgICAgPiBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyNSUgMCUgMCUgMjAlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZThlYmVhO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNwcm9maWxlLWZpbGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC04MCU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgID4gaW9uLWl0ZW0ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgICAgICA+IGlvbi1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgPiBwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTAlIDAgMTAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICA+IGE6bGluayB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9zcmMvYXNzZXRzL2ltZy9sb2dpbi5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtLWZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5pb24tY29udGVudCA+IGZvcm0ge1xuICBwYWRkaW5nOiAxMCUgMTAlO1xufVxuaW9uLWNvbnRlbnQgPiBmb3JtID4gaW9uLWF2YXRhciB7XG4gIGZsZXg6IDI7XG4gIG1hcmdpbjogMCUgMCUgNSUgNDAlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggI2U4ZWJlYSBkb3VibGU7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2F2YXRhci5zdmcpO1xufVxuaW9uLWNvbnRlbnQgPiBmb3JtID4gaW9uLWF2YXRhciA+IGlvbi1pY29uIHtcbiAgbWFyZ2luOiAyNSUgMCUgMCUgMjAlO1xuICBjb2xvcjogI2U4ZWJlYTtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuaW9uLWNvbnRlbnQgPiBmb3JtID4gaW9uLWF2YXRhciAjcHJvZmlsZS1maWxlIHtcbiAgbWFyZ2luLXRvcDogLTgwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbn1cbmlvbi1jb250ZW50ID4gZm9ybSA+IGlvbi1pdGVtIHtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaW9uLWNvbnRlbnQgPiBmb3JtID4gaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgPiBmb3JtID4gcCB7XG4gIHBhZGRpbmc6IDAgMTAlIDAgMTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tY29udGVudCA+IGZvcm0gPiBwID4gYTpsaW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/create-user/create-user.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/create-user/create-user.page.ts ***!
    \*************************************************/

  /*! exports provided: CreateUserPage */

  /***/
  function srcAppCreateUserCreateUserPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateUserPage", function () {
      return CreateUserPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");

    var CreateUserPage = /*#__PURE__*/function () {
      function CreateUserPage(formBuilder, platformCtrl, loadingController, webViewCtrl, actionSheetCtrl, camera) {
        _classCallCheck(this, CreateUserPage);

        this.formBuilder = formBuilder;
        this.platformCtrl = platformCtrl;
        this.loadingController = loadingController;
        this.webViewCtrl = webViewCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.professionalSpeciality = [{
          name: 'Yoga',
          value: 1
        }, {
          name: 'Pilates',
          value: 2
        }, {
          name: 'Psicologia',
          value: 4
        }, {
          name: 'Psicanalise',
          value: 5
        }, {
          name: 'Terapia Ocupacional',
          value: 5
        }, {
          name: 'Nutrição',
          value: 6
        }, {
          name: 'Endrocrinologia',
          value: 7
        }, {
          name: 'Quiropraxia',
          value: 8
        }, {
          name: 'Personal Trainer',
          value: 9
        }];
        this.registrationForm = this.formBuilder.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          email: [' ', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9]+.[a-zA-Z]{2,4}$')]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(?=.*[A-Z])(?=.*[0-9]).{8,}')]],
          code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$')]],
          birthday: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          profileImage: [new FileReader(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          professional: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          zipcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{5}-[0-9]{3}$')]],
          address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          type: ['']
        });
        this.errorMessages = {
          name: [{
            type: 'required',
            message: 'Coloque seu Nome Completo'
          }],
          email: [{
            type: 'required',
            message: 'Coloque seu Email'
          }, {
            type: 'pattern',
            message: 'Email Inválido. Preencha com um Email Válido'
          }],
          password: [{
            type: 'required',
            message: 'Coloque uma Senha'
          }, {
            type: 'pattern',
            message: 'A senha precisa ter no minimo 8 caracteres e pelo menos uma letra maiúscula e um número.'
          }],
          code: [{
            type: 'required',
            message: 'Coloque seu CPF'
          }, {
            type: 'pattern',
            message: 'CPF Inválido. Preencha com um CPF Válido'
          }],
          birthday: [{
            type: 'required',
            message: 'Coloque sua Data de Nascimento'
          }],
          profileImage: [{
            type: 'required',
            message: 'Faça um Upload da sua Foto de Perfil'
          }],
          professional: [{
            type: 'required',
            message: 'Selecione seu Tipo de Perfil'
          }],
          zipcode: [{
            type: 'required',
            message: 'Coloque seu CEP'
          }, {
            type: 'pattern',
            message: 'CEP Inválido. Preencha com um CEP Válido'
          }],
          address: [{
            type: 'required',
            message: 'Coloque seu Endereço'
          }]
        };
      }

      _createClass(CreateUserPage, [{
        key: "submit",
        value: function submit() {
          console.log('Form', this.registrationForm.value);
        }
      }, {
        key: "pathForImage",
        value: function pathForImage(img) {
          if (img === null) {
            return '';
          } else {
            var converted = this.webViewCtrl.convertFileSrc(img);
            return converted;
          }
        }
      }, {
        key: "selectedPhoto",
        value: function selectedPhoto() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.actionSheetCtrl.create({
                      header: 'Selecione sua foto',
                      buttons: [{
                        text: 'Carregar da Galeria',
                        handler: function handler() {
                          _this.takePhoto(_this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                      }, {
                        text: 'Tirar Selfie',
                        handler: function handler() {
                          _this.takePhoto(_this.camera.PictureSourceType.CAMERA);
                        }
                      }, {
                        text: 'Cancelar',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    actionSheet = _context.sent;
                    actionSheet.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "takePhoto",
        value: function takePhoto(sourceType) {
          var _this2 = this;

          var avatarElement = document.getElementById('avatar');
          var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
          };
          this.camera.getPicture(options).then(function (photoPath) {
            console.log(photoPath);
            _this2.imagePath = photoPath;
            avatarElement.style.backgroundImage = 'url(' + _this2.pathForImage(_this2.imagePath) + ')';
            avatarElement.style.backgroundPosition = '0 0/100% 100% no-repeat;';
            avatarElement.style.backgroundSize = '100%';
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.platformCtrl.ready().then(function () {});
        }
      }, {
        key: "nameCtrl",
        get: function get() {
          return this.registrationForm.get('name');
        }
      }, {
        key: "emailCtrl",
        get: function get() {
          return this.registrationForm.get('email');
        }
      }, {
        key: "codeCtrl",
        get: function get() {
          return this.registrationForm.get('code');
        }
      }, {
        key: "birthdayCtrl",
        get: function get() {
          return this.registrationForm.get('birthday');
        }
      }, {
        key: "profileImageCtrl",
        get: function get() {
          return this.registrationForm.get('profileImage');
        }
      }, {
        key: "professionalCtrl",
        get: function get() {
          return this.registrationForm.get('professional');
        }
      }, {
        key: "zipcodeCtrl",
        get: function get() {
          return this.registrationForm.get('zipcode');
        }
      }, {
        key: "typeCtrl",
        get: function get() {
          return this.registrationForm.get('type');
        }
      }, {
        key: "addressCtrl",
        get: function get() {
          return this.registrationForm.get('address');
        }
      }, {
        key: "passwordCtrl",
        get: function get() {
          return this.registrationForm.get('password');
        }
      }]);

      return CreateUserPage;
    }();

    CreateUserPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__["WebView"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]
      }];
    };

    CreateUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-user',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./create-user.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/create-user/create-user.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./create-user.page.scss */
      "./src/app/create-user/create-user.page.scss"))["default"]]
    })], CreateUserPage);
    /***/
  }
}]);
//# sourceMappingURL=create-user-create-user-module-es5.js.map