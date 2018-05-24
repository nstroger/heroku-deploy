webpackJsonp(["guided-sessions.module"],{

/***/ "./src/app/features/guided-sessions/guided-sessions.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseGuidedSessionsModule", function() { return FuseGuidedSessionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sessions_sessions_component__ = __webpack_require__("./src/app/features/guided-sessions/sessions/sessions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session_session_component__ = __webpack_require__("./src/app/features/guided-sessions/session/session.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sessions_service__ = __webpack_require__("./src/app/features/guided-sessions/sessions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__session_service__ = __webpack_require__("./src/app/features/guided-sessions/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__sessions_sessions_component__["a" /* FuseGuidedSessionsComponent */],
        resolve: {
            academy: __WEBPACK_IMPORTED_MODULE_6__sessions_service__["a" /* GuidedSessionsService */]
        },
    },
    {
        path: ':sessionId/:sessionSlug',
        component: __WEBPACK_IMPORTED_MODULE_5__session_session_component__["a" /* FuseGuidedSessionComponent */],
        resolve: {
            academy: __WEBPACK_IMPORTED_MODULE_7__session_service__["a" /* GuidedSessionService */]
        }
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var FuseGuidedSessionsModule = /** @class */ (function () {
    function FuseGuidedSessionsModule() {
    }
    FuseGuidedSessionsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__sessions_sessions_component__["a" /* FuseGuidedSessionsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__session_session_component__["a" /* FuseGuidedSessionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["K" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__sessions_service__["a" /* GuidedSessionsService */],
                __WEBPACK_IMPORTED_MODULE_7__session_service__["a" /* GuidedSessionService */]
            ]
        })
    ], FuseGuidedSessionsModule);
    return FuseGuidedSessionsModule;
}());



/***/ }),

/***/ "./src/app/features/guided-sessions/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuidedSessionService; });
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



var GuidedSessionService = /** @class */ (function () {
    function GuidedSessionService(http) {
        this.http = http;
        this.onSessionChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    }
    /**
     * The Academy App Main Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    GuidedSessionService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getSession(route.params.sessionId, route.params.sessionSlug)
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    GuidedSessionService.prototype.getSession = function (sessionId, sessionSlug) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/guided-session/' + sessionId + '/' + sessionSlug)
                .subscribe(function (response) {
                _this.onSessionChanged.next(response);
                resolve(response);
            }, reject);
        });
    };
    GuidedSessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], GuidedSessionService);
    return GuidedSessionService;
}());



/***/ }),

/***/ "./src/app/features/guided-sessions/session/session.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"guided-session\" class=\"page-layout simple left-sidenav\">\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"academy-left-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <div class=\"sidenav-content\" fusePerfectScrollbar>\n\n                <div class=\"steps\">\n\n                    <div class=\"step\"\n                         *ngFor=\"let step of session.steps; let i = index; let last = last; let first = first\"\n                         (click)=\"gotoStep(i)\"\n                         [ngClass]=\"{'current': currentStep === i, 'completed': currentStep > i, 'last': last, 'first': first}\">\n                        <div class=\"index\">\n                            <span>{{i + 1}}</span>\n                        </div>\n                        <div class=\"title\">{{step.title}}</div>\n                    </div>\n\n                </div>\n\n            </div>\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- HEADER -->\n            <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <button mat-button class=\"mat-icon-button mr-16 sidenav-toggle\"\n                        fuseMatSidenavToggler=\"academy-left-sidenav\" fxHide.gt-md>\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <button mat-button class=\"mat-icon-button mr-16\" routerLink=\"/guided-sessions\">\n                    <mat-icon>arrow_back</mat-icon>\n                </button>\n\n                <div>\n                    <h2>{{session.title}}</h2>\n                </div>\n\n            </div>\n            <!-- / HEADER -->\n\n            <!-- CONTENT -->\n            <div id=\"session-content\" class=\"content\">\n\n                <ng-container *ngFor=\"let step of session.steps; let i = index;\">\n\n                    <div class=\"session-step\" fusePerfectScrollbar\n                         *ngIf=\"currentStep === i\"\n                         [@slideIn]=\"animationDirection\">\n\n                        <div id=\"session-step-content\" class=\"session-step-content\" [innerHTML]=\"step.content\"></div>\n\n                    </div>\n\n                </ng-container>\n\n            </div>\n            <!-- / CONTENT -->\n\n            <div class=\"step-navigation\">\n\n                <button mat-fab class=\"previous mat-accent white-fg\"\n                        (click)=\"gotoPreviousStep()\"\n                        [disabled]=\"currentStep === 0\"\n                        [fxHide]=\"currentStep === 0\">\n                    <mat-icon>chevron_left</mat-icon>\n                </button>\n\n                <button mat-fab class=\"next mat-accent white-fg\"\n                        (click)=\"gotoNextStep()\"\n                        [disabled]=\"currentStep === session.totalSteps - 1\"\n                        [fxHide]=\"currentStep === session.totalSteps - 1\">\n                    <mat-icon>chevron_right</mat-icon>\n                </button>\n\n                <button mat-fab class=\"done mat-green-600-bg\"\n                        routerLink=\"/guided-sessions\"\n                        [disabled]=\"currentStep !== session.totalSteps - 1\"\n                        [fxShow]=\"currentStep === session.totalSteps - 1\">\n                    <mat-icon>check</mat-icon>\n                </button>\n\n            </div>\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/guided-sessions/session/session.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#guided-session .mat-drawer-container {\n  -webkit-box-flex: 1 !important;\n      -ms-flex: 1 !important;\n          flex: 1 !important; }\n#guided-session .mat-drawer-container > .mat-drawer-content {\n    -webkit-box-flex: 1 !important;\n        -ms-flex: 1 !important;\n            flex: 1 !important; }\n@media (min-width: 1280px) {\n      #guided-session .mat-drawer-container > .mat-drawer-content {\n        z-index: 52; } }\n#guided-session .sidenav .steps {\n  padding: 16px 0; }\n#guided-session .sidenav .steps .step {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 16px;\n    cursor: pointer;\n    color: rgba(0, 0, 0, 0.54); }\n#guided-session .sidenav .steps .step.current {\n      background: #e3f2fd;\n      color: rgba(0, 0, 0, 0.87); }\n#guided-session .sidenav .steps .step.current .index span {\n        border: 2px solid #2196f3; }\n#guided-session .sidenav .steps .step.current .title {\n        font-weight: bold; }\n#guided-session .sidenav .steps .step.completed {\n      color: rgba(0, 0, 0, 0.87); }\n#guided-session .sidenav .steps .step.completed .index span {\n        border: 2px solid #2196f3; }\n#guided-session .sidenav .steps .step.completed .index:after {\n        border-left-color: #2196f3; }\n#guided-session .sidenav .steps .step.completed + .step .index:before {\n        border-left-color: #2196f3; }\n#guided-session .sidenav .steps .step.first .index:before {\n      display: none; }\n#guided-session .sidenav .steps .step.last .index:after {\n      display: none; }\n#guided-session .sidenav .steps .step .index {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin-right: 12px; }\n#guided-session .sidenav .steps .step .index span {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        position: relative;\n        width: 28px;\n        min-width: 28px;\n        max-width: 28px;\n        height: 28px;\n        background: white;\n        border-radius: 100%;\n        border: 2px solid #9e9e9e;\n        font-weight: bold;\n        font-size: 12px;\n        z-index: 10; }\n#guided-session .sidenav .steps .step .index:before, #guided-session .sidenav .steps .step .index:after {\n        position: absolute;\n        display: block;\n        content: ' ';\n        border-left: 1px solid #e0e0e0;\n        width: 1px;\n        height: 50%;\n        left: 29px;\n        z-index: 8; }\n#guided-session .sidenav .steps .step .index:before {\n        top: 0; }\n#guided-session .sidenav .steps .step .index:after {\n        bottom: 0; }\n#guided-session .sidenav .steps .step .title {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n#guided-session .center {\n  position: relative; }\n#guided-session .center .header {\n    height: 72px;\n    min-height: 72px;\n    max-height: 72px; }\n#guided-session .center .content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n    overflow: hidden;\n    height: 100%;\n    background: #eeeeee; }\n#guided-session .center .content .session-step {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      padding: 48px;\n      overflow: auto; }\n@media (max-width: 720px) {\n        #guided-session .center .content .session-step {\n          padding: 0 0 120px 0; } }\n#guided-session .center .content .session-step .session-step-content {\n        padding: 24px;\n        max-width: 720px;\n        margin: 0 auto;\n        width: 100%;\n        background: white;\n        -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n                box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n#guided-session .center .step-navigation {\n    position: absolute;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    bottom: 32px;\n    max-width: 944px;\n    padding: 0 24px;\n    width: 100%;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n#guided-session .center .step-navigation .previous {\n      margin-right: auto; }\n#guided-session .center .step-navigation .next,\n    #guided-session .center .step-navigation .done {\n      margin-left: auto; }\n"

/***/ }),

/***/ "./src/app/features/guided-sessions/session/session.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseGuidedSessionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__ = __webpack_require__("./src/@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_service__ = __webpack_require__("./src/app/features/guided-sessions/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseGuidedSessionComponent = /** @class */ (function () {
    function FuseGuidedSessionComponent(sessionService, changeDetectorRef) {
        this.sessionService = sessionService;
        this.changeDetectorRef = changeDetectorRef;
        this.currentStep = 0;
        this.animationDirection = 'none';
    }
    FuseGuidedSessionComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to sessions
        this.sessionSubscription =
            this.sessionService.onSessionChanged
                .subscribe(function (session) {
                _this.session = session;
            });
    };
    FuseGuidedSessionComponent.prototype.ngAfterViewInit = function () {
        this.sessionStepContent = this.fuseScrollbarDirectives.find(function (fuseScrollbarDirective) {
            return fuseScrollbarDirective.element.nativeElement.id === 'session-step-content';
        });
    };
    FuseGuidedSessionComponent.prototype.ngOnDestroy = function () {
        this.sessionSubscription.unsubscribe();
    };
    FuseGuidedSessionComponent.prototype.gotoStep = function (step) {
        // Decide the animation direction
        this.animationDirection = this.currentStep < step ? 'left' : 'right';
        // Run change detection so the change
        // in the animation direction registered
        this.changeDetectorRef.detectChanges();
        // Set the current step
        this.currentStep = step;
    };
    FuseGuidedSessionComponent.prototype.gotoNextStep = function () {
        if (this.currentStep === this.session.totalSteps - 1) {
            return;
        }
        // Set the animation direction
        this.animationDirection = 'left';
        // Run change detection so the change
        // in the animation direction registered
        this.changeDetectorRef.detectChanges();
        // Increase the current step
        this.currentStep++;
    };
    FuseGuidedSessionComponent.prototype.gotoPreviousStep = function () {
        if (this.currentStep === 0) {
            return;
        }
        // Set the animation direction
        this.animationDirection = 'right';
        // Run change detection so the change
        // in the animation direction registered
        this.changeDetectorRef.detectChanges();
        // Decrease the current step
        this.currentStep--;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_1__fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__["a" /* FusePerfectScrollbarDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], FuseGuidedSessionComponent.prototype, "fuseScrollbarDirectives", void 0);
    FuseGuidedSessionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-guided-session',
            template: __webpack_require__("./src/app/features/guided-sessions/session/session.component.html"),
            styles: [__webpack_require__("./src/app/features/guided-sessions/session/session.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_2__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__session_service__["a" /* GuidedSessionService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], FuseGuidedSessionComponent);
    return FuseGuidedSessionComponent;
}());



/***/ }),

/***/ "./src/app/features/guided-sessions/sessions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuidedSessionsService; });
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



var GuidedSessionsService = /** @class */ (function () {
    function GuidedSessionsService(http) {
        this.http = http;
        this.onCategoriesChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.onSessionsChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    }
    /**
     * The Academy App Main Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    GuidedSessionsService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getCategories(),
                _this.getSessions()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    GuidedSessionsService.prototype.getCategories = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/session-categories')
                .subscribe(function (response) {
                _this.onCategoriesChanged.next(response);
                resolve(response);
            }, reject);
        });
    };
    GuidedSessionsService.prototype.getSessions = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/guided-sessions')
                .subscribe(function (response) {
                _this.onSessionsChanged.next(response);
                resolve(response);
            }, reject);
        });
    };
    GuidedSessionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], GuidedSessionsService);
    return GuidedSessionsService;
}());



/***/ }),

/***/ "./src/app/features/guided-sessions/sessions/sessions.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"guided-sessions\" class=\"page-layout simple\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div class=\"hero-text\">\n            <h1>WELCOME TO GUIDED SESSIONS</h1>\n            <h3>\n                Please select a training session below. In the event you do not see a session you would like, please send a request to <a href=\"mailto:support@anterasoftware.com\">support@anterasoftware.com</a>.\n            </h3>\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n\n            <div class=\"filters\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\n                 fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n                <mat-form-field class=\"session-search\">\n\n                    <input matInput placeholder=\"Search for a session\" [(ngModel)]=\"searchTerm\"\n                           (input)=\"filterSessionsByTerm()\">\n\n                </mat-form-field>\n\n                <mat-form-field class=\"category-selector\">\n\n                    <mat-select placeholder=\"Select Category\" [(ngModel)]=\"currentCategory\"\n                                (change)=\"filterSessionsByCategory()\">\n                        <mat-option [value]=\"'all'\">\n                            All\n                        </mat-option>\n                        <mat-option *ngFor=\"let category of categories\" [value]=\"category.value\">\n                            {{ category.label }}\n                        </mat-option>\n                    </mat-select>\n\n                </mat-form-field>\n\n            </div>\n\n            <div class=\"sessions\" fxLayout=\"row wrap\" fxLayoutAlign=\"center\">\n\n                <div class=\"session\" *ngFor=\"let session of filteredSessions\" fxFlex=\"100\" fxFlex.gt-xs=\"50\"\n                     fxFlex.gt-sm=\"33\" [ngClass]=\"session.category\">\n\n                    <div class=\"session-content\" fxLayout=\"column\">\n\n                        <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"center center\"\n                             [ngClass]=\"session.category + '-bg'\">\n\n                            <div class=\"category\" fxFlex>\n                                {{session.category}}\n                            </div>\n\n                            <div class=\"length\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                                <mat-icon class=\"length-icon s-20\">access_time</mat-icon>\n                                <div class=\"min\">{{session.length}} min</div>\n                            </div>\n\n                        </div>\n\n                        <div class=\"content\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex>\n                            <div class=\"h1\">{{session.title}}</div>\n                            <div class=\"updated\">Updated {{session.updated}}</div>\n                        </div>\n\n                        <div class=\"footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button mat-button color=\"accent\"\n                                    [routerLink]=\"[session.id, session.slug]\">\n                                START\n                            </button>\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div class=\"no-sessions\" *ngIf=\"filteredSessions.length === 0\">\n                    No sessions found!\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/guided-sessions/sessions/sessions.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#guided-sessions .header {\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  height: 280px;\n  max-height: 280px;\n  text-align: center; }\n@media screen and (max-width: 599px) {\n    #guided-sessions .header {\n      height: 240px;\n      padding: 16px; } }\n#guided-sessions .header .hero-text .hero-icon {\n    position: absolute;\n    top: -64px;\n    left: 0px;\n    opacity: 0.04;\n    font-size: 512px !important;\n    width: 512px !important;\n    height: 512px !important; }\n#guided-sessions .header .hero-text h1 {\n    color: white;\n    font-size: 40px;\n    font-weight: 300;\n    letter-spacing: 0.01em;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 16px; }\n@media (max-width: 599px) {\n      #guided-sessions .header .hero-text h1 {\n        font-size: 24px; } }\n#guided-sessions .header .hero-text h3 {\n    color: rgba(255, 255, 255, 0.75);\n    max-width: 480px;\n    text-align: center;\n    font-weight: 300;\n    letter-spacing: 0.03em;\n    margin: 0 auto; }\n@media (max-width: 599px) {\n      #guided-sessions .header .hero-text h3 {\n        font-size: 14px; } }\n#guided-sessions .content .category-selector {\n  min-width: 200px; }\n#guided-sessions .content .filters {\n  width: 100%;\n  max-width: 1040px;\n  margin: 24px auto;\n  padding: 0 20px; }\n@media (max-width: 599px) {\n    #guided-sessions .content .filters {\n      margin: 0 auto; } }\n#guided-sessions .content .filters .session-search {\n    width: 200px; }\n@media (max-width: 599px) {\n      #guided-sessions .content .filters .session-search {\n        margin-bottom: 16px; } }\n@media (min-width: 600px) {\n      #guided-sessions .content .filters .session-search {\n        margin-right: 16px; } }\n#guided-sessions .content .sessions {\n  width: 100%;\n  max-width: 1040px;\n  margin: 0 auto; }\n#guided-sessions .content .sessions .no-sessions {\n    font-size: 24px;\n    margin: 24px 0;\n    text-align: center; }\n#guided-sessions .content .sessions .session {\n    padding: 16px; }\n#guided-sessions .content .sessions .session:hover .session-content {\n      -webkit-box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n              box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n#guided-sessions .content .sessions .session .session-content {\n      background: white;\n      min-height: 240px;\n      -webkit-transition: -webkit-box-shadow 150ms ease-in-out;\n      transition: -webkit-box-shadow 150ms ease-in-out;\n      transition: box-shadow 150ms ease-in-out;\n      transition: box-shadow 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;\n      -webkit-box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n              box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n#guided-sessions .content .sessions .session .session-content .header {\n        color: white;\n        padding: 16px 24px;\n        height: 64px !important;\n        min-height: 64px !important;\n        max-height: 64px !important; }\n#guided-sessions .content .sessions .session .session-content .header.web-bg {\n          background: #2196f3; }\n#guided-sessions .content .sessions .session .session-content .header.android-bg {\n          background: #4caf50; }\n#guided-sessions .content .sessions .session .session-content .header.firebase-bg {\n          background: #ff8f00; }\n#guided-sessions .content .sessions .session .session-content .header.cloud-bg {\n          background: #607d8b; }\n#guided-sessions .content .sessions .session .session-content .header .category {\n          text-transform: capitalize;\n          text-align: left;\n          font-weight: 500;\n          color: rgba(0, 0, 0, 0.54); }\n#guided-sessions .content .sessions .session .session-content .header .length .length-icon {\n          margin-right: 8px;\n          color: rgba(0, 0, 0, 0.54) !important; }\n#guided-sessions .content .sessions .session .session-content .header .length .min {\n          font-size: 16px;\n          color: rgba(0, 0, 0, 0.54); }\n#guided-sessions .content .sessions .session .session-content .content {\n        padding: 24px; }\n#guided-sessions .content .sessions .session .session-content .content .h1 {\n          font-size: 16px;\n          text-align: center; }\n#guided-sessions .content .sessions .session .session-content .content .updated {\n          font-size: 13px;\n          font-weight: 500;\n          margin-top: 4px;\n          color: rgba(0, 0, 0, 0.37); }\n#guided-sessions .content .sessions .session .session-content .footer {\n        padding: 16px;\n        height: 48px !important;\n        min-height: 48px !important;\n        max-height: 48px !important;\n        -webkit-box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.12);\n                box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.12); }\n"

/***/ }),

/***/ "./src/app/features/guided-sessions/sessions/sessions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseGuidedSessionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sessions_service__ = __webpack_require__("./src/app/features/guided-sessions/sessions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseGuidedSessionsComponent = /** @class */ (function () {
    function FuseGuidedSessionsComponent(sessionsService) {
        this.sessionsService = sessionsService;
        this.currentCategory = 'all';
        this.searchTerm = '';
    }
    FuseGuidedSessionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to categories
        this.categoriesSubscription =
            this.sessionsService.onCategoriesChanged
                .subscribe(function (categories) {
                _this.categories = categories;
            });
        // Subscribe to sessions
        this.sessionsSubscription =
            this.sessionsService.onSessionsChanged
                .subscribe(function (sessions) {
                _this.filteredSessions = _this.sessionsFilteredByCategory = _this.sessions = sessions;
            });
    };
    FuseGuidedSessionsComponent.prototype.ngOnDestroy = function () {
        this.categoriesSubscription.unsubscribe();
        this.sessionsSubscription.unsubscribe();
    };
    FuseGuidedSessionsComponent.prototype.filterSessionsByCategory = function () {
        var _this = this;
        // Filter
        if (this.currentCategory === 'all') {
            this.sessionsFilteredByCategory = this.sessions;
            this.filteredSessions = this.sessions;
        }
        else {
            this.sessionsFilteredByCategory = this.sessions.filter(function (course) {
                return course.category === _this.currentCategory;
            });
            this.filteredSessions = this.sessionsFilteredByCategory.slice();
        }
        // Re-filter by search term
        this.filterSessionsByTerm();
    };
    FuseGuidedSessionsComponent.prototype.filterSessionsByTerm = function () {
        var searchTerm = this.searchTerm.toLowerCase();
        // Search
        if (searchTerm === '') {
            this.filteredSessions = this.sessionsFilteredByCategory;
        }
        else {
            this.filteredSessions = this.sessionsFilteredByCategory.filter(function (course) {
                return course.title.toLowerCase().includes(searchTerm);
            });
        }
    };
    FuseGuidedSessionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-guided-sessions',
            template: __webpack_require__("./src/app/features/guided-sessions/sessions/sessions.component.html"),
            styles: [__webpack_require__("./src/app/features/guided-sessions/sessions/sessions.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sessions_service__["a" /* GuidedSessionsService */]])
    ], FuseGuidedSessionsComponent);
    return FuseGuidedSessionsComponent;
}());



/***/ })

});
//# sourceMappingURL=guided-sessions.module.chunk.js.map