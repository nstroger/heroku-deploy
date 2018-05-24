webpackJsonp(["ui.module"],{

/***/ "./src/app/main/content/ui/colors/colors.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"material-colors\" class=\"page-layout simple tabbed\" fxLayout=\"column\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"column\" fxLayoutAlign.gt-xs=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">User Interface</span>\n            </div>\n            <div class=\"h1 mt-16\">Colors</div>\n        </div>\n\n        <a mat-raised-button class=\"reference-button mat-white-bg mt-16 mt-sm-0\"\n           href=\"https://www.google.com/design/spec/style/color.html#color-color-palette\"\n           target=\"_blank\">\n            <mat-icon>link</mat-icon>\n            <span>Reference</span>\n        </a>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\">\n\n        <mat-tab-group class=\"color-tabs\" dynamicHeight=\"true\" (selectedTabChange)=\"selectColor($event)\">\n\n            <mat-tab *ngFor=\"let color of ['primary', 'accent', 'warn']\" label=\"{{color}}\">\n                <ng-template mat-tab-label>\n                    <span class=\"text-capitalize\">{{color}}</span>\n                </ng-template>\n            </mat-tab>\n\n            <mat-tab *ngFor=\"let color of (colors | keys)\" label=\"{{color.key}}\">\n                <ng-template mat-tab-label>\n                    <span class=\"text-capitalize\">{{color.key}}</span>\n                </ng-template>\n            </mat-tab>\n\n        </mat-tab-group>\n\n        <div class=\"color-tabs-content p-24\" fxLayout=\"column\">\n\n            <div class=\"h3 pb-16\">Fuse has classes for every single color from\n                <a href=\"https://www.google.com/design/spec/style/color.html#color-color-palette\"\n                   target=\"_blank\">Material\n                    Design Color Palette</a> for your convenient. You can use them with pretty much every\n                element.\n            </div>\n\n            <div class=\"color-header colored-bg p-8\"\n                 [ngClass]=\"'mat-'+selectedColor+'-bg'\"\n                 fxLayout=\"column\">\n                <div class=\"p-8\">\n                    <h3 class=\"text-capitalize\">{{selectedColor}}</h3>\n                </div>\n                <div class=\"p-8\" fxLayout=\"row\">\n\n                    <div fxFlex=\"30\" fxLayoutAlign=\"start center\">500</div>\n\n                    <div class=\"colored-bg p-8\" [ngClass]=\"'mat-'+selectedColor+'-bg'\" fxFlex=\"30\">\n                        <div class=\"pb-4\">.{{'mat-'+selectedColor+'-bg'}}</div>\n                        <div class=\"secondary-text pb-4\">.secondary-text</div>\n                        <div class=\"hint-text pb-4\">.hint-text, .disabled-text</div>\n                        <div class=\"divider\">.divider</div>\n                    </div>\n\n                    <div fxFlex=\"30\">\n                    </div>\n\n                    <div fxFlex=\"128px\">\n                        {{selectedColorDefaultValue}}\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"color\" fxLayout=\"column\" fxFlex=\"1 0 auto\" *ngIf=\"selectedColor != 'black' && selectedColor != 'white'\">\n\n                <div class=\"colored-bg p-8\"\n                     *ngFor=\"let hue of ['50','100','200','300','400','500','600','700','800','900','A100','A200','A400','A700']\"\n                     fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayout.sm=\"column\"\n                     [ngClass]=\"selectedColor+'-'+hue+'-bg'\">\n\n                    <div class=\"p-8\" fxFlex=\"30\" fxLayoutAlign=\"start center\">{{hue}}</div>\n\n                    <div class=\"colored-bg p-8\" [ngClass]=\"'mat-'+selectedColor+'-'+hue+'-bg'\" fxFlex=\"30\">\n                        <div class=\"pb-4\">.{{'mat-'+selectedColor+'-'+hue+'-bg'}}</div>\n                        <div class=\"secondary-text pb-4\">.secondary-text</div>\n                        <div class=\"hint-text pb-4\">.hint-text, .disabled-text</div>\n                        <div class=\"divider\">.divider</div>\n                    </div>\n\n                    <div class=\"p-8\" fxFlex=\"30\" fxLayoutAlign=\"start center\">.{{selectedColor+'-'+hue+'-bg'}}</div>\n\n                    <div class=\"fg-box mat-elevation-z2 p-8\"\n                         [ngClass]=\"selectedColor+'-'+hue+'-fg'\" fxFlex=\"128px\" fxLayoutAlign=\"center center\">\n                        .{{selectedColor+'-'+hue+'-fg'}}\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <!-- / CONTENT -->\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/colors/colors.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .content .color-tabs-content .color .fg-box {\n  background-color: white; }\n\n:host .content .color-tabs-content .colored-bg {\n  -webkit-transition: background-color 400ms ease;\n  transition: background-color 400ms ease; }\n"

/***/ }),

/***/ "./src/app/main/content/ui/colors/colors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseColorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_mat_colors__ = __webpack_require__("./src/@fuse/mat-colors/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseColorsComponent = /** @class */ (function () {
    function FuseColorsComponent() {
        this.colors = __WEBPACK_IMPORTED_MODULE_1__fuse_mat_colors__["a" /* MatColors */].all;
        this.updateSelectedColor('primary');
    }
    FuseColorsComponent.prototype.selectColor = function (selected) {
        this.updateSelectedColor(selected.tab.textLabel);
    };
    FuseColorsComponent.prototype.updateSelectedColor = function (colorName) {
        this.selectedColor = colorName;
        this.selectedColorDefaultValue = __WEBPACK_IMPORTED_MODULE_1__fuse_mat_colors__["a" /* MatColors */].getColor(this.selectedColor)[500];
    };
    FuseColorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-colors',
            template: __webpack_require__("./src/app/main/content/ui/colors/colors.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/colors/colors.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseColorsComponent);
    return FuseColorsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/colors/colors.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIColorsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_components_demo_demo_module__ = __webpack_require__("./src/@fuse/components/demo/demo.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__colors_component__ = __webpack_require__("./src/app/main/content/ui/colors/colors.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'colors',
        component: __WEBPACK_IMPORTED_MODULE_5__colors_component__["a" /* FuseColorsComponent */]
    }
];
var UIColorsModule = /** @class */ (function () {
    function UIColorsModule() {
    }
    UIColorsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__colors_component__["a" /* FuseColorsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["U" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_components_demo_demo_module__["a" /* FuseDemoModule */]
            ]
        })
    ], UIColorsModule);
    return UIColorsModule;
}());



/***/ }),

/***/ "./src/app/main/content/ui/forms/forms.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"forms\" class=\"page-layout simple fullwidth\" fxLayout=\"column\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">User Interface</span>\n            </div>\n            <div class=\"h1 mt-16\">Forms</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <div class=\"h1\">\n            Reactive Forms\n        </div>\n\n        <p class=\"pt-16 pb-32\">\n            Angular reactive forms facilitate a reactive style of programming that favors explicit management of the\n            data flowing between a non-UI data model (typically retrieved from a server) and a UI-oriented form model\n            that retains the states and values of the HTML controls on screen. Reactive forms offer the ease of using\n            reactive patterns, testing, and validation.\n        </p>\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayout.gt-md=\"row\">\n\n            <!-- REACTIVE FORM EXAMPLE -->\n\n            <form class=\"mat-white-bg mat-elevation-z4 p-24 mr-24 mb-24\" fxLayout=\"column\" fxLayoutAlign=\"start\"\n                  fxFlex=\"1 0 auto\" name=\"form\" [formGroup]=\"form\">\n\n                <div class=\"h2 mb-24\">Reactive Form Example</div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n\n                    <mat-form-field fxFlex=\"100\">\n                        <input matInput placeholder=\"Company (disabled)\" formControlName=\"company\">\n                    </mat-form-field>\n\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n\n                    <mat-form-field fxFlex=\"50\">\n                        <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\n                        <mat-error *ngIf=\"formErrors.firstName.required\">\n                            First Name is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlex=\"50\">\n                        <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\n                        <mat-error *ngIf=\"formErrors.lastName.required\">\n                            Last Name is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                </div>\n\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n\n                    <mat-form-field fxFlex=\"100\">\n                        <textarea matInput placeholder=\"Address\" formControlName=\"address\" required>\n                            1600 Amphitheatre Pkwy\n                        </textarea>\n                        <mat-error *ngIf=\"formErrors.address.required\">\n                            Address is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlex=\"100\">\n                        <textarea matInput placeholder=\"Address 2\" formControlName=\"address2\"></textarea>\n                        <mat-error *ngIf=\"formErrors.address2.required\">\n                            Address 2 is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n\n                    <mat-form-field fxFlex=\"33\">\n                        <input matInput placeholder=\"City\" formControlName=\"city\" required>\n                        <mat-error *ngIf=\"formErrors.city.required\">\n                            City is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlex=\"34\">\n                        <input matInput placeholder=\"State\" formControlName=\"state\" required>\n                        <mat-error *ngIf=\"formErrors.state.required\">\n                            State is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlex=\"33\">\n                        <input matInput #postalCode placeholder=\"Postal Code\" value=\"94043\"\n                               formControlName=\"postalCode\" required>\n                        <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n                        <mat-error *ngIf=\"formErrors.postalCode.maxlength\">\n                            Postal Code needs to be max. {{formErrors.postalCode.maxlength.requiredLength}} characters\n                        </mat-error>\n                        <mat-error *ngIf=\"formErrors.postalCode.required\">\n                            Postal Code is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n\n                    <mat-form-field fxFlex=\"100\">\n                        <mat-select placeholder=\"Country\" formControlName=\"country\" required>\n                            <mat-option [value]=\"'United States of America'\">\n                                United States of America\n                            </mat-option>\n                            <mat-option [value]=\"'United Kingdom'\">\n                                United Kingdom\n                            </mat-option>\n                            <mat-option [value]=\"'Russia'\">\n                                Russia\n                            </mat-option>\n                            <mat-option [value]=\"'China'\">\n                                China\n                            </mat-option>\n                            <mat-option [value]=\"'Japan'\">\n                                Japan\n                            </mat-option>\n                            <mat-option [value]=\"'Turkey'\">\n                                Turkey\n                            </mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"formErrors.country.required\">\n                            Country is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                </div>\n\n            </form>\n\n            <!-- / REACTIVE FORM EXAMPLE -->\n\n            <div class=\"form-errors-model mat-white-bg p-24 mat-elevation-z4\">\n\n                <div class=\"h2 mb-24\">Reactive Form Errors Model</div>\n\n                <pre><code>{{formErrors | json}}</code></pre>\n            </div>\n\n        </div>\n\n        <div class=\"h1 pt-32\">\n            Horizontal Stepper\n        </div>\n\n        <p class=\"pb-32\">\n            Angular Material's stepper provides a wizard-like workflow by dividing content into logical steps.\n            <code>mat-horizontal-stepper</code> selector can be used to create a horizontal stepper.\n        </p>\n\n        <div class=\"horizontal-stepper-wrapper\">\n\n            <!-- HORIZONTAL STEPPER EXAMPLE -->\n            <mat-horizontal-stepper class=\"mat-elevation-z4\" [linear]=\"true\">\n\n                <mat-step [stepControl]=\"horizontalStepperStep1\">\n\n                    <form [formGroup]=\"horizontalStepperStep1\">\n\n                        <ng-template matStepLabel>Fill out your name</ng-template>\n\n                        <div>\n\n                            <mat-form-field fxFlex=\"50\">\n                                <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\n                                <mat-error *ngIf=\"horizontalStepperStep1Errors.firstName.required\">\n                                    First Name is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex=\"50\">\n                                <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\n                                <mat-error *ngIf=\"formErrors.lastName.required\">\n                                    Last Name is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\n                                Next\n                            </button>\n                        </div>\n\n                    </form>\n\n                </mat-step>\n\n                <mat-step [stepControl]=\"horizontalStepperStep2\">\n\n                    <form [formGroup]=\"horizontalStepperStep2\">\n\n                        <ng-template matStepLabel>Fill out your address</ng-template>\n\n                        <div>\n\n                            <mat-form-field fxFlex=\"100\">\n                                <textarea matInput placeholder=\"Address\" formControlName=\"address\" required>\n                                    1600 Amphitheatre Pkwy\n                                </textarea>\n                                <mat-error *ngIf=\"horizontalStepperStep2Errors.address.required\">\n                                    Address is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\n                                Previous\n                            </button>\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\n                                Next\n                            </button>\n                        </div>\n\n                    </form>\n\n                </mat-step>\n\n                <mat-step [stepControl]=\"horizontalStepperStep3\">\n\n                    <form [formGroup]=\"horizontalStepperStep3\">\n\n                        <ng-template matStepLabel>Fill out your address</ng-template>\n\n                        <div>\n\n                            <mat-form-field fxFlex=\"33\">\n                                <input matInput placeholder=\"City\" formControlName=\"city\" required>\n                                <mat-error *ngIf=\"horizontalStepperStep3Errors.city.required\">\n                                    City is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex=\"34\">\n                                <input matInput placeholder=\"State\" formControlName=\"state\" required>\n                                <mat-error *ngIf=\"horizontalStepperStep3Errors.state.required\">\n                                    State is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex=\"33\">\n                                <input matInput #postalCode placeholder=\"Postal Code\" formControlName=\"postalCode\"\n                                       required>\n                                <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n                                <mat-error *ngIf=\"horizontalStepperStep3Errors.postalCode.maxlength\">\n                                    Postal Code needs to be max.\n                                    {{horizontalStepperStep3Errors.postalCode.maxlength.requiredLength}} characters\n                                </mat-error>\n                                <mat-error *ngIf=\"horizontalStepperStep3Errors.postalCode.required\">\n                                    Postal Code is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\n                                Previous\n                            </button>\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\n                                Next\n                            </button>\n                        </div>\n\n                    </form>\n\n                </mat-step>\n\n                <mat-step>\n\n                    <ng-template matStepLabel>Done</ng-template>\n\n                    <div class=\"h2 m-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                        Thank your for filling out our form.\n                    </div>\n\n                    <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                        <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\n                            Previous\n                        </button>\n                        <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"finishHorizontalStepper()\">\n                            Finish\n                        </button>\n                    </div>\n\n                </mat-step>\n\n            </mat-horizontal-stepper>\n            <!-- / HORIZONTAL STEPPER EXAMPLE -->\n\n        </div>\n\n        <div class=\"h1 pt-48\">\n            Vertical Stepper\n        </div>\n\n        <p class=\"pb-32\">\n            Angular Material's stepper provides a wizard-like workflow by dividing content into logical steps.\n            <code>mat-vertical-stepper</code> can be used to create a vertical stepper.\n        </p>\n\n        <div class=\"vertical-stepper-wrapper\">\n\n            <!-- VERTICAL STEPPER EXAMPLE -->\n            <mat-vertical-stepper class=\"mat-elevation-z4\" [linear]=\"true\">\n\n                <mat-step [stepControl]=\"verticalStepperStep1\">\n\n                    <form [formGroup]=\"verticalStepperStep1\">\n\n                        <ng-template matStepLabel>Fill out your name</ng-template>\n\n                        <div>\n\n                            <mat-form-field fxFlex=\"50\">\n                                <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\n                                <mat-error *ngIf=\"verticalStepperStep1Errors.firstName.required\">\n                                    First Name is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex=\"50\">\n                                <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\n                                <mat-error *ngIf=\"formErrors.lastName.required\">\n                                    Last Name is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\n                                Next\n                            </button>\n                        </div>\n\n                    </form>\n\n                </mat-step>\n\n                <mat-step [stepControl]=\"verticalStepperStep2\">\n\n                    <form [formGroup]=\"verticalStepperStep2\">\n\n                        <ng-template matStepLabel>Fill out your address</ng-template>\n\n                        <div>\n\n                            <mat-form-field fxFlex=\"100\">\n                                <textarea matInput placeholder=\"Address\" formControlName=\"address\" required>\n                                    1600 Amphitheatre Pkwy\n                                </textarea>\n                                <mat-error *ngIf=\"verticalStepperStep2Errors.address.required\">\n                                    Address is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\n                                Previous\n                            </button>\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\n                                Next\n                            </button>\n                        </div>\n\n                    </form>\n\n                </mat-step>\n\n                <mat-step [stepControl]=\"verticalStepperStep3\">\n\n                    <form [formGroup]=\"verticalStepperStep3\">\n\n                        <ng-template matStepLabel>Fill out your address</ng-template>\n\n                        <div>\n\n                            <mat-form-field fxFlex=\"33\">\n                                <input matInput placeholder=\"City\" formControlName=\"city\" required>\n                                <mat-error *ngIf=\"verticalStepperStep3Errors.city.required\">\n                                    City is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex=\"34\">\n                                <input matInput placeholder=\"State\" formControlName=\"state\" required>\n                                <mat-error *ngIf=\"verticalStepperStep3Errors.state.required\">\n                                    State is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex=\"33\">\n                                <input matInput #postalCode placeholder=\"Postal Code\" formControlName=\"postalCode\"\n                                       required>\n                                <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n                                <mat-error *ngIf=\"verticalStepperStep3Errors.postalCode.maxlength\">\n                                    Postal Code needs to be max.\n                                    {{verticalStepperStep3Errors.postalCode.maxlength.requiredLength}} characters\n                                </mat-error>\n                                <mat-error *ngIf=\"verticalStepperStep3Errors.postalCode.required\">\n                                    Postal Code is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\n                                Previous\n                            </button>\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\n                                Next\n                            </button>\n                        </div>\n\n                    </form>\n\n                </mat-step>\n\n                <mat-step>\n\n                    <ng-template matStepLabel>Done</ng-template>\n\n                    <div class=\"h2 m-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                        Thank your for filling out our form.\n                    </div>\n\n                    <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                        <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\n                            Previous\n                        </button>\n                        <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"finishVerticalStepper()\">\n                            Finish\n                        </button>\n                    </div>\n\n                </mat-step>\n\n            </mat-vertical-stepper>\n            <!-- / VERTICAL STEPPER EXAMPLE -->\n\n        </div>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/main/content/ui/forms/forms.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .content form {\n  width: 100%;\n  max-width: 800px !important; }\n\n:host .content .form-errors-model {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n:host .content .form-errors-model code {\n    background: none !important; }\n\n:host .content .horizontal-stepper-wrapper,\n:host .content .vertical-stepper-wrapper {\n  max-width: 800px; }\n"

/***/ }),

/***/ "./src/app/main/content/ui/forms/forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseFormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseFormsComponent = /** @class */ (function () {
    function FuseFormsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        // Reactive form errors
        this.formErrors = {
            company: {},
            firstName: {},
            lastName: {},
            address: {},
            address2: {},
            city: {},
            state: {},
            postalCode: {},
            country: {}
        };
        // Horizontal Stepper form error
        this.horizontalStepperStep1Errors = {
            firstName: {},
            lastName: {}
        };
        this.horizontalStepperStep2Errors = {
            address: {}
        };
        this.horizontalStepperStep3Errors = {
            city: {},
            state: {},
            postalCode: {}
        };
        // Vertical Stepper form error
        this.verticalStepperStep1Errors = {
            firstName: {},
            lastName: {}
        };
        this.verticalStepperStep2Errors = {
            address: {}
        };
        this.verticalStepperStep3Errors = {
            city: {},
            state: {},
            postalCode: {}
        };
    }
    FuseFormsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Reactive Form
        this.form = this.formBuilder.group({
            company: [
                {
                    value: 'Google',
                    disabled: true
                }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required
            ],
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            address2: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            state: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            postalCode: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(5)]],
            country: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]
        });
        this.form.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
        // Horizontal Stepper form steps
        this.horizontalStepperStep1 = this.formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]
        });
        this.horizontalStepperStep2 = this.formBuilder.group({
            address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]
        });
        this.horizontalStepperStep3 = this.formBuilder.group({
            city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            state: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            postalCode: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(5)]]
        });
        this.horizontalStepperStep1.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
        this.horizontalStepperStep2.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
        this.horizontalStepperStep3.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
        // Vertical Stepper form stepper
        this.verticalStepperStep1 = this.formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]
        });
        this.verticalStepperStep2 = this.formBuilder.group({
            address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]
        });
        this.verticalStepperStep3 = this.formBuilder.group({
            city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            state: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            postalCode: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(5)]]
        });
        this.verticalStepperStep1.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
        this.verticalStepperStep2.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
        this.verticalStepperStep3.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
    };
    FuseFormsComponent.prototype.onFormValuesChanged = function () {
        for (var field in this.formErrors) {
            if (!this.formErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.formErrors[field] = {};
            // Get the control
            var control = this.form.get(field);
            if (control && control.dirty && !control.valid) {
                this.formErrors[field] = control.errors;
            }
        }
    };
    FuseFormsComponent.prototype.finishHorizontalStepper = function () {
        alert('You have finished the horizontal stepper!');
    };
    FuseFormsComponent.prototype.finishVerticalStepper = function () {
        alert('You have finished the vertical stepper!');
    };
    FuseFormsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-forms',
            template: __webpack_require__("./src/app/main/content/ui/forms/forms.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/forms/forms.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseFormsComponent);
    return FuseFormsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/forms/forms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIFormsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_component__ = __webpack_require__("./src/app/main/content/ui/forms/forms.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'forms',
        component: __WEBPACK_IMPORTED_MODULE_4__forms_component__["a" /* FuseFormsComponent */]
    }
];
var UIFormsModule = /** @class */ (function () {
    function UIFormsModule() {
    }
    UIFormsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__forms_component__["a" /* FuseFormsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["R" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
            ]
        })
    ], UIFormsModule);
    return UIFormsModule;
}());



/***/ }),

/***/ "./src/app/main/content/ui/helper-classes/helper-classes.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-classes\" class=\"page-layout simple tabbed\" fxLayout=\"column\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">User Interface</span>\n            </div>\n            <div class=\"h1 mt-16\">Helper Classes</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\">\n\n        <mat-tab-group dynamicHeight=\"true\">\n\n            <mat-tab label=\"Padding & Margin Helpers\">\n\n                <fuse-helper-classes-padding-margin></fuse-helper-classes-padding-margin>\n\n            </mat-tab>\n\n            <mat-tab label=\"Width & Height Helpers\">\n\n                <fuse-helper-classes-width-height></fuse-helper-classes-width-height>\n\n            </mat-tab>\n\n        </mat-tab-group>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/helper-classes/helper-classes.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/helper-classes/helper-classes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseHelperClassesComponent; });
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

var FuseHelperClassesComponent = /** @class */ (function () {
    function FuseHelperClassesComponent() {
    }
    FuseHelperClassesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-helper-classes',
            template: __webpack_require__("./src/app/main/content/ui/helper-classes/helper-classes.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/helper-classes/helper-classes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseHelperClassesComponent);
    return FuseHelperClassesComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/helper-classes/helper-classes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIHelperClassesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_components__ = __webpack_require__("./src/@fuse/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_classes_component__ = __webpack_require__("./src/app/main/content/ui/helper-classes/helper-classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_padding_margin_padding_margin_component__ = __webpack_require__("./src/app/main/content/ui/helper-classes/tabs/padding-margin/padding-margin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_width_height_width_height_component__ = __webpack_require__("./src/app/main/content/ui/helper-classes/tabs/width-height/width-height.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'helper-classes',
        component: __WEBPACK_IMPORTED_MODULE_5__helper_classes_component__["a" /* FuseHelperClassesComponent */]
    }
];
var UIHelperClassesModule = /** @class */ (function () {
    function UIHelperClassesModule() {
    }
    UIHelperClassesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__helper_classes_component__["a" /* FuseHelperClassesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tabs_padding_margin_padding_margin_component__["a" /* FuseHelperClassesPaddingMarginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tabs_width_height_width_height_component__["a" /* FuseHelperClassesWidthHeightComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["U" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_components__["c" /* FuseHighlightModule */],
            ],
        })
    ], UIHelperClassesModule);
    return UIHelperClassesModule;
}());



/***/ }),

/***/ "./src/app/main/content/ui/helper-classes/tabs/padding-margin/padding-margin.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-classes-padding-margin\" class=\"p-24\">\n\n    <div class=\"mat-title\">Padding Helpers</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>p-0</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"p-0\">No padding</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>p-4</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"p-4\">4px padding</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>p-12</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"p-12\">12px padding</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-20\">Direction Specific Padding Helpers</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>pt-0</span>\n                <span>pr-0</span>\n                <span>pb-0</span>\n                <span>pl-0</span>\n                <span>px-0</span>\n                <span>py-0</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"pt-0\">0 padding from top</span>\n                    <span class=\"pr-0\">0 padding from right</span>\n                    <span class=\"pb-0\">0 padding from bottom</span>\n                    <span class=\"pl-0\">0 padding from left</span>\n                    <span class=\"px-0\">0 padding from left and right</span>\n                    <span class=\"py-0\">0 padding from top and bottom</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>pt-4</span>\n                <span>pr-4</span>\n                <span>pb-4</span>\n                <span>pl-4</span>\n                <span>px-4</span>\n                <span>py-4</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"pt-4\">4px padding from top</span>\n                    <span class=\"pr-4\">4px padding from right</span>\n                    <span class=\"pb-4\">4px padding from bottom</span>\n                    <span class=\"pl-4\">4px padding from left</span>\n                    <span class=\"px-4\">4px padding from left and right</span>\n                    <span class=\"py-4\">4px padding from top and bottom</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-20\">Margin Helpers</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>m-0</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"m-0\">No margin</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>m-4</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"m-4\">4px margin</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>m-12</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"m-12\">12px margin</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-20\">Direction Specific Margin Helpers</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>mt-0</span>\n                <span>mr-0</span>\n                <span>mb-0</span>\n                <span>ml-0</span>\n                <span>mx-0</span>\n                <span>my-0</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mt-0\">0 margin from top</span>\n                    <span class=\"mr-0\">0 margin from right</span>\n                    <span class=\"mb-0\">0 margin from bottom</span>\n                    <span class=\"ml-0\">0 margin from left</span>\n                    <span class=\"mx-0\">0 margin from left and right</span>\n                    <span class=\"my-0\">0 margin from top and bottom</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>mt-4</span>\n                <span>mr-4</span>\n                <span>mb-4</span>\n                <span>ml-4</span>\n                <span>mx-4</span>\n                <span>my-4</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mt-4\">4px margin from top</span>\n                    <span class=\"mr-4\">4px margin from right</span>\n                    <span class=\"mb-4\">4px margin from bottom</span>\n                    <span class=\"ml-4\">4px margin from left</span>\n                    <span class=\"mx-4\">4px margin from left and right</span>\n                    <span class=\"my-4\">4px margin from top and bottom</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/helper-classes/tabs/padding-margin/padding-margin.component.scss":
/***/ (function(module, exports) {

module.exports = ":host #helper-classes-padding-margin .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #helper-classes-padding-margin .source-code code {\n    background: none !important; }\n  :host #helper-classes-padding-margin .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #helper-classes-padding-margin .preview:last-child {\n    margin-bottom: 0; }\n  :host #helper-classes-padding-margin .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/content/ui/helper-classes/tabs/padding-margin/padding-margin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseHelperClassesPaddingMarginComponent; });
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

var FuseHelperClassesPaddingMarginComponent = /** @class */ (function () {
    function FuseHelperClassesPaddingMarginComponent() {
    }
    FuseHelperClassesPaddingMarginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-helper-classes-padding-margin',
            template: __webpack_require__("./src/app/main/content/ui/helper-classes/tabs/padding-margin/padding-margin.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/helper-classes/tabs/padding-margin/padding-margin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseHelperClassesPaddingMarginComponent);
    return FuseHelperClassesPaddingMarginComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/helper-classes/tabs/width-height/width-height.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-classes-width-height\" class=\"p-24\">\n\n    <div class=\"mat-title\">Width Helpers</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>w-0</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"w-0\">0px width</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:512, Multiples of 4</div>\n                <span>w-100</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"w-100\">100px width</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\n                <span>w-25-p</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"w-25-p\">25% width</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\n                <span>w-100-p</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"w-100-p\">100% width</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-20\">Height Helpers</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>h-0</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"h-0\">0px height</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:512, Multiples of 4</div>\n                <span>h-100</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"h-100\">100px height</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\n                <span>h-25-p</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"h-25-p\">25% height</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\n                <span>h-100-p</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"h-100-p\">100% height</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/helper-classes/tabs/width-height/width-height.component.scss":
/***/ (function(module, exports) {

module.exports = ":host #helper-classes-width-height .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #helper-classes-width-height .source-code code {\n    background: none !important; }\n  :host #helper-classes-width-height .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #helper-classes-width-height .preview:last-child {\n    margin-bottom: 0; }\n  :host #helper-classes-width-height .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/content/ui/helper-classes/tabs/width-height/width-height.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseHelperClassesWidthHeightComponent; });
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

var FuseHelperClassesWidthHeightComponent = /** @class */ (function () {
    function FuseHelperClassesWidthHeightComponent() {
    }
    FuseHelperClassesWidthHeightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-helper-classes-width-height',
            template: __webpack_require__("./src/app/main/content/ui/helper-classes/tabs/width-height/width-height.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/helper-classes/tabs/width-height/width-height.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseHelperClassesWidthHeightComponent);
    return FuseHelperClassesWidthHeightComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-classes\" class=\"page-layout simple tabbed\" fxLayout=\"column\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"column\" fxLayoutAlign.gt-xs=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">User Interface</span>\n            </div>\n            <div class=\"h1 mt-16\">Icons</div>\n        </div>\n\n        <a mat-raised-button class=\"reference-button mat-white-bg mt-16 mt-sm-0\" href=\"https://material.angular.io\" target=\"_blank\">\n            <mat-icon>link</mat-icon>\n            <span>Reference</span>\n        </a>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n            <mat-spinner *ngIf=\"loading\" color=\"accent\"></mat-spinner>\n        </div>\n\n        <div *ngIf=\"!loading\">\n\n            <div fxLayout=\"column\">\n\n                <div class=\"m-32\">\n                    <mat-form-field class=\"w-100-p\">\n                        <input matInput placeholder=\"Search an icon...\" (input)=\"filterIcons($event)\">\n                    </mat-form-field>\n                </div>\n\n                <div fxLayout=\"row wrap\">\n\n                    <div class=\"icon-holder m-16\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\n                         *ngFor=\"let icon of filteredIcons\">\n                        <mat-icon class=\"s-48\">{{icon}}</mat-icon>\n                        <div class=\"icon-name secondary-text mt-8\">{{icon}}</div>\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/icons/icons.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .content {\n  max-width: 1200px; }\n  :host .content .icon-holder {\n    width: 112px;\n    height: 120px; }\n  :host .content .icon-holder .icon-name {\n      font-size: 12px;\n      word-wrap: break-word;\n      width: 100px;\n      text-align: center; }\n"

/***/ }),

/***/ "./src/app/main/content/ui/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseIconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseIconsComponent = /** @class */ (function () {
    function FuseIconsComponent(http) {
        this.http = http;
        this.loading = true;
    }
    FuseIconsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('api/icons')
            .subscribe(function (icons) {
            _this.icons = icons;
            _this.filteredIcons = _this.icons;
            _this.loading = false;
        });
    };
    FuseIconsComponent.prototype.filterIcons = function (event) {
        var value = event.target.value;
        this.filteredIcons = this.icons.filter(function (icon) {
            return icon.includes(value);
        });
    };
    FuseIconsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-icons',
            template: __webpack_require__("./src/app/main/content/ui/icons/icons.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/icons/icons.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], FuseIconsComponent);
    return FuseIconsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/icons/icons.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIIconsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons_component__ = __webpack_require__("./src/app/main/content/ui/icons/icons.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'icons',
        component: __WEBPACK_IMPORTED_MODULE_4__icons_component__["a" /* FuseIconsComponent */]
    }
];
var UIIconsModule = /** @class */ (function () {
    function UIIconsModule() {
    }
    UIIconsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__icons_component__["a" /* FuseIconsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ]
        })
    ], UIIconsModule);
    return UIIconsModule;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/blank/blank.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout blank p-24\" fusePerfectScrollbar>\n\n    <h2>Blank Page</h2>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/blank/blank.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/blank/blank.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseBlankComponent; });
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

var FuseBlankComponent = /** @class */ (function () {
    function FuseBlankComponent() {
    }
    FuseBlankComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-blank',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/blank/blank.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/blank/blank.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseBlankComponent);
    return FuseBlankComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/fullwidth-2/fullwidth-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded fullwidth single-scroll\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT HEADER -->\n        <div class=\"header white-fg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <h2>Fullwidth with page scroll</h2>\n        </div>\n        <!-- / CONTENT HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card mat-white-bg\">\n\n            <!-- CONTENT TOOLBAR -->\n            <div class=\"toolbar px-24 py-8\">\n                <span>Content toolbar</span>\n            </div>\n            <!-- / CONTENT TOOLBAR -->\n\n            <!-- CONTENT -->\n            <div class=\"content p-24\">\n\n                <fuse-demo-content></fuse-demo-content>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/fullwidth-2/fullwidth-2.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/fullwidth-2/fullwidth-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCardedFullWidth2Component; });
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

var FuseCardedFullWidth2Component = /** @class */ (function () {
    function FuseCardedFullWidth2Component() {
    }
    FuseCardedFullWidth2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-carded-fullwidth-2',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/carded/fullwidth-2/fullwidth-2.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/carded/fullwidth-2/fullwidth-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedFullWidth2Component);
    return FuseCardedFullWidth2Component;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/fullwidth/fullwidth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT HEADER -->\n        <div class=\"header white-fg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <h2>Fullwidth with content scroll</h2>\n        </div>\n        <!-- / CONTENT HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card mat-white-bg\">\n\n            <!-- CONTENT TOOLBAR -->\n            <div class=\"toolbar px-24 py-8\">\n                <span>Content toolbar</span>\n            </div>\n            <!-- / CONTENT TOOLBAR -->\n\n            <!-- CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-content></fuse-demo-content>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/fullwidth/fullwidth.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/fullwidth/fullwidth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCardedFullWidthComponent; });
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

var FuseCardedFullWidthComponent = /** @class */ (function () {
    function FuseCardedFullWidthComponent() {
    }
    FuseCardedFullWidthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-carded-fullwidth',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/carded/fullwidth/fullwidth.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/carded/fullwidth/fullwidth.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedFullWidthComponent);
    return FuseCardedFullWidthComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidenav tabbed single-scroll\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <!-- SIDENAV HEADER -->\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\n                <h2>Sidenav header</h2>\n            </div>\n            <!-- / SIDENAV HEADER -->\n\n            <!-- SIDENAV CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n            <!-- / SIDENAV CONTENT -->\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT HEADER -->\n            <div class=\"header white-fg p-24\">\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <button mat-button class=\"mat-icon-button sidenav-toggle mr-8\"\n                            fuseMatSidenavToggler=\"carded-left-sidenav\" fxHide.gt-md>\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <h2>Left sidenav with tabs and page scroll</h2>\n\n                </div>\n\n            </div>\n            <!-- / CONTENT HEADER -->\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card mat-white-bg\">\n\n                <!-- CONTENT -->\n                <div class=\"content\">\n\n                    <mat-tab-group>\n\n                        <mat-tab label=\"Tab 1\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 2\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 3\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 4\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 5\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 6\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 7\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 8\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 9\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 10\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                    </mat-tab-group>\n\n                </div>\n                <!-- / CONTENT -->\n\n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCardedLeftSidenav2TabbedComponent; });
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

var FuseCardedLeftSidenav2TabbedComponent = /** @class */ (function () {
    function FuseCardedLeftSidenav2TabbedComponent() {
    }
    FuseCardedLeftSidenav2TabbedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-carded-left-sidenav-2-tabbed',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedLeftSidenav2TabbedComponent);
    return FuseCardedLeftSidenav2TabbedComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav-2/left-sidenav-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidenav single-scroll\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <!-- SIDENAV HEADER -->\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\n                <h2>Sidenav header</h2>\n            </div>\n            <!-- / SIDENAV HEADER -->\n\n            <!-- SIDENAV CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n            <!-- / SIDENAV CONTENT -->\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT HEADER -->\n            <div class=\"header white-fg p-24\">\n                <h2>Left sidenav with page scroll</h2>\n            </div>\n            <!-- / CONTENT HEADER -->\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card mat-white-bg\">\n\n                <!-- CONTENT TOOLBAR -->\n                <div class=\"toolbar px-24 py-8\">\n                    <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                            fuseMatSidenavToggler=\"carded-left-sidenav\"\n                            fxHide.gt-md>\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <span>Content toolbar</span>\n                </div>\n                <!-- / CONTENT TOOLBAR -->\n\n                <!-- CONTENT -->\n                <div class=\"content p-24\" fusePerfectScrollbar>\n\n                    <fuse-demo-content></fuse-demo-content>\n\n                </div>\n                <!-- / CONTENT -->\n\n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav-2/left-sidenav-2.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav-2/left-sidenav-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCardedLeftSidenav2Component; });
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

var FuseCardedLeftSidenav2Component = /** @class */ (function () {
    function FuseCardedLeftSidenav2Component() {
    }
    FuseCardedLeftSidenav2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-carded-left-sidenav-2',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav-2/left-sidenav-2.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav-2/left-sidenav-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedLeftSidenav2Component);
    return FuseCardedLeftSidenav2Component;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav-tabbed/left-sidenav-tabbed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidenav tabbed\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <!-- SIDENAV HEADER -->\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\n                <h2>Sidenav header</h2>\n            </div>\n            <!-- / SIDENAV HEADER -->\n\n            <!-- SIDENAV CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n            <!-- / SIDENAV CONTENT -->\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT HEADER -->\n            <div class=\"header white-fg p-24\">\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <button mat-button class=\"mat-icon-button sidenav-toggle mr-8\"\n                            fuseMatSidenavToggler=\"carded-left-sidenav\" fxHide.gt-md>\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <h2>Left sidenav with tabs and content scroll</h2>\n\n                </div>\n\n            </div>\n            <!-- / CONTENT HEADER -->\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card mat-white-bg\">\n\n                <!-- CONTENT -->\n                <div class=\"content\">\n\n                    <mat-tab-group>\n\n                        <mat-tab label=\"Tab 1\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 2\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 3\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 4\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 5\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 6\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 7\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 8\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 9\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 10\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                    </mat-tab-group>\n\n                </div>\n                <!-- / CONTENT -->\n\n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav-tabbed/left-sidenav-tabbed.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav-tabbed/left-sidenav-tabbed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCardedLeftSidenavTabbedComponent; });
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

var FuseCardedLeftSidenavTabbedComponent = /** @class */ (function () {
    function FuseCardedLeftSidenavTabbedComponent() {
    }
    FuseCardedLeftSidenavTabbedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-carded-left-sidenav-tabbed',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav-tabbed/left-sidenav-tabbed.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav-tabbed/left-sidenav-tabbed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedLeftSidenavTabbedComponent);
    return FuseCardedLeftSidenavTabbedComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav/left-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidenav\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <!-- SIDENAV HEADER -->\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\n                <h2>Sidenav header</h2>\n            </div>\n            <!-- / SIDENAV HEADER -->\n\n            <!-- SIDENAV CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n            <!-- / SIDENAV CONTENT -->\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT HEADER -->\n            <div class=\"header white-fg p-24\">\n                <h2>Left sidenav with content scroll</h2>\n            </div>\n            <!-- / CONTENT HEADER -->\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card mat-white-bg\">\n\n                <!-- CONTENT TOOLBAR -->\n                <div class=\"toolbar px-24 py-8\">\n                    <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                            fuseMatSidenavToggler=\"carded-left-sidenav\"\n                            fxHide.gt-md>\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <span>Content toolbar</span>\n                </div>\n                <!-- / CONTENT TOOLBAR -->\n\n                <!-- CONTENT -->\n                <div class=\"content p-24\" fusePerfectScrollbar>\n\n                    <fuse-demo-content></fuse-demo-content>\n\n                </div>\n                <!-- / CONTENT -->\n\n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav/left-sidenav.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/left-sidenav/left-sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCardedLeftSidenavComponent; });
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

var FuseCardedLeftSidenavComponent = /** @class */ (function () {
    function FuseCardedLeftSidenavComponent() {
    }
    FuseCardedLeftSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-carded-left-sidenav',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav/left-sidenav.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav/left-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedLeftSidenavComponent);
    return FuseCardedLeftSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded right-sidenav tabbed single-scroll\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <mat-sidenav-container>\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT HEADER -->\n            <div class=\"header white-fg p-24\">\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <button mat-button class=\"mat-icon-button sidenav-toggle mr-8\"\n                            fuseMatSidenavToggler=\"carded-left-sidenav\" fxHide.gt-md>\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <h2>Right sidenav with tabs and page scroll</h2>\n\n                </div>\n\n            </div>\n            <!-- / CONTENT HEADER -->\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card mat-white-bg\">\n\n                <!-- CONTENT -->\n                <div class=\"content\">\n\n                    <mat-tab-group>\n\n                        <mat-tab label=\"Tab 1\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 2\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 3\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 4\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 5\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 6\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 7\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 8\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 9\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 10\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                    </mat-tab-group>\n\n                </div>\n                <!-- / CONTENT -->\n\n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n        <!-- / CENTER -->\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"end\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <!-- SIDENAV HEADER -->\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\n                <h2>Sidenav header</h2>\n            </div>\n            <!-- / SIDENAV HEADER -->\n\n            <!-- SIDENAV CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n            <!-- / SIDENAV CONTENT -->\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCardedRightSidenav2TabbedComponent; });
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

var FuseCardedRightSidenav2TabbedComponent = /** @class */ (function () {
    function FuseCardedRightSidenav2TabbedComponent() {
    }
    FuseCardedRightSidenav2TabbedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-carded-right-sidenav-2-tabbed',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedRightSidenav2TabbedComponent);
    return FuseCardedRightSidenav2TabbedComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav-2/right-sidenav-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded right-sidenav single-scroll\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <mat-sidenav-container>\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT HEADER -->\n            <div class=\"header white-fg p-24\">\n                <h2>Right sidenav with page scroll</h2>\n            </div>\n            <!-- / CONTENT HEADER -->\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card mat-white-bg\">\n\n                <!-- CONTENT TOOLBAR -->\n                <div class=\"toolbar px-24 py-8\">\n                    <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                            fuseMatSidenavToggler=\"carded-right-sidenav\"\n                            fxHide.gt-md>\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <span>Content toolbar</span>\n                </div>\n                <!-- / CONTENT TOOLBAR -->\n\n                <!-- CONTENT -->\n                <div class=\"content p-24\" fusePerfectScrollbar>\n\n                    <fuse-demo-content></fuse-demo-content>\n\n                </div>\n                <!-- / CONTENT -->\n\n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n        <!-- / CENTER -->\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"end\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"carded-right-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <!-- SIDENAV HEADER -->\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\n                <h2>Sidenav header</h2>\n            </div>\n            <!-- / SIDENAV HEADER -->\n\n            <!-- SIDENAV CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n            <!-- / SIDENAV CONTENT -->\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav-2/right-sidenav-2.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav-2/right-sidenav-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCardedRightSidenav2Component; });
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

var FuseCardedRightSidenav2Component = /** @class */ (function () {
    function FuseCardedRightSidenav2Component() {
    }
    FuseCardedRightSidenav2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-carded-right-sidenav-2',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav-2/right-sidenav-2.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav-2/right-sidenav-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedRightSidenav2Component);
    return FuseCardedRightSidenav2Component;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav-tabbed/right-sidenav-tabbed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded right-sidenav tabbed\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <mat-sidenav-container>\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT HEADER -->\n            <div class=\"header white-fg p-24\">\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <button mat-button class=\"mat-icon-button sidenav-toggle mr-8\"\n                            fuseMatSidenavToggler=\"carded-left-sidenav\" fxHide.gt-md>\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <h2>Right sidenav with tabs and content scroll</h2>\n\n                </div>\n\n            </div>\n            <!-- / CONTENT HEADER -->\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card mat-white-bg\">\n\n                <!-- CONTENT -->\n                <div class=\"content\">\n\n                    <mat-tab-group>\n\n                        <mat-tab label=\"Tab 1\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 2\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 3\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 4\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 5\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 6\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 7\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 8\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 9\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 10\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                    </mat-tab-group>\n\n                </div>\n                <!-- / CONTENT -->\n\n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n        <!-- / CENTER -->\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"end\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <!-- SIDENAV HEADER -->\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\n                <h2>Sidenav header</h2>\n            </div>\n            <!-- / SIDENAV HEADER -->\n\n            <!-- SIDENAV CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n            <!-- / SIDENAV CONTENT -->\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav-tabbed/right-sidenav-tabbed.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav-tabbed/right-sidenav-tabbed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCardedRightSidenavTabbedComponent; });
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

var FuseCardedRightSidenavTabbedComponent = /** @class */ (function () {
    function FuseCardedRightSidenavTabbedComponent() {
    }
    FuseCardedRightSidenavTabbedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-carded-right-sidenav-tabbed',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav-tabbed/right-sidenav-tabbed.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav-tabbed/right-sidenav-tabbed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedRightSidenavTabbedComponent);
    return FuseCardedRightSidenavTabbedComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav/right-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded right-sidenav\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <mat-sidenav-container>\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT HEADER -->\n            <div class=\"header white-fg p-24\">\n                <h2>Right sidenav with content scroll</h2>\n            </div>\n            <!-- / CONTENT HEADER -->\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card mat-white-bg\">\n\n                <!-- CONTENT TOOLBAR -->\n                <div class=\"toolbar px-24 py-8\">\n                    <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                            fuseMatSidenavToggler=\"carded-right-sidenav\"\n                            fxHide.gt-md>\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <span>Content toolbar</span>\n                </div>\n                <!-- / CONTENT TOOLBAR -->\n\n                <!-- CONTENT -->\n                <div class=\"content p-24\" fusePerfectScrollbar>\n\n                    <fuse-demo-content></fuse-demo-content>\n\n                </div>\n                <!-- / CONTENT -->\n\n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n        <!-- / CENTER -->\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"end\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"carded-right-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <!-- SIDENAV HEADER -->\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\n                <h2>Sidenav header</h2>\n            </div>\n            <!-- / SIDENAV HEADER -->\n\n            <!-- SIDENAV CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n            <!-- / SIDENAV CONTENT -->\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav/right-sidenav.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/carded/right-sidenav/right-sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCardedRightSidenavComponent; });
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

var FuseCardedRightSidenavComponent = /** @class */ (function () {
    function FuseCardedRightSidenavComponent() {
    }
    FuseCardedRightSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-carded-right-sidenav',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav/right-sidenav.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav/right-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedRightSidenavComponent);
    return FuseCardedRightSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/page-layouts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIPageLayoutsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_components_demo_demo_module__ = __webpack_require__("./src/@fuse/components/demo/demo.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carded_fullwidth_fullwidth_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/carded/fullwidth/fullwidth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carded_fullwidth_2_fullwidth_2_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/carded/fullwidth-2/fullwidth-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__carded_left_sidenav_left_sidenav_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav/left-sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__carded_left_sidenav_tabbed_left_sidenav_tabbed_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav-tabbed/left-sidenav-tabbed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__carded_left_sidenav_2_left_sidenav_2_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav-2/left-sidenav-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__carded_left_sidenav_2_tabbed_left_sidenav_2_tabbed_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__carded_right_sidenav_right_sidenav_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav/right-sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__carded_right_sidenav_tabbed_right_sidenav_tabbed_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav-tabbed/right-sidenav-tabbed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__carded_right_sidenav_2_right_sidenav_2_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav-2/right-sidenav-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__carded_right_sidenav_2_tabbed_right_sidenav_2_tabbed_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__simple_fullwidth_fullwidth_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/simple/fullwidth/fullwidth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__simple_left_sidenav_left_sidenav_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/simple/left-sidenav/left-sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__simple_left_sidenav_2_left_sidenav_2_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/simple/left-sidenav-2/left-sidenav-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__simple_left_sidenav_3_left_sidenav_3_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/simple/left-sidenav-3/left-sidenav-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__simple_right_sidenav_right_sidenav_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/simple/right-sidenav/right-sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__simple_right_sidenav_2_right_sidenav_2_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/simple/right-sidenav-2/right-sidenav-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__simple_right_sidenav_3_right_sidenav_3_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/simple/right-sidenav-3/right-sidenav-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__simple_tabbed_tabbed_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/simple/tabbed/tabbed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__ = __webpack_require__("./src/app/main/content/ui/page-layouts/blank/blank.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var routes = [
    {
        path: 'page-layouts/carded/full-width',
        component: __WEBPACK_IMPORTED_MODULE_5__carded_fullwidth_fullwidth_component__["a" /* FuseCardedFullWidthComponent */]
    },
    {
        path: 'page-layouts/carded/full-width-2',
        component: __WEBPACK_IMPORTED_MODULE_6__carded_fullwidth_2_fullwidth_2_component__["a" /* FuseCardedFullWidth2Component */]
    },
    {
        path: 'page-layouts/carded/left-sidenav',
        component: __WEBPACK_IMPORTED_MODULE_7__carded_left_sidenav_left_sidenav_component__["a" /* FuseCardedLeftSidenavComponent */]
    },
    {
        path: 'page-layouts/carded/left-sidenav-tabbed',
        component: __WEBPACK_IMPORTED_MODULE_8__carded_left_sidenav_tabbed_left_sidenav_tabbed_component__["a" /* FuseCardedLeftSidenavTabbedComponent */]
    },
    {
        path: 'page-layouts/carded/left-sidenav-2',
        component: __WEBPACK_IMPORTED_MODULE_9__carded_left_sidenav_2_left_sidenav_2_component__["a" /* FuseCardedLeftSidenav2Component */]
    },
    {
        path: 'page-layouts/carded/left-sidenav-2-tabbed',
        component: __WEBPACK_IMPORTED_MODULE_10__carded_left_sidenav_2_tabbed_left_sidenav_2_tabbed_component__["a" /* FuseCardedLeftSidenav2TabbedComponent */]
    },
    {
        path: 'page-layouts/carded/right-sidenav',
        component: __WEBPACK_IMPORTED_MODULE_11__carded_right_sidenav_right_sidenav_component__["a" /* FuseCardedRightSidenavComponent */]
    },
    {
        path: 'page-layouts/carded/right-sidenav-tabbed',
        component: __WEBPACK_IMPORTED_MODULE_12__carded_right_sidenav_tabbed_right_sidenav_tabbed_component__["a" /* FuseCardedRightSidenavTabbedComponent */]
    },
    {
        path: 'page-layouts/carded/right-sidenav-2',
        component: __WEBPACK_IMPORTED_MODULE_13__carded_right_sidenav_2_right_sidenav_2_component__["a" /* FuseCardedRightSidenav2Component */]
    },
    {
        path: 'page-layouts/carded/right-sidenav-2-tabbed',
        component: __WEBPACK_IMPORTED_MODULE_14__carded_right_sidenav_2_tabbed_right_sidenav_2_tabbed_component__["a" /* FuseCardedRightSidenav2TabbedComponent */]
    },
    {
        path: 'page-layouts/simple/full-width',
        component: __WEBPACK_IMPORTED_MODULE_15__simple_fullwidth_fullwidth_component__["a" /* FuseSimpleFullWidthComponent */]
    },
    {
        path: 'page-layouts/simple/left-sidenav',
        component: __WEBPACK_IMPORTED_MODULE_16__simple_left_sidenav_left_sidenav_component__["a" /* FuseSimpleLeftSidenavComponent */]
    },
    {
        path: 'page-layouts/simple/left-sidenav-2',
        component: __WEBPACK_IMPORTED_MODULE_17__simple_left_sidenav_2_left_sidenav_2_component__["a" /* FuseSimpleLeftSidenav2Component */]
    },
    {
        path: 'page-layouts/simple/left-sidenav-3',
        component: __WEBPACK_IMPORTED_MODULE_18__simple_left_sidenav_3_left_sidenav_3_component__["a" /* FuseSimpleLeftSidenav3Component */]
    },
    {
        path: 'page-layouts/simple/right-sidenav',
        component: __WEBPACK_IMPORTED_MODULE_19__simple_right_sidenav_right_sidenav_component__["a" /* FuseSimpleRightSidenavComponent */]
    },
    {
        path: 'page-layouts/simple/right-sidenav-2',
        component: __WEBPACK_IMPORTED_MODULE_20__simple_right_sidenav_2_right_sidenav_2_component__["a" /* FuseSimpleRightSidenav2Component */]
    },
    {
        path: 'page-layouts/simple/right-sidenav-3',
        component: __WEBPACK_IMPORTED_MODULE_21__simple_right_sidenav_3_right_sidenav_3_component__["a" /* FuseSimpleRightSidenav3Component */]
    },
    {
        path: 'page-layouts/simple/tabbed',
        component: __WEBPACK_IMPORTED_MODULE_22__simple_tabbed_tabbed_component__["a" /* FuseTabbedComponent */]
    },
    {
        path: 'page-layouts/blank',
        component: __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */],
    },
    {
        path: 'page-layouts/blpage-01',
        component: __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */],
    },
    {
        path: 'page-layouts/blpage-02',
        component: __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */]
    },
    {
        path: 'page-layouts/blpage-03',
        component: __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */]
    },
    {
        path: 'page-layouts/blpage-04',
        component: __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */]
    },
    {
        path: 'page-layouts/blpage-05',
        component: __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */]
    },
    {
        path: 'page-layouts/blpage-06',
        component: __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */]
    },
    {
        path: 'page-layouts/blpage-07',
        component: __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */]
    },
    {
        path: 'page-layouts/blpage-08',
        component: __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */]
    },
    {
        path: 'page-layouts/blpage-09',
        component: __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */]
    },
    {
        path: 'page-layouts/blpage-10',
        component: __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */]
    },
    {
        path: 'page-layouts/blpage-11',
        component: __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */]
    },
    {
        path: 'page-layouts/blpage-12',
        component: __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */]
    },
    {
        path: 'page-layouts/blpage-13',
        component: __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */]
    },
    {
        path: 'page-layouts/blpage-14',
        component: __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */]
    },
    {
        path: 'page-layouts/blpage-15',
        component: __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */]
    },
    {
        path: 'page-layouts/blpage-16',
        component: __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */]
    },
    {
        path: 'page-layouts/blpage-17',
        component: __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */]
    },
    {
        path: 'page-layouts/blpage-18',
        component: __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */]
    }
];
var UIPageLayoutsModule = /** @class */ (function () {
    function UIPageLayoutsModule() {
    }
    UIPageLayoutsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__carded_fullwidth_fullwidth_component__["a" /* FuseCardedFullWidthComponent */],
                __WEBPACK_IMPORTED_MODULE_6__carded_fullwidth_2_fullwidth_2_component__["a" /* FuseCardedFullWidth2Component */],
                __WEBPACK_IMPORTED_MODULE_7__carded_left_sidenav_left_sidenav_component__["a" /* FuseCardedLeftSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_8__carded_left_sidenav_tabbed_left_sidenav_tabbed_component__["a" /* FuseCardedLeftSidenavTabbedComponent */],
                __WEBPACK_IMPORTED_MODULE_9__carded_left_sidenav_2_left_sidenav_2_component__["a" /* FuseCardedLeftSidenav2Component */],
                __WEBPACK_IMPORTED_MODULE_10__carded_left_sidenav_2_tabbed_left_sidenav_2_tabbed_component__["a" /* FuseCardedLeftSidenav2TabbedComponent */],
                __WEBPACK_IMPORTED_MODULE_11__carded_right_sidenav_right_sidenav_component__["a" /* FuseCardedRightSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_12__carded_right_sidenav_tabbed_right_sidenav_tabbed_component__["a" /* FuseCardedRightSidenavTabbedComponent */],
                __WEBPACK_IMPORTED_MODULE_13__carded_right_sidenav_2_right_sidenav_2_component__["a" /* FuseCardedRightSidenav2Component */],
                __WEBPACK_IMPORTED_MODULE_14__carded_right_sidenav_2_tabbed_right_sidenav_2_tabbed_component__["a" /* FuseCardedRightSidenav2TabbedComponent */],
                __WEBPACK_IMPORTED_MODULE_15__simple_fullwidth_fullwidth_component__["a" /* FuseSimpleFullWidthComponent */],
                __WEBPACK_IMPORTED_MODULE_16__simple_left_sidenav_left_sidenav_component__["a" /* FuseSimpleLeftSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_17__simple_left_sidenav_2_left_sidenav_2_component__["a" /* FuseSimpleLeftSidenav2Component */],
                __WEBPACK_IMPORTED_MODULE_18__simple_left_sidenav_3_left_sidenav_3_component__["a" /* FuseSimpleLeftSidenav3Component */],
                __WEBPACK_IMPORTED_MODULE_19__simple_right_sidenav_right_sidenav_component__["a" /* FuseSimpleRightSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_20__simple_right_sidenav_2_right_sidenav_2_component__["a" /* FuseSimpleRightSidenav2Component */],
                __WEBPACK_IMPORTED_MODULE_21__simple_right_sidenav_3_right_sidenav_3_component__["a" /* FuseSimpleRightSidenav3Component */],
                __WEBPACK_IMPORTED_MODULE_22__simple_tabbed_tabbed_component__["a" /* FuseTabbedComponent */],
                __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* FuseBlankComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["K" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["U" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_components_demo_demo_module__["a" /* FuseDemoModule */]
            ]
        })
    ], UIPageLayoutsModule);
    return UIPageLayoutsModule;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/fullwidth/fullwidth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <h2>Fullwidth</h2>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24 mat-white-bg\">\n\n        <fuse-demo-content></fuse-demo-content>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/fullwidth/fullwidth.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/fullwidth/fullwidth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSimpleFullWidthComponent; });
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

var FuseSimpleFullWidthComponent = /** @class */ (function () {
    function FuseSimpleFullWidthComponent() {
    }
    FuseSimpleFullWidthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-simple-fullwidth',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/simple/fullwidth/fullwidth.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/simple/fullwidth/fullwidth.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleFullWidthComponent);
    return FuseSimpleFullWidthComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/left-sidenav-2/left-sidenav-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple left-sidenav single-scroll\" fusePerfectScrollbar>\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav  p-24\" align=\"start\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"simple-left-sidenav-2\" mat-is-locked-open=\"gt-md\">\n\n            <fuse-demo-sidenav></fuse-demo-sidenav>\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center\" fusePerfectScrollbar>\n\n            <!-- HEADER -->\n            <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                        fuseMatSidenavToggler=\"simple-left-sidenav-2\"\n                        fxHide.gt-md>\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <div>\n                    <h2>Left sidenav with page scroll</h2>\n                </div>\n\n            </div>\n            <!-- / HEADER -->\n\n            <!-- CONTENT -->\n            <div class=\"content p-24 mat-white-bg\">\n\n                <fuse-demo-content></fuse-demo-content>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/left-sidenav-2/left-sidenav-2.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/left-sidenav-2/left-sidenav-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSimpleLeftSidenav2Component; });
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

var FuseSimpleLeftSidenav2Component = /** @class */ (function () {
    function FuseSimpleLeftSidenav2Component() {
    }
    FuseSimpleLeftSidenav2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-simple-left-sidenav-2',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/simple/left-sidenav-2/left-sidenav-2.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/simple/left-sidenav-2/left-sidenav-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleLeftSidenav2Component);
    return FuseSimpleLeftSidenav2Component;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/left-sidenav-3/left-sidenav-3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple left-sidenav inner-sidenav\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                fuseMatSidenavToggler=\"simple-left-sidenav-3\"\n                fxHide.gt-md>\n            <mat-icon>menu</mat-icon>\n        </button>\n\n        <div>\n            <h2>Left inner sidenav with content scroll</h2>\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"simple-left-sidenav-3\" mat-is-locked-open=\"gt-md\">\n\n            <div class=\"sidenav-content\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center p-24\" fusePerfectScrollbar>\n\n            <!-- CONTENT -->\n            <div class=\"content p-24 mat-elevation-z4 mat-white-bg\">\n\n                <fuse-demo-content></fuse-demo-content>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/left-sidenav-3/left-sidenav-3.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/left-sidenav-3/left-sidenav-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSimpleLeftSidenav3Component; });
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

var FuseSimpleLeftSidenav3Component = /** @class */ (function () {
    function FuseSimpleLeftSidenav3Component() {
    }
    FuseSimpleLeftSidenav3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-simple-left-sidenav-3',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/simple/left-sidenav-3/left-sidenav-3.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/simple/left-sidenav-3/left-sidenav-3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleLeftSidenav3Component);
    return FuseSimpleLeftSidenav3Component;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/left-sidenav/left-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple left-sidenav\" fusePerfectScrollbar>\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"simple-left-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <div class=\"sidenav-content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center\" fusePerfectScrollbar>\n\n            <!-- HEADER -->\n            <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                        fuseMatSidenavToggler=\"simple-left-sidenav\"\n                        fxHide.gt-md>\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <div>\n                    <h2>Left sidenav with content scroll</h2>\n                </div>\n\n            </div>\n            <!-- / HEADER -->\n\n            <!-- CONTENT -->\n            <div class=\"content p-24 mat-white-bg\">\n\n                <fuse-demo-content></fuse-demo-content>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/left-sidenav/left-sidenav.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/left-sidenav/left-sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSimpleLeftSidenavComponent; });
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

var FuseSimpleLeftSidenavComponent = /** @class */ (function () {
    function FuseSimpleLeftSidenavComponent() {
    }
    FuseSimpleLeftSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-simple-left-sidenav',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/simple/left-sidenav/left-sidenav.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/simple/left-sidenav/left-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleLeftSidenavComponent);
    return FuseSimpleLeftSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/right-sidenav-2/right-sidenav-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple right-sidenav single-scroll\" fusePerfectScrollbar>\n\n    <mat-sidenav-container>\n\n        <!-- CENTER -->\n        <div class=\"center\" fusePerfectScrollbar>\n\n            <!-- HEADER -->\n            <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                        fuseMatSidenavToggler=\"simple-right-sidenav-2\"\n                        fxHide.gt-md>\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <div>\n                    <h2>Right sidenav with page scroll</h2>\n                </div>\n\n            </div>\n            <!-- / HEADER -->\n\n            <!-- CONTENT -->\n            <div class=\"content p-24 mat-white-bg\">\n\n                <fuse-demo-content></fuse-demo-content>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CENTER -->\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav  p-24\" align=\"end\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"simple-right-sidenav-2\" mat-is-locked-open=\"gt-md\">\n\n            <fuse-demo-sidenav></fuse-demo-sidenav>\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/right-sidenav-2/right-sidenav-2.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/right-sidenav-2/right-sidenav-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSimpleRightSidenav2Component; });
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

var FuseSimpleRightSidenav2Component = /** @class */ (function () {
    function FuseSimpleRightSidenav2Component() {
    }
    FuseSimpleRightSidenav2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-simple-right-sidenav-2',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/simple/right-sidenav-2/right-sidenav-2.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/simple/right-sidenav-2/right-sidenav-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleRightSidenav2Component);
    return FuseSimpleRightSidenav2Component;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/right-sidenav-3/right-sidenav-3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple right-sidenav inner-sidenav\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                fuseMatSidenavToggler=\"simple-right-sidenav-3\"\n                fxHide.gt-md>\n            <mat-icon>menu</mat-icon>\n        </button>\n\n        <div>\n            <h2>Right inner sidenav with content scroll</h2>\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <mat-sidenav-container>\n\n        <!-- CENTER -->\n        <div class=\"center p-24\" fusePerfectScrollbar>\n\n            <!-- CONTENT -->\n            <div class=\"content p-24 mat-elevation-z4 mat-white-bg\">\n\n                <fuse-demo-content></fuse-demo-content>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CENTER -->\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"end\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"simple-right-sidenav-3\" mat-is-locked-open=\"gt-md\">\n\n            <div class=\"sidenav-content\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/right-sidenav-3/right-sidenav-3.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/right-sidenav-3/right-sidenav-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSimpleRightSidenav3Component; });
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

var FuseSimpleRightSidenav3Component = /** @class */ (function () {
    function FuseSimpleRightSidenav3Component() {
    }
    FuseSimpleRightSidenav3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-simple-right-sidenav-3',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/simple/right-sidenav-3/right-sidenav-3.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/simple/right-sidenav-3/right-sidenav-3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleRightSidenav3Component);
    return FuseSimpleRightSidenav3Component;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/right-sidenav/right-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple right-sidenav\" fusePerfectScrollbar>\n\n    <mat-sidenav-container>\n\n        <!-- CENTER -->\n        <div class=\"center\" fusePerfectScrollbar>\n\n            <!-- HEADER -->\n            <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                        fuseMatSidenavToggler=\"simple-right-sidenav\"\n                        fxHide.gt-md>\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <div>\n                    <h2>Right sidenav with content scroll</h2>\n                </div>\n\n            </div>\n            <!-- / HEADER -->\n\n            <!-- CONTENT -->\n            <div class=\"content p-24 mat-white-bg\">\n\n                <fuse-demo-content></fuse-demo-content>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CENTER -->\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"end\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"simple-right-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <div class=\"sidenav-content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/right-sidenav/right-sidenav.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/right-sidenav/right-sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSimpleRightSidenavComponent; });
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

var FuseSimpleRightSidenavComponent = /** @class */ (function () {
    function FuseSimpleRightSidenavComponent() {
    }
    FuseSimpleRightSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-simple-right-sidenav',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/simple/right-sidenav/right-sidenav.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/simple/right-sidenav/right-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleRightSidenavComponent);
    return FuseSimpleRightSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/tabbed/tabbed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple tabbed\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24\">\n        <h2>Tabbed</h2>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content mat-white-bg\">\n\n        <mat-tab-group dynamicHeight=\"true\">\n\n            <mat-tab label=\"Tab 1\">\n                <div class=\"p-24\">\n                    <fuse-demo-content></fuse-demo-content>\n                </div>\n            </mat-tab>\n\n            <mat-tab label=\"Tab 2\">\n                <div class=\"p-24\">\n                    <fuse-demo-content></fuse-demo-content>\n                </div>\n            </mat-tab>\n\n            <mat-tab label=\"Tab 3\">\n                <div class=\"p-24\">\n                    <fuse-demo-content></fuse-demo-content>\n                </div>\n            </mat-tab>\n\n        </mat-tab-group>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/tabbed/tabbed.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/page-layouts/simple/tabbed/tabbed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseTabbedComponent; });
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

var FuseTabbedComponent = /** @class */ (function () {
    function FuseTabbedComponent() {
    }
    FuseTabbedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-tabbed',
            template: __webpack_require__("./src/app/main/content/ui/page-layouts/simple/tabbed/tabbed.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/page-layouts/simple/tabbed/tabbed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseTabbedComponent);
    return FuseTabbedComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-blockquotes-lists\" class=\"p-24\">\n\n    <div class=\"mat-title\">Blockquotes</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <blockquote>\n                    <p>\n                        You can do anything, but not everything.\n                    </p>\n                </blockquote>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <blockquote>\n                        <p>\n                            You can do anything, but not everything.\n                        </p>\n                    </blockquote>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <blockquote>\n                    <p>\n                        You can do anything, but not everything.\n                    </p>\n                    <footer>\n                        David Allen\n                    </footer>\n                </blockquote>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <blockquote>\n                        <p>\n                            You can do anything, but not everything.\n                        </p>\n                        <footer>\n                            David Allen\n                        </footer>\n                    </blockquote>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <blockquote class=\"reverse\">\n                    <p>\n                        You can do anything, but not everything.\n                    </p>\n                    <footer>\n                        David Allen\n                    </footer>\n                </blockquote>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <blockquote class=\"reverse\">\n                        <p>\n                            You can do anything, but not everything.\n                        </p>\n                        <footer>\n                            David Allen\n                        </footer>\n                    </blockquote>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-20\">Lists</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <ol>\n                    <li>Ordered list item</li>\n                    <li>\n                        Ordered list item\n                        <ol>\n                            <li>Ordered list item</li>\n                            <li>Ordered list item</li>\n                        </ol>\n                    </li>\n                    <li>Ordered list item</li>\n                    <li>Ordered list item</li>\n                </ol>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <ol>\n                        <li>Ordered list item</li>\n                        <li>\n                            Ordered list item\n                            <ol>\n                                <li>Ordered list item</li>\n                                <li>Ordered list item</li>\n                            </ol>\n                        </li>\n                        <li>Ordered list item</li>\n                        <li>Ordered list item</li>\n                    </ol>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <ul>\n                    <li>Unordered list item</li>\n                    <li>\n                        Unordered list item\n                        <ul>\n                            <li>Unordered list item</li>\n                            <li>Unordered list item</li>\n                        </ul>\n                    </li>\n                    <li>Unordered list item</li>\n                    <li>Unordered list item</li>\n                </ul>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <ul>\n                        <li>Unordered list item</li>\n                        <li>\n                            Unordered list item\n                            <ul>\n                                <li>Unordered list item</li>\n                                <li>Unordered list item</li>\n                            </ul>\n                        </li>\n                        <li>Unordered list item</li>\n                        <li>Unordered list item</li>\n                    </ul>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-20\">Definition Lists</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <dl>\n                    <dt>Definition term</dt>\n                    <dd>This is the definition description</dd>\n\n                    <dt>Another definition term</dt>\n                    <dd>This is also another definition description</dd>\n                </dl>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <dl>\n                        <dt>Definition term</dt>\n                        <dd>This is the definition description</dd>\n\n                        <dt>Another definition term</dt>\n                        <dd>This is also another definition description</dd>\n                    </dl>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.scss":
/***/ (function(module, exports) {

module.exports = ":host #typography-blockquotes-lists .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-blockquotes-lists .source-code code {\n    background: none !important; }\n  :host #typography-blockquotes-lists .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-blockquotes-lists .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-blockquotes-lists .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseTypographyBlockquotesListsComponent; });
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

var FuseTypographyBlockquotesListsComponent = /** @class */ (function () {
    function FuseTypographyBlockquotesListsComponent() {
    }
    FuseTypographyBlockquotesListsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-typography-blockquotes-lists',
            template: __webpack_require__("./src/app/main/content/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseTypographyBlockquotesListsComponent);
    return FuseTypographyBlockquotesListsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/headings/headings.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-headings\" class=\"p-24\">\n\n    <div class=\"mat-title\">Material design typography classes</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">112px</div>\n                <span class=\"mat-display-4\">Display 4</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-display-4\">Display 4</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">56px</div>\n                <span class=\"mat-display-3\">Display 3</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-display-3\">Display 3</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">45px</div>\n                <span class=\"mat-display-2\">Display 2</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-display-2\">Display 2</span>\n                </textarea>\n            </fuse-highlight>\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">34px</div>\n                <span class=\"mat-display-1\">Display 1</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-display-1\">Display 1</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">24px</div>\n                <span class=\"mat-headline\">Headline</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-headline\">Headline</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">20px</div>\n                <span class=\"mat-title\">Title</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-title\">Title</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">16px</div>\n                <span class=\"mat-subheading-2\">Subheading 2</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-subheading-2\">Subheading 2</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">15px</div>\n                <span class=\"mat-subheading-1\">Subheading 1</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-subheading-1\">Subheading 1</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">14px</div>\n                <span class=\"mat-body-1\">Body 1</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-body-1\">Body 1</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">14px</div>\n                <span class=\"mat-body-2\">Body 2</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-body-2\">Body 2</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">12px</div>\n                <span class=\"mat-caption\">Caption</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-caption\">Caption</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-20\">Standard Headings</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">24px</div>\n                <span class=\"h1\">Heading 1</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <h1>Heading 1</h1>\n                    <span class=\"h1\">Heading 1</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">20px</div>\n                <span class=\"h2\">Heading 2</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <h2>Heading 2</h2>\n                    <span class=\"h2\">Heading 2</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">16px</div>\n                <span class=\"h3\">Heading 3</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <h3>Heading 3</h3>\n                    <span class=\"h3\">Heading 3</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">15px</div>\n                <span class=\"h4\">Heading 4</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <h4>Heading 4</h4>\n                    <span class=\"h4\">Heading 4</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">13px</div>\n                <span class=\"h5\">Heading 5</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <h5>Heading 5</h5>\n                    <span class=\"h5\">Heading 5</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">12px</div>\n                <span class=\"h6\">Heading 6</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <h6>Heading 6</h6>\n                    <span class=\"h6\">Heading 6</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/headings/headings.component.scss":
/***/ (function(module, exports) {

module.exports = ":host #typography-headings .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-headings .source-code code {\n    background: none !important; }\n  :host #typography-headings .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-headings .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-headings .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/headings/headings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseTypographyHeadingsComponent; });
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

var FuseTypographyHeadingsComponent = /** @class */ (function () {
    function FuseTypographyHeadingsComponent() {
    }
    FuseTypographyHeadingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-typography-headings',
            template: __webpack_require__("./src/app/main/content/ui/typography/tabs/headings/headings.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/typography/tabs/headings/headings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseTypographyHeadingsComponent);
    return FuseTypographyHeadingsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/helpers/helpers.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-helpers\" class=\"p-24\">\n\n    <div class=\"mat-title\">Font Weight</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">From 100 to 900</div>\n                <span class=\"font-weight-100\">font-weight: 100</span>\n                <span>...</span>\n                <span class=\"font-weight-900\">font-weight: 900</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"font-weight-100\">100 font weight</span>\n                    ...\n                    <span class=\"font-weight-900\">900 font weight</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-20\">Font Size</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Multiplies of 2, max: 120</div>\n                <span class=\"font-size-20\">font-size: 20</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"font-size-20\">font-size: 20</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-20\">Line Height</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Multiplies of 2, max: 120</div>\n                <span>line-height: 2</span>\n                <span>...</span>\n                <span>line-height: 120</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"line-height-2\">2px line height</span>\n                    ...\n                    <span class=\"line-height-120\">120px line height</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-20\">Other helpers</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"text-left\">Left aligned text</div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"text-left\">Left aligned text</div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"text-center\">Center aligned text</div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"text-center\">Center aligned text</div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"text-right\">Right aligned text</div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"text-right\">Right aligned text</div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <p>\n                    <span class=\"text-boxed\">Boxed text</span>\n                </p>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <p>\n                        <span class=\"text-boxed\">Boxed text</span>\n                    </p>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview mat-grey-700-bg\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <p>\n                    <span class=\"text-boxed-light\">Boxed text light</span>\n                </p>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <p>\n                        <span class=\"text-boxed-light\">Boxed text light</span>\n                    </p>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <p>\n                    <span class=\"text-strike\">Strike-through text</span>\n                </p>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <p>\n                        <span class=\"text-strike\">Strike-through text</span>\n                    </p>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"text-italic\">Italic text</div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"text-italic\">Italic text</div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"text-semibold\">Semi-bold text</div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"text-semibold\">Semi-bold text</div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"text-bold\">Bold text</div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"text-bold\">Bold text</div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span class=\"text-truncate\">This is a truncated text. It will be truncated if it's too long. Vivamus\n                    convallis dui porta massa.\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"text-truncate\">\n                        This is a truncated text. It will be truncated if it's too long. Vivamus convallis dui porta massa.\n                    </span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/helpers/helpers.component.scss":
/***/ (function(module, exports) {

module.exports = ":host #typography-helpers .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-helpers .source-code code {\n    background: none !important; }\n  :host #typography-helpers .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-helpers .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-helpers .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/helpers/helpers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseTypographyHelpersComponent; });
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

var FuseTypographyHelpersComponent = /** @class */ (function () {
    function FuseTypographyHelpersComponent() {
    }
    FuseTypographyHelpersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-typography-helpers',
            template: __webpack_require__("./src/app/main/content/ui/typography/tabs/helpers/helpers.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/typography/tabs/helpers/helpers.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseTypographyHelpersComponent);
    return FuseTypographyHelpersComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/inline-text-elements/inline-text-elements.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-inline-text-elements\" class=\"p-24\">\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span><abbr title=\"Cascaded Style Sheet\">CSS</abbr></span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <abbr title=\"Cascaded Style Sheet\">CSS</abbr>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>This is a <mark>marked</mark> text.</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    This is a <mark>marked</mark> text.\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>\n                    <del>This is a deleted text.</del>\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <del>This is a deleted text.</del>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span><s>This is a strike-through text.</s></span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <s>This is a strike-through text.</s>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span><u>This is an underlined text.</u></span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <u>This is an underlined text.</u>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>\n                    <small>This is a small text.</small>\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <small>This is a small text.</small>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span><strong>This is a strong text.</strong></span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <strong>This is a strong text.</strong>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span><em>This is an italic text.</em></span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <em>This is an italic text.</em>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>This is a\n                    <span class=\"text-super\">super</span>\n                    text.\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    This is a\n                    <span class=\"text-super\">super</span>\n                    text.\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>\n                    This is a\n                    <span class=\"text-sub\">sub</span>\n                    text.\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    This is a\n                    <span class=\"text-sub\">sub</span>\n                    text.\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>This is a\n                    <span class=\"text-capitalize\">capitalized</span>\n                    text.\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    This is a\n                    <span class=\"text-capitalized\">capitalized</span>\n                    text.\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>This is an\n                    <span class=\"text-uppercase\">uppercase</span>\n                    text.\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    This is an\n                    <span class=\"text-uppercase\">uppercase</span>\n                    text.\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>This is a\n                    <span class=\"text-lowercase\">LOWERCASE</span>\n                    text.\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    This is a\n                    <span class=\"text-lowercase\">LOWERCASE</span>\n                    text.\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/inline-text-elements/inline-text-elements.component.scss":
/***/ (function(module, exports) {

module.exports = ":host #typography-inline-text-elements .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-inline-text-elements .source-code code {\n    background: none !important; }\n  :host #typography-inline-text-elements .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-inline-text-elements .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-inline-text-elements .preview .mat-caption {\n    margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/main/content/ui/typography/tabs/inline-text-elements/inline-text-elements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseTypographyInlineTextElementsComponent; });
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

var FuseTypographyInlineTextElementsComponent = /** @class */ (function () {
    function FuseTypographyInlineTextElementsComponent() {
    }
    FuseTypographyInlineTextElementsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-typography-inline-text-elements',
            template: __webpack_require__("./src/app/main/content/ui/typography/tabs/inline-text-elements/inline-text-elements.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/typography/tabs/inline-text-elements/inline-text-elements.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseTypographyInlineTextElementsComponent);
    return FuseTypographyInlineTextElementsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"typography\" class=\"page-layout simple tabbed\" fxLayout=\"column\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">User Interface</span>\n            </div>\n            <div class=\"h1 mt-16\">Typography</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\">\n\n        <mat-tab-group dynamicHeight=\"true\">\n\n            <mat-tab label=\"Headings\">\n\n                <fuse-typography-headings></fuse-typography-headings>\n\n            </mat-tab>\n\n            <mat-tab label=\"Inline Text Elements\">\n\n                <fuse-typography-inline-text-elements></fuse-typography-inline-text-elements>\n\n            </mat-tab>\n\n            <mat-tab label=\"Blockquotes & Lists\">\n\n                <fuse-typography-blockquotes-lists></fuse-typography-blockquotes-lists>\n\n            </mat-tab>\n\n            <mat-tab label=\"Helpers\">\n\n                <fuse-typography-helpers></fuse-typography-helpers>\n\n            </mat-tab>\n\n        </mat-tab-group>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/ui/typography/typography.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/ui/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseTypographyComponent; });
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

var FuseTypographyComponent = /** @class */ (function () {
    function FuseTypographyComponent() {
    }
    FuseTypographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-typography',
            template: __webpack_require__("./src/app/main/content/ui/typography/typography.component.html"),
            styles: [__webpack_require__("./src/app/main/content/ui/typography/typography.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseTypographyComponent);
    return FuseTypographyComponent;
}());



/***/ }),

/***/ "./src/app/main/content/ui/typography/typography.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UITypographyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_components__ = __webpack_require__("./src/@fuse/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__typography_component__ = __webpack_require__("./src/app/main/content/ui/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_headings_headings_component__ = __webpack_require__("./src/app/main/content/ui/typography/tabs/headings/headings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_inline_text_elements_inline_text_elements_component__ = __webpack_require__("./src/app/main/content/ui/typography/tabs/inline-text-elements/inline-text-elements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_blockquotes_lists_blockquotes_lists_component__ = __webpack_require__("./src/app/main/content/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tabs_helpers_helpers_component__ = __webpack_require__("./src/app/main/content/ui/typography/tabs/helpers/helpers.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: 'typography',
        component: __WEBPACK_IMPORTED_MODULE_5__typography_component__["a" /* FuseTypographyComponent */]
    }
];
var UITypographyModule = /** @class */ (function () {
    function UITypographyModule() {
    }
    UITypographyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__typography_component__["a" /* FuseTypographyComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tabs_headings_headings_component__["a" /* FuseTypographyHeadingsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tabs_inline_text_elements_inline_text_elements_component__["a" /* FuseTypographyInlineTextElementsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__tabs_blockquotes_lists_blockquotes_lists_component__["a" /* FuseTypographyBlockquotesListsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__tabs_helpers_helpers_component__["a" /* FuseTypographyHelpersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["U" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_components__["c" /* FuseHighlightModule */]
            ]
        })
    ], UITypographyModule);
    return UITypographyModule;
}());



/***/ }),

/***/ "./src/app/main/content/ui/ui.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseUIModule", function() { return FuseUIModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forms_forms_module__ = __webpack_require__("./src/app/main/content/ui/forms/forms.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons_icons_module__ = __webpack_require__("./src/app/main/content/ui/icons/icons.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typography_typography_module__ = __webpack_require__("./src/app/main/content/ui/typography/typography.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_classes_helper_classes_module__ = __webpack_require__("./src/app/main/content/ui/helper-classes/helper-classes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_layouts_page_layouts_module__ = __webpack_require__("./src/app/main/content/ui/page-layouts/page-layouts.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__colors_colors_module__ = __webpack_require__("./src/app/main/content/ui/colors/colors.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FuseUIModule = /** @class */ (function () {
    function FuseUIModule() {
    }
    FuseUIModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__forms_forms_module__["a" /* UIFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__icons_icons_module__["a" /* UIIconsModule */],
                __WEBPACK_IMPORTED_MODULE_3__typography_typography_module__["a" /* UITypographyModule */],
                __WEBPACK_IMPORTED_MODULE_4__helper_classes_helper_classes_module__["a" /* UIHelperClassesModule */],
                __WEBPACK_IMPORTED_MODULE_5__page_layouts_page_layouts_module__["a" /* UIPageLayoutsModule */],
                __WEBPACK_IMPORTED_MODULE_6__colors_colors_module__["a" /* UIColorsModule */]
            ]
        })
    ], FuseUIModule);
    return FuseUIModule;
}());



/***/ })

});
//# sourceMappingURL=ui.module.chunk.js.map