webpackJsonp(["pages.module"],{

/***/ "./src/app/main/content/pages/authentication/forgot-password-2/forgot-password-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"forgot-password\" fxLayout=\"row\" fxLayoutAlign=\"start\">\n\n    <div id=\"forgot-password-intro\" fxFlex fxHide fxShow.gt-xs>\n\n        <div class=\"logo\" *fuseIfOnDom [@animate]=\"{value:'*',params:{scale:'0.2'}}\">\n            <img src=\"assets/images/logos/logo.png\">\n        </div>\n\n        <div class=\"title\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',y:'25px'}}\">\n            Welcome to the FUSE!\n        </div>\n\n        <div class=\"description\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat,\n            vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis viverra.\n        </div>\n\n    </div>\n\n    <div id=\"forgot-password-form-wrapper\" fusePerfectScrollbar *fuseIfOnDom\n         [@animate]=\"{value:'*',params:{delay:'300ms',x:'100%'}}\">\n\n        <div id=\"forgot-password-form\">\n\n            <div class=\"logo\" fxHide.gt-xs>\n                <span>F</span>\n            </div>\n\n            <div class=\"title\">RECOVER YOUR PASSWORD</div>\n\n            <form name=\"forgoPasswordForm\" [formGroup]=\"forgotPasswordForm\" novalidate>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"forgotPasswordFormErrors.email.required\">\n                        Email is required\n                    </mat-error>\n                    <mat-error *ngIf=\"!forgotPasswordFormErrors.email.required && forgotPasswordFormErrors.email.email\">\n                        Please enter a valid email address\n                    </mat-error>\n                </mat-form-field>\n\n                <button mat-raised-button class=\"submit-button\" color=\"accent\"\n                        aria-label=\"SEND RESET LINK\" [disabled]=\"forgotPasswordForm.invalid\">\n                    SEND RESET LINK\n                </button>\n\n            </form>\n\n            <div class=\"login\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login-2'\">Go back to login</a>\n            </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/forgot-password-2/forgot-password-2.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #forgot-password {\n  width: 100%;\n  overflow: hidden;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #forgot-password #forgot-password-intro {\n    padding: 128px;\n    color: white; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #forgot-password #forgot-password-intro {\n        padding: 128px 64px; } }\n:host #forgot-password #forgot-password-intro .logo {\n      width: 128px;\n      margin-bottom: 32px; }\n:host #forgot-password #forgot-password-intro .title {\n      font-size: 42px;\n      font-weight: 300;\n      line-height: 1; }\n:host #forgot-password #forgot-password-intro .description {\n      padding-top: 16px;\n      font-size: 14px;\n      max-width: 600px;\n      color: rgba(255, 255, 255, 0.54); }\n:host #forgot-password #forgot-password-form-wrapper {\n    overflow: auto;\n    width: 400px;\n    min-width: 400px;\n    max-width: 400px;\n    background: #FFFFFF;\n    -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #forgot-password #forgot-password-form-wrapper {\n        width: 360px;\n        min-width: 360px;\n        max-width: 360px; } }\n@media screen and (max-width: 599px) {\n      :host #forgot-password #forgot-password-form-wrapper {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form {\n      padding: 128px 48px 48px 48px; }\n@media screen and (max-width: 599px) {\n        :host #forgot-password #forgot-password-form-wrapper #forgot-password-form {\n          text-align: center;\n          padding: 24px; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .logo {\n        width: 128px;\n        height: 128px;\n        line-height: 128px;\n        font-size: 86px;\n        font-weight: 500;\n        text-align: center;\n        margin: 32px auto;\n        color: #FFFFFF;\n        border-radius: 2px;\n        background: #058ec0; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .title {\n        font-size: 21px; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .description {\n        padding-top: 8px; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form {\n        width: 100%;\n        padding-top: 32px; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form mat-form-field {\n          width: 100%; }\n@media screen and (max-width: 599px) {\n            :host #forgot-password #forgot-password-form-wrapper #forgot-password-form form mat-form-field {\n              width: 80%; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form .submit-button {\n          width: 100%;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #forgot-password #forgot-password-form-wrapper #forgot-password-form form .submit-button {\n              width: 80%; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .login {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .login .text {\n          margin-right: 8px; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/forgot-password-2/forgot-password-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseForgotPassword2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__ = __webpack_require__("./src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseForgotPassword2Component = /** @class */ (function () {
    function FuseForgotPassword2Component(fuseConfig, formBuilder) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.forgotPasswordFormErrors = {
            email: {}
        };
    }
    FuseForgotPassword2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]]
        });
        this.forgotPasswordForm.valueChanges.subscribe(function () {
            _this.onForgotPasswordFormValuesChanged();
        });
    };
    FuseForgotPassword2Component.prototype.onForgotPasswordFormValuesChanged = function () {
        for (var field in this.forgotPasswordFormErrors) {
            if (!this.forgotPasswordFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.forgotPasswordFormErrors[field] = {};
            // Get the control
            var control = this.forgotPasswordForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.forgotPasswordFormErrors[field] = control.errors;
            }
        }
    };
    FuseForgotPassword2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-forgot-password-2',
            template: __webpack_require__("./src/app/main/content/pages/authentication/forgot-password-2/forgot-password-2.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/authentication/forgot-password-2/forgot-password-2.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseForgotPassword2Component);
    return FuseForgotPassword2Component;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/forgot-password-2/forgot-password-2.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPassword2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_password_2_component__ = __webpack_require__("./src/app/main/content/pages/authentication/forgot-password-2/forgot-password-2.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/forgot-password-2',
        component: __WEBPACK_IMPORTED_MODULE_4__forgot_password_2_component__["a" /* FuseForgotPassword2Component */]
    }
];
var ForgotPassword2Module = /** @class */ (function () {
    function ForgotPassword2Module() {
    }
    ForgotPassword2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__forgot_password_2_component__["a" /* FuseForgotPassword2Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
            ]
        })
    ], ForgotPassword2Module);
    return ForgotPassword2Module;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"forgot-password\" fxLayout=\"column\" fusePerfectScrollbar>\n\n    <div id=\"forgot-password-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\" *fuseIfOnDom\n         [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n\n        <div id=\"forgot-password-form\">\n\n            <div class=\"logo\">\n                <img src=\"assets/images/logos/logo.png\">\n            </div>\n\n            <div class=\"title\">RECOVER YOUR PASSWORD</div>\n\n            <form name=\"forgotPasswordForm\" [formGroup]=\"forgotPasswordForm\" novalidate>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"forgotPasswordFormErrors.email.required\">\n                        Email is required\n                    </mat-error>\n                    <mat-error *ngIf=\"!forgotPasswordFormErrors.email.required && forgotPasswordFormErrors.email.email\">\n                        Please enter a valid email address\n                    </mat-error>\n                </mat-form-field>\n\n                <button mat-raised-button class=\"submit-button\" color=\"accent\"\n                        aria-label=\"SEND RESET LINK\" [disabled]=\"forgotPasswordForm.invalid\">\n                    SEND RESET LINK\n                </button>\n            </form>\n\n            <div class=\"login\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login'\">Go back to login</a>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/forgot-password/forgot-password.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #forgot-password {\n  width: 100%;\n  overflow: auto;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #forgot-password #forgot-password-form-wrapper {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #forgot-password #forgot-password-form-wrapper {\n        padding: 16px; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form {\n      width: 384px;\n      max-width: 384px;\n      padding: 32px;\n      text-align: center;\n      background: #FFFFFF;\n      -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n              box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        :host #forgot-password #forgot-password-form-wrapper #forgot-password-form {\n          padding: 24px;\n          width: 100%; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .logo {\n        width: 128px;\n        margin: 32px auto; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .title {\n        font-size: 20px;\n        margin: 16px 0 32px 0; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form {\n        width: 100%;\n        text-align: left; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form mat-form-field {\n          width: 100%; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #forgot-password #forgot-password-form-wrapper #forgot-password-form form .submit-button {\n              width: 90%; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .login {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .login .text {\n          margin-right: 8px; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__ = __webpack_require__("./src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseForgotPasswordComponent = /** @class */ (function () {
    function FuseForgotPasswordComponent(fuseConfig, formBuilder) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.forgotPasswordFormErrors = {
            email: {}
        };
    }
    FuseForgotPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]]
        });
        this.forgotPasswordForm.valueChanges.subscribe(function () {
            _this.onForgotPasswordFormValuesChanged();
        });
    };
    FuseForgotPasswordComponent.prototype.onForgotPasswordFormValuesChanged = function () {
        for (var field in this.forgotPasswordFormErrors) {
            if (!this.forgotPasswordFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.forgotPasswordFormErrors[field] = {};
            // Get the control
            var control = this.forgotPasswordForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.forgotPasswordFormErrors[field] = control.errors;
            }
        }
    };
    FuseForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-forgot-password',
            template: __webpack_require__("./src/app/main/content/pages/authentication/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/authentication/forgot-password/forgot-password.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseForgotPasswordComponent);
    return FuseForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/forgot-password/forgot-password.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_password_component__ = __webpack_require__("./src/app/main/content/pages/authentication/forgot-password/forgot-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/forgot-password',
        component: __WEBPACK_IMPORTED_MODULE_4__forgot_password_component__["a" /* FuseForgotPasswordComponent */]
    }
];
var ForgotPasswordModule = /** @class */ (function () {
    function ForgotPasswordModule() {
    }
    ForgotPasswordModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__forgot_password_component__["a" /* FuseForgotPasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
            ]
        })
    ], ForgotPasswordModule);
    return ForgotPasswordModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/lock/lock.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"lock\" fxLayout=\"column\" fusePerfectScrollbar>\n\n    <div id=\"lock-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div id=\"lock-form\" *fuseIfOnDom [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n\n            <div class=\"lock-form-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\n                 fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"start center\">\n\n                <div class=\"avatar-container\">\n                    <img class=\"avatar big\" src=\"assets/images/avatars/katherine.jpg\">\n                    <mat-icon class=\"s-36\">lock</mat-icon>\n                </div>\n\n                <div>\n                    <div class=\"title\">YOUR SESSION IS LOCKED</div>\n                    <div class=\"subtitle\">\n                        Due to inactivity, your session is locked. Enter your password to continue.\n                    </div>\n                </div>\n\n            </div>\n\n            <form name=\"lockForm\" [formGroup]=\"lockForm\" novalidate>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Username\" formControlName=\"username\">\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Password\" formControlName=\"password\">\n                    <mat-error *ngIf=\"lockFormErrors.password.required\">\n                        Password is required\n                    </mat-error>\n                </mat-form-field>\n\n                <button mat-raised-button class=\"submit-button\" color=\"accent\"\n                        aria-label=\"UNLOCK\" [disabled]=\"lockForm.invalid\">\n                    UNLOCK\n                </button>\n\n            </form>\n\n            <div class=\"message\">\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login'\">Are you not Katherine?</a>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/lock/lock.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #lock {\n  width: 100%;\n  overflow: auto;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #lock #lock-form-wrapper {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #lock #lock-form-wrapper {\n        padding: 16px; } }\n:host #lock #lock-form-wrapper #lock-form {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      width: 420px;\n      max-width: 420px;\n      padding: 48px 32px 32px 32px;\n      background: #FFFFFF;\n      -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n              box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        :host #lock #lock-form-wrapper #lock-form {\n          padding: 24px;\n          width: 100%; } }\n:host #lock #lock-form-wrapper #lock-form .lock-form-header {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-flex: 1;\n            -ms-flex: 1 0 auto;\n                flex: 1 0 auto; }\n:host #lock #lock-form-wrapper #lock-form .lock-form-header .avatar-container {\n          position: relative;\n          margin-right: 16px; }\n:host #lock #lock-form-wrapper #lock-form .lock-form-header .avatar-container .avatar {\n            margin: 0; }\n@media screen and (max-width: 599px) {\n            :host #lock #lock-form-wrapper #lock-form .lock-form-header .avatar-container {\n              margin-right: 0; } }\n:host #lock #lock-form-wrapper #lock-form .lock-form-header .avatar-container mat-icon {\n            position: absolute;\n            bottom: 0;\n            right: 0;\n            color: #f44336; }\n:host #lock #lock-form-wrapper #lock-form .lock-form-header .title {\n          font-size: 20px;\n          margin-bottom: 8px; }\n@media screen and (max-width: 599px) {\n            :host #lock #lock-form-wrapper #lock-form .lock-form-header .title {\n              margin-top: 16px;\n              text-align: center; } }\n:host #lock #lock-form-wrapper #lock-form .lock-form-header .subtitle {\n          color: rgba(0, 0, 0, 0.54); }\n@media screen and (max-width: 599px) {\n            :host #lock #lock-form-wrapper #lock-form .lock-form-header .subtitle {\n              text-align: center; } }\n:host #lock #lock-form-wrapper #lock-form form {\n        width: 100%;\n        margin: 32px 0 0 0; }\n:host #lock #lock-form-wrapper #lock-form form mat-form-field {\n          width: 100%; }\n:host #lock #lock-form-wrapper #lock-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #lock #lock-form-wrapper #lock-form form .submit-button {\n              width: 90%; } }\n:host #lock #lock-form-wrapper #lock-form .message {\n        font-weight: 500;\n        text-align: center; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/lock/lock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseLockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__ = __webpack_require__("./src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseLockComponent = /** @class */ (function () {
    function FuseLockComponent(fuseConfig, formBuilder) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.lockFormErrors = {
            username: {},
            password: {}
        };
    }
    FuseLockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lockForm = this.formBuilder.group({
            username: [
                {
                    value: 'Katherine',
                    disabled: true
                }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required
            ],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]
        });
        this.lockForm.valueChanges.subscribe(function () {
            _this.onLockFormValuesChanged();
        });
    };
    FuseLockComponent.prototype.onLockFormValuesChanged = function () {
        for (var field in this.lockFormErrors) {
            if (!this.lockFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.lockFormErrors[field] = {};
            // Get the control
            var control = this.lockForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.lockFormErrors[field] = control.errors;
            }
        }
    };
    FuseLockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-lock',
            template: __webpack_require__("./src/app/main/content/pages/authentication/lock/lock.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/authentication/lock/lock.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseLockComponent);
    return FuseLockComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/lock/lock.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lock_component__ = __webpack_require__("./src/app/main/content/pages/authentication/lock/lock.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/lock',
        component: __WEBPACK_IMPORTED_MODULE_4__lock_component__["a" /* FuseLockComponent */]
    }
];
var LockModule = /** @class */ (function () {
    function LockModule() {
    }
    LockModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__lock_component__["a" /* FuseLockComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ]
        })
    ], LockModule);
    return LockModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/login-2/login-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login\" fxLayout=\"row\" fxLayoutAlign=\"start\">\n\n    <div id=\"login-intro\" fxFlex fxHide fxShow.gt-xs>\n\n        <div class=\"logo\" *fuseIfOnDom [@animate]=\"{value:'*',params:{scale:'0.2'}}\">\n            <img src=\"assets/images/logos/logo-colored.png\">\n        </div>\n\n        <div class=\"title\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',y:'25px'}}\">\n            Welcome to the FUSE!\n        </div>\n\n        <div class=\"description\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat,\n            vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis viverra.\n        </div>\n\n    </div>\n\n    <div id=\"login-form-wrapper\" fusePerfectScrollbar *fuseIfOnDom\n         [@animate]=\"{value:'*',params:{delay:'300ms',x:'100%'}}\">\n\n        <div id=\"login-form\">\n\n            <div class=\"logo\" fxHide.gt-xs>\n                <span>F</span>\n            </div>\n\n            <div class=\"title\">LOGIN TO YOUR ACCOUNT</div>\n\n            <form name=\"loginForm\" [formGroup]=\"loginForm\" novalidate>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"loginFormErrors.email.required\">\n                        Email is required\n                    </mat-error>\n                    <mat-error *ngIf=\"!loginFormErrors.email.required && loginFormErrors.email.email\">\n                        Please enter a valid email address\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                    <mat-error *ngIf=\"loginFormErrors.password.required\">\n                        Password is required\n                    </mat-error>\n                </mat-form-field>\n\n                <div class=\"remember-forgot-password\" fxLayout=\"row\" fxLayout.xs=\"column\"\n                     fxLayoutAlign=\"space-between center\">\n                    <mat-checkbox class=\"remember-me\" aria-label=\"Remember Me\">\n                        Remember Me\n                    </mat-checkbox>\n\n                    <a class=\"forgot-password\" [routerLink]=\"'/pages/auth/forgot-password-2'\">\n                        Forgot Password?\n                    </a>\n                </div>\n\n                <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"LOGIN\"\n                        [disabled]=\"loginForm.invalid\">\n                    LOGIN\n                </button>\n\n            </form>\n\n            <div class=\"separator\">\n                <span class=\"text\">OR</span>\n            </div>\n\n            <div fxLayout=\"column\" fxLayoutAlign=\"start center\">\n\n                <button mat-raised-button class=\"google\">\n                    Log in with Google\n                </button>\n\n                <button mat-raised-button class=\"facebook\">\n                    Log in with Facebook\n                </button>\n\n            </div>\n\n            <div class=\"register\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <span class=\"text\">Don't have an account?</span>\n                <a class=\"link\" [routerLink]=\"'/pages/auth/register-2'\">Create an account</a>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/login-2/login-2.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #login {\n  width: 100%;\n  overflow: hidden;\n  background: url(\"/assets/images/backgrounds/bg-login.jpg\") no-repeat;\n  background-size: cover; }\n:host #login #login-intro {\n    padding: 128px;\n    color: white; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #login #login-intro {\n        padding: 128px 64px; } }\n:host #login #login-intro .logo {\n      width: 128px;\n      margin-bottom: 32px; }\n:host #login #login-intro .title {\n      font-size: 42px;\n      font-weight: 300;\n      line-height: 1; }\n:host #login #login-intro .description {\n      padding-top: 16px;\n      font-size: 14px;\n      max-width: 600px;\n      color: rgba(255, 255, 255, 0.54); }\n:host #login #login-form-wrapper {\n    overflow: auto;\n    width: 400px;\n    min-width: 400px;\n    max-width: 400px;\n    background: #FFFFFF;\n    -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #login #login-form-wrapper {\n        width: 360px;\n        min-width: 360px;\n        max-width: 360px; } }\n@media screen and (max-width: 599px) {\n      :host #login #login-form-wrapper {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%; } }\n:host #login #login-form-wrapper #login-form {\n      padding: 128px 48px 48px 48px; }\n@media screen and (max-width: 599px) {\n        :host #login #login-form-wrapper #login-form {\n          text-align: center;\n          padding: 24px; } }\n:host #login #login-form-wrapper #login-form .logo {\n        width: 128px;\n        height: 128px;\n        line-height: 128px;\n        font-size: 86px;\n        font-weight: 500;\n        text-align: center;\n        margin: 32px auto;\n        color: #FFFFFF;\n        border-radius: 2px;\n        background: #058ec0; }\n:host #login #login-form-wrapper #login-form .title {\n        font-size: 21px; }\n:host #login #login-form-wrapper #login-form .description {\n        padding-top: 8px; }\n:host #login #login-form-wrapper #login-form form {\n        width: 100%;\n        padding-top: 32px; }\n:host #login #login-form-wrapper #login-form form mat-form-field {\n          width: 100%; }\n@media screen and (max-width: 599px) {\n            :host #login #login-form-wrapper #login-form form mat-form-field {\n              width: 80%; } }\n:host #login #login-form-wrapper #login-form form mat-checkbox {\n          margin: 0; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password {\n          font-size: 13px;\n          margin-top: 8px; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password .remember-me {\n            margin-bottom: 16px; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password .forgot-password {\n            font-size: 13px;\n            font-weight: 500;\n            margin-bottom: 16px; }\n:host #login #login-form-wrapper #login-form form .submit-button {\n          width: 100%;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #login #login-form-wrapper #login-form form .submit-button {\n              width: 80%; } }\n:host #login #login-form-wrapper #login-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px;\n        text-align: center;\n        color: rgba(0, 0, 0, 0.54); }\n:host #login #login-form-wrapper #login-form .separator .text {\n          display: -webkit-inline-box;\n          display: -ms-inline-flexbox;\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\n:host #login #login-form-wrapper #login-form .separator .text:before, :host #login #login-form-wrapper #login-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12); }\n:host #login #login-form-wrapper #login-form .separator .text:before {\n            right: 100%; }\n:host #login #login-form-wrapper #login-form .separator .text:after {\n            left: 100%; }\n:host #login #login-form-wrapper #login-form button.google, :host #login #login-form-wrapper #login-form button.facebook {\n        width: 70%;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n@media screen and (max-width: 599px) {\n          :host #login #login-form-wrapper #login-form button.google, :host #login #login-form-wrapper #login-form button.facebook {\n            width: 60%; } }\n:host #login #login-form-wrapper #login-form button.google mat-icon, :host #login #login-form-wrapper #login-form button.facebook mat-icon {\n          color: #FFFFFF;\n          margin: 0 8px 0 0; }\n:host #login #login-form-wrapper #login-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\n:host #login #login-form-wrapper #login-form button.facebook {\n        background-color: #3f5c9a; }\n:host #login #login-form-wrapper #login-form .register {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\n:host #login #login-form-wrapper #login-form .register .text {\n          margin-right: 8px; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/login-2/login-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseLogin2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__ = __webpack_require__("./src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseLogin2Component = /** @class */ (function () {
    function FuseLogin2Component(fuseConfig, formBuilder) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.loginFormErrors = {
            email: {},
            password: {}
        };
    }
    FuseLogin2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]
        });
        this.loginForm.valueChanges.subscribe(function () {
            _this.onLoginFormValuesChanged();
        });
    };
    FuseLogin2Component.prototype.onLoginFormValuesChanged = function () {
        for (var field in this.loginFormErrors) {
            if (!this.loginFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.loginFormErrors[field] = {};
            // Get the control
            var control = this.loginForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.loginFormErrors[field] = control.errors;
            }
        }
    };
    FuseLogin2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-login-2',
            template: __webpack_require__("./src/app/main/content/pages/authentication/login-2/login-2.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/authentication/login-2/login-2.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseLogin2Component);
    return FuseLogin2Component;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/login-2/login-2.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_2_component__ = __webpack_require__("./src/app/main/content/pages/authentication/login-2/login-2.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/login-2',
        component: __WEBPACK_IMPORTED_MODULE_4__login_2_component__["a" /* FuseLogin2Component */]
    }
];
var Login2Module = /** @class */ (function () {
    function Login2Module() {
    }
    Login2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__login_2_component__["a" /* FuseLogin2Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ]
        })
    ], Login2Module);
    return Login2Module;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login\" fxLayout=\"column\" fusePerfectScrollbar>\n\n    <div id=\"login-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div id=\"login-form\" *fuseIfOnDom [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n\n            <div class=\"logo\">\n                <img src=\"assets/images/logos/logo-colored.png\">\n            </div>\n\n            <div class=\"title\">LOGIN TO YOUR ACCOUNT</div>\n\n            <form name=\"loginForm\" [formGroup]=\"loginForm\" novalidate>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"loginFormErrors.email.required\">\n                        Email is required\n                    </mat-error>\n                    <mat-error *ngIf=\"!loginFormErrors.email.required && loginFormErrors.email.email\">\n                        Please enter a valid email address\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                    <mat-error *ngIf=\"loginFormErrors.password.required\">\n                        Password is required\n                    </mat-error>\n                </mat-form-field>\n\n                <div class=\"remember-forgot-password\" fxLayout=\"row\" fxLayout.xs=\"column\"\n                     fxLayoutAlign=\"space-between center\">\n                    <mat-checkbox class=\"remember-me\" aria-label=\"Remember Me\">\n                        Remember Me\n                    </mat-checkbox>\n\n                    <a class=\"forgot-password\" [routerLink]=\"'/pages/auth/forgot-password'\">\n                        Forgot Password?\n                    </a>\n                </div>\n\n                <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"LOG IN\"\n                        [disabled]=\"loginForm.invalid\">\n                    LOGIN\n                </button>\n\n            </form>\n\n            <div class=\"separator\">\n                <span class=\"text\">OR</span>\n            </div>\n\n            <button mat-raised-button class=\"google\">\n                Log in with Google\n            </button>\n\n            <button mat-raised-button class=\"facebook\">\n                Log in with Facebook\n            </button>\n\n            <div class=\"register\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <span class=\"text\">Don't have an account?</span>\n                <a class=\"link\" [routerLink]=\"'/pages/auth/register'\">Create an account</a>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #login {\n  width: 100%;\n  overflow: auto;\n  background: url(\"/assets/images/backgrounds/bg-login.jpg\") no-repeat;\n  background-size: cover; }\n:host #login #login-form-wrapper {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #login #login-form-wrapper {\n        padding: 16px; } }\n:host #login #login-form-wrapper #login-form {\n      width: 384px;\n      max-width: 384px;\n      padding: 32px;\n      background: #FFFFFF;\n      text-align: center;\n      -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n              box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        :host #login #login-form-wrapper #login-form {\n          padding: 24px;\n          width: 100%; } }\n:host #login #login-form-wrapper #login-form .logo {\n        width: 128px;\n        margin: 32px auto; }\n:host #login #login-form-wrapper #login-form .title {\n        font-size: 20px;\n        margin: 16px 0 32px 0; }\n:host #login #login-form-wrapper #login-form form {\n        width: 100%;\n        text-align: left; }\n:host #login #login-form-wrapper #login-form form mat-form-field {\n          width: 100%; }\n:host #login #login-form-wrapper #login-form form mat-checkbox {\n          margin: 0; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password {\n          font-size: 13px;\n          margin-top: 8px; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password .remember-me {\n            margin-bottom: 16px; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password .forgot-password {\n            font-size: 13px;\n            font-weight: 500;\n            margin-bottom: 16px; }\n:host #login #login-form-wrapper #login-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #login #login-form-wrapper #login-form form .submit-button {\n              width: 90%; } }\n:host #login #login-form-wrapper #login-form .register {\n        margin: 32px auto 24px auto;\n        font-weight: 500; }\n:host #login #login-form-wrapper #login-form .register .text {\n          margin-right: 8px; }\n:host #login #login-form-wrapper #login-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px;\n        color: rgba(0, 0, 0, 0.54); }\n:host #login #login-form-wrapper #login-form .separator .text {\n          display: -webkit-inline-box;\n          display: -ms-inline-flexbox;\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\n:host #login #login-form-wrapper #login-form .separator .text:before, :host #login #login-form-wrapper #login-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12); }\n:host #login #login-form-wrapper #login-form .separator .text:before {\n            right: 100%; }\n:host #login #login-form-wrapper #login-form .separator .text:after {\n            left: 100%; }\n:host #login #login-form-wrapper #login-form button.google, :host #login #login-form-wrapper #login-form button.facebook {\n        width: 192px;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n@media screen and (max-width: 599px) {\n        :host #login #login-form-wrapper #login-form button {\n          width: 80%; } }\n:host #login #login-form-wrapper #login-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\n:host #login #login-form-wrapper #login-form button.facebook {\n        background-color: #3f5c9a; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__ = __webpack_require__("./src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseLoginComponent = /** @class */ (function () {
    function FuseLoginComponent(fuseConfig, formBuilder) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.loginFormErrors = {
            email: {},
            password: {}
        };
    }
    FuseLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]
        });
        this.loginForm.valueChanges.subscribe(function () {
            _this.onLoginFormValuesChanged();
        });
    };
    FuseLoginComponent.prototype.onLoginFormValuesChanged = function () {
        for (var field in this.loginFormErrors) {
            if (!this.loginFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.loginFormErrors[field] = {};
            // Get the control
            var control = this.loginForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.loginFormErrors[field] = control.errors;
            }
        }
    };
    FuseLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-login',
            template: __webpack_require__("./src/app/main/content/pages/authentication/login/login.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/authentication/login/login.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseLoginComponent);
    return FuseLoginComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("./src/app/main/content/pages/authentication/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/login',
        component: __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* FuseLoginComponent */]
    }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* FuseLoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/mail-confirm/mail-confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"mail-confirm\" fxLayout=\"column\" fusePerfectScrollbar>\n\n    <div id=\"mail-confirm-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div id=\"mail-confirm-form\" *fuseIfOnDom [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n\n            <div class=\"logo\">\n                <mat-icon class=\"s-96\">email</mat-icon>\n            </div>\n\n            <div class=\"title\">Confirm your email address!</div>\n\n            <div class=\"subtitle\">\n                <p>\n                    A confirmation e-mail has been sent to <b>example@mymail.com</b>.\n                </p>\n                <p>\n                    Check your inbox and click on the \"Confirm my email\" link to confirm your email address.\n                </p>\n            </div>\n\n            <div class=\"message\">\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login'\">Go back to login page</a>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/mail-confirm/mail-confirm.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #mail-confirm {\n  width: 100%;\n  overflow: auto;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #mail-confirm #mail-confirm-form-wrapper {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #mail-confirm #mail-confirm-form-wrapper {\n        padding: 16px; } }\n:host #mail-confirm #mail-confirm-form-wrapper #mail-confirm-form {\n      max-width: 480px;\n      padding: 48px;\n      background: #FFFFFF;\n      text-align: center;\n      -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n              box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        :host #mail-confirm #mail-confirm-form-wrapper #mail-confirm-form {\n          padding: 24px;\n          width: 100%; } }\n:host #mail-confirm #mail-confirm-form-wrapper #mail-confirm-form .logo {\n        margin: 0 auto 32px auto; }\n:host #mail-confirm #mail-confirm-form-wrapper #mail-confirm-form .title {\n        font-size: 20px;\n        margin-top: 16px; }\n:host #mail-confirm #mail-confirm-form-wrapper #mail-confirm-form .subtitle {\n        margin: 16px auto;\n        max-width: 300px;\n        color: rgba(0, 0, 0, 0.54);\n        font-size: 15px; }\n:host #mail-confirm #mail-confirm-form-wrapper #mail-confirm-form .message {\n        font-weight: 500;\n        text-align: center;\n        margin-top: 40px; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/mail-confirm/mail-confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMailConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_services_config_service__ = __webpack_require__("./src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseMailConfirmComponent = /** @class */ (function () {
    function FuseMailConfirmComponent(fuseConfig) {
        this.fuseConfig = fuseConfig;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
    }
    FuseMailConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-mail-confirm',
            template: __webpack_require__("./src/app/main/content/pages/authentication/mail-confirm/mail-confirm.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/authentication/mail-confirm/mail-confirm.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_2__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__fuse_services_config_service__["b" /* FuseConfigService */]])
    ], FuseMailConfirmComponent);
    return FuseMailConfirmComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/mail-confirm/mail-confirm.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailConfirmModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mail_confirm_component__ = __webpack_require__("./src/app/main/content/pages/authentication/mail-confirm/mail-confirm.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/mail-confirm',
        component: __WEBPACK_IMPORTED_MODULE_4__mail_confirm_component__["a" /* FuseMailConfirmComponent */]
    }
];
var MailConfirmModule = /** @class */ (function () {
    function MailConfirmModule() {
    }
    MailConfirmModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__mail_confirm_component__["a" /* FuseMailConfirmComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ]
        })
    ], MailConfirmModule);
    return MailConfirmModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/register-2/register-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"register\" fxLayout=\"row\" fxLayoutAlign=\"start\">\n\n    <div id=\"register-intro\" fxFlex fxHide fxShow.gt-xs>\n\n        <div class=\"logo\" *fuseIfOnDom [@animate]=\"{value:'*',params:{scale:'0.2'}}\">\n            <img src=\"assets/images/logos/logo-colored.png\">\n        </div>\n\n        <div class=\"title\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',y:'25px'}}\">\n            Welcome to the FUSE!\n        </div>\n\n        <div class=\"description\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat,\n            vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis viverra.\n        </div>\n\n    </div>\n\n    <div id=\"register-form-wrapper\" fusePerfectScrollbar *fuseIfOnDom\n         [@animate]=\"{value:'*',params:{delay:'300ms',x:'100%'}}\">\n\n        <div id=\"register-form\">\n\n            <div class=\"logo\" fxHide.gt-xs>\n                <span>F</span>\n            </div>\n\n            <div class=\"title\">CREATE AN ACCOUNT</div>\n\n            <form name=\"registerForm\" [formGroup]=\"registerForm\" novalidate>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Name\" formControlName=\"name\">\n                    <mat-error *ngIf=\"registerFormErrors.name.required\">\n                        Name is required\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"registerFormErrors.email.required\">\n                        Email is required\n                    </mat-error>\n                    <mat-error *ngIf=\"!registerFormErrors.email.required && registerFormErrors.email.email\">\n                        Please enter a valid email address\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                    <mat-error *ngIf=\"registerFormErrors.password.required\">\n                        Password is required\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password (Confirm)\" formControlName=\"passwordConfirm\">\n                    <mat-error *ngIf=\"registerFormErrors.passwordConfirm.required\">\n                        Password confirmation is required\n                    </mat-error>\n                    <mat-error *ngIf=\"registerFormErrors.passwordConfirm.passwordsNotMatch\">\n                        Passwords must match\n                    </mat-error>\n                </mat-form-field>\n\n                <div class=\"terms\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                    <mat-checkbox name=\"terms\" aria-label=\"Accept\" required>\n                        <span>Accept</span>\n                    </mat-checkbox>\n                    <a href=\"#\">terms and conditions</a>\n                </div>\n\n                <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"CREATE AN ACCOUNT\"\n                        [disabled]=\"registerForm.invalid\">\n                    CREATE AN ACCOUNT\n                </button>\n\n            </form>\n\n            <div class=\"register\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <span class=\"text\">Already have an account?</span>\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login-2'\">Login</a>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/register-2/register-2.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #register {\n  width: 100%;\n  overflow: hidden;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #register #register-intro {\n    padding: 128px;\n    color: white; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #register #register-intro {\n        padding: 128px 64px; } }\n:host #register #register-intro .logo {\n      width: 128px;\n      margin-bottom: 32px; }\n:host #register #register-intro .title {\n      font-size: 42px;\n      font-weight: 300;\n      line-height: 1; }\n:host #register #register-intro .description {\n      padding-top: 16px;\n      font-size: 14px;\n      max-width: 600px;\n      color: rgba(255, 255, 255, 0.54); }\n:host #register #register-form-wrapper {\n    overflow: auto;\n    width: 400px;\n    min-width: 400px;\n    max-width: 400px;\n    background: #FFFFFF;\n    -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #register #register-form-wrapper {\n        width: 360px;\n        min-width: 360px;\n        max-width: 360px; } }\n@media screen and (max-width: 599px) {\n      :host #register #register-form-wrapper {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%; } }\n:host #register #register-form-wrapper #register-form {\n      padding: 128px 48px 48px 48px; }\n@media screen and (max-width: 599px) {\n        :host #register #register-form-wrapper #register-form {\n          text-align: center;\n          padding: 24px; } }\n:host #register #register-form-wrapper #register-form .logo {\n        width: 128px;\n        height: 128px;\n        line-height: 128px;\n        font-size: 86px;\n        font-weight: 500;\n        text-align: center;\n        margin: 32px auto;\n        color: #FFFFFF;\n        border-radius: 2px;\n        background: #058ec0; }\n:host #register #register-form-wrapper #register-form .title {\n        font-size: 21px; }\n:host #register #register-form-wrapper #register-form .description {\n        padding-top: 8px; }\n:host #register #register-form-wrapper #register-form form {\n        width: 100%;\n        padding-top: 32px; }\n:host #register #register-form-wrapper #register-form form mat-form-field {\n          width: 100%; }\n@media screen and (max-width: 599px) {\n            :host #register #register-form-wrapper #register-form form mat-form-field {\n              width: 80%; } }\n:host #register #register-form-wrapper #register-form form mat-checkbox {\n          margin: 0; }\n:host #register #register-form-wrapper #register-form form .terms {\n          margin: 16px 0 32px 0; }\n:host #register #register-form-wrapper #register-form form .terms a {\n            font-size: 16px;\n            margin-left: 4px; }\n:host #register #register-form-wrapper #register-form form .submit-button {\n          width: 100%;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #register #register-form-wrapper #register-form form .submit-button {\n              width: 80%; } }\n:host #register #register-form-wrapper #register-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px;\n        text-align: center;\n        color: rgba(0, 0, 0, 0.54); }\n:host #register #register-form-wrapper #register-form .separator .text {\n          display: -webkit-inline-box;\n          display: -ms-inline-flexbox;\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\n:host #register #register-form-wrapper #register-form .separator .text:before, :host #register #register-form-wrapper #register-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12); }\n:host #register #register-form-wrapper #register-form .separator .text:before {\n            right: 100%; }\n:host #register #register-form-wrapper #register-form .separator .text:after {\n            left: 100%; }\n:host #register #register-form-wrapper #register-form button.google, :host #register #register-form-wrapper #register-form button.facebook {\n        width: 70%;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n@media screen and (max-width: 599px) {\n          :host #register #register-form-wrapper #register-form button.google, :host #register #register-form-wrapper #register-form button.facebook {\n            width: 60%; } }\n:host #register #register-form-wrapper #register-form button.google mat-icon, :host #register #register-form-wrapper #register-form button.facebook mat-icon {\n          color: #FFFFFF;\n          margin: 0 8px 0 0; }\n:host #register #register-form-wrapper #register-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\n:host #register #register-form-wrapper #register-form button.facebook {\n        background-color: #3f5c9a; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/register-2/register-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseRegister2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__ = __webpack_require__("./src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseRegister2Component = /** @class */ (function () {
    function FuseRegister2Component(fuseConfig, formBuilder) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.registerFormErrors = {
            name: {},
            email: {},
            password: {},
            passwordConfirm: {}
        };
    }
    FuseRegister2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            passwordConfirm: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, confirmPassword]]
        });
        this.registerForm.valueChanges.subscribe(function () {
            _this.onRegisterFormValuesChanged();
        });
    };
    FuseRegister2Component.prototype.onRegisterFormValuesChanged = function () {
        for (var field in this.registerFormErrors) {
            if (!this.registerFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.registerFormErrors[field] = {};
            // Get the control
            var control = this.registerForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.registerFormErrors[field] = control.errors;
            }
        }
    };
    FuseRegister2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-register-2',
            template: __webpack_require__("./src/app/main/content/pages/authentication/register-2/register-2.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/authentication/register-2/register-2.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseRegister2Component);
    return FuseRegister2Component;
}());

function confirmPassword(control) {
    if (!control.parent || !control) {
        return;
    }
    var password = control.parent.get('password');
    var passwordConfirm = control.parent.get('passwordConfirm');
    if (!password || !passwordConfirm) {
        return;
    }
    if (passwordConfirm.value === '') {
        return;
    }
    if (password.value !== passwordConfirm.value) {
        return {
            passwordsNotMatch: true
        };
    }
}


/***/ }),

/***/ "./src/app/main/content/pages/authentication/register-2/register-2.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_2_component__ = __webpack_require__("./src/app/main/content/pages/authentication/register-2/register-2.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/register-2',
        component: __WEBPACK_IMPORTED_MODULE_4__register_2_component__["a" /* FuseRegister2Component */]
    }
];
var Register2Module = /** @class */ (function () {
    function Register2Module() {
    }
    Register2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__register_2_component__["a" /* FuseRegister2Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ]
        })
    ], Register2Module);
    return Register2Module;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"register\" fxLayout=\"column\" fusePerfectScrollbar>\n\n    <div id=\"register-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div id=\"register-form\" *fuseIfOnDom [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n\n            <div class=\"logo\">\n                <img src=\"assets/images/logos/logo-colored.png\">\n            </div>\n\n            <div class=\"title\">CREATE AN ACCOUNT</div>\n\n            <form name=\"registerForm\" [formGroup]=\"registerForm\" novalidate>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Name\" formControlName=\"name\">\n                    <mat-error *ngIf=\"registerFormErrors.name.required\">\n                        Name is required\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"registerFormErrors.email.required\">\n                        Email is required\n                    </mat-error>\n                    <mat-error *ngIf=\"!registerFormErrors.email.required && registerFormErrors.email.email\">\n                        Please enter a valid email address\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                    <mat-error *ngIf=\"registerFormErrors.password.required\">\n                        Password is required\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password (Confirm)\" formControlName=\"passwordConfirm\">\n                    <mat-error *ngIf=\"registerFormErrors.passwordConfirm.required\">\n                        Password confirmation is required\n                    </mat-error>\n                    <mat-error *ngIf=\"registerFormErrors.passwordConfirm.passwordsNotMatch\">\n                        Passwords must match\n                    </mat-error>\n                </mat-form-field>\n\n                <div class=\"terms\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                    <mat-checkbox name=\"terms\" aria-label=\"I read and accept\" required>\n                        <span>I read and accept</span>\n                    </mat-checkbox>\n                    <a href=\"#\">terms and conditions</a>\n                </div>\n\n                <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"CREATE AN ACCOUNT\"\n                        [disabled]=\"registerForm.invalid\">\n                    CREATE AN ACCOUNT\n                </button>\n\n            </form>\n\n            <div class=\"register\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <span class=\"text\">Already have an account?</span>\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login'\">Login</a>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/register/register.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #register {\n  width: 100%;\n  overflow: auto;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #register #register-form-wrapper {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #register #register-form-wrapper {\n        padding: 16px; } }\n:host #register #register-form-wrapper #register-form {\n      width: 384px;\n      max-width: 384px;\n      padding: 32px;\n      background: #FFFFFF;\n      text-align: center;\n      -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n              box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        :host #register #register-form-wrapper #register-form {\n          padding: 24px;\n          width: 100%; } }\n:host #register #register-form-wrapper #register-form .logo {\n        width: 128px;\n        margin: 32px auto; }\n:host #register #register-form-wrapper #register-form .title {\n        font-size: 20px;\n        margin: 16px 0 32px 0; }\n:host #register #register-form-wrapper #register-form form {\n        width: 100%;\n        text-align: left; }\n:host #register #register-form-wrapper #register-form form mat-form-field {\n          width: 100%; }\n:host #register #register-form-wrapper #register-form form mat-checkbox {\n          margin: 0; }\n:host #register #register-form-wrapper #register-form form .terms {\n          margin: 16px 0 32px 0; }\n:host #register #register-form-wrapper #register-form form .terms a {\n            font-size: 16px;\n            margin-left: 4px; }\n:host #register #register-form-wrapper #register-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #register #register-form-wrapper #register-form form .submit-button {\n              width: 90%; } }\n:host #register #register-form-wrapper #register-form .register {\n        margin: 32px auto 24px auto;\n        font-weight: 500; }\n:host #register #register-form-wrapper #register-form .register .text {\n          margin-right: 8px; }\n:host #register #register-form-wrapper #register-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px;\n        color: rgba(0, 0, 0, 0.54); }\n:host #register #register-form-wrapper #register-form .separator .text {\n          display: -webkit-inline-box;\n          display: -ms-inline-flexbox;\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\n:host #register #register-form-wrapper #register-form .separator .text:before, :host #register #register-form-wrapper #register-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12); }\n:host #register #register-form-wrapper #register-form .separator .text:before {\n            right: 100%; }\n:host #register #register-form-wrapper #register-form .separator .text:after {\n            left: 100%; }\n:host #register #register-form-wrapper #register-form button.google, :host #register #register-form-wrapper #register-form button.facebook {\n        width: 192px;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n@media screen and (max-width: 599px) {\n        :host #register #register-form-wrapper #register-form button {\n          width: 80%; } }\n:host #register #register-form-wrapper #register-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\n:host #register #register-form-wrapper #register-form button.facebook {\n        background-color: #3f5c9a; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__ = __webpack_require__("./src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseRegisterComponent = /** @class */ (function () {
    function FuseRegisterComponent(fuseConfig, formBuilder) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.registerFormErrors = {
            name: {},
            email: {},
            password: {},
            passwordConfirm: {}
        };
    }
    FuseRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            passwordConfirm: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, confirmPassword]]
        });
        this.registerForm.valueChanges.subscribe(function () {
            _this.onRegisterFormValuesChanged();
        });
    };
    FuseRegisterComponent.prototype.onRegisterFormValuesChanged = function () {
        for (var field in this.registerFormErrors) {
            if (!this.registerFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.registerFormErrors[field] = {};
            // Get the control
            var control = this.registerForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.registerFormErrors[field] = control.errors;
            }
        }
    };
    FuseRegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-register',
            template: __webpack_require__("./src/app/main/content/pages/authentication/register/register.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/authentication/register/register.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseRegisterComponent);
    return FuseRegisterComponent;
}());

function confirmPassword(control) {
    if (!control.parent || !control) {
        return;
    }
    var password = control.parent.get('password');
    var passwordConfirm = control.parent.get('passwordConfirm');
    if (!password || !passwordConfirm) {
        return;
    }
    if (passwordConfirm.value === '') {
        return;
    }
    if (password.value !== passwordConfirm.value) {
        return {
            passwordsNotMatch: true
        };
    }
}


/***/ }),

/***/ "./src/app/main/content/pages/authentication/register/register.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_component__ = __webpack_require__("./src/app/main/content/pages/authentication/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/register',
        component: __WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* FuseRegisterComponent */]
    }
];
var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* FuseRegisterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/reset-password-2/reset-password-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"reset-password\" fxLayout=\"row\" fxLayoutAlign=\"start\">\n\n    <div id=\"reset-password-intro\" fxFlex fxHide fxShow.gt-xs>\n\n        <div class=\"logo\" *fuseIfOnDom [@animate]=\"{value:'*',params:{scale:'0.2'}}\">\n            <img src=\"assets/images/logos/logo.png\">\n        </div>\n\n        <div class=\"title\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',y:'25px'}}\">\n            Welcome to the FUSE!\n        </div>\n\n        <div class=\"description\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat,\n            vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis viverra.\n        </div>\n\n    </div>\n\n    <div id=\"reset-password-form-wrapper\" fusePerfectScrollbar *fuseIfOnDom\n         [@animate]=\"{value:'*',params:{delay:'300ms',x:'100%'}}\">\n\n        <div id=\"reset-password-form\">\n\n            <div class=\"logo\" fxHide.gt-xs>\n                <span>F</span>\n            </div>\n\n            <div class=\"title\">RESET YOUR PASSWORD</div>\n\n            <form name=\"resetPasswordForm\" [formGroup]=\"resetPasswordForm\" novalidate>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"resetPasswordFormErrors.email.required\">\n                        Email is required\n                    </mat-error>\n                    <mat-error *ngIf=\"!resetPasswordFormErrors.email.required && resetPasswordFormErrors.email.email\">\n                        Please enter a valid email address\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                    <mat-error *ngIf=\"resetPasswordFormErrors.password.required\">\n                        Password is required\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password (Confirm)\" formControlName=\"passwordConfirm\">\n                    <mat-error *ngIf=\"resetPasswordFormErrors.passwordConfirm.required\">\n                        Password confirmation is required\n                    </mat-error>\n                    <mat-error *ngIf=\"resetPasswordFormErrors.passwordConfirm.passwordsNotMatch\">\n                        Passwords must match\n                    </mat-error>\n                </mat-form-field>\n\n                <button mat-raised-button class=\"submit-button\" color=\"accent\"\n                        aria-label=\"RESET MY PASSWORD\" [disabled]=\"resetPasswordForm.invalid\">\n                    RESET MY PASSWORD\n                </button>\n            </form>\n\n            <div class=\"login\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login-2'\">Go back to login</a>\n            </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/reset-password-2/reset-password-2.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #reset-password {\n  width: 100%;\n  overflow: hidden;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #reset-password #reset-password-intro {\n    padding: 128px;\n    color: white; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #reset-password #reset-password-intro {\n        padding: 128px 64px; } }\n:host #reset-password #reset-password-intro .logo {\n      width: 128px;\n      margin-bottom: 32px; }\n:host #reset-password #reset-password-intro .title {\n      font-size: 42px;\n      font-weight: 300;\n      line-height: 1; }\n:host #reset-password #reset-password-intro .description {\n      padding-top: 16px;\n      font-size: 14px;\n      max-width: 600px;\n      color: rgba(255, 255, 255, 0.54); }\n:host #reset-password #reset-password-form-wrapper {\n    overflow: auto;\n    width: 400px;\n    min-width: 400px;\n    max-width: 400px;\n    background: #FFFFFF;\n    -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #reset-password #reset-password-form-wrapper {\n        width: 360px;\n        min-width: 360px;\n        max-width: 360px; } }\n@media screen and (max-width: 599px) {\n      :host #reset-password #reset-password-form-wrapper {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%; } }\n:host #reset-password #reset-password-form-wrapper #reset-password-form {\n      padding: 128px 48px 48px 48px; }\n@media screen and (max-width: 599px) {\n        :host #reset-password #reset-password-form-wrapper #reset-password-form {\n          text-align: center;\n          padding: 24px; } }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .logo {\n        width: 128px;\n        height: 128px;\n        line-height: 128px;\n        font-size: 86px;\n        font-weight: 500;\n        text-align: center;\n        margin: 32px auto;\n        color: #FFFFFF;\n        border-radius: 2px;\n        background: #058ec0; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .title {\n        font-size: 21px; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .description {\n        padding-top: 8px; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form form {\n        width: 100%;\n        padding-top: 32px; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form form mat-form-field {\n          width: 100%; }\n@media screen and (max-width: 599px) {\n            :host #reset-password #reset-password-form-wrapper #reset-password-form form mat-form-field {\n              width: 80%; } }\n:host #reset-password #reset-password-form-wrapper #reset-password-form form .submit-button {\n          width: 100%;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #reset-password #reset-password-form-wrapper #reset-password-form form .submit-button {\n              width: 80%; } }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .login {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .login .text {\n          margin-right: 8px; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/reset-password-2/reset-password-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseResetPassword2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__ = __webpack_require__("./src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseResetPassword2Component = /** @class */ (function () {
    function FuseResetPassword2Component(fuseConfig, formBuilder) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.resetPasswordFormErrors = {
            email: {},
            password: {},
            passwordConfirm: {}
        };
    }
    FuseResetPassword2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.resetPasswordForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            passwordConfirm: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, confirmPassword]]
        });
        this.resetPasswordForm.valueChanges.subscribe(function () {
            _this.onResetPasswordFormValuesChanged();
        });
    };
    FuseResetPassword2Component.prototype.onResetPasswordFormValuesChanged = function () {
        for (var field in this.resetPasswordFormErrors) {
            if (!this.resetPasswordFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.resetPasswordFormErrors[field] = {};
            // Get the control
            var control = this.resetPasswordForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.resetPasswordFormErrors[field] = control.errors;
            }
        }
    };
    FuseResetPassword2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-reset-password-2',
            template: __webpack_require__("./src/app/main/content/pages/authentication/reset-password-2/reset-password-2.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/authentication/reset-password-2/reset-password-2.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseResetPassword2Component);
    return FuseResetPassword2Component;
}());

function confirmPassword(control) {
    if (!control.parent || !control) {
        return;
    }
    var password = control.parent.get('password');
    var passwordConfirm = control.parent.get('passwordConfirm');
    if (!password || !passwordConfirm) {
        return;
    }
    if (passwordConfirm.value === '') {
        return;
    }
    if (password.value !== passwordConfirm.value) {
        return {
            passwordsNotMatch: true
        };
    }
}


/***/ }),

/***/ "./src/app/main/content/pages/authentication/reset-password-2/reset-password-2.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassword2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reset_password_2_component__ = __webpack_require__("./src/app/main/content/pages/authentication/reset-password-2/reset-password-2.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/reset-password-2',
        component: __WEBPACK_IMPORTED_MODULE_4__reset_password_2_component__["a" /* FuseResetPassword2Component */]
    }
];
var ResetPassword2Module = /** @class */ (function () {
    function ResetPassword2Module() {
    }
    ResetPassword2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__reset_password_2_component__["a" /* FuseResetPassword2Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ]
        })
    ], ResetPassword2Module);
    return ResetPassword2Module;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"reset-password\" fxLayout=\"column\" fusePerfectScrollbar>\n\n    <div id=\"reset-password-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\n         *fuseIfOnDom [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n\n        <div id=\"reset-password-form\">\n\n            <div class=\"logo\">\n                <img src=\"assets/images/logos/logo.png\">\n            </div>\n\n            <div class=\"title\">RESET YOUR PASSWORD</div>\n\n            <form name=\"resetPasswordForm\" [formGroup]=\"resetPasswordForm\" novalidate>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"resetPasswordFormErrors.email.required\">\n                        Email is required\n                    </mat-error>\n                    <mat-error *ngIf=\"!resetPasswordFormErrors.email.required && resetPasswordFormErrors.email.email\">\n                        Please enter a valid email address\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                    <mat-error *ngIf=\"resetPasswordFormErrors.password.required\">\n                        Password is required\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password (Confirm)\" formControlName=\"passwordConfirm\">\n                    <mat-error *ngIf=\"resetPasswordFormErrors.passwordConfirm.required\">\n                        Password confirmation is required\n                    </mat-error>\n                    <mat-error *ngIf=\"resetPasswordFormErrors.passwordConfirm.passwordsNotMatch\">\n                        Passwords must match\n                    </mat-error>\n                </mat-form-field>\n\n                <button mat-raised-button class=\"submit-button\" color=\"accent\"\n                        aria-label=\"RESET MY PASSWORD\" [disabled]=\"resetPasswordForm.invalid\">\n                    RESET MY PASSWORD\n                </button>\n            </form>\n\n            <div class=\"login\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login'\">Go back to login</a>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/reset-password/reset-password.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #reset-password {\n  width: 100%;\n  overflow: auto;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #reset-password #reset-password-form-wrapper {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #reset-password #reset-password-form-wrapper {\n        padding: 16px; } }\n:host #reset-password #reset-password-form-wrapper #reset-password-form {\n      width: 400px;\n      max-width: 400px;\n      padding: 32px;\n      text-align: center;\n      background: #FFFFFF;\n      -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n              box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        :host #reset-password #reset-password-form-wrapper #reset-password-form {\n          padding: 24px;\n          width: 100%; } }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .logo {\n        width: 128px;\n        margin: 32px auto; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .title {\n        font-size: 20px;\n        margin: 16px 0 32px 0; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form form {\n        width: 100%;\n        text-align: left; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form form mat-form-field {\n          width: 100%; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #reset-password #reset-password-form-wrapper #reset-password-form form .submit-button {\n              width: 90%; } }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .login {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .login .text {\n          margin-right: 8px; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__ = __webpack_require__("./src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseResetPasswordComponent = /** @class */ (function () {
    function FuseResetPasswordComponent(fuseConfig, formBuilder) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.resetPasswordFormErrors = {
            email: {},
            password: {},
            passwordConfirm: {}
        };
    }
    FuseResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetPasswordForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            passwordConfirm: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, confirmPassword]]
        });
        this.resetPasswordForm.valueChanges.subscribe(function () {
            _this.onResetPasswordFormValuesChanged();
        });
    };
    FuseResetPasswordComponent.prototype.onResetPasswordFormValuesChanged = function () {
        for (var field in this.resetPasswordFormErrors) {
            if (!this.resetPasswordFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.resetPasswordFormErrors[field] = {};
            // Get the control
            var control = this.resetPasswordForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.resetPasswordFormErrors[field] = control.errors;
            }
        }
    };
    FuseResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-reset-password',
            template: __webpack_require__("./src/app/main/content/pages/authentication/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/authentication/reset-password/reset-password.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseResetPasswordComponent);
    return FuseResetPasswordComponent;
}());

function confirmPassword(control) {
    if (!control.parent || !control) {
        return;
    }
    var password = control.parent.get('password');
    var passwordConfirm = control.parent.get('passwordConfirm');
    if (!password || !passwordConfirm) {
        return;
    }
    if (passwordConfirm.value === '') {
        return;
    }
    if (password.value !== passwordConfirm.value) {
        return {
            passwordsNotMatch: true
        };
    }
}


/***/ }),

/***/ "./src/app/main/content/pages/authentication/reset-password/reset-password.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reset_password_component__ = __webpack_require__("./src/app/main/content/pages/authentication/reset-password/reset-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/reset-password',
        component: __WEBPACK_IMPORTED_MODULE_4__reset_password_component__["a" /* FuseResetPasswordComponent */]
    }
];
var ResetPasswordModule = /** @class */ (function () {
    function ResetPasswordModule() {
    }
    ResetPasswordModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__reset_password_component__["a" /* FuseResetPasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ]
        })
    ], ResetPasswordModule);
    return ResetPasswordModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/coming-soon/coming-soon.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"coming-soon\" fxLayout=\"column\" fusePerfectScrollbar>\n\n    <div id=\"coming-soon-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div id=\"coming-soon-form\" *fuseIfOnDom [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n\n            <div class=\"top\">\n\n                <div class=\"logo\">\n                    <img src=\"assets/images/logos/logo.png\">\n                </div>\n\n                <div class=\"title\">Hey! Thank you for checking out our app.</div>\n                <div class=\"subtitle\">It’s not quite ready yet, but we are working hard and it will be ready in\n                    approximately:\n                </div>\n\n                <fuse-countdown eventDate=\"2019-07-28\"></fuse-countdown>\n\n            </div>\n\n            <form name=\"comingSoonForm\" [formGroup]=\"comingSoonForm\" novalidate>\n\n                <div class=\"message\">\n                    If you would like to be notified when the app is ready, you can subscribe to our e-mail list.\n                </div>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"comingSoonFormErrors.email.required\">\n                        Email is required\n                    </mat-error>\n                    <mat-error *ngIf=\"!comingSoonFormErrors.email.required && comingSoonFormErrors.email.email\">\n                        Please enter a valid email address\n                    </mat-error>\n                </mat-form-field>\n\n                <button mat-raised-button color=\"accent\" class=\"subscribe-button\" aria-label=\"SUBSCRIBE\"\n                        [disabled]=\"comingSoonForm.invalid\">\n                    SUBSCRIBE\n                </button>\n\n            </form>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/coming-soon/coming-soon.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #coming-soon {\n  width: 100%;\n  overflow: auto;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #coming-soon #coming-soon-form-wrapper {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #coming-soon #coming-soon-form-wrapper {\n        padding: 16px; } }\n:host #coming-soon #coming-soon-form-wrapper #coming-soon-form {\n      width: 384px;\n      max-width: 384px;\n      background: #FFFFFF;\n      text-align: center;\n      -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n              box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        :host #coming-soon #coming-soon-form-wrapper #coming-soon-form {\n          width: 100%; } }\n:host #coming-soon #coming-soon-form-wrapper #coming-soon-form .top {\n        width: 100%;\n        padding: 32px; }\n@media screen and (max-width: 599px) {\n          :host #coming-soon #coming-soon-form-wrapper #coming-soon-form .top {\n            padding: 24px; } }\n:host #coming-soon #coming-soon-form-wrapper #coming-soon-form .top .logo {\n          width: 128px;\n          margin: 32px auto; }\n:host #coming-soon #coming-soon-form-wrapper #coming-soon-form .top .title {\n          font-size: 17px;\n          margin-top: 16px; }\n:host #coming-soon #coming-soon-form-wrapper #coming-soon-form .top .subtitle {\n          margin: 16px auto 0 auto;\n          text-align: center;\n          max-width: 300px;\n          color: rgba(0, 0, 0, 0.54);\n          font-size: 15px; }\n:host #coming-soon #coming-soon-form-wrapper #coming-soon-form .top fuse-countdown {\n          margin: 48px auto 16px auto; }\n:host #coming-soon #coming-soon-form-wrapper #coming-soon-form form {\n        width: 100%;\n        padding: 32px;\n        text-align: center;\n        background: whitesmoke; }\n:host #coming-soon #coming-soon-form-wrapper #coming-soon-form form .message {\n          font-weight: 500;\n          margin: 8px auto 32px auto; }\n:host #coming-soon #coming-soon-form-wrapper #coming-soon-form form mat-form-field {\n          width: 320px;\n          margin: 8px auto 16px auto; }\n:host #coming-soon #coming-soon-form-wrapper #coming-soon-form form .subscribe-button {\n          width: 220px;\n          margin: 16px auto; }\n@media screen and (max-width: 599px) {\n            :host #coming-soon #coming-soon-form-wrapper #coming-soon-form form .subscribe-button {\n              width: 90%; } }\n"

/***/ }),

/***/ "./src/app/main/content/pages/coming-soon/coming-soon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseComingSoonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__ = __webpack_require__("./src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseComingSoonComponent = /** @class */ (function () {
    function FuseComingSoonComponent(fuseConfig, formBuilder) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.comingSoonFormErrors = {
            email: {}
        };
    }
    FuseComingSoonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.comingSoonForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]]
        });
        this.comingSoonForm.valueChanges.subscribe(function () {
            _this.onRegisterFormValuesChanged();
        });
    };
    FuseComingSoonComponent.prototype.onRegisterFormValuesChanged = function () {
        for (var field in this.comingSoonFormErrors) {
            if (!this.comingSoonFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.comingSoonFormErrors[field] = {};
            // Get the control
            var control = this.comingSoonForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.comingSoonFormErrors[field] = control.errors;
            }
        }
    };
    FuseComingSoonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-coming-soon',
            template: __webpack_require__("./src/app/main/content/pages/coming-soon/coming-soon.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/coming-soon/coming-soon.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseComingSoonComponent);
    return FuseComingSoonComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/coming-soon/coming-soon.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_components__ = __webpack_require__("./src/@fuse/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__coming_soon_component__ = __webpack_require__("./src/app/main/content/pages/coming-soon/coming-soon.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'coming-soon',
        component: __WEBPACK_IMPORTED_MODULE_5__coming_soon_component__["a" /* FuseComingSoonComponent */]
    }
];
var ComingSoonModule = /** @class */ (function () {
    function ComingSoonModule() {
    }
    ComingSoonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__coming_soon_component__["a" /* FuseComingSoonComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_components__["b" /* FuseCountdownModule */]
            ]
        })
    ], ComingSoonModule);
    return ComingSoonModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/errors/404/error-404.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"error-404\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <div class=\"content\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div class=\"error-code\">404</div>\n\n        <div class=\"message\">Sorry but we could not find the page you are looking for</div>\n\n        <div class=\"search\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"icon s-24\">search</mat-icon>\n            <input placeholder=\"Search for anything\" fxFlex>\n        </div>\n\n        <a class=\"back-link\" [routerLink]=\"'/apps/dashboards/project'\">Go back to dashboard</a>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/content/pages/errors/404/error-404.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #error-404 {\n  width: 100%;\n  overflow: auto; }\n:host #error-404 .content {\n    width: 90%;\n    max-width: 512px !important; }\n:host #error-404 .content .error-code {\n      font-size: 112px;\n      text-align: center;\n      line-height: 1;\n      margin-bottom: 16px;\n      font-weight: 500; }\n:host #error-404 .content .message {\n      font-size: 24px;\n      text-align: center;\n      color: rgba(0, 0, 0, 0.54); }\n:host #error-404 .content .search {\n      width: 100%;\n      height: 56px;\n      line-height: 56px;\n      margin: 48px auto 16px auto;\n      padding: 16px;\n      background: #FFFFFF;\n      -webkit-box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n              box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n:host #error-404 .content .search input {\n        padding: 0 0 0 16px; }\n:host #error-404 .content .back-link {\n      font-size: 15px;\n      text-align: center; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/errors/404/error-404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseError404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_services_config_service__ = __webpack_require__("./src/@fuse/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseError404Component = /** @class */ (function () {
    function FuseError404Component(fuseConfig) {
        this.fuseConfig = fuseConfig;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
    }
    FuseError404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-error-404',
            template: __webpack_require__("./src/app/main/content/pages/errors/404/error-404.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/errors/404/error-404.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__fuse_services_config_service__["b" /* FuseConfigService */]])
    ], FuseError404Component);
    return FuseError404Component;
}());



/***/ }),

/***/ "./src/app/main/content/pages/errors/404/error-404.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_404_component__ = __webpack_require__("./src/app/main/content/pages/errors/404/error-404.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'errors/error-404',
        component: __WEBPACK_IMPORTED_MODULE_4__error_404_component__["a" /* FuseError404Component */]
    }
];
var Error404Module = /** @class */ (function () {
    function Error404Module() {
    }
    Error404Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__error_404_component__["a" /* FuseError404Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ]
        })
    ], Error404Module);
    return Error404Module;
}());



/***/ }),

/***/ "./src/app/main/content/pages/errors/500/error-500.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"error-500\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <div class=\"content\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div class=\"error-code\">500</div>\n\n        <div class=\"message\">Well, you broke the internet!</div>\n\n        <div class=\"sub-message\">\n            Just kidding, looks like we have an internal issue, please try again in couple minutes\n        </div>\n\n        <a class=\"report-link\" [routerLink]=\"'/apps/dashboards/project'\">Report this problem</a>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/errors/500/error-500.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #error-500 {\n  width: 100%;\n  overflow: auto; }\n:host #error-500 .content {\n    width: 90%;\n    max-width: 512px !important; }\n:host #error-500 .content .error-code {\n      font-size: 112px;\n      line-height: 1;\n      text-align: center;\n      margin-bottom: 16px;\n      font-weight: 500; }\n:host #error-500 .content .message {\n      font-size: 24px;\n      text-align: center;\n      color: rgba(0, 0, 0, 0.54); }\n:host #error-500 .content .sub-message {\n      font-size: 17px;\n      text-align: center;\n      color: rgba(0, 0, 0, 0.54);\n      margin: 16px auto 48px auto; }\n:host #error-500 .content .report-link {\n      text-align: center;\n      font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/errors/500/error-500.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseError500Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_services_config_service__ = __webpack_require__("./src/@fuse/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseError500Component = /** @class */ (function () {
    function FuseError500Component(fuseConfig) {
        this.fuseConfig = fuseConfig;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
    }
    FuseError500Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-error-500',
            template: __webpack_require__("./src/app/main/content/pages/errors/500/error-500.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/errors/500/error-500.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__fuse_services_config_service__["b" /* FuseConfigService */]])
    ], FuseError500Component);
    return FuseError500Component;
}());



/***/ }),

/***/ "./src/app/main/content/pages/errors/500/error-500.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error500Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_500_component__ = __webpack_require__("./src/app/main/content/pages/errors/500/error-500.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'errors/error-500',
        component: __WEBPACK_IMPORTED_MODULE_3__error_500_component__["a" /* FuseError500Component */]
    }
];
var Error500Module = /** @class */ (function () {
    function Error500Module() {
    }
    Error500Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__error_500_component__["a" /* FuseError500Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__fuse_shared_module__["a" /* FuseSharedModule */]
            ]
        })
    ], Error500Module);
    return Error500Module;
}());



/***/ }),

/***/ "./src/app/main/content/pages/faq/faq-form/faq-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n  <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\n      <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <span class=\"title dialog-title\">{{dialogTitle}}</span>\n          <button mat-button class=\"mat-icon-button\"\n                  (click)=\"dialogRef.close()\"\n                  aria-label=\"Close dialog\">\n              <mat-icon>close</mat-icon>\n          </button>\n      </mat-toolbar-row>\n  </mat-toolbar>\n\n  <div class=\"tab-content p-24\" fusePerfectScrollbar>\n    <form [formGroup]=\"faqForm\">\n\n        <mat-form-field class=\"w-100-p\">\n            <textarea matInput\n                      name=\"question\"\n                      formControlName=\"question\"\n                      placeholder=\"Please ask your question...\"\n                      rows=\"2\">\n            </textarea>\n        </mat-form-field>\n\n        <mat-form-field class=\"w-100-p\" *ngIf=\"action !== 'new'\">\n            <textarea matInput\n                      name=\"answer\"\n                      formControlName=\"answer\"\n                      placeholder=\"Please answer for this question...\"\n                      rows=\"5\">\n            </textarea>\n        </mat-form-field>\n\n        <mat-form-field class=\"w-100-p\" *ngIf=\"action !== 'new'\">\n            <textarea matInput\n                      name=\"link\"\n                      formControlName=\"link\"\n                      placeholder=\"Please add links to improve answer...\"\n                      rows=\"2\">\n            </textarea>\n        </mat-form-field>\n\n    </form>\n  </div>\n  <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n      <button *ngIf=\"action !=='edit'\"\n              mat-raised-button\n              (click)=\"dialogRef.close(faqForm)\"\n              class=\"save-button mat-accent\"\n              [disabled]=\"faqForm.invalid\"\n              aria-label=\"SAVE\">\n          SAVE\n      </button>\n\n      <button *ngIf=\"action ==='edit'\"\n              mat-raised-button\n              (click)=\"dialogRef.close(['save',faqForm])\"\n              class=\"save-button mat-accent\"\n              [disabled]=\"faqForm.invalid\"\n              aria-label=\"SAVE\">\n          SAVE\n      </button>\n\n      <button *ngIf=\"action ==='edit'\"\n              mat-button\n              class=\"mat-icon-button\"\n              (click)=\"dialogRef.close(['delete',faqForm])\"\n              aria-label=\"Delete\"\n              matTooltip=\"Delete\">\n          <mat-icon>delete</mat-icon>\n      </button>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/faq/faq-form/faq-form.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.faq-form-dialog {\n  width: 400px; }\n@media screen and (max-width: 599px) {\n    .faq-form-dialog {\n      width: 100%; } }\n.faq-form-dialog .mat-dialog-container {\n    overflow: hidden;\n    padding: 0px !important; }\n.faq-form-dialog .mat-dialog-container .mat-toolbar {\n      min-height: initial; }\n.faq-form-dialog .mat-dialog-container .toolbar-bottom {\n      height: auto; }\n.faq-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/faq/faq-form/faq-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var FaqFormComponent = /** @class */ (function () {
    function FaqFormComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = 'Edit Question and Answer';
            this.faq = data.faq;
        }
        else {
            this.dialogTitle = 'New Question';
            this.faq = {};
        }
        this.faqForm = this.createFaqForm();
    }
    FaqFormComponent.prototype.createFaqForm = function () {
        return this.formBuilder.group({
            id: [this.faq.id],
            question: [this.faq.question],
            answer: [this.faq.answer],
            link: [this.faq.link]
        });
    };
    FaqFormComponent.prototype.ngOnInit = function () {
    };
    FaqFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faq-form',
            template: __webpack_require__("./src/app/main/content/pages/faq/faq-form/faq-form.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/faq/faq-form/faq-form.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FaqFormComponent);
    return FaqFormComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"faq\" class=\"page-layout simple\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div class=\"hero-text mb-32\">\n            <h1>We're here to help</h1>\n            <h3>Frequently asked questions</h3>\n        </div>\n\n        <div class=\"search mat-white-bg mat-elevation-z7\" flex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon>search</mat-icon>\n            <input [formControl]=\"searchInput\" placeholder=\"Search in faqs..\" fxFlex>\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content px-16 py-24 px-sm-24 py-sm-32\">\n\n        <mat-accordion class=\"faqs-accordion\">\n\n            <mat-expansion-panel *ngFor=\"let faq of faqsFiltered; let i = index\" [expanded]=\"step === i\" (opened)=\"setStep(i)\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title flex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\"\n                            (click)=\"$event.stopPropagation();\">\n                            <mat-icon>more_vert</mat-icon>\n                        </button>\n                        <mat-menu #moreMenu=\"matMenu\">\n                            <button mat-menu-item aria-label=\"remove\" (click)=\"deleteFaq(faq)\">\n                                <mat-icon>delete</mat-icon>\n                                <span>Remove</span>\n                            </button>\n                            <button mat-menu-item aria-label=\"update\" (click)=\"updateFaq(faq)\">\n                                <mat-icon>edit</mat-icon>\n                                <span>Edit</span>\n                            </button>\n                            <button mat-menu-item aria-label=\"publish\" (click)=\"publish(faq)\">\n                                <mat-icon>share</mat-icon>\n                                <span>Publish</span>\n                            </button>\n                        </mat-menu>\n                        <!-- <mat-icon class=\"mr-8\">help_outline</mat-icon> -->\n                        {{faq.question}}\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n                {{faq.answer}}\n                <div></div>\n                <a href=\"{{faq.link}}\">{{faq.link}}</a>\n            </mat-expansion-panel>\n        </mat-accordion>\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n\n<!-- ADD QUESTION BUTTON -->\n<button mat-mini-fab class=\"mat-accent-bg add-button\" id=\"add-contact-button\" (click)=\"newFaq()\" aria-label=\"ask a question\"\n*fuseIfOnDom [@animate]=\"{value:'*', params:{delay:'300ms',scale:'.2'}}\">\n<mat-icon>add</mat-icon>\n</button>\n<!-- / ADD QUESTION BUTTON -->\n"

/***/ }),

/***/ "./src/app/main/content/pages/faq/faq.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host .header {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  height: 360px;\n  max-height: 360px; }\n@media screen and (max-width: 599px) {\n    :host .header {\n      height: 240px;\n      padding: 16px; } }\n:host .header .hero-text {\n    margin-bottom: 32px; }\n:host .header .hero-text h1 {\n      color: white;\n      font-size: 48px;\n      font-weight: 300;\n      letter-spacing: 0.01em;\n      text-align: center;\n      margin-top: 0;\n      margin-bottom: 16px; }\n@media (max-width: 599px) {\n        :host .header .hero-text h1 {\n          font-size: 24px; } }\n:host .header .hero-text h3 {\n      color: rgba(255, 255, 255, 0.75);\n      max-width: 480px;\n      text-align: center;\n      font-weight: 300;\n      letter-spacing: 0.03em;\n      margin: 0; }\n@media (max-width: 599px) {\n        :host .header .hero-text h3 {\n          font-size: 14px; } }\n:host .header .search {\n    width: 100%;\n    max-width: 640px;\n    height: 56px;\n    line-height: 56px;\n    padding: 18px; }\n:host .header .search input {\n      height: 56px;\n      padding-left: 16px;\n      color: rgba(0, 0, 0, 0.54);\n      border: none;\n      outline: none; }\n:host .content {\n  max-width: 960px;\n  width: 100%;\n  margin: 0 auto; }\n:host .add-button {\n  position: absolute;\n  right: 20px;\n  bottom: 30px; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseFaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__faq_service__ = __webpack_require__("./src/app/main/content/pages/faq/faq.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__faq_form_faq_form_component__ = __webpack_require__("./src/app/main/content/pages/faq/faq-form/faq-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var FuseFaqComponent = /** @class */ (function () {
    function FuseFaqComponent(faqService, dialog) {
        this.faqService = faqService;
        this.dialog = dialog;
        this.step = 0;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('');
    }
    FuseFaqComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onFaqsChanged =
            this.faqService.onFaqsChanged
                .subscribe(function (response) {
                _this.faqs = response;
                _this.faqsFiltered = response;
            });
        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function (searchText) {
            _this.faqsFiltered = __WEBPACK_IMPORTED_MODULE_4__fuse_utils__["a" /* FuseUtils */].filterArrayByString(_this.faqs, searchText);
        });
    };
    FuseFaqComponent.prototype.initData = function () {
    };
    FuseFaqComponent.prototype.ngOnDestroy = function () {
        this.onFaqsChanged.unsubscribe();
    };
    FuseFaqComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    FuseFaqComponent.prototype.nextStep = function () {
        this.step++;
    };
    FuseFaqComponent.prototype.prevStep = function () {
        this.step--;
    };
    FuseFaqComponent.prototype.newFaq = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__faq_form_faq_form_component__["a" /* FaqFormComponent */], {
            panelClass: 'faq-form-dialog',
            data: {
                action: 'new'
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            _this.faqService.updateFaq(response.getRawValue());
        });
    };
    FuseFaqComponent.prototype.updateFaq = function (faq) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__faq_form_faq_form_component__["a" /* FaqFormComponent */], {
            panelClass: 'faq-form-dialog',
            data: {
                faq: faq,
                action: 'edit'
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            var actionType = response[0];
            var formData = response[1];
            switch (actionType) {
                /**
                 * Save
                 */
                case 'save':
                    _this.faqService.updateFaq(formData.getRawValue());
                    break;
                /**
                 * Delete
                 */
                case 'delete':
                    _this.deleteFaq(faq);
                    break;
            }
        });
    };
    FuseFaqComponent.prototype.publishFaq = function (faq) {
    };
    /**
     * Delete Contact
     */
    FuseFaqComponent.prototype.deleteFaq = function (faq) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to remove?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.faqService.deleteFaq(faq);
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseFaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-faq',
            template: __webpack_require__("./src/app/main/content/pages/faq/faq.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/faq/faq.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_8__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__faq_service__["a" /* FaqService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatDialog */]])
    ], FuseFaqComponent);
    return FuseFaqComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/faq/faq.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__faq_service__ = __webpack_require__("./src/app/main/content/pages/faq/faq.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__faq_component__ = __webpack_require__("./src/app/main/content/pages/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__faq_form_faq_form_component__ = __webpack_require__("./src/app/main/content/pages/faq/faq-form/faq-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fuse_components__ = __webpack_require__("./src/@fuse/components/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: 'faq',
        component: __WEBPACK_IMPORTED_MODULE_5__faq_component__["a" /* FuseFaqComponent */],
        resolve: {
            faq: __WEBPACK_IMPORTED_MODULE_4__faq_service__["a" /* FaqService */]
        }
    }
];
var FaqModule = /** @class */ (function () {
    function FaqModule() {
    }
    FaqModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__faq_component__["a" /* FuseFaqComponent */],
                __WEBPACK_IMPORTED_MODULE_7__faq_form_faq_form_component__["a" /* FaqFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["V" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_9__fuse_components__["a" /* FuseConfirmDialogModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__faq_service__["a" /* FaqService */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7__faq_form_faq_form_component__["a" /* FaqFormComponent */]]
        })
    ], FaqModule);
    return FaqModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/faq/faq.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FaqService = /** @class */ (function () {
    function FaqService(http) {
        this.http = http;
        this.onFaqsChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    FaqService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getFaqs()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get faqs
     */
    FaqService.prototype.getFaqs = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/faq')
                .subscribe(function (response) {
                _this.faqs = response;
                _this.onFaqsChanged.next(_this.faqs);
                resolve(_this.faqs);
            }, reject);
        });
    };
    FaqService.prototype.newFaq = function (faq) {
    };
    FaqService.prototype.updateFaq = function (faq) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/faq/' + faq.id, __assign({}, faq))
                .subscribe(function (response) {
                _this.getFaqs();
                resolve(response);
            });
        });
    };
    FaqService.prototype.deleteFaq = function (faq) {
        var faqIndex = this.faqs.indexOf(faq);
        this.faqs.splice(faqIndex, 1);
        this.onFaqsChanged.next(this.faqs);
    };
    FaqService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], FaqService);
    return FaqService;
}());



/***/ }),

/***/ "./src/app/main/content/pages/invoices/compact/compact.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"invoice\" class=\"compact page-layout blank\" fxLayout=\"row\" fusePerfectScrollbar>\n\n    <div class=\"invoice-container\">\n\n        <!-- INVOICE -->\n        <div class=\"card\">\n\n            <div class=\"header\">\n                <div class=\"invoice-date\">{{invoice.date}}</div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\n                    <div class=\"client\">\n                        <div class=\"invoice-number\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <span class=\"title\">INVOICE</span>\n                            <span class=\"number\">{{invoice.number}}</span>\n                        </div>\n\n                        <div class=\"due-date\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <span class=\"title\">DUE DATE</span>\n                            <span class=\"date\">{{invoice.dueDate}}</span>\n                        </div>\n\n                        <div class=\"info\">\n                            <div class=\"title\">{{invoice.client.title}}</div>\n                            <div *ngIf=\"invoice?.client.address\" class=\"address\">{{invoice.client.address}}</div>\n                            <div *ngIf=\"invoice?.client.phone\" class=\"phone\">{{invoice.client.phone}}</div>\n                            <div *ngIf=\"invoice?.client.email\" class=\"email\">{{invoice.client.email}}</div>\n                            <div *ngIf=\"invoice?.client.website\" class=\"website\">{{invoice.client.website}}</div>\n                        </div>\n                    </div>\n\n                    <div class=\"issuer mat-accent-bg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <div class=\"logo\">\n                            <img src=\"assets/images/logos/logo.png\">\n                        </div>\n\n                        <div class=\"info\">\n                            <div class=\"title\">{{invoice.from.title}}</div>\n                            <div *ngIf=\"invoice?.from.address\" class=\"address\">{{invoice.from.address}}</div>\n                            <div *ngIf=\"invoice?.from.phone\" class=\"phone\">{{invoice.from.phone}}</div>\n                            <div *ngIf=\"invoice?.from.email\" class=\"email\">{{invoice.from.email}}</div>\n                            <div *ngIf=\"invoice?.from.website\" class=\"website\">{{invoice.from.website}}</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"content\">\n                <table class=\"simple invoice-table\">\n                    <thead>\n                        <tr>\n                            <th>SERVICE</th>\n                            <th>UNIT</th>\n                            <th class=\"text-right\">UNIT PRICE</th>\n                            <th class=\"text-right\">QUANTITY</th>\n                            <th class=\"text-right\">TOTAL</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let service of invoice.services\">\n                            <td>\n                                <div class=\"title\">\n                                    {{service.title}}\n                                </div>\n                            </td>\n                            <td>\n                                {{service.unit}}\n                            </td>\n                            <td class=\"text-right\">\n                                {{service.unitPrice | currency:'USD':'symbol'}}\n                            </td>\n                            <td class=\"text-right\">\n                                {{service.quantity}}\n                            </td>\n                            <td class=\"text-right\">\n                                {{service.total | currency:'USD':'symbol'}}\n                            </td>\n                        </tr>\n                        <!-- Double the invoice data for demo purposes -->\n                        <tr *ngFor=\"let service of invoice.services\">\n                            <td>\n                                <div class=\"title\">\n                                    {{service.title}}\n                                </div>\n                            </td>\n                            <td>\n                                {{service.unit}}\n                            </td>\n                            <td class=\"text-right\">\n                                {{service.unitPrice | currency:'USD':'symbol'}}\n                            </td>\n                            <td class=\"text-right\">\n                                {{service.quantity}}\n                            </td>\n                            <td class=\"text-right\">\n                                {{service.total | currency:'USD':'symbol'}}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <table class=\"simple invoice-table-footer\">\n                    <tbody>\n                        <tr class=\"subtotal\">\n                            <td>SUBTOTAL</td>\n                            <td>{{invoice.subtotal | currency:'USD':'symbol'}}</td>\n                        </tr>\n                        <tr class=\"tax\">\n                            <td>TAX</td>\n                            <td>{{invoice.tax | currency:'USD':'symbol'}}</td>\n                        </tr>\n                        <tr class=\"discount\">\n                            <td>DISCOUNT</td>\n                            <td>-{{invoice.discount | currency:'USD':'symbol'}}</td>\n                        </tr>\n                        <tr class=\"total\">\n                            <td>TOTAL</td>\n                            <td>{{invoice.total | currency:'USD':'symbol'}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <div class=\"footer\">\n                <div class=\"note\">Please pay within 15 days. Thank you for your business.</div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <div class=\"logo\">\n                        <img src=\"assets/images/logos/logo.png\">\n                    </div>\n                    <div class=\"small-note\">\n                        In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque\n                        scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit\n                        quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia.\n                        Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero\n                        tincidunt lacinia et eget eros.\n                    </div>\n                </div>\n            </div>\n\n            <!--\n\n            Use the following elements to add breaks to your pages. This will make sure that the section in between\n            these elements will be printed on a new page. The following two elements must be used before and after the\n            page content that you want to show as a new page. So, you have to wrap your content with them.\n\n            Elements:\n            ---------\n            <div class=\"page-break-after\"></div>\n            <div class=\"page-break-before\"></div>\n\n            -->\n\n            <!--\n\n            Example:\n            --------\n\n            Initial page content!\n\n            <div class=\"page-break-after\"></div>\n            <div class=\"page-break-before\"></div>\n\n            This is the second page!\n\n            <div class=\"page-break-after\"></div>\n            <div class=\"page-break-before\"></div>\n\n            This is the third page!\n\n            <div class=\"page-break-after\"></div>\n            <div class=\"page-break-before\"></div>\n\n            -->\n\n        </div>\n        <!-- / INVOICE -->\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/invoices/compact/compact.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  /* PRINT STYLES */ }\n:host #invoice.compact {\n    padding: 0;\n    overflow: auto; }\n:host #invoice.compact .invoice-container {\n      padding: 64px; }\n:host #invoice.compact .invoice-container .card {\n        width: 1020px;\n        min-width: 1020px;\n        max-width: 1020px;\n        padding: 64px 88px;\n        overflow: hidden;\n        background: #FFFFFF;\n        -webkit-box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n                box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n:host #invoice.compact .invoice-container .card .header .invoice-date {\n          font-size: 14px;\n          color: rgba(0, 0, 0, 0.54);\n          margin-bottom: 32px; }\n:host #invoice.compact .invoice-container .card .header .client .invoice-number {\n          font-size: 18px;\n          padding-bottom: 2px; }\n:host #invoice.compact .invoice-container .card .header .client .invoice-number .title {\n            color: rgba(0, 0, 0, 0.54); }\n:host #invoice.compact .invoice-container .card .header .client .invoice-number .number {\n            padding-left: 6px; }\n:host #invoice.compact .invoice-container .card .header .client .due-date {\n          font-size: 18px;\n          padding-bottom: 16px; }\n:host #invoice.compact .invoice-container .card .header .client .due-date .title {\n            color: rgba(0, 0, 0, 0.54); }\n:host #invoice.compact .invoice-container .card .header .client .due-date .date {\n            padding-left: 6px; }\n:host #invoice.compact .invoice-container .card .header .client .info {\n          color: rgba(0, 0, 0, 0.54);\n          line-height: 22px; }\n:host #invoice.compact .invoice-container .card .header .issuer {\n          margin-right: -88px;\n          padding-right: 66px; }\n:host #invoice.compact .invoice-container .card .header .issuer .logo {\n            width: 96px;\n            padding: 0 8px;\n            border-right: 1px solid rgba(255, 255, 255, 0.7); }\n:host #invoice.compact .invoice-container .card .header .issuer .info {\n            padding: 16px; }\n:host #invoice.compact .invoice-container .card .content .invoice-table {\n          margin-top: 64px;\n          font-size: 15px; }\n:host #invoice.compact .invoice-container .card .content .invoice-table thead tr th:first-child {\n            padding-left: 8px; }\n:host #invoice.compact .invoice-container .card .content .invoice-table thead tr th:last-child {\n            padding-right: 8px; }\n:host #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:first-child {\n            padding-left: 8px; }\n:host #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:last-child {\n            padding-right: 8px; }\n:host #invoice.compact .invoice-container .card .content .invoice-table .title {\n            font-size: 16px; }\n:host #invoice.compact .invoice-container .card .content .invoice-table .detail {\n            margin-top: 8px;\n            font-size: 12px;\n            color: rgba(0, 0, 0, 0.54);\n            max-width: 360px; }\n:host #invoice.compact .invoice-container .card .content .invoice-table-footer {\n          margin: 32px 0 72px 0; }\n:host #invoice.compact .invoice-container .card .content .invoice-table-footer tr td {\n            text-align: right;\n            font-size: 16px;\n            font-weight: 500;\n            color: rgba(0, 0, 0, 0.54);\n            border-bottom: none;\n            padding: 4px 8px; }\n:host #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:first-child {\n              text-align: left; }\n:host #invoice.compact .invoice-container .card .content .invoice-table-footer tr.discount td {\n            padding-bottom: 32px; }\n:host #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td {\n            padding: 24px 8px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12);\n            font-size: 35px;\n            font-weight: 300;\n            color: black; }\n:host #invoice.compact .invoice-container .card .footer .note {\n          font-size: 15px;\n          font-weight: 500;\n          margin-bottom: 24px; }\n:host #invoice.compact .invoice-container .card .footer .logo, :host #invoice.compact .invoice-container .card .footer .small-note {\n          -ms-flex: 0 1 auto; }\n:host #invoice.compact .invoice-container .card .footer .logo {\n          width: 32px;\n          min-width: 32px;\n          margin-right: 24px; }\n:host #invoice.compact .invoice-container .card .footer .small-note {\n          font-size: 12px;\n          font-weight: 500;\n          color: rgba(0, 0, 0, 0.54);\n          line-height: 18px; }\n@media print {\n    :host {\n      /* Invoice Specific Styles */ }\n      :host #invoice.compact .invoice-container {\n        padding: 0; }\n        :host #invoice.compact .invoice-container .card {\n          width: 100%;\n          min-width: 0;\n          background: none;\n          padding: 0;\n          -webkit-box-shadow: none;\n                  box-shadow: none; }\n          :host #invoice.compact .invoice-container .card .header .invoice-date {\n            margin-bottom: 16pt; }\n          :host #invoice.compact .invoice-container .card .header .issuer {\n            padding-right: 0;\n            margin-right: 0; }\n          :host #invoice.compact .invoice-container .card .content .invoice-table {\n            margin-top: 16pt; }\n            :host #invoice.compact .invoice-container .card .content .invoice-table thead tr th {\n              font-size: 10pt;\n              max-width: 60pt; }\n              :host #invoice.compact .invoice-container .card .content .invoice-table thead tr th:first-child {\n                padding-left: 0; }\n              :host #invoice.compact .invoice-container .card .content .invoice-table thead tr th:last-child {\n                padding-right: 0; }\n            :host #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:first-child {\n              padding-left: 0; }\n            :host #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:last-child {\n              padding-right: 0; }\n            :host #invoice.compact .invoice-container .card .content .invoice-table .title {\n              font-size: 10pt; }\n            :host #invoice.compact .invoice-container .card .content .invoice-table .detail {\n              margin-top: 4pt;\n              font-size: 9pt;\n              max-width: none; }\n          :host #invoice.compact .invoice-container .card .content .invoice-table-footer {\n            margin: 16pt 0; }\n            :host #invoice.compact .invoice-container .card .content .invoice-table-footer tr td {\n              font-size: 13pt;\n              padding: 4pt 4pt; }\n              :host #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:first-child {\n                text-align: left;\n                padding-left: 0; }\n              :host #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:last-child {\n                padding-right: 0; }\n            :host #invoice.compact .invoice-container .card .content .invoice-table-footer tr.discount td {\n              padding-bottom: 16pt; }\n            :host #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td {\n              padding: 16pt 4pt 0 4pt;\n              font-size: 16pt; }\n              :host #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td:first-child {\n                padding-left: 0; }\n              :host #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td:last-child {\n                padding-right: 0; }\n          :host #invoice.compact .invoice-container .card .footer .note {\n            font-size: 10pt;\n            margin-bottom: 8pt; }\n          :host #invoice.compact .invoice-container .card .footer .logo {\n            margin-right: 8pt; }\n          :host #invoice.compact .invoice-container .card .footer .small-note {\n            font-size: 8pt;\n            line-height: normal; } }\n"

/***/ }),

/***/ "./src/app/main/content/pages/invoices/compact/compact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseInvoiceCompactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__invoice_service__ = __webpack_require__("./src/app/main/content/pages/invoices/invoice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseInvoiceCompactComponent = /** @class */ (function () {
    function FuseInvoiceCompactComponent(invoiceService) {
        var _this = this;
        this.invoiceService = invoiceService;
        this.invoiceService.invoiceOnChanged
            .subscribe(function (invoice) {
            _this.invoice = invoice;
        });
    }
    FuseInvoiceCompactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-invoice-compact',
            template: __webpack_require__("./src/app/main/content/pages/invoices/compact/compact.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/invoices/compact/compact.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__invoice_service__["a" /* InvoiceService */]])
    ], FuseInvoiceCompactComponent);
    return FuseInvoiceCompactComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/invoices/compact/compact.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceCompactModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoice_service__ = __webpack_require__("./src/app/main/content/pages/invoices/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compact_component__ = __webpack_require__("./src/app/main/content/pages/invoices/compact/compact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'invoices/compact',
        component: __WEBPACK_IMPORTED_MODULE_4__compact_component__["a" /* FuseInvoiceCompactComponent */],
        resolve: {
            search: __WEBPACK_IMPORTED_MODULE_3__invoice_service__["a" /* InvoiceService */]
        }
    }
];
var InvoiceCompactModule = /** @class */ (function () {
    function InvoiceCompactModule() {
    }
    InvoiceCompactModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__compact_component__["a" /* FuseInvoiceCompactComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__fuse_shared_module__["a" /* FuseSharedModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__invoice_service__["a" /* InvoiceService */]
            ]
        })
    ], InvoiceCompactModule);
    return InvoiceCompactModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/invoices/invoice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvoiceService = /** @class */ (function () {
    function InvoiceService(http) {
        this.http = http;
        this.invoiceOnChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    InvoiceService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getInvoice()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get invoice
     */
    InvoiceService.prototype.getInvoice = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/invoice')
                .subscribe(function (timeline) {
                _this.invoice = timeline;
                _this.invoiceOnChanged.next(_this.invoice);
                resolve(_this.invoice);
            }, reject);
        });
    };
    InvoiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], InvoiceService);
    return InvoiceService;
}());



/***/ }),

/***/ "./src/app/main/content/pages/invoices/modern/modern.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"invoice\" class=\"modern page-layout blank\" fxLayout=\"row\" fusePerfectScrollbar>\n\n    <div class=\"invoice-container\">\n\n        <!-- INVOICE -->\n        <div class=\"card\">\n\n            <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n\n                <div class=\"ids\" fxLayout=\"column\">\n\n                    <div fxLayout=\"row\" class=\"seller\" fxLayoutAlign=\"start center\">\n\n                        <div class=\"logo\">\n                            <img src=\"assets/images/logos/logo.png\">\n                        </div>\n\n                        <div class=\"divider\"></div>\n\n                        <div class=\"detail\">\n                            <div class=\"title\">{{invoice.from.title}}</div>\n                            <div *ngIf=\"invoice?.from.address\" class=\"address\">\n                                {{invoice.from.address}}\n                            </div>\n                            <div *ngIf=\"invoice?.from.phone\" class=\"phone\">\n                                <span>Phone:</span>\n                                {{invoice.from.phone}}\n                            </div>\n                            <div *ngIf=\"invoice?.from.email\" class=\"email\">\n                                <span>Email:</span>\n                                {{invoice.from.email}}\n                            </div>\n                            <div *ngIf=\"invoice?.from.website\" class=\"website\">\n                                <span>Web:</span>\n                                {{invoice.from.website}}\n                            </div>\n                        </div>\n                    </div>\n\n                    <div fxLayout=\"row\" class=\"client\" fxLayoutAlign=\"start center\">\n                        <div class=\"label\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                            <div>CLIENT</div>\n                        </div>\n\n                        <div class=\"divider\"></div>\n\n                        <div class=\"detail\">\n                            <div class=\"title\">{{invoice.client.title}}</div>\n                            <div *ngIf=\"invoice?.client.address\" class=\"address\">\n                                {{invoice.client.address}}\n                            </div>\n                            <div *ngIf=\"invoice?.client.phone\" class=\"phone\">\n                                <span>Phone:</span>\n                                {{invoice.client.phone}}\n                            </div>\n                            <div *ngIf=\"invoice?.client.email\" class=\"email\">\n                                <span>Email:</span>\n                                {{invoice.client.email}}\n                            </div>\n                            <div *ngIf=\"invoice?.client.website\" class=\"website\">\n                                <span>Web:</span>\n                                {{invoice.client.website}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <table class=\"summary\">\n                    <tr class=\"code\">\n                        <td class=\"label\">INVOICE</td>\n                        <td class=\"value\">{{invoice.number}}</td>\n                    </tr>\n\n                    <tr>\n                        <td class=\"label\">INVOICE DATE</td>\n                        <td class=\"value\">{{invoice.date}}</td>\n                    </tr>\n\n                    <tr>\n                        <td class=\"label\">DUE DATE</td>\n                        <td class=\"value\">{{invoice.dueDate}}</td>\n                    </tr>\n\n                    <tr>\n                        <td class=\"label\">TOTAL DUE</td>\n                        <td class=\"value\">{{invoice.total | currency:'USD':'symbol'}}</td>\n                    </tr>\n                </table>\n            </div>\n\n            <div class=\"content\">\n                <table class=\"simple invoice-table\">\n                    <thead>\n                        <tr>\n                            <th>SERVICE</th>\n                            <th>UNIT</th>\n                            <th class=\"text-right\">UNIT PRICE</th>\n                            <th class=\"text-right\">QUANTITY</th>\n                            <th class=\"text-right\">TOTAL</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let service of invoice.services\">\n                            <td>\n                                <div class=\"title\">{{service.title}}</div>\n                                <div class=\"detail\">{{service.detail}}</div>\n                            </td>\n                            <td>\n                                {{service.unit}}\n                            </td>\n                            <td class=\"text-right\">\n                                {{service.unitPrice | currency:'USD':'symbol'}}\n                            </td>\n                            <td class=\"text-right\">\n                                {{service.quantity}}\n                            </td>\n                            <td class=\"text-right\">\n                                {{service.total | currency:'USD':'symbol'}}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <table class=\"simple invoice-table-footer\">\n                    <tbody>\n                        <tr class=\"subtotal\">\n                            <td>SUBTOTAL</td>\n                            <td>{{invoice.subtotal | currency:'USD':'symbol'}}</td>\n                        </tr>\n                        <tr class=\"tax\">\n                            <td>TAX</td>\n                            <td>{{invoice.tax | currency:'USD':'symbol'}}</td>\n                        </tr>\n                        <tr class=\"discount\">\n                            <td>DISCOUNT</td>\n                            <td>-{{invoice.discount | currency:'USD':'symbol'}}</td>\n                        </tr>\n                        <tr class=\"total\">\n                            <td>TOTAL</td>\n                            <td>{{invoice.total | currency:'USD':'symbol'}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <div class=\"footer\">\n                <div class=\"note\">Please pay within 15 days. Thank you for your business.</div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <div class=\"logo\">\n                        <img src=\"assets/images/logos/logo.png\">\n                    </div>\n                    <div class=\"small-note\">\n                        In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque\n                        scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit\n                        quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia.\n                        Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero\n                        tincidunt lacinia et eget eros.\n                    </div>\n                </div>\n            </div>\n\n            <!--\n\n            Use the following elements to add breaks to your pages. This will make sure that the section in between\n            these elements will be printed on a new page. The following two elements must be used before and after the\n            page content that you want to show as a new page. So, you have to wrap your content with them.\n\n            Elements:\n            ---------\n            <div class=\"page-break-after\"></div>\n            <div class=\"page-break-before\"></div>\n\n            -->\n\n            <!--\n\n            Example:\n            --------\n\n            Initial page content!\n\n            <div class=\"page-break-after\"></div>\n            <div class=\"page-break-before\"></div>\n\n            This is the second page!\n\n            <div class=\"page-break-after\"></div>\n            <div class=\"page-break-before\"></div>\n\n            This is the third page!\n\n            <div class=\"page-break-after\"></div>\n            <div class=\"page-break-before\"></div>\n\n            -->\n\n        </div>\n        <!-- / INVOICE -->\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/invoices/modern/modern.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  /* PRINT STYLES */ }\n:host #invoice.modern {\n    padding: 0;\n    overflow: auto; }\n:host #invoice.modern .invoice-container {\n      padding: 64px; }\n:host #invoice.modern .invoice-container .card {\n        width: 1020px;\n        min-width: 1020px;\n        max-width: 1020px;\n        padding: 88px;\n        overflow: hidden;\n        background: #FFFFFF;\n        -webkit-box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n                box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n:host #invoice.modern .invoice-container .card .header .ids {\n          line-height: 22px;\n          color: rgba(0, 0, 0, 0.54); }\n:host #invoice.modern .invoice-container .card .header .ids .detail {\n            width: 160px; }\n:host #invoice.modern .invoice-container .card .header .ids .seller {\n            margin-bottom: 80px; }\n:host #invoice.modern .invoice-container .card .header .ids .seller .logo {\n              width: 156px; }\n:host #invoice.modern .invoice-container .card .header .ids .client .label {\n            width: 156px;\n            font-size: 24px;\n            font-weight: 300; }\n:host #invoice.modern .invoice-container .card .header .ids .divider {\n            width: 1px;\n            margin: 0 48px;\n            background-color: rgba(0, 0, 0, 0.12);\n            height: 144px; }\n:host #invoice.modern .invoice-container .card .header .summary {\n          font-size: 15px; }\n:host #invoice.modern .invoice-container .card .header .summary .label {\n            color: rgba(0, 0, 0, 0.54);\n            text-align: right;\n            padding-right: 16px; }\n:host #invoice.modern .invoice-container .card .header .summary .value {\n            color: black; }\n:host #invoice.modern .invoice-container .card .header .summary .code {\n            font-size: 35px;\n            font-weight: 300; }\n:host #invoice.modern .invoice-container .card .header .summary .code td {\n              padding-bottom: 32px; }\n:host #invoice.modern .invoice-container .card .content .invoice-table {\n          margin-top: 96px;\n          font-size: 15px; }\n:host #invoice.modern .invoice-container .card .content .invoice-table .title {\n            font-size: 17px; }\n:host #invoice.modern .invoice-container .card .content .invoice-table .detail {\n            margin-top: 8px;\n            font-size: 12px;\n            color: rgba(0, 0, 0, 0.54);\n            max-width: 360px; }\n:host #invoice.modern .invoice-container .card .content .invoice-table-footer {\n          margin: 32px 0 96px 0; }\n:host #invoice.modern .invoice-container .card .content .invoice-table-footer tr td {\n            text-align: right;\n            font-size: 17px;\n            font-weight: 500;\n            color: rgba(0, 0, 0, 0.54);\n            border-bottom: none;\n            padding: 8px 8px; }\n:host #invoice.modern .invoice-container .card .content .invoice-table-footer tr td:first-child {\n              text-align: left; }\n:host #invoice.modern .invoice-container .card .content .invoice-table-footer tr.discount td {\n            padding-bottom: 32px; }\n:host #invoice.modern .invoice-container .card .content .invoice-table-footer tr.total td {\n            padding: 32px 8px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12);\n            font-size: 35px;\n            font-weight: 300;\n            color: black; }\n:host #invoice.modern .invoice-container .card .footer .note {\n          font-size: 15px;\n          font-weight: 500;\n          margin-bottom: 24px; }\n:host #invoice.modern .invoice-container .card .footer .logo, :host #invoice.modern .invoice-container .card .footer .small-note {\n          -ms-flex: 0 1 auto; }\n:host #invoice.modern .invoice-container .card .footer .logo {\n          width: 32px;\n          min-width: 32px;\n          margin-right: 24px; }\n:host #invoice.modern .invoice-container .card .footer .small-note {\n          font-size: 12px;\n          font-weight: 500;\n          color: rgba(0, 0, 0, 0.54);\n          line-height: 18px; }\n@media print {\n    :host {\n      /* Invoice Specific Styles */ }\n      :host #invoice.modern .invoice-container {\n        padding: 0; }\n        :host #invoice.modern .invoice-container .card {\n          width: 100%;\n          min-width: 0;\n          background: none;\n          padding: 0;\n          -webkit-box-shadow: none;\n                  box-shadow: none; }\n          :host #invoice.modern .invoice-container .card .header .ids .detail {\n            width: 120pt; }\n          :host #invoice.modern .invoice-container .card .header .ids .seller {\n            margin-bottom: 8pt; }\n            :host #invoice.modern .invoice-container .card .header .ids .seller .logo {\n              width: 60pt; }\n          :host #invoice.modern .invoice-container .card .header .ids .client .label {\n            width: 60pt;\n            font-size: 16pt; }\n          :host #invoice.modern .invoice-container .card .header .ids .divider {\n            margin: 0 12pt;\n            height: 100pt; }\n          :host #invoice.modern .invoice-container .card .header .summary {\n            font-size: 10pt; }\n            :host #invoice.modern .invoice-container .card .header .summary .code {\n              font-size: 18pt; }\n              :host #invoice.modern .invoice-container .card .header .summary .code td {\n                padding-bottom: 10pt; }\n          :host #invoice.modern .invoice-container .card .content .invoice-table {\n            margin-top: 16pt; }\n            :host #invoice.modern .invoice-container .card .content .invoice-table thead tr th {\n              font-size: 10pt;\n              max-width: 60pt; }\n              :host #invoice.modern .invoice-container .card .content .invoice-table thead tr th:first-child {\n                padding-left: 0; }\n              :host #invoice.modern .invoice-container .card .content .invoice-table thead tr th:last-child {\n                padding-right: 0; }\n            :host #invoice.modern .invoice-container .card .content .invoice-table tbody tr td:first-child {\n              padding-left: 0; }\n            :host #invoice.modern .invoice-container .card .content .invoice-table tbody tr td:last-child {\n              padding-right: 0; }\n            :host #invoice.modern .invoice-container .card .content .invoice-table .title {\n              font-size: 10pt; }\n            :host #invoice.modern .invoice-container .card .content .invoice-table .detail {\n              margin-top: 4pt;\n              font-size: 9pt;\n              max-width: none; }\n          :host #invoice.modern .invoice-container .card .content .invoice-table-footer {\n            margin: 16pt 0; }\n            :host #invoice.modern .invoice-container .card .content .invoice-table-footer tr td {\n              font-size: 13pt;\n              padding: 4pt 4pt; }\n              :host #invoice.modern .invoice-container .card .content .invoice-table-footer tr td:first-child {\n                text-align: left;\n                padding-left: 0; }\n              :host #invoice.modern .invoice-container .card .content .invoice-table-footer tr td:last-child {\n                padding-right: 0; }\n            :host #invoice.modern .invoice-container .card .content .invoice-table-footer tr.discount td {\n              padding-bottom: 16pt; }\n            :host #invoice.modern .invoice-container .card .content .invoice-table-footer tr.total td {\n              padding: 16pt 4pt 0 4pt;\n              font-size: 16pt; }\n              :host #invoice.modern .invoice-container .card .content .invoice-table-footer tr.total td:first-child {\n                padding-left: 0; }\n              :host #invoice.modern .invoice-container .card .content .invoice-table-footer tr.total td:last-child {\n                padding-right: 0; }\n          :host #invoice.modern .invoice-container .card .footer .note {\n            font-size: 10pt;\n            margin-bottom: 8pt; }\n          :host #invoice.modern .invoice-container .card .footer .logo {\n            font-size: 14pt;\n            margin-right: 8pt; }\n          :host #invoice.modern .invoice-container .card .footer .small-note {\n            font-size: 8pt;\n            line-height: normal; } }\n"

/***/ }),

/***/ "./src/app/main/content/pages/invoices/modern/modern.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseInvoiceModernComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__invoice_service__ = __webpack_require__("./src/app/main/content/pages/invoices/invoice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseInvoiceModernComponent = /** @class */ (function () {
    function FuseInvoiceModernComponent(invoiceService) {
        var _this = this;
        this.invoiceService = invoiceService;
        this.invoiceService.invoiceOnChanged
            .subscribe(function (invoice) {
            _this.invoice = invoice;
        });
    }
    FuseInvoiceModernComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-invoice-modern',
            template: __webpack_require__("./src/app/main/content/pages/invoices/modern/modern.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/invoices/modern/modern.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__invoice_service__["a" /* InvoiceService */]])
    ], FuseInvoiceModernComponent);
    return FuseInvoiceModernComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/invoices/modern/modern.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceModernModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoice_service__ = __webpack_require__("./src/app/main/content/pages/invoices/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modern_component__ = __webpack_require__("./src/app/main/content/pages/invoices/modern/modern.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'invoices/modern',
        component: __WEBPACK_IMPORTED_MODULE_4__modern_component__["a" /* FuseInvoiceModernComponent */],
        resolve: {
            search: __WEBPACK_IMPORTED_MODULE_3__invoice_service__["a" /* InvoiceService */]
        }
    }
];
var InvoiceModernModule = /** @class */ (function () {
    function InvoiceModernModule() {
    }
    InvoiceModernModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__modern_component__["a" /* FuseInvoiceModernComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__fuse_shared_module__["a" /* FuseSharedModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__invoice_service__["a" /* InvoiceService */]
            ]
        })
    ], InvoiceModernModule);
    return InvoiceModernModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/knowledge-base/dialogs/article/article.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\n        <mat-toolbar-row>\n            <span class=\"title dialog-title\">{{data.article.title}}</span>\n        </mat-toolbar-row>\n    </mat-toolbar>\n\n    <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\n        <div [innerHTML]=\"data.article.content\"></div>\n    </div>\n\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n        <button mat-button (click)=\"dialogRef.close()\" class=\"mat-accent\" aria-label=\"Close\">\n            CLOSE\n        </button>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/knowledge-base/dialogs/article/article.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.knowledgebase-article-dialog {\n  width: 720px; }\n@media screen and (max-width: 599px) {\n    .knowledgebase-article-dialog {\n      width: 100%; } }\n.knowledgebase-article-dialog .mat-dialog-container {\n    padding: 0; }\n.knowledgebase-article-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/knowledge-base/dialogs/article/article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseKnowledgeBaseArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var FuseKnowledgeBaseArticleComponent = /** @class */ (function () {
    function FuseKnowledgeBaseArticleComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    FuseKnowledgeBaseArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-knowledge-base-article',
            template: __webpack_require__("./src/app/main/content/pages/knowledge-base/dialogs/article/article.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/knowledge-base/dialogs/article/article.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatDialogRef */], Object])
    ], FuseKnowledgeBaseArticleComponent);
    return FuseKnowledgeBaseArticleComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/knowledge-base/knowledge-base.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"knowledgebase\" class=\"page-layout simple\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div class=\"hero-text mb-32\">\n            <h1>How can we help?</h1>\n            <h3>Welcome to our knowledge base</h3>\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\">\n\n            <mat-nav-list class=\"articles-list mat-white-bg mat-elevation-z4\" *ngFor=\"let category of knowledgeBase\">\n\n                <h3 mat-subheader>{{category.title}}</h3>\n\n                <a mat-list-item *ngFor=\"let article of category.featuredArticles\"\n                   (click)=\"readArticle(article)\">\n                    <mat-icon class=\"mr-8\">note</mat-icon>\n                    {{ article.title }}\n                </a>\n\n                <a mat-list-item class=\"see-all-link accent-fg\" [routerLink]=\"category.path\">\n                    See all articles ({{category.articlesCount}})\n                </a>\n\n            </mat-nav-list>\n\n        </div>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/knowledge-base/knowledge-base.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#knowledgebase .header {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  height: 280px;\n  max-height: 280px; }\n@media screen and (max-width: 599px) {\n    #knowledgebase .header {\n      height: 240px;\n      padding: 16px; } }\n#knowledgebase .header .hero-text h1 {\n    color: white;\n    font-size: 48px;\n    font-weight: 300;\n    letter-spacing: 0.01em;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 16px; }\n@media (max-width: 599px) {\n      #knowledgebase .header .hero-text h1 {\n        font-size: 24px; } }\n#knowledgebase .header .hero-text h3 {\n    color: rgba(255, 255, 255, 0.75);\n    max-width: 480px;\n    text-align: center;\n    font-weight: 300;\n    letter-spacing: 0.03em;\n    margin: 0; }\n@media (max-width: 599px) {\n      #knowledgebase .header .hero-text h3 {\n        font-size: 14px; } }\n#knowledgebase .content {\n  max-width: 960px;\n  width: 100%;\n  margin: 0 auto; }\n#knowledgebase .content .articles-list {\n    width: 400px;\n    min-width: 400px;\n    margin: 16px;\n    padding: 16px; }\n@media (max-width: 599px) {\n      #knowledgebase .content .articles-list {\n        min-width: 300px;\n        margin: 16px 0; } }\n#knowledgebase .content .articles-list .mat-list-item {\n      text-decoration: none !important; }\n#knowledgebase .content .articles-list .see-all-link {\n      font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/knowledge-base/knowledge-base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseKnowledgeBaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__knowledge_base_service__ = __webpack_require__("./src/app/main/content/pages/knowledge-base/knowledge-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs_article_article_component__ = __webpack_require__("./src/app/main/content/pages/knowledge-base/dialogs/article/article.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseKnowledgeBaseComponent = /** @class */ (function () {
    function FuseKnowledgeBaseComponent(knowledgeBaseService, matDialog) {
        this.knowledgeBaseService = knowledgeBaseService;
        this.matDialog = matDialog;
    }
    FuseKnowledgeBaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onKnowledgeBaseChanged =
            this.knowledgeBaseService.onKnowledgeBaseChanged
                .subscribe(function (response) {
                _this.knowledgeBase = response;
            });
    };
    FuseKnowledgeBaseComponent.prototype.ngOnDestroy = function () {
        this.onKnowledgeBaseChanged.unsubscribe();
    };
    FuseKnowledgeBaseComponent.prototype.readArticle = function (article) {
        this.matDialog.open(__WEBPACK_IMPORTED_MODULE_3__dialogs_article_article_component__["a" /* FuseKnowledgeBaseArticleComponent */], {
            panelClass: 'knowledgebase-article-dialog',
            data: { article: article }
        });
    };
    FuseKnowledgeBaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-knowledge-base',
            template: __webpack_require__("./src/app/main/content/pages/knowledge-base/knowledge-base.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/knowledge-base/knowledge-base.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__knowledge_base_service__["a" /* KnowledgeBaseService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */]])
    ], FuseKnowledgeBaseComponent);
    return FuseKnowledgeBaseComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/knowledge-base/knowledge-base.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KnowledgeBaseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__knowledge_base_service__ = __webpack_require__("./src/app/main/content/pages/knowledge-base/knowledge-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__knowledge_base_component__ = __webpack_require__("./src/app/main/content/pages/knowledge-base/knowledge-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialogs_article_article_component__ = __webpack_require__("./src/app/main/content/pages/knowledge-base/dialogs/article/article.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'knowledge-base',
        component: __WEBPACK_IMPORTED_MODULE_5__knowledge_base_component__["a" /* FuseKnowledgeBaseComponent */],
        resolve: {
            knowledgeBase: __WEBPACK_IMPORTED_MODULE_4__knowledge_base_service__["a" /* KnowledgeBaseService */]
        }
    }
];
var KnowledgeBaseModule = /** @class */ (function () {
    function KnowledgeBaseModule() {
    }
    KnowledgeBaseModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__knowledge_base_component__["a" /* FuseKnowledgeBaseComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dialogs_article_article_component__["a" /* FuseKnowledgeBaseArticleComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["V" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__knowledge_base_service__["a" /* KnowledgeBaseService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__dialogs_article_article_component__["a" /* FuseKnowledgeBaseArticleComponent */]
            ]
        })
    ], KnowledgeBaseModule);
    return KnowledgeBaseModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/knowledge-base/knowledge-base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KnowledgeBaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KnowledgeBaseService = /** @class */ (function () {
    function KnowledgeBaseService(http) {
        this.http = http;
        this.onKnowledgeBaseChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    KnowledgeBaseService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getKnowledgeBase()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get knowledge base
     */
    KnowledgeBaseService.prototype.getKnowledgeBase = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/knowledge-base')
                .subscribe(function (response) {
                _this.knowledgeBase = response;
                _this.onKnowledgeBaseChanged.next(_this.knowledgeBase);
                resolve(_this.knowledgeBase);
            }, reject);
        });
    };
    KnowledgeBaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], KnowledgeBaseService);
    return KnowledgeBaseService;
}());



/***/ }),

/***/ "./src/app/main/content/pages/maintenance/maintenance.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"maintenance\" fxLayout=\"column\" fusePerfectScrollbar>\n\n    <div id=\"maintenance-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div id=\"maintenance-form\" *fuseIfOnDom [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n\n            <div class=\"logo\">\n                <img src=\"assets/images/logos/logo.png\">\n            </div>\n\n            <div class=\"title\">Closed for scheduled maintenance!</div>\n\n            <div class=\"subtitle\">\n                We're sorry for the inconvenience. <br> Please check back later.\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/maintenance/maintenance.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #maintenance {\n  width: 100%;\n  overflow: auto;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #maintenance #maintenance-form-wrapper {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #maintenance #maintenance-form-wrapper {\n        padding: 16px; } }\n:host #maintenance #maintenance-form-wrapper #maintenance-form {\n      max-width: 384px;\n      padding: 48px;\n      background: #FFFFFF;\n      text-align: center;\n      -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n              box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        :host #maintenance #maintenance-form-wrapper #maintenance-form {\n          padding: 24px;\n          width: 100%; } }\n:host #maintenance #maintenance-form-wrapper #maintenance-form .logo {\n        width: 128px;\n        margin: 32px auto; }\n:host #maintenance #maintenance-form-wrapper #maintenance-form .title {\n        font-size: 17px;\n        margin-top: 16px; }\n:host #maintenance #maintenance-form-wrapper #maintenance-form .subtitle {\n        margin: 16px 0;\n        max-width: 300px;\n        color: rgba(0, 0, 0, 0.54);\n        font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/maintenance/maintenance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMaintenanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_services_config_service__ = __webpack_require__("./src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseMaintenanceComponent = /** @class */ (function () {
    function FuseMaintenanceComponent(fuseConfig) {
        this.fuseConfig = fuseConfig;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
    }
    FuseMaintenanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-maintenance',
            template: __webpack_require__("./src/app/main/content/pages/maintenance/maintenance.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/maintenance/maintenance.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_2__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__fuse_services_config_service__["b" /* FuseConfigService */]])
    ], FuseMaintenanceComponent);
    return FuseMaintenanceComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/maintenance/maintenence.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintenanceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__maintenance_component__ = __webpack_require__("./src/app/main/content/pages/maintenance/maintenance.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'maintenance',
        component: __WEBPACK_IMPORTED_MODULE_3__maintenance_component__["a" /* FuseMaintenanceComponent */]
    }
];
var MaintenanceModule = /** @class */ (function () {
    function MaintenanceModule() {
    }
    MaintenanceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__maintenance_component__["a" /* FuseMaintenanceComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__fuse_shared_module__["a" /* FuseSharedModule */]
            ]
        })
    ], MaintenanceModule);
    return MaintenanceModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FusePagesModule", function() { return FusePagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_login_login_module__ = __webpack_require__("./src/app/main/content/pages/authentication/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_login_2_login_2_module__ = __webpack_require__("./src/app/main/content/pages/authentication/login-2/login-2.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_register_register_module__ = __webpack_require__("./src/app/main/content/pages/authentication/register/register.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_register_2_register_2_module__ = __webpack_require__("./src/app/main/content/pages/authentication/register-2/register-2.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_forgot_password_forgot_password_module__ = __webpack_require__("./src/app/main/content/pages/authentication/forgot-password/forgot-password.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentication_forgot_password_2_forgot_password_2_module__ = __webpack_require__("./src/app/main/content/pages/authentication/forgot-password-2/forgot-password-2.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authentication_reset_password_reset_password_module__ = __webpack_require__("./src/app/main/content/pages/authentication/reset-password/reset-password.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authentication_reset_password_2_reset_password_2_module__ = __webpack_require__("./src/app/main/content/pages/authentication/reset-password-2/reset-password-2.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__authentication_lock_lock_module__ = __webpack_require__("./src/app/main/content/pages/authentication/lock/lock.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authentication_mail_confirm_mail_confirm_module__ = __webpack_require__("./src/app/main/content/pages/authentication/mail-confirm/mail-confirm.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__coming_soon_coming_soon_module__ = __webpack_require__("./src/app/main/content/pages/coming-soon/coming-soon.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__errors_404_error_404_module__ = __webpack_require__("./src/app/main/content/pages/errors/404/error-404.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__errors_500_error_500_module__ = __webpack_require__("./src/app/main/content/pages/errors/500/error-500.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__invoices_compact_compact_module__ = __webpack_require__("./src/app/main/content/pages/invoices/compact/compact.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__invoices_modern_modern_module__ = __webpack_require__("./src/app/main/content/pages/invoices/modern/modern.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__maintenance_maintenence_module__ = __webpack_require__("./src/app/main/content/pages/maintenance/maintenence.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pricing_pricing_module__ = __webpack_require__("./src/app/main/content/pages/pricing/pricing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profile_profile_module__ = __webpack_require__("./src/app/main/content/pages/profile/profile.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__search_search_module__ = __webpack_require__("./src/app/main/content/pages/search/search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__faq_faq_module__ = __webpack_require__("./src/app/main/content/pages/faq/faq.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__knowledge_base_knowledge_base_module__ = __webpack_require__("./src/app/main/content/pages/knowledge-base/knowledge-base.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var FusePagesModule = /** @class */ (function () {
    function FusePagesModule() {
    }
    FusePagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                // Auth
                __WEBPACK_IMPORTED_MODULE_1__authentication_login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_2__authentication_login_2_login_2_module__["a" /* Login2Module */],
                __WEBPACK_IMPORTED_MODULE_3__authentication_register_register_module__["a" /* RegisterModule */],
                __WEBPACK_IMPORTED_MODULE_4__authentication_register_2_register_2_module__["a" /* Register2Module */],
                __WEBPACK_IMPORTED_MODULE_5__authentication_forgot_password_forgot_password_module__["a" /* ForgotPasswordModule */],
                __WEBPACK_IMPORTED_MODULE_6__authentication_forgot_password_2_forgot_password_2_module__["a" /* ForgotPassword2Module */],
                __WEBPACK_IMPORTED_MODULE_7__authentication_reset_password_reset_password_module__["a" /* ResetPasswordModule */],
                __WEBPACK_IMPORTED_MODULE_8__authentication_reset_password_2_reset_password_2_module__["a" /* ResetPassword2Module */],
                __WEBPACK_IMPORTED_MODULE_9__authentication_lock_lock_module__["a" /* LockModule */],
                __WEBPACK_IMPORTED_MODULE_10__authentication_mail_confirm_mail_confirm_module__["a" /* MailConfirmModule */],
                // Coming-soon
                __WEBPACK_IMPORTED_MODULE_11__coming_soon_coming_soon_module__["a" /* ComingSoonModule */],
                // Errors
                __WEBPACK_IMPORTED_MODULE_12__errors_404_error_404_module__["a" /* Error404Module */],
                __WEBPACK_IMPORTED_MODULE_13__errors_500_error_500_module__["a" /* Error500Module */],
                // Invoices
                __WEBPACK_IMPORTED_MODULE_15__invoices_modern_modern_module__["a" /* InvoiceModernModule */],
                __WEBPACK_IMPORTED_MODULE_14__invoices_compact_compact_module__["a" /* InvoiceCompactModule */],
                // Maintenance
                __WEBPACK_IMPORTED_MODULE_16__maintenance_maintenence_module__["a" /* MaintenanceModule */],
                // Pricing
                __WEBPACK_IMPORTED_MODULE_17__pricing_pricing_module__["a" /* PricingModule */],
                // Profile
                __WEBPACK_IMPORTED_MODULE_18__profile_profile_module__["a" /* ProfileModule */],
                // Search
                __WEBPACK_IMPORTED_MODULE_19__search_search_module__["a" /* SearchModule */],
                // Faq
                __WEBPACK_IMPORTED_MODULE_20__faq_faq_module__["a" /* FaqModule */],
                // Knowledge base
                __WEBPACK_IMPORTED_MODULE_21__knowledge_base_knowledge_base_module__["a" /* KnowledgeBaseModule */]
            ]
        })
    ], FusePagesModule);
    return FusePagesModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/pricing/pricing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_1_style_1_component__ = __webpack_require__("./src/app/main/content/pages/pricing/style-1/style-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_2_style_2_component__ = __webpack_require__("./src/app/main/content/pages/pricing/style-2/style-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_3_style_3_component__ = __webpack_require__("./src/app/main/content/pages/pricing/style-3/style-3.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'pricing/style-1',
        component: __WEBPACK_IMPORTED_MODULE_4__style_1_style_1_component__["a" /* FusePricingStyle1Component */]
    },
    {
        path: 'pricing/style-2',
        component: __WEBPACK_IMPORTED_MODULE_5__style_2_style_2_component__["a" /* FusePricingStyle2Component */]
    },
    {
        path: 'pricing/style-3',
        component: __WEBPACK_IMPORTED_MODULE_6__style_3_style_3_component__["a" /* FusePricingStyle3Component */]
    }
];
var PricingModule = /** @class */ (function () {
    function PricingModule() {
    }
    PricingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__style_1_style_1_component__["a" /* FusePricingStyle1Component */],
                __WEBPACK_IMPORTED_MODULE_5__style_2_style_2_component__["a" /* FusePricingStyle2Component */],
                __WEBPACK_IMPORTED_MODULE_6__style_3_style_3_component__["a" /* FusePricingStyle3Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ]
        })
    ], PricingModule);
    return PricingModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/pricing/style-1/style-1.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"price-tables\" class=\"page-layout simple fullwidth\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n        <div class=\"hero-text\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex>\n\n            <div class=\"h1\">Simple Pricing!</div>\n            <div class=\"h3\">\n                The most advanced customer support tools with a simple and affordable pricing. And you can always try\n                for 30 days, free!\n            </div>\n\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\" fxLayout=\"column\">\n\n        <!-- PRICE TABLES -->\n        <div class=\"price-tables\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n\n            <div class=\"price-table style-1 mat-elevation-z4\" fxLayout=\"column\">\n\n                <div class=\"package-type mat-primary-bg\">\n                    <span>BASIC</span>\n                </div>\n\n                <div class=\"price\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n                    <div class=\"currency\">$</div>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center end\">\n                        <div class=\"value\">4</div>\n                        <div class=\"period\">/ month</div>\n                    </div>\n                </div>\n\n                <mat-divider></mat-divider>\n\n                <div class=\"terms\" fxLayout=\"column\">\n                    <div class=\"term\">\n                        <span class=\"text-bold\">10</span>\n                        Projects\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">10</span>\n                        Pages\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">100</span>\n                        Mb Disk Space\n                    </div>\n                </div>\n\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">BUY NOW</button>\n\n            </div>\n\n            <div class=\"price-table style-1 mat-elevation-z12\" fxLayout=\"column\">\n\n                <div class=\"package-type mat-primary-bg\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <span>STANDARD</span>\n                    <span class=\"sale mat-accent-color mat-hue-1\">Save 15%</span>\n                </div>\n\n                <div class=\"price\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n                    <div class=\"currency\">$</div>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center end\">\n                        <div class=\"value\">8</div>\n                        <div class=\"period\">/ month</div>\n                    </div>\n                </div>\n\n                <mat-divider></mat-divider>\n\n                <div class=\"terms\" fxLayout=\"column\">\n                    <div class=\"term\">\n                        <span class=\"text-bold\">20</span>\n                        Projects\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">20</span>\n                        Pages\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">200</span>\n                        Mb Disk Space\n                    </div>\n                </div>\n\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">BUY NOW</button>\n\n            </div>\n\n            <div class=\"price-table style-1 mat-elevation-z4\" fxLayout=\"column\">\n\n                <div class=\"package-type mat-primary-bg\" fxLayout=\"row\">\n                    <span>ADVANCED</span>\n                </div>\n\n                <div class=\"price\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n                    <div class=\"currency\">$</div>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center end\">\n                        <div class=\"value\">12</div>\n                        <div class=\"period\">/ month</div>\n                    </div>\n                </div>\n\n                <mat-divider></mat-divider>\n\n                <div class=\"terms\" fxLayout=\"column\">\n                    <div class=\"term\">\n                        <span class=\"text-bold\">40</span>\n                        Projects\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">40</span>\n                        Pages\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">500</span>\n                        Mb Disk Space\n                    </div>\n                </div>\n\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">BUY NOW</button>\n\n            </div>\n\n        </div>\n        <!-- / PRICE TABLES -->\n\n        <div class=\"faq\" fxLayout=\"row wrap\">\n\n            <div class=\"title\" fxFlex=\"100\">Frequently Asked Questions</div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">How does free trial work?</div>\n                <div class=\"answer\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt\n                    accumsan. In dignissim laoreet ipsum eu interdum.\n                </div>\n            </div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">Can I cancel any time?</div>\n                <div class=\"answer\">\n                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.\n                    Donec maximus ipsum in malesuada hendrerit.\n                </div>\n            </div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">What happens after my trial ended?</div>\n                <div class=\"answer\">\n                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.\n                    Donec maximus ipsum in malesuada hendrerit.\n                </div>\n            </div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">Can I have a discount?</div>\n                <div class=\"answer\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt\n                    accumsan. In dignissim laoreet ipsum eu interdum.\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/content/pages/pricing/style-1/style-1.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #price-tables .header {\n  padding: 24px;\n  height: 600px;\n  min-height: 600px;\n  background: #1A237E;\n  background: -webkit-gradient(linear, left top, right top, from(#0E2A3B), to(#34306B));\n  background: linear-gradient(to right, #0E2A3B 0%, #34306B 100%); }\n@media (max-width: 599px) {\n    :host #price-tables .header {\n      height: 400px;\n      min-height: 400px; } }\n:host #price-tables .header .hero-text {\n    margin: 128px 24px; }\n@media (max-width: 599px) {\n      :host #price-tables .header .hero-text {\n        margin: 64px 24px; } }\n:host #price-tables .header .hero-text .h1 {\n      color: white;\n      font-size: 48px;\n      font-weight: 300;\n      letter-spacing: 0.01em;\n      text-align: center; }\n@media (max-width: 599px) {\n        :host #price-tables .header .hero-text .h1 {\n          font-size: 32px; } }\n:host #price-tables .header .hero-text .h3 {\n      color: rgba(255, 255, 255, 0.75);\n      max-width: 480px;\n      text-align: center;\n      margin-top: 16px;\n      font-weight: 300;\n      letter-spacing: 0.03em; }\n@media (max-width: 599px) {\n        :host #price-tables .header .hero-text .h3 {\n          font-size: 14px; } }\n:host #price-tables .price-tables {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  margin-top: -192px; }\n@media (max-width: 599px) {\n    :host #price-tables .price-tables {\n      margin-top: -128px; } }\n:host #price-tables .price-tables .price-table {\n    margin: 12px; }\n:host #price-tables .faq {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  margin: 96px auto;\n  max-width: 840px; }\n:host #price-tables .faq .title {\n    font-size: 32px;\n    font-weight: 300;\n    text-align: center;\n    margin-bottom: 64px;\n    padding: 0 16px; }\n:host #price-tables .faq .item {\n    padding: 24px; }\n:host #price-tables .faq .item .question {\n      font-size: 18px;\n      margin-bottom: 8px; }\n:host #price-tables .faq .item .answer {\n      font-size: 16px;\n      line-height: 1.5;\n      color: rgba(0, 0, 0, 0.54); }\n"

/***/ }),

/***/ "./src/app/main/content/pages/pricing/style-1/style-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FusePricingStyle1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FusePricingStyle1Component = /** @class */ (function () {
    function FusePricingStyle1Component() {
    }
    FusePricingStyle1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-pricing-style-1',
            template: __webpack_require__("./src/app/main/content/pages/pricing/style-1/style-1.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/pricing/style-1/style-1.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FusePricingStyle1Component);
    return FusePricingStyle1Component;
}());



/***/ }),

/***/ "./src/app/main/content/pages/pricing/style-2/style-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"price-tables\" class=\"page-layout simple fullwidth\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n        <div class=\"hero-text\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex>\n\n            <div class=\"h1\">Simple Pricing!</div>\n            <div class=\"h3\">\n                The most advanced customer support tools with a simple and affordable pricing. And you can always try\n                for 30 days, free!\n            </div>\n\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\" fxLayout=\"column\">\n\n        <!-- PRICE TABLES -->\n        <div class=\"price-tables\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n\n            <div class=\"price-table style-2 mat-elevation-z4\" fxLayout=\"column\">\n\n                <div class=\"package-type mat-accent-fg\">SILVER PACKAGE</div>\n\n                <div class=\"price\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n                    <div class=\"currency\">$</div>\n                    <div class=\"value\">99</div>\n                </div>\n\n                <div class=\"period\">PER MONTH</div>\n\n                <div class=\"terms\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n                    <div class=\"term\">\n                        <span class=\"text-bold\">10</span>\n                        Projects\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">10</span>\n                        Pages\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">100</span>\n                        Mb Disk Space\n                    </div>\n                </div>\n\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">GET STARTED</button>\n\n            </div>\n\n            <div class=\"price-table style-2 mat-elevation-z12\" fxLayout=\"column\">\n\n                <div class=\"badge mat-warn-bg\">BEST VALUE</div>\n\n                <div class=\"package-type mat-accent-fg\">GOLD PACKAGE</div>\n\n                <div class=\"price\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n                    <div class=\"currency\">$</div>\n                    <div class=\"value\">299</div>\n                </div>\n\n                <div class=\"period\">PER MONTH</div>\n\n                <div class=\"terms\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n                    <div class=\"term\">\n                        <span class=\"text-bold\">20</span>\n                        Projects\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">20</span>\n                        Pages\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">200</span>\n                        Mb Disk Space\n                    </div>\n                </div>\n\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">GET STARTED</button>\n\n            </div>\n\n            <div class=\"price-table style-2 mat-elevation-z4\" fxLayout=\"column\">\n\n                <div class=\"package-type mat-accent-fg\">PLATINUM PACKAGE</div>\n\n                <div class=\"price\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n                    <div class=\"currency\">$</div>\n                    <div class=\"value\">499</div>\n                </div>\n\n                <div class=\"period\">PER MONTH</div>\n\n                <div class=\"terms\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n                    <div class=\"term\">\n                        <span class=\"text-bold\">40</span>\n                        Projects\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">40</span>\n                        Pages\n                    </div>\n                    <div class=\"term\">\n                        <span class=\"text-bold\">500</span>\n                        Mb Disk Space\n                    </div>\n                </div>\n\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">GET STARTED</button>\n\n            </div>\n\n        </div>\n        <!-- / PRICE TABLES -->\n\n        <div class=\"faq\" fxLayout=\"row wrap\">\n\n            <div class=\"title\" fxFlex=\"100\">Frequently Asked Questions</div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">How does free trial work?</div>\n                <div class=\"answer\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt\n                    accumsan. In dignissim laoreet ipsum eu interdum.\n                </div>\n            </div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">Can I cancel any time?</div>\n                <div class=\"answer\">\n                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.\n                    Donec maximus ipsum in malesuada hendrerit.\n                </div>\n            </div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">What happens after my trial ended?</div>\n                <div class=\"answer\">\n                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.\n                    Donec maximus ipsum in malesuada hendrerit.\n                </div>\n            </div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">Can I have a discount?</div>\n                <div class=\"answer\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt\n                    accumsan. In dignissim laoreet ipsum eu interdum.\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/content/pages/pricing/style-2/style-2.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #price-tables .header {\n  padding: 24px;\n  height: 600px;\n  min-height: 600px;\n  background: #1A237E;\n  background: -webkit-gradient(linear, left top, right top, from(#0E2A3B), to(#34306B));\n  background: linear-gradient(to right, #0E2A3B 0%, #34306B 100%); }\n@media (max-width: 599px) {\n    :host #price-tables .header {\n      height: 400px;\n      min-height: 400px; } }\n:host #price-tables .header .hero-text {\n    margin: 128px 24px; }\n@media (max-width: 599px) {\n      :host #price-tables .header .hero-text {\n        margin: 64px 24px; } }\n:host #price-tables .header .hero-text .h1 {\n      color: white;\n      font-size: 48px;\n      font-weight: 300;\n      letter-spacing: 0.01em;\n      text-align: center; }\n@media (max-width: 599px) {\n        :host #price-tables .header .hero-text .h1 {\n          font-size: 32px; } }\n:host #price-tables .header .hero-text .h3 {\n      color: rgba(255, 255, 255, 0.75);\n      max-width: 480px;\n      text-align: center;\n      margin-top: 16px;\n      font-weight: 300;\n      letter-spacing: 0.03em; }\n@media (max-width: 599px) {\n        :host #price-tables .header .hero-text .h3 {\n          font-size: 14px; } }\n:host #price-tables .price-tables {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  margin-top: -192px; }\n@media (max-width: 599px) {\n    :host #price-tables .price-tables {\n      margin-top: -128px; } }\n:host #price-tables .price-tables .price-table {\n    margin: 12px; }\n:host #price-tables .faq {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  margin: 96px auto;\n  max-width: 840px; }\n:host #price-tables .faq .title {\n    font-size: 32px;\n    font-weight: 300;\n    text-align: center;\n    margin-bottom: 64px;\n    padding: 0 16px; }\n:host #price-tables .faq .item {\n    padding: 24px; }\n:host #price-tables .faq .item .question {\n      font-size: 18px;\n      margin-bottom: 8px; }\n:host #price-tables .faq .item .answer {\n      font-size: 16px;\n      line-height: 1.5;\n      color: rgba(0, 0, 0, 0.54); }\n"

/***/ }),

/***/ "./src/app/main/content/pages/pricing/style-2/style-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FusePricingStyle2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FusePricingStyle2Component = /** @class */ (function () {
    function FusePricingStyle2Component() {
    }
    FusePricingStyle2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-pricing-style-2',
            template: __webpack_require__("./src/app/main/content/pages/pricing/style-2/style-2.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/pricing/style-2/style-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FusePricingStyle2Component);
    return FusePricingStyle2Component;
}());



/***/ }),

/***/ "./src/app/main/content/pages/pricing/style-3/style-3.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"price-tables\" class=\"page-layout simple fullwidth\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n        <div class=\"hero-text\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex>\n\n            <div class=\"h1\">Simple Pricing!</div>\n            <div class=\"h3\">\n                The most advanced customer support tools with a simple and affordable pricing. And you can always try\n                for 30 days, free!\n            </div>\n\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\" fxLayout=\"column\">\n\n        <!-- PRICE TABLES -->\n        <div class=\"price-tables\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n\n            <div class=\"price-table style-3 mat-elevation-z4\" fxLayout=\"column\">\n\n                <div class=\"package-type\">\n                    <div class=\"title\">Starter</div>\n                    <div class=\"subtitle\">For small teams</div>\n                </div>\n\n                <div class=\"price mat-primary-300-bg\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n                    <div class=\"currency\">$</div>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center end\">\n                        <div class=\"value\">29</div>\n                        <div class=\"period\">monthly per user</div>\n                    </div>\n                </div>\n\n                <div class=\"terms\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n                    <div class=\"term\">Unlimited projects</div>\n                    <div class=\"term\">Unlimited pages</div>\n                    <div class=\"term\">Unlimited disk space</div>\n                    <div class=\"term\">24 / 7 Free support</div>\n                </div>\n\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">GET STARTED FREE</button>\n\n                <div class=\"note\">7 day free trial to start</div>\n\n            </div>\n\n            <div class=\"price-table style-3 mat-elevation-z12\" fxLayout=\"column\">\n\n                <div class=\"package-type\">\n                    <div class=\"title\">Pro</div>\n                    <div class=\"subtitle\">For larger teams</div>\n                </div>\n\n                <div class=\"price mat-primary-bg\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n                    <div class=\"currency\">$</div>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center end\">\n                        <div class=\"value\">59</div>\n                        <div class=\"period\">monthly per user</div>\n                    </div>\n                </div>\n\n                <div class=\"terms\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n                    <div class=\"term\">Unlimited projects</div>\n                    <div class=\"term\">Unlimited pages</div>\n                    <div class=\"term\">Unlimited disk space</div>\n                    <div class=\"term\">24 / 7 Free support</div>\n                    <div class=\"term mat-warn-fg\">Advanced reporting</div>\n                    <div class=\"term mat-warn-fg\">Customizable interface</div>\n                    <div class=\"term mat-warn-fg\">CRM Integration</div>\n                </div>\n\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">GET STARTED FREE</button>\n\n                <div class=\"note\">30 day free trial to start</div>\n\n            </div>\n\n            <div class=\"price-table style-3 mat-elevation-z4\" fxLayout=\"column\">\n\n                <div class=\"package-type\">\n                    <div class=\"title\">Enterprise</div>\n                    <div class=\"subtitle\">For big teams</div>\n                </div>\n\n                <div class=\"price mat-primary-300-bg\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n                    <div class=\"currency\">$</div>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center end\">\n                        <div class=\"value\">99</div>\n                        <div class=\"period\">monthly per user</div>\n                    </div>\n                </div>\n\n                <div class=\"terms\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n                    <div class=\"term\">Unlimited projects</div>\n                    <div class=\"term\">Unlimited pages</div>\n                    <div class=\"term\">Unlimited disk space</div>\n                    <div class=\"term\">For full feature list, call us</div>\n                </div>\n\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">CALL US</button>\n\n                <div class=\"note\">90 day free trial to start</div>\n\n            </div>\n\n        </div>\n        <!-- / PRICE TABLES -->\n\n        <div class=\"faq\" fxLayout=\"row wrap\">\n\n            <div class=\"title\" fxFlex=\"100\">Frequently Asked Questions</div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">How does free trial work?</div>\n                <div class=\"answer\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt\n                    accumsan. In dignissim laoreet ipsum eu interdum.\n                </div>\n            </div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">Can I cancel any time?</div>\n                <div class=\"answer\">\n                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.\n                    Donec maximus ipsum in malesuada hendrerit.\n                </div>\n            </div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">What happens after my trial ended?</div>\n                <div class=\"answer\">\n                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.\n                    Donec maximus ipsum in malesuada hendrerit.\n                </div>\n            </div>\n\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                <div class=\"question\">Can I have a discount?</div>\n                <div class=\"answer\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt\n                    accumsan. In dignissim laoreet ipsum eu interdum.\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/content/pages/pricing/style-3/style-3.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #price-tables .header {\n  padding: 24px;\n  height: 600px;\n  min-height: 600px;\n  background: #1A237E;\n  background: -webkit-gradient(linear, left top, right top, from(#0E2A3B), to(#34306B));\n  background: linear-gradient(to right, #0E2A3B 0%, #34306B 100%); }\n@media (max-width: 599px) {\n    :host #price-tables .header {\n      height: 400px;\n      min-height: 400px; } }\n:host #price-tables .header .hero-text {\n    margin: 128px 24px; }\n@media (max-width: 599px) {\n      :host #price-tables .header .hero-text {\n        margin: 64px 24px; } }\n:host #price-tables .header .hero-text .h1 {\n      color: white;\n      font-size: 48px;\n      font-weight: 300;\n      letter-spacing: 0.01em;\n      text-align: center; }\n@media (max-width: 599px) {\n        :host #price-tables .header .hero-text .h1 {\n          font-size: 32px; } }\n:host #price-tables .header .hero-text .h3 {\n      color: rgba(255, 255, 255, 0.75);\n      max-width: 480px;\n      text-align: center;\n      margin-top: 16px;\n      font-weight: 300;\n      letter-spacing: 0.03em; }\n@media (max-width: 599px) {\n        :host #price-tables .header .hero-text .h3 {\n          font-size: 14px; } }\n:host #price-tables .price-tables {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  margin-top: -192px; }\n@media (max-width: 599px) {\n    :host #price-tables .price-tables {\n      margin-top: -128px; } }\n:host #price-tables .price-tables .price-table {\n    margin: 12px; }\n:host #price-tables .faq {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  margin: 96px auto;\n  max-width: 840px; }\n:host #price-tables .faq .title {\n    font-size: 32px;\n    font-weight: 300;\n    text-align: center;\n    margin-bottom: 64px;\n    padding: 0 16px; }\n:host #price-tables .faq .item {\n    padding: 24px; }\n:host #price-tables .faq .item .question {\n      font-size: 18px;\n      margin-bottom: 8px; }\n:host #price-tables .faq .item .answer {\n      font-size: 16px;\n      line-height: 1.5;\n      color: rgba(0, 0, 0, 0.54); }\n"

/***/ }),

/***/ "./src/app/main/content/pages/pricing/style-3/style-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FusePricingStyle3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FusePricingStyle3Component = /** @class */ (function () {
    function FusePricingStyle3Component() {
    }
    FusePricingStyle3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-pricing-style-3',
            template: __webpack_require__("./src/app/main/content/pages/pricing/style-3/style-3.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/pricing/style-3/style-3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FusePricingStyle3Component);
    return FusePricingStyle3Component;
}());



/***/ }),

/***/ "./src/app/main/content/pages/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"profile\" class=\"page-layout simple tabbed\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header p-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-sm=\"row\"\n         fxLayoutAlign.gt-sm=\"space-between end\">\n\n        <div class=\"user-info\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-sm=\"row\"\n             fxLayoutAlign.gt-sm=\"start center\">\n            <img class=\"profile-image avatar huge\" src=\"assets/images/avatars/katherine.jpg\"\n                 *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\n            <div class=\"name\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">{{fullname}}\n            </div>\n        </div>\n\n        <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" *fuseIfOnDom\n             [@animate]=\"{value:'*',params:{delay:'200ms'}}\">\n            <button mat-raised-button color=\"accent\" aria-label=\"Follow\">Follow</button>\n            <button mat-raised-button color=\"primary\" aria-label=\"Send Message\">Send Message</button>\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\">\n\n        <mat-tab-group dynamicHeight=\"true\">\n\n            <mat-tab label=\"Timeline\">\n                <fuse-profile-timeline></fuse-profile-timeline>\n            </mat-tab>\n\n            <mat-tab label=\"About\">\n                <fuse-profile-about></fuse-profile-about>\n            </mat-tab>\n\n            <mat-tab label=\"Photos & Videos\">\n                <fuse-profile-photos-videos></fuse-profile-photos-videos>\n            </mat-tab>\n\n        </mat-tab-group>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#profile .header {\n  height: 320px;\n  min-height: 320px;\n  max-height: 320px;\n  background-size: cover; }\n@media screen and (min-width: 960px) {\n    #profile .header {\n      margin: 0 0 16px 0;\n      height: 160px;\n      min-height: 160px;\n      max-height: 160px; } }\n#profile .header .profile-image {\n    margin-right: 24px; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      #profile .header .profile-image {\n        margin: 0 0 16px 0; } }\n#profile .header .name {\n    font-size: 34px;\n    color: #FFFFFF; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      #profile .header .name {\n        margin-bottom: 32px; } }\n#profile .header .actions button {\n    text-transform: none;\n    padding: 0 16px;\n    height: 32px;\n    line-height: 32px;\n    margin: 0 0 0 8px; }\n#profile .content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n#profile .content mat-tab-group {\n    height: 100%; }\n#profile .content mat-tab-group .mat-tab-body-wrapper {\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_login_auth_service__ = __webpack_require__("./src/app/authentication/login/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseProfileComponent = /** @class */ (function () {
    function FuseProfileComponent(authService) {
        this.authService = authService;
        this.fullname = "";
        this.currentUser = authService.getCurrentUser();
        this.fullname = this.currentUser.firstName + " " + this.currentUser.lastName;
    }
    FuseProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-profile',
            template: __webpack_require__("./src/app/main/content/pages/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/profile/profile.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_1__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_login_auth_service__["a" /* AuthService */]])
    ], FuseProfileComponent);
    return FuseProfileComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_service__ = __webpack_require__("./src/app/main/content/pages/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_component__ = __webpack_require__("./src/app/main/content/pages/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_timeline_timeline_component__ = __webpack_require__("./src/app/main/content/pages/profile/tabs/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_about_about_component__ = __webpack_require__("./src/app/main/content/pages/profile/tabs/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_photos_videos_photos_videos_component__ = __webpack_require__("./src/app/main/content/pages/profile/tabs/photos-videos/photos-videos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_5__profile_component__["a" /* FuseProfileComponent */],
        resolve: {
            profile: __WEBPACK_IMPORTED_MODULE_4__profile_service__["a" /* ProfileService */]
        }
    }
];
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__profile_component__["a" /* FuseProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tabs_timeline_timeline_component__["a" /* FuseProfileTimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tabs_about_about_component__["a" /* FuseProfileAboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__tabs_photos_videos_photos_videos_component__["a" /* FuseProfilePhotosVideosComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["U" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__profile_service__["a" /* ProfileService */]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/profile/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.timelineOnChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.aboutOnChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.photosVideosOnChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ProfileService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getTimeline(),
                _this.getAbout(),
                _this.getPhotosVideos()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get timeline
     */
    ProfileService.prototype.getTimeline = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/profile-timeline')
                .subscribe(function (timeline) {
                _this.timeline = timeline;
                _this.timelineOnChanged.next(_this.timeline);
                resolve(_this.timeline);
            }, reject);
        });
    };
    /**
     * Get about
     */
    ProfileService.prototype.getAbout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/profile-about')
                .subscribe(function (about) {
                _this.about = about;
                _this.aboutOnChanged.next(_this.about);
                resolve(_this.about);
            }, reject);
        });
    };
    /**
     * Get photos & videos
     */
    ProfileService.prototype.getPhotosVideos = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/profile-photos-videos')
                .subscribe(function (photosVideos) {
                _this.photosVideos = photosVideos;
                _this.photosVideosOnChanged.next(_this.photosVideos);
                resolve(_this.photosVideos);
            }, reject);
        });
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/main/content/pages/profile/tabs/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"p-24\" fxLayout=\"row wrap\">\n\n    <div class=\"about-content\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"65\">\n\n        <div class=\"profile-box info-box general\" fxLayout=\"column\">\n\n            <header class=\"mat-accent-bg\">\n                <div class=\"title\">General Information</div>\n            </header>\n\n            <div class=\"content\">\n                <div class=\"info-line\">\n                    <div class=\"title\">Gender</div>\n                    <div class=\"info\">{{about.general.gender}}</div>\n                </div>\n\n                <div class=\"info-line\">\n                    <div class=\"title\">Birthday</div>\n                    <div class=\"info\">{{about.general.birthday}}</div>\n                </div>\n\n                <div class=\"info-line\">\n                    <div class=\"title\">Locations</div>\n                    <div class=\"info location\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                         *ngFor=\"let location of about.general.locations\">\n                        <span>{{location}}</span>\n                        <mat-icon class=\"s-16 ml-4\">location_on</mat-icon>\n                    </div>\n                </div>\n\n                <div class=\"info-line\">\n                    <div class=\"title\">About Me</div>\n                    <div class=\"info\">{{about.general.about}}</div>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"profile-box info-box work\" fxLayout=\"column\">\n\n            <header class=\"mat-accent-bg\">\n                <div class=\"title\">Work</div>\n            </header>\n\n            <div class=\"content\">\n                <div class=\"info-line\">\n                    <div class=\"title\">Occupation</div>\n                    <div class=\"info\">{{about.work.occupation}}</div>\n                </div>\n\n                <div class=\"info-line\">\n                    <div class=\"title\">Skills</div>\n                    <div class=\"info\">{{about.work.skills}}</div>\n                </div>\n\n                <div class=\"info-line\">\n                    <div class=\"title\">Jobs</div>\n                    <table class=\"info jobs\">\n                        <tr class=\"job\" *ngFor=\"let job of about.work.jobs\">\n                            <td class=\"company\">{{job.company}}</td>\n                            <td class=\"date\">{{job.date}}</td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"profile-box info-box contact\" fxLayout=\"column\">\n\n            <header class=\"mat-accent-bg\">\n                <div class=\"title\">Contact</div>\n            </header>\n\n            <div class=\"content\">\n                <div class=\"info-line\">\n                    <div class=\"title\">Address</div>\n                    <div class=\"info\">{{about.contact.address}}</div>\n                </div>\n                <div class=\"info-line\">\n                    <div class=\"title\">Tel.</div>\n                    <div class=\"info\" *ngFor=\"let tel of about.contact.tel\">\n                        <span>{{tel}}</span>\n                    </div>\n                </div>\n                <div class=\"info-line\">\n                    <div class=\"title\">Website</div>\n                    <div class=\"info\" *ngFor=\"let website of about.contact.websites\">\n                        <span>{{website}}</span>\n                    </div>\n                </div>\n                <div class=\"info-line\">\n                    <div class=\"title\">Emails</div>\n                    <div class=\"info\" *ngFor=\"let email of about.contact.emails\">\n                        <span>{{email}}</span>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n    <div class=\"about-sidebar\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"35\">\n\n        <div class=\"profile-box friends\" fxLayout=\"column\">\n\n            <header class=\"mat-accent-bg\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <div class=\"title\">Friends</div>\n                <div class=\"more secondary-text\">\n                    <span>See 454 more...</span>\n                </div>\n            </header>\n\n            <div class=\"content\" fxLayout=\"row wrap\">\n                <div class=\"friend\" fxFlex=\"20\" *ngFor=\"let friend of about.friends\">\n                    <img [src]=\"friend.avatar\">\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"profile-box groups\" fxLayout=\"column\">\n\n            <header class=\"mat-accent-bg\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <div class=\"title\">Joined Groups</div>\n                <div class=\"more secondary-text\">\n                    <span>See 6 more...</span>\n                </div>\n            </header>\n\n            <div class=\"content\">\n\n                <div class=\"group\" *ngFor=\"let group of about.groups\" fxLayout=\"row\"\n                     fxLayoutAlign=\"space-between center\">\n\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                        <img [src]=\"group.logo\" class=\"logo\" alt=\"{{group.name}}\"/>\n\n                        <div>\n                            <div class=\"name\">{{group.name}}</div>\n                            <div class=\"category\">{{group.category}}</div>\n                            <div class=\"members\">{{group.members}} people</div>\n                        </div>\n                    </div>\n\n                    <button mat-icon-button aria-label=\"More\">\n                        <mat-icon>more_vert</mat-icon>\n                    </button>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/profile/tabs/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #about {\n  max-width: 1200px; }\n:host #about .about-content .general .location mat-icon {\n    line-height: 13px !important; }\n:host #about .about-content .work .job .company {\n    padding: 0 16px 0 0;\n    font-weight: 500; }\n:host #about .about-content .work .job .date {\n    color: rgba(0, 0, 0, 0.54); }\n:host #about .about-sidebar {\n    padding-left: 32px; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #about .about-sidebar {\n        padding: 8px; } }\n:host #about .about-sidebar .friends .content .friend {\n      padding: 4px; }\n:host #about .about-sidebar .groups .content .group {\n      margin-bottom: 16px; }\n:host #about .about-sidebar .groups .content .group:last-child {\n        margin-bottom: 0; }\n:host #about .about-sidebar .groups .content .group .logo {\n        border: 1px solid rgba(0, 0, 0, 0.12);\n        margin-right: 16px; }\n:host #about .about-sidebar .groups .content .group .name {\n        font-weight: 500;\n        font-size: 15px; }\n:host #about .about-sidebar .groups .content .group .category,\n      :host #about .about-sidebar .groups .content .group .members {\n        color: rgba(0, 0, 0, 0.54); }\n:host #about .about-sidebar .groups .content .group .members {\n        margin-top: 16px; }\n:host .profile-box {\n  margin-bottom: 16px;\n  -webkit-box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n:host .profile-box header {\n    padding: 16px; }\n:host .profile-box header .title {\n      font-size: 17px; }\n:host .profile-box header .more {\n      cursor: pointer; }\n:host .profile-box .content {\n    padding: 16px;\n    background-color: #FFF; }\n:host .profile-box footer {\n    padding: 8px;\n    border-top: 1px solid rgba(0, 0, 0, 0.08);\n    background-color: rgba(0, 0, 0, 0.06); }\n:host .profile-box.info-box .info-line {\n    margin-bottom: 24px; }\n:host .profile-box.info-box .info-line .title {\n      font-size: 15px;\n      font-weight: 500;\n      padding-bottom: 4px; }\n:host .profile-box.info-box .info-line:last-child {\n      margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/profile/tabs/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseProfileAboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_service__ = __webpack_require__("./src/app/main/content/pages/profile/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseProfileAboutComponent = /** @class */ (function () {
    function FuseProfileAboutComponent(profileService) {
        var _this = this;
        this.profileService = profileService;
        this.profileService.aboutOnChanged.subscribe(function (about) {
            _this.about = about;
        });
    }
    FuseProfileAboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-profile-about',
            template: __webpack_require__("./src/app/main/content/pages/profile/tabs/about/about.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/profile/tabs/about/about.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_1__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */]])
    ], FuseProfileAboutComponent);
    return FuseProfileAboutComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/profile/tabs/photos-videos/photos-videos.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"photos-videos\" class=\"p-24\">\n    <div class=\"period\" *ngFor=\"let period of photosVideos\">\n\n        <div class=\"period-title\">\n            <span class=\"name\">{{period.name}}</span>\n            <span class=\"info\">{{period.info}}</span>\n        </div>\n\n        <div class=\"period-media\" fxLayout=\"row wrap\">\n            <div class=\"media\" *ngFor=\"let media of period.media\">\n                <img class=\"preview\" [src]=\"media.preview\" title=\"{{media.title}}\">\n                <div class=\"title\">{{media.title}}</div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/profile/tabs/photos-videos/photos-videos.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #photos-videos .period .period-title {\n  margin-bottom: 24px; }\n:host #photos-videos .period .period-title .name {\n    font-size: 20px; }\n:host #photos-videos .period .period-title .info {\n    margin-left: 16px;\n    font-size: 15px;\n    color: rgba(0, 0, 0, 0.54); }\n:host #photos-videos .period .period-media {\n  margin-bottom: 16px; }\n:host #photos-videos .period .period-media .media {\n    margin: 0 16px 16px 0;\n    position: relative; }\n:host #photos-videos .period .period-media .media .preview {\n      width: 256px;\n      height: 256px;\n      display: block; }\n:host #photos-videos .period .period-media .media .title {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      z-index: 10;\n      padding: 0 16px;\n      height: 48px;\n      line-height: 48px;\n      background: rgba(0, 0, 0, 0.54);\n      color: #FFF;\n      font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/profile/tabs/photos-videos/photos-videos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseProfilePhotosVideosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_service__ = __webpack_require__("./src/app/main/content/pages/profile/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseProfilePhotosVideosComponent = /** @class */ (function () {
    function FuseProfilePhotosVideosComponent(profileService) {
        var _this = this;
        this.profileService = profileService;
        this.profileService.photosVideosOnChanged.subscribe(function (photosVideos) {
            _this.photosVideos = photosVideos;
        });
    }
    FuseProfilePhotosVideosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-profile-photos-videos',
            template: __webpack_require__("./src/app/main/content/pages/profile/tabs/photos-videos/photos-videos.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/profile/tabs/photos-videos/photos-videos.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_1__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */]])
    ], FuseProfilePhotosVideosComponent);
    return FuseProfilePhotosVideosComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/profile/tabs/timeline/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"timeline\" class=\"p-24\" fxLayout=\"row wrap\">\n\n    <div class=\"timeline-content\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"55\" fxFlex.gt-md=\"65\">\n\n        <div class=\"profile-box add-post\">\n\n            <div class=\"form\" fxFlex>\n\n                <textarea placeholder=\"Write something..\"></textarea>\n\n                <footer fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                        <button mat-icon-button aria-label=\"Add photo\" matTooltip=\"Add Photo\">\n                            <mat-icon>photo</mat-icon>\n                        </button>\n\n                        <button mat-icon-button aria-label=\"Mention somebody\" matTooltip=\"Mention somebody\">\n                            <mat-icon>person</mat-icon>\n                        </button>\n\n                        <button mat-icon-button aria-label=\"Add location\" matTooltip=\"Add location\">\n                            <mat-icon>location_on</mat-icon>\n                        </button>\n\n                    </div>\n\n                    <button mat-raised-button color=\"accent\" class=\"post-button\" aria-label=\"POST\">POST</button>\n\n                </footer>\n\n            </div>\n\n        </div>\n\n        <mat-divider></mat-divider>\n\n        <div class=\"timeline-item\" *ngFor=\"let post of timeline.posts\">\n\n            <header fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n                <div class=\"user\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <img class=\"avatar\" [src]=\"post.user.avatar\">\n\n                    <div fxLayout=\"column\">\n                        <div class=\"title\">\n                            <span class=\"username\">{{post.user.name}}</span>\n                            <span *ngIf=\"post.type === 'post'\">posted on your timeline</span>\n                            <span *ngIf=\"post.type === 'something'\">shared something with you</span>\n                            <span *ngIf=\"post.type === 'video'\">shared a video with you</span>\n                            <span *ngIf=\"post.type === 'article'\">shared an article with you</span>\n                        </div>\n                        <div class=\"time\">{{post.time}}</div>\n                    </div>\n                </div>\n\n                <button mat-icon-button aria-label=\"More\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n            </header>\n\n            <div class=\"content\">\n                <div *ngIf=\"post.message\" class=\"message\">\n                    {{post.message}}\n                </div>\n\n                <div *ngIf=\"post.media\" class=\"media\">\n                    <img *ngIf=\"post.media.type === 'image'\" [src]=\"post.media.preview\">\n                    <div *ngIf=\"post.media.type === 'video'\" [innerHtml]=\"post.media.embed\"></div>\n                </div>\n\n                <div *ngIf=\"post.article\" fxLayout=\"column\" class=\"article\">\n                    <div class=\"media\">\n                        <img [src]=\"post.article.media.preview\">\n                    </div>\n                    <div class=\"title\">{{post.article.title}}</div>\n                    <div class=\"subtitle\">{{post.article.subtitle}}</div>\n                    <div class=\"excerpt\">{{post.article.excerpt}}</div>\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <button mat-button class=\"like-button\">\n                        <span fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <mat-icon class=\"s-16\">favorite</mat-icon>\n                            <span>Like</span>&nbsp;<span>({{post.like}})</span>\n                        </span>\n                    </button>\n                    <button mat-button class=\"share-button\">\n                        <span fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <mat-icon class=\"s-16\">share</mat-icon>\n                            <span>Share</span>&nbsp;<span>({{post.share}})</span>\n                        </span>\n                    </button>\n                </div>\n            </div>\n\n            <footer class=\"\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\n                <div *ngIf=\"post.comments\" class=\"comment-count\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    {{post.comments.length}} comments\n                    <mat-icon class=\"s-16\">keyboard_arrow_down</mat-icon>\n                </div>\n\n                <div class=\"comment\" fxLayout=\"row\" fxFlexFill *ngFor=\"let comment of post.comments\">\n                    <img [src]=\"comment.user.avatar\" class=\"avatar\"/>\n\n                    <div fxLayout=\"column\" fxFlex>\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <span class=\"username\">{{comment.user.name}}</span>\n                            <span class=\"time\">{{comment.time}}</span>\n                        </div>\n                        <div class=\"message\">\n                            {{comment.message}}\n                        </div>\n                        <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                            <a href=\"#\" class=\"reply-button\">Reply</a>\n                            <mat-icon fxFlex class=\"report-button s-16\">flag</mat-icon>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"reply\" fxLayout=\"row\" fxFlexFill>\n                    <img src=\"assets/images/avatars/profile.jpg\" class=\"avatar\"/>\n\n                    <form fxFlex>\n                        <textarea placeholder=\"Add a comment...\"></textarea>\n                        <button mat-raised-button color=\"accent\" class=\"post-comment-button\" aria-label=\"Post Comment\">\n                            Post Comment\n                        </button>\n                    </form>\n                </div>\n            </footer>\n        </div>\n    </div>\n\n    <div class=\"timeline-sidebar\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"45\" fxFlex.gt-md=\"35\">\n\n        <div class=\"profile-box latest-activity\" fxLayout=\"column\">\n\n            <header class=\"mat-accent-bg\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <div class=\"title\">Latest Activity</div>\n                <div class=\"more secondary-text\">See All</div>\n            </header>\n\n            <div class=\"content\" fxLayout=\"row wrap\">\n                <div class=\"activities\">\n                    <div class=\"activity\" fxLayout=\"row\" fxLayoutAlign=\"start start\"\n                         *ngFor=\"let activity of timeline.activities\">\n                        <img [src]=\"activity.user.avatar\" class=\"avatar\" alt=\"{{activity.user.name}}\"/>\n\n                        <div fxLayout=\"column\">\n                            <div>\n                                <span class=\"username\">{{activity.user.name}}</span>\n                                <span class=\"message\"> {{activity.message}}</span>\n                            </div>\n                            <span class=\"time secondary-text\">{{activity.time}}</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/content/pages/profile/tabs/timeline/timeline.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #timeline {\n  max-width: 1200px; }\n:host #timeline .timeline-content .add-post {\n    margin-bottom: 0;\n    -webkit-box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n:host #timeline .timeline-content .add-post textarea {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 auto;\n              flex: 1 0 auto;\n      font-size: 13px;\n      width: 100%;\n      height: 140px;\n      border: none;\n      padding: 16px;\n      resize: vertical; }\n:host #timeline .timeline-content .add-post footer {\n      padding: 8px;\n      border-top: 1px solid rgba(0, 0, 0, 0.08);\n      background: #F3F4F5; }\n:host #timeline .timeline-content .add-post footer .post-button {\n        margin: 0;\n        width: 64px;\n        min-width: 64px;\n        height: 30px;\n        line-height: 30px;\n        min-height: 30px; }\n:host #timeline .timeline-content mat-divider {\n    border-top-width: 1px;\n    border-top-style: solid;\n    margin: 32px 0; }\n:host #timeline .timeline-content .timeline-item {\n    margin-bottom: 32px;\n    overflow: hidden;\n    border-radius: 2px;\n    background: #FFFFFF;\n    -webkit-box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n:host #timeline .timeline-content .timeline-item:last-child {\n      margin-bottom: 0; }\n:host #timeline .timeline-content .timeline-item header {\n      padding: 16px 0 8px 16px; }\n:host #timeline .timeline-content .timeline-item header .title {\n        font-weight: 500; }\n:host #timeline .timeline-content .timeline-item header .title .username {\n          margin-right: 2px;\n          color: #058ec0; }\n:host #timeline .timeline-content .timeline-item header .time {\n        color: rgba(0, 0, 0, 0.54); }\n:host #timeline .timeline-content .timeline-item .content .message {\n      padding: 16px; }\n:host #timeline .timeline-content .timeline-item .content .media {\n      padding: 16px; }\n:host #timeline .timeline-content .timeline-item .content .media img, :host #timeline .timeline-content .timeline-item .content .media iframe {\n        width: 100%; }\n:host #timeline .timeline-content .timeline-item .content .media a {\n        color: inherit; }\n:host #timeline .timeline-content .timeline-item .content .like-button,\n    :host #timeline .timeline-content .timeline-item .content .share-button {\n      padding: 4px 6px;\n      text-transform: inherit;\n      font-size: 13px;\n      font-weight: normal;\n      margin: 0 0 16px 8px;\n      min-width: inherit;\n      line-height: inherit; }\n:host #timeline .timeline-content .timeline-item .content .like-button:hover,\n      :host #timeline .timeline-content .timeline-item .content .share-button:hover {\n        background-color: transparent; }\n:host #timeline .timeline-content .timeline-item .content .like-button mat-icon,\n      :host #timeline .timeline-content .timeline-item .content .share-button mat-icon {\n        margin: 0 8px 0 0; }\n:host #timeline .timeline-content .timeline-item .content .article {\n      border: 1px solid rgba(0, 0, 0, 0.12);\n      margin: 16px; }\n:host #timeline .timeline-content .timeline-item .content .article .media {\n        padding: 0;\n        overflow: hidden;\n        border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host #timeline .timeline-content .timeline-item .content .article .media img {\n          display: block;\n          padding: 0; }\n:host #timeline .timeline-content .timeline-item .content .article .title {\n        font-size: 15px;\n        padding: 16px 16px 4px 16px; }\n:host #timeline .timeline-content .timeline-item .content .article .subtitle {\n        padding: 0 16px;\n        color: rgba(0, 0, 0, 0.54); }\n:host #timeline .timeline-content .timeline-item .content .article .excerpt {\n        padding: 16px 16px; }\n:host #timeline .timeline-content .timeline-item footer {\n      border-top: 1px solid rgba(0, 0, 0, 0.08);\n      background-color: rgba(0, 0, 0, 0.04);\n      padding: 16px; }\n:host #timeline .timeline-content .timeline-item footer .comment-count {\n        margin-bottom: 16px;\n        cursor: pointer; }\n:host #timeline .timeline-content .timeline-item footer .comment-count mat-icon {\n          margin-left: 8px; }\n:host #timeline .timeline-content .timeline-item footer .comment {\n        margin-bottom: 24px !important; }\n:host #timeline .timeline-content .timeline-item footer .comment .username {\n          font-weight: 500;\n          margin-right: 4px; }\n:host #timeline .timeline-content .timeline-item footer .comment .message {\n          color: rgba(0, 0, 0, 0.87); }\n:host #timeline .timeline-content .timeline-item footer .comment .time {\n          color: rgba(0, 0, 0, 0.54); }\n:host #timeline .timeline-content .timeline-item footer .comment .actions {\n          margin-top: 8px; }\n:host #timeline .timeline-content .timeline-item footer .comment .actions .reply-button {\n            margin-right: 16px;\n            cursor: pointer;\n            color: #058ec0; }\n:host #timeline .timeline-content .timeline-item footer .comment .actions .report-button {\n            margin: 0;\n            cursor: pointer; }\n:host #timeline .timeline-content .timeline-item footer .reply form textarea {\n        width: 100% !important;\n        min-height: 72px;\n        padding: 8px;\n        margin-bottom: 8px;\n        font-size: 13px;\n        border: 1px solid rgba(0, 0, 0, 0.12); }\n:host #timeline .timeline-content .timeline-item footer .reply form .post-comment-button {\n        margin: 0;\n        text-transform: inherit;\n        font-weight: normal;\n        padding: 0 12px;\n        min-height: 30px;\n        min-width: inherit;\n        line-height: 30px; }\n:host #timeline .timeline-sidebar {\n    padding-left: 32px; }\n@media (max-width: 959px) {\n      :host #timeline .timeline-sidebar {\n        padding: 32px 0 0 0; } }\n:host #timeline .timeline-sidebar .latest-activity .content {\n      background-color: #FFF; }\n:host #timeline .timeline-sidebar .latest-activity .content .activities .activity {\n        padding: 16px 0; }\n:host #timeline .timeline-sidebar .latest-activity .content .activities .activity .avatar {\n          margin-right: 16px; }\n:host #timeline .timeline-sidebar .latest-activity .content .activities .activity .username {\n          font-weight: 500;\n          color: #058ec0; }\n:host #timeline .timeline-sidebar .latest-activity .content .activities .activity .message {\n          font-weight: 500; }\n:host .profile-box {\n  margin-bottom: 16px;\n  -webkit-box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n:host .profile-box header {\n    padding: 16px; }\n:host .profile-box header .title {\n      font-size: 17px; }\n:host .profile-box header .more {\n      cursor: pointer; }\n:host .profile-box .content {\n    padding: 16px;\n    background-color: #FFF; }\n:host .profile-box footer {\n    padding: 8px;\n    border-top: 1px solid rgba(0, 0, 0, 0.08);\n    background-color: rgba(0, 0, 0, 0.06); }\n:host .profile-box.info-box .info-line {\n    margin-bottom: 24px; }\n:host .profile-box.info-box .info-line .title {\n      font-size: 15px;\n      font-weight: 500;\n      padding-bottom: 4px; }\n:host .profile-box.info-box .info-line:last-child {\n      margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/profile/tabs/timeline/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseProfileTimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_service__ = __webpack_require__("./src/app/main/content/pages/profile/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseProfileTimelineComponent = /** @class */ (function () {
    function FuseProfileTimelineComponent(profileService) {
        var _this = this;
        this.profileService = profileService;
        this.profileService.timelineOnChanged.subscribe(function (timeline) {
            _this.timeline = timeline;
        });
    }
    FuseProfileTimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-profile-timeline',
            template: __webpack_require__("./src/app/main/content/pages/profile/tabs/timeline/timeline.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/profile/tabs/timeline/timeline.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_1__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */]])
    ], FuseProfileTimelineComponent);
    return FuseProfileTimelineComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"search\" class=\"page-layout simple tabbed\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-sm=\"row\"\n         fxLayoutAlign.gt-sm=\"space-between end\">\n\n        <mat-form-field class=\"w-100-p\">\n            <input matInput name=\"search\" placeholder=\"Search...\">\n        </mat-form-field>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\">\n\n        <mat-tab-group dynamicHeight=\"true\">\n\n            <mat-tab label=\"Classic\">\n                <fuse-search-classic></fuse-search-classic>\n            </mat-tab>\n\n            <mat-tab label=\"Table\">\n                <fuse-search-table></fuse-search-table>\n            </mat-tab>\n\n        </mat-tab-group>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/search/search.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n@media screen and (max-width: 599px) {\n  :host #search .header {\n    padding: 16px; } }\n:host #search .header .search {\n  position: relative;\n  max-width: 780px; }\n:host #search .header .search .search-icon {\n    margin: 0 -24px 0 0; }\n:host #search .header .search .search-input {\n    padding: 0 0 0 48px;\n    background: none;\n    font-size: 24px;\n    line-height: 48px;\n    height: 48px;\n    color: #FFFFFF;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.3);\n    -webkit-transition: border-color 300ms ease;\n    transition: border-color 300ms ease; }\n:host #search .header .search .search-input:focus {\n      border-color: white; }\n:host #search .header .search .search-input::-webkit-input-placeholder {\n      color: #FFFFFF; }\n:host #search .content .result-info {\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host #search .content .result-info .mat-title {\n    padding-right: 8px; }\n@media screen and (max-width: 599px) {\n    :host #search .content .result-info .pager {\n      margin-top: 16px; } }\n:host #search .content .result-info .pager .page-info {\n    font-weight: 500;\n    margin: 0 8px 0 0; }\n:host #search .content .simple-pagination {\n  margin: 32px 0; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseSearchComponent = /** @class */ (function () {
    function FuseSearchComponent() {
    }
    FuseSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-search',
            template: __webpack_require__("./src/app/main/content/pages/search/search.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSearchComponent);
    return FuseSearchComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/search/search.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_service__ = __webpack_require__("./src/app/main/content/pages/search/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_classic_classic_component__ = __webpack_require__("./src/app/main/content/pages/search/tabs/classic/classic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_table_table_component__ = __webpack_require__("./src/app/main/content/pages/search/tabs/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_component__ = __webpack_require__("./src/app/main/content/pages/search/search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_8__search_component__["a" /* FuseSearchComponent */],
        resolve: {
            search: __WEBPACK_IMPORTED_MODULE_5__search_service__["a" /* SearchService */]
        }
    }
];
var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__search_component__["a" /* FuseSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tabs_classic_classic_component__["a" /* FuseSearchClassicComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tabs_table_table_component__["a" /* FuseSearchTableComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["T" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["U" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_shared_module__["a" /* FuseSharedModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__search_service__["a" /* SearchService */]
            ]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/search/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.classicOnChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.tableOnChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    SearchService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getClassic(),
                _this.getTable()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get classic
     */
    SearchService.prototype.getClassic = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/search-classic')
                .subscribe(function (classic) {
                _this.classic = classic;
                _this.classicOnChanged.next(_this.classic);
                resolve(_this.classic);
            }, reject);
        });
    };
    /**
     * Get table
     */
    SearchService.prototype.getTable = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/search-table')
                .subscribe(function (table) {
                _this.table = table;
                _this.tableOnChanged.next(_this.table);
                resolve(_this.table);
            }, reject);
        });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/main/content/pages/search/tabs/classic/classic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"classic-tab p-24\">\n\n    <div class=\"result-info\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayout.xs=\"column\"\n         fxLayoutAlign.xs=\"start start\">\n\n        <span class=\"result-count h3 secondary-text\">\n            <span>54</span>\n            <span>Results</span>\n        </span>\n\n        <div class=\"pager\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <span class=\"secondary-text\">\n                <span>Results:&nbsp;</span>\n            </span>\n\n            <span class=\"page-info\">\n                <span>1</span>\n                <span>-</span>\n                <span>10</span>\n                <span>of</span>\n                <span>54</span>\n            </span>\n\n            <button mat-icon-button aria-label=\"Previous page\">\n                <mat-icon>chevron_left</mat-icon>\n            </button>\n\n            <button mat-icon-button aria-label=\"Next page\">\n                <mat-icon>chevron_right</mat-icon>\n            </button>\n        </div>\n    </div>\n\n    <div class=\"results\">\n        <div class=\"result-item\" *ngFor=\"let item of classic\">\n            <div class=\"title blue-fg\">{{item.title}}</div>\n            <div class=\"url green-fg\">{{item.url}}</div>\n            <div class=\"excerpt\">{{item.excerpt}}</div>\n        </div>\n    </div>\n\n    <div class=\"simple-pagination\">\n        <button mat-button class=\"pagination-item disabled\" disabled=\"disabled\"\n                aria-label=\"Go to previous page\">\n            <mat-icon>chevron_left</mat-icon>\n        </button>\n\n        <button mat-button class=\"pagination-item active\" [disableRipple]=\"true\" aria-label=\"Go to page 1\">\n            <span>1</span>\n        </button>\n\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 2\">\n            <span>2</span>\n        </button>\n\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 3\">\n            <span>3</span>\n        </button>\n\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 4\">\n            <span>4</span>\n        </button>\n\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 5\">\n            <span>5</span>\n        </button>\n\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 6\">\n            <span>6</span>\n        </button>\n\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 7\">\n            <span>7</span>\n        </button>\n\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 8\">\n            <span>8</span>\n        </button>\n\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 9\">\n            <span>9</span>\n        </button>\n\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 10\">\n            <span>10</span>\n        </button>\n\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to next page\">\n            <mat-icon>chevron_right</mat-icon>\n        </button>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/content/pages/search/tabs/classic/classic.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host .classic-tab .result-info {\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host .classic-tab .result-info .pager .page-info {\n    font-weight: 500;\n    margin: 0 8px 0 0; }\n:host .classic-tab .results .result-item {\n  margin-top: 32px;\n  max-width: 512px; }\n:host .classic-tab .results .result-item .title {\n    font-size: 17px;\n    font-weight: 500;\n    cursor: pointer; }\n:host .classic-tab .results .result-item .url {\n    margin-bottom: 4px; }\n:host .classic-tab .results .result-item .excerpt {\n    display: block;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n:host .classic-tab .results .result-item:last-child {\n    padding-bottom: 32px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host .classic-tab .simple-pagination {\n  margin: 32px 0; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/search/tabs/classic/classic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSearchClassicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_service__ = __webpack_require__("./src/app/main/content/pages/search/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseSearchClassicComponent = /** @class */ (function () {
    function FuseSearchClassicComponent(searchService) {
        var _this = this;
        this.searchService = searchService;
        this.searchService.classicOnChanged.subscribe(function (classic) {
            _this.classic = classic;
        });
    }
    FuseSearchClassicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-search-classic',
            template: __webpack_require__("./src/app/main/content/pages/search/tabs/classic/classic.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/search/tabs/classic/classic.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */]])
    ], FuseSearchClassicComponent);
    return FuseSearchClassicComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/search/tabs/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-tab\">\n\n    <mat-table #table [dataSource]=\"dataSource\">\n\n        <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n\n        <!-- ID Column -->\n        <ng-container cdkColumnDef=\"name\">\n            <mat-header-cell *cdkHeaderCellDef>Name</mat-header-cell>\n            <mat-cell *cdkCellDef=\"let row\"> {{row.name}}</mat-cell>\n        </ng-container>\n\n        <!-- Progress Column -->\n        <ng-container cdkColumnDef=\"position\">\n            <mat-header-cell *cdkHeaderCellDef>Position</mat-header-cell>\n            <mat-cell *cdkCellDef=\"let row\"> {{row.position}}</mat-cell>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container cdkColumnDef=\"office\">\n            <mat-header-cell *cdkHeaderCellDef>Office</mat-header-cell>\n            <mat-cell *cdkCellDef=\"let row\"> {{row.office}}</mat-cell>\n        </ng-container>\n\n        <!-- Color Column -->\n        <ng-container cdkColumnDef=\"salary\">\n            <mat-header-cell *cdkHeaderCellDef>Salary</mat-header-cell>\n            <mat-cell *cdkCellDef=\"let row\"> {{row.salary | currency:'USD':'symbol'}}</mat-cell>\n        </ng-container>\n\n        <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *cdkRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/pages/search/tabs/table/table.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/content/pages/search/tabs/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSearchTableComponent; });
/* unused harmony export SearchTableDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_service__ = __webpack_require__("./src/app/main/content/pages/search/search.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseSearchTableComponent = /** @class */ (function () {
    function FuseSearchTableComponent(searchService) {
        var _this = this;
        this.searchService = searchService;
        this.displayedColumns = ['name', 'position', 'office', 'salary'];
        this.searchService.tableOnChanged
            .subscribe(function (table) {
            _this.table = table;
        });
    }
    FuseSearchTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new SearchTableDataSource(this.searchService);
    };
    FuseSearchTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-search-table',
            template: __webpack_require__("./src/app/main/content/pages/search/tabs/table/table.component.html"),
            styles: [__webpack_require__("./src/app/main/content/pages/search/tabs/table/table.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */]])
    ], FuseSearchTableComponent);
    return FuseSearchTableComponent;
}());

var SearchTableDataSource = /** @class */ (function (_super) {
    __extends(SearchTableDataSource, _super);
    function SearchTableDataSource(searchService) {
        var _this = _super.call(this) || this;
        _this.searchService = searchService;
        return _this;
    }
    SearchTableDataSource.prototype.connect = function () {
        return this.searchService.tableOnChanged;
    };
    SearchTableDataSource.prototype.disconnect = function () {
    };
    return SearchTableDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));



/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map