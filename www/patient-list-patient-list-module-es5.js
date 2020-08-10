function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient-list-patient-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/patient-list/patient-list.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient-list/patient-list.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPatientListPatientListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>patientList</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/patient-list/patient-list-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/patient-list/patient-list-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: PatientListPageRoutingModule */

  /***/
  function srcAppPatientListPatientListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientListPageRoutingModule", function () {
      return PatientListPageRoutingModule;
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


    var _patient_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./patient-list.page */
    "./src/app/patient-list/patient-list.page.ts");

    var routes = [{
      path: '',
      component: _patient_list_page__WEBPACK_IMPORTED_MODULE_3__["PatientListPage"]
    }];

    var PatientListPageRoutingModule = function PatientListPageRoutingModule() {
      _classCallCheck(this, PatientListPageRoutingModule);
    };

    PatientListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PatientListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/patient-list/patient-list.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/patient-list/patient-list.module.ts ***!
    \*****************************************************/

  /*! exports provided: PatientListPageModule */

  /***/
  function srcAppPatientListPatientListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientListPageModule", function () {
      return PatientListPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _patient_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./patient-list-routing.module */
    "./src/app/patient-list/patient-list-routing.module.ts");
    /* harmony import */


    var _patient_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./patient-list.page */
    "./src/app/patient-list/patient-list.page.ts");

    var PatientListPageModule = function PatientListPageModule() {
      _classCallCheck(this, PatientListPageModule);
    };

    PatientListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _patient_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["PatientListPageRoutingModule"]],
      declarations: [_patient_list_page__WEBPACK_IMPORTED_MODULE_6__["PatientListPage"]]
    })], PatientListPageModule);
    /***/
  },

  /***/
  "./src/app/patient-list/patient-list.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/patient-list/patient-list.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPatientListPatientListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtbGlzdC9wYXRpZW50LWxpc3QucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/patient-list/patient-list.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/patient-list/patient-list.page.ts ***!
    \***************************************************/

  /*! exports provided: PatientListPage */

  /***/
  function srcAppPatientListPatientListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientListPage", function () {
      return PatientListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PatientListPage = /*#__PURE__*/function () {
      function PatientListPage() {
        _classCallCheck(this, PatientListPage);
      }

      _createClass(PatientListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PatientListPage;
    }();

    PatientListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-patient-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./patient-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/patient-list/patient-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./patient-list.page.scss */
      "./src/app/patient-list/patient-list.page.scss"))["default"]]
    })], PatientListPage);
    /***/
  }
}]);
//# sourceMappingURL=patient-list-patient-list-module-es5.js.map