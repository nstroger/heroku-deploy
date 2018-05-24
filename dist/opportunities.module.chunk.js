webpackJsonp(["opportunities.module"],{

/***/ "./src/app/main/content/apps/opportunities/opportunities.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"opportunities\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- HEADER -->\n        <div class=\"header white-fg\"\n             fxLayout=\"column\" fxLayoutAlign=\"center center\"\n             fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n            <!-- APP TITLE -->\n            <div class=\"logo my-12 m-sm-0\" fxFlex=\"1 0 auto\" \n                 fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">lightbulb_outline</mat-icon>\n                <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Opportunities</span>\n            </div>\n            <!-- / APP TITLE -->\n\n            <!-- SEARCH -->\n            <div class=\"search-input-wrapper mx-12 m-md-0\"\n                 fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <label for=\"search\" class=\"mr-8\">\n                    <mat-icon class=\"secondary-text\">search</mat-icon>\n                </label>\n                <mat-form-field floatPlaceholder=\"never\" fxFlex=\"1 0 auto\">\n                    <input matInput [formControl]=\"searchInput\" id=\"search\" placeholder=\"Search for opportunities\">\n                </mat-form-field>\n            </div>\n            <!-- / SEARCH -->\n\n        </div>\n        <!-- / HEADER -->\n\n        <!-- CONTENT  -->\n        <div class=\"content-card mat-white-bg\">\n\n            <div class=\"toolbar px-24 py-8\">\n                <div class=\"mail-selection\" fxFlex=\"row\">\n                    <div fxFlex=\"row\" fxLayoutAlign=\"start center\">\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\"\n                                (click)=\"newOpportunity()\">\n                            Add Opportunity\n                        </button>\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\">\n                            Quote/Order\n                        </button>\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\">\n                            Add to QB\n                        </button>\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\">\n                            Generate Letter\n                        </button>\n                        \n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\">\n                            Find Duplicates\n                        </button>\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\"\n                                (click)=\"deleteSelectedOpportunities()\">\n                            Delete Opportunities\n                        </button>\n                    </div>\n\n                    <div class=\"toolbar-separator\"></div>\n\n                    <button mat-button class=\"text-capitalize\" [matMenuTriggerFor]=\"selectMenu\">\n                        More Actions\n                        <mat-icon>arrow_drop_down</mat-icon>\n                    </button>\n                    <mat-menu #selectMenu=\"matMenu\">\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"emailSelected()\">Email\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"massUpdateSelected()\">Mass Update\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"mergeSelected()\">Merge\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"addToTargetListSelected()\">Add To Target List\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"generateLetterSelected()\">Generate Letter\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"addToTargetListSelected()\">Change Log\n                        </button>\n                    </mat-menu>\n                    \n                </div>\n            </div>\n\n            <opportunities-opportunity-list></opportunities-opportunity-list>\n\n        </div>\n        <!-- / CONTENT CARD -->\n    </div>\n    <!-- / CENTER -->\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/apps/opportunities/opportunities.component.scss":
/***/ (function(module, exports) {

module.exports = "#contacts .content {\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/opportunities/opportunities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__opportunity_form_opportunity_form_component__ = __webpack_require__("./src/app/main/content/apps/opportunities/opportunity-form/opportunity-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__opportunities_service__ = __webpack_require__("./src/app/main/content/apps/opportunities/opportunities.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OpportunitiesComponent = /** @class */ (function () {
    function OpportunitiesComponent(opportunitiesService, dialog) {
        this.opportunitiesService = opportunitiesService;
        this.dialog = dialog;
        this.selectedCount = 0;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('');
    }
    OpportunitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onSelectedOpportunitiesChangedSubscription =
            this.opportunitiesService.onSelectedOpportunitiesChanged
                .subscribe(function (selectedContacts) {
                _this.selectedCount = selectedContacts.length;
            });
        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function (searchText) {
            _this.opportunitiesService.onSearchTextChanged.next(searchText);
        });
    };
    OpportunitiesComponent.prototype.ngOnDestroy = function () {
    };
    OpportunitiesComponent.prototype.newOpportunity = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__opportunity_form_opportunity_form_component__["a" /* OpportunityFormDialogComponent */], {
            panelClass: 'opportunity-form-dialog',
            data: {
                action: 'new'
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            _this.opportunitiesService.updateOpportunity(response.getRawValue());
        });
    };
    OpportunitiesComponent.prototype.deleteSelectedOpportunities = function () {
        this.opportunitiesService.deleteSelectedOpportunities();
    };
    OpportunitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'opportunities-opportunities',
            template: __webpack_require__("./src/app/main/content/apps/opportunities/opportunities.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/opportunities/opportunities.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_5__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__opportunities_service__["a" /* OpportunitiesService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatDialog */]])
    ], OpportunitiesComponent);
    return OpportunitiesComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/opportunities/opportunities.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunitiesModule", function() { return OpportunitiesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_components__ = __webpack_require__("./src/@fuse/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__opportunities_component__ = __webpack_require__("./src/app/main/content/apps/opportunities/opportunities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__opportunities_service__ = __webpack_require__("./src/app/main/content/apps/opportunities/opportunities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__opportunity_list_opportunity_list_component__ = __webpack_require__("./src/app/main/content/apps/opportunities/opportunity-list/opportunity-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__opportunity_form_opportunity_form_component__ = __webpack_require__("./src/app/main/content/apps/opportunities/opportunity-form/opportunity-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__selected_bar_selected_bar_component__ = __webpack_require__("./src/app/main/content/apps/opportunities/selected-bar/selected-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__opportunity_sidebar_opportunity_sidebar_component__ = __webpack_require__("./src/app/main/content/apps/opportunities/opportunity-sidebar/opportunity-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_charts__ = __webpack_require__("./node_modules/ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_6__opportunities_component__["a" /* OpportunitiesComponent */],
        resolve: {
            contacts: __WEBPACK_IMPORTED_MODULE_7__opportunities_service__["a" /* OpportunitiesService */]
        }
    }
];
var OpportunitiesModule = /** @class */ (function () {
    function OpportunitiesModule() {
    }
    OpportunitiesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__opportunities_component__["a" /* OpportunitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__opportunity_list_opportunity_list_component__["a" /* OpportunityListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__opportunity_form_opportunity_form_component__["a" /* OpportunityFormDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_10__selected_bar_selected_bar_component__["a" /* OpportunitiesSelectedBarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__opportunity_sidebar_opportunity_sidebar_component__["a" /* OpportunitiesMainSidenavComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["H" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["K" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["Q" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["T" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["V" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["U" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["B" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["I" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_13_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_4__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__fuse_components__["a" /* FuseConfirmDialogModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__opportunities_service__["a" /* OpportunitiesService */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_9__opportunity_form_opportunity_form_component__["a" /* OpportunityFormDialogComponent */]]
        })
    ], OpportunitiesModule);
    return OpportunitiesModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/opportunities/opportunities.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunitiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__opportunity_model__ = __webpack_require__("./src/app/main/content/apps/opportunities/opportunity.model.ts");
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






var OpportunitiesService = /** @class */ (function () {
    function OpportunitiesService(http) {
        this.http = http;
        this.onOpportunitiesChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.onSearchTextChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.onSelectedOpportunitiesChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.onUserDataChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.onFilterChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.selectedOpportunities = [];
    }
    /**
     * The Opportunities App Main Resolver
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    OpportunitiesService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getOpportunities()
            ]).then(function (_a) {
                var files = _a[0];
                _this.onSearchTextChanged.subscribe(function (searchText) {
                    _this.searchText = searchText;
                    _this.getOpportunities();
                });
                _this.onFilterChanged.subscribe(function (filter) {
                    _this.filterBy = filter;
                    _this.getOpportunities();
                });
                resolve();
            }, reject);
        });
    };
    OpportunitiesService.prototype.getOpportunities = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/opportunities')
                .subscribe(function (response) {
                _this.opportunities = response;
                if (_this.searchText && _this.searchText !== '') {
                    _this.opportunities = __WEBPACK_IMPORTED_MODULE_4__fuse_utils__["a" /* FuseUtils */].filterArrayByString(_this.opportunities, _this.searchText);
                }
                _this.opportunities = _this.opportunities.map(function (opportunity) {
                    return new __WEBPACK_IMPORTED_MODULE_5__opportunity_model__["a" /* Opportunity */](opportunity);
                });
                _this.onOpportunitiesChanged.next(_this.opportunities);
                resolve(_this.opportunities);
            }, reject);
        });
    };
    OpportunitiesService.prototype.updateOpportunity = function (opportunity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/opportunities/' + opportunity.id, __assign({}, opportunity))
                .subscribe(function (response) {
                _this.getOpportunities();
                resolve(response);
            });
        });
    };
    OpportunitiesService.prototype.deleteOpportunity = function (opportunity) {
        var opportunityIndex = this.opportunities.indexOf(opportunity);
        this.opportunities.splice(opportunityIndex, 1);
        this.onOpportunitiesChanged.next(this.opportunities);
    };
    /**
     * Toggle selected contact by id
     * @param id
     */
    OpportunitiesService.prototype.toggleSelectedOpportunity = function (id) {
        // First, check if we already have that todo as selected...
        if (this.selectedOpportunities.length > 0) {
            var index = this.selectedOpportunities.indexOf(id);
            if (index !== -1) {
                this.selectedOpportunities.splice(index, 1);
                // Trigger the next event
                this.onSelectedOpportunitiesChanged.next(this.selectedOpportunities);
                // Return
                return;
            }
        }
        // If we don't have it, push as selected
        this.selectedOpportunities.push(id);
        // Trigger the next event
        this.onSelectedOpportunitiesChanged.next(this.selectedOpportunities);
    };
    /**
     * Toggle select all
     */
    OpportunitiesService.prototype.toggleSelectAll = function () {
        if (this.selectedOpportunities.length === this.opportunities.length) {
            this.deselectOpportunities();
        }
        else {
            this.selectOpportunities();
        }
    };
    OpportunitiesService.prototype.selectOpportunities = function (filterParameter, filterValue) {
        var _this = this;
        this.selectedOpportunities = [];
        // If there is no filter, select all todos
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedOpportunities = [];
            this.opportunities.map(function (opportunity) {
                _this.selectedOpportunities.push(opportunity.id);
            });
        }
        else {
            /* this.selectedContacts.push(...
                 this.contacts.filter(todo => {
                     return todo[filterParameter] === filterValue;
                 })
             );*/
        }
        // Trigger the next event
        this.onSelectedOpportunitiesChanged.next(this.selectedOpportunities);
    };
    OpportunitiesService.prototype.deselectOpportunities = function () {
        this.selectedOpportunities = [];
        // Trigger the next event
        this.onSelectedOpportunitiesChanged.next(this.selectedOpportunities);
    };
    OpportunitiesService.prototype.deleteSelectedOpportunities = function () {
        var _loop_1 = function (opportunityId) {
            var opportunity = this_1.opportunities.find(function (_opportunity) {
                return _opportunity.id === opportunityId;
            });
            var opportunityIndex = this_1.opportunities.indexOf(opportunity);
            this_1.opportunities.splice(opportunityIndex, 1);
        };
        var this_1 = this;
        for (var _i = 0, _a = this.selectedOpportunities; _i < _a.length; _i++) {
            var opportunityId = _a[_i];
            _loop_1(opportunityId);
        }
        this.onOpportunitiesChanged.next(this.opportunities);
        this.deselectOpportunities();
    };
    OpportunitiesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], OpportunitiesService);
    return OpportunitiesService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/opportunities/opportunity-form/opportunity-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\n            <button mat-button class=\"mat-icon-button\"\n                    (click)=\"dialogRef.close()\"\n                    aria-label=\"Close dialog\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </mat-toolbar-row>\n    </mat-toolbar>\n\n    <div id=\"opportunity\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n    \n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <div class=\"page-layout simple right-sidenav\" fusePerfectScrollbar>\n\n                    <mat-sidenav-container>\n                \n                        <!-- CENTER -->\n                        <div class=\"center\" fusePerfectScrollbar>\n\n                            <!-- CONTENT CARD -->\n                            <div class=\"content-card mat-white-bg\">\n                                \n                                    <!-- CONTENT -->\n                                    <div class=\"content\">\n                        \n                                        <form name=\"opportunityForm\" [formGroup]=\"opportunityForm\" class=\"product w-100-p\" fxLayout=\"column\" fxFlex>\n                        \n                                            <mat-tab-group>\n                        \n                                                <mat-tab label=\"Basic Info\">\n                                                    <div class=\"tab-content p-24\" fxLayout=\"column\">\n                        \n                                                        <div class=\"py-16\" fxLayout=\"row\">\n                                                            <mat-form-field fxFlex>\n                                                                <input matInput\n                                                                    name=\"name\"\n                                                                    formControlName=\"name\"\n                                                                    placeholder=\"Opportunity Name\" required>\n                                                            </mat-form-field>\n    \n                                                            <mat-form-field fxFlex>\n                                                                <mat-select placeholder=\"Type\" formControlName=\"type\" required>\n                                                                        <mat-option [value]=\"'New Customer'\">\n                                                                            New Customer                                                                        </mat-option>\n                                                                        <mat-option [value]=\"'Existing Customer'\">\n                                                                            Existing Customer                                                                        </mat-option>\n                                                                </mat-select>\n                                                            </mat-form-field>\n                          \n                                                        </div>\n                                                        <div class=\"py-16\" fxLayout=\"row\">\n                                                            <mat-form-field fxFlex>\n                                                                <input matInput\n                                                                    name=\"businessType\"\n                                                                    formControlName=\"businessType\"\n                                                                    placeholder=\"Business Type\">\n                                                            </mat-form-field>\n                                                            <mat-form-field fxFlex>\n                                                                <input matInput\n                                                                    name=\"amount\"\n                                                                    formControlName=\"amount\"\n                                                                    placeholder=\"Opportunity Amount\" required>\n                                                            </mat-form-field>\n                                                        </div>\n                        \n                                                        <div class=\"py-16\" fxLayout=\"row\">\n                                                            <mat-form-field fxFlex>\n                                                                <input matInput\n                                                                    name=\"salesStage\"\n                                                                    formControlName=\"salesStage\"\n                                                                    placeholder=\"Sakes Stage\" required>\n                                                            </mat-form-field>\n                                                            <mat-form-field fxFlex>\n                                                                <input matInput\n                                                                    name=\"probability\"\n                                                                    formControlName=\"probability\"\n                                                                    placeholder=\"Probability\" required>\n                                                            </mat-form-field>\n                                                        </div>\n\n                                                        <div class=\"py-16\" fxLayout=\"row\">\n                                                            <mat-form-field fxFlex>\n                                                                <input matInput [matDatepicker]=\"closeDatePicker\" placeholder=\"Close Date\" required>\n                                                                <mat-datepicker-toggle matSuffix [for]=\"closeDatePicker\"></mat-datepicker-toggle>\n                                                                <mat-datepicker #closeDatePicker></mat-datepicker>\n                                                            </mat-form-field>\n                                                            <mat-form-field fxFlex>\n                                                                    <input matInput [matDatepicker]=\"eventDatePicker\" placeholder=\"Event Date\">\n                                                                    <mat-datepicker-toggle matSuffix [for]=\"eventDatePicker\"></mat-datepicker-toggle>\n                                                                    <mat-datepicker #eventDatePicker></mat-datepicker>\n                                                            </mat-form-field>\n                                                            <mat-form-field fxFlex>\n                                                                    <input matInput [matDatepicker]=\"inHandsDatePicker\" placeholder=\"In Hands Date\">\n                                                                    <mat-datepicker-toggle matSuffix [for]=\"inHandsDatePicker\"></mat-datepicker-toggle>\n                                                                    <mat-datepicker #inHandsDatePicker></mat-datepicker>\n                                                                </mat-form-field>\n                                                        </div>\n\n                                                        <div class=\"py-16\" fxLayout=\"row\">\n                                                            <mat-form-field fxFlex>\n                                                                <input matInput\n                                                                    name=\"accountName\"\n                                                                    formControlName=\"accountName\"\n                                                                    placeholder=\"Account Name\" required>\n                                                            </mat-form-field>\n    \n                                                            <mat-form-field fxFlex>\n                                                                    <input matInput\n                                                                        name=\"contactName\"\n                                                                        formControlName=\"contactName\"\n                                                                        placeholder=\"Contact Name\">\n                                                            </mat-form-field>\n                                                        </div>\n    \n                                                        <div class=\"py-16\" fxLayout=\"row\">\n                                                            <mat-form-field fxFlex>\n                                                                    <mat-select placeholder=\"Lead Source\" formControlName=\"leadSource\">\n                                                                            <mat-option [value]=\"'Campaign'\">\n                                                                                Campaign                                                                     </mat-option>\n                                                                            <mat-option [value]=\"'Cold Call'\">\n                                                                                Cold Call                                                                     </mat-option>\n                                                                    </mat-select>\n                                                            </mat-form-field>\n    \n                                                            <mat-form-field fxFlex>\n                                                                    <input matInput\n                                                                        name=\"campaign\"\n                                                                        formControlName=\"campaign\"\n                                                                        placeholder=\"Campaign\">\n                                                            </mat-form-field>\n                                                        </div>\n\n                                                        <div class=\"py-16\" fxLayout=\"row\">\n                                                                <mat-icon class=\"mr-12 mt-12\">note</mat-icon>\n                                                                <mat-form-field fxFlex>\n                                                                        <textarea name=\"description\" formControlName=\"description\" placeholder=\"Description\" matInput type=\"text\" rows=\"4\"></textarea>\n                                                                </mat-form-field>\n                                                        </div>\n\n                                                    </div>\n                                                </mat-tab>\n                        \n                                                <mat-tab label=\"Additional Info\">\n                                                    <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                        \n    \n\n                                       \n                                                        <div class=\"py-16\" fxLayout=\"row\">\n                                                            <mat-form-field fxFlex>\n                                                                <input matInput\n                                                                    name=\"nextStep\"\n                                                                    formControlName=\"nextStep\"\n                                                                    placeholder=\"Next Step\">\n                                                            </mat-form-field>\n    \n                                                            <mat-form-field fxFlex>\n                                                                    <input matInput\n                                                                        name=\"assignedTo\"\n                                                                        formControlName=\"assignedTo\"\n                                                                        placeholder=\"Assigned To\">\n                                                            </mat-form-field>\n                                                        </div>\n\n                                                        <div class=\"py-16\" fxLayout=\"row\">\n                                                            <mat-form-field fxFlex>\n                                                                <input matInput\n                                                                    name=\"budget\"\n                                                                    formControlName=\"budget\"\n                                                                    placeholder=\"Budget\">\n                                                            </mat-form-field>\n    \n                                                            <mat-form-field fxFlex>\n                                                                    <input matInput\n                                                                        name=\"location\"\n                                                                        formControlName=\"location\"\n                                                                        placeholder=\"Location\">\n                                                            </mat-form-field>\n                                                        </div>\n\n                                                        <div class=\"py-16\" fxLayout=\"row\">\n                                                            <mat-form-field fxFlex>\n                                                                <input matInput\n                                                                    name=\"dateCreated\"\n                                                                    formControlName=\"dateCreated\"\n                                                                    placeholder=\"Date Created\" readonly>\n                                                            </mat-form-field>\n    \n                                                            <mat-form-field fxFlex>\n                                                                    <input matInput\n                                                                        name=\"dateModified\"\n                                                                        formControlName=\"dateModified\"\n                                                                        placeholder=\"Date Modified\" readonly>\n                                                            </mat-form-field>\n                                                        </div>\n   \n                                                    </div>\n                                                </mat-tab>\n                        \n                                            </mat-tab-group>\n                                        </form>\n                        \n                                    </div>\n                                    <!-- / CONTENT -->\n                        \n                            </div>\n                            <!-- / CONTENT CARD -->                    \n                        </div>\n                        <!-- / CENTER -->\n                \n                        <!-- SIDENAV -->\n                        <mat-sidenav *ngIf=\"action ==='edit'\" class=\"sidenav\" align=\"end\" opened=\"true\" mode=\"side\"\n                                        fuseMatSidenavHelper=\"simple-right-sidenav\" mat-is-locked-open=\"gt-md\">\n                \n                            <div class=\"sidenav-content p-24\">\n                                <opportunities-main-sidenav></opportunities-main-sidenav>\n                            </div>\n                \n                        </mat-sidenav>\n                        <!-- / SIDENAV -->\n                \n                    </mat-sidenav-container>\n                \n            </div>\n        </div>\n        <!-- / CENTER -->\n    </div>\n    \n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n        <button *ngIf=\"action !=='edit'\"\n                mat-raised-button\n                (click)=\"dialogRef.close(opportunityForm)\"\n                class=\"save-button mat-accent\"\n                [disabled]=\"opportunityForm.invalid\"\n                aria-label=\"SAVE\">\n            SAVE\n        </button>\n\n        <button *ngIf=\"action ==='edit'\"\n                mat-raised-button\n                (click)=\"dialogRef.close(['save',opportunityForm])\"\n                class=\"save-button mat-accent\"\n                [disabled]=\"opportunityForm.invalid\"\n                aria-label=\"SAVE\">\n            SAVE\n        </button>\n\n        <button *ngIf=\"action ==='edit'\"\n                mat-button\n                class=\"mat-icon-button\"\n                (click)=\"dialogRef.close(['delete',opportunityForm])\"\n                aria-label=\"Delete\"\n                matTooltip=\"Delete\">\n            <mat-icon>delete</mat-icon>\n        </button>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/apps/opportunities/opportunity-form/opportunity-form.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.opportunity-form-dialog {\n  width: 1280px !important;\n  height: 800px !important;\n  width: 400px; }\n@media screen and (max-width: 599px) {\n    .opportunity-form-dialog {\n      width: 100%; } }\n.opportunity-form-dialog .mat-dialog-container {\n    padding: 0px !important;\n    overflow: hidden; }\n.opportunity-form-dialog .mat-dialog-container .mat-toolbar {\n      min-height: initial; }\n.opportunity-form-dialog .mat-dialog-container .toolbar-bottom {\n      height: auto; }\n.opportunity-form-dialog .mat-dialog-container .mat-form-field {\n      padding-right: 8px;\n      padding-left: 8px; }\n.opportunity-form-dialog .dialog-content-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: 800px !important; }\n.opportunity-form-dialog #opportunity .header .product-image {\n    overflow: hidden;\n    width: 56px;\n    height: 56px;\n    border: 3px solid rgba(0, 0, 0, 0.12); }\n.opportunity-form-dialog #opportunity .header .product-image img {\n      height: 100%;\n      width: auto;\n      max-width: none; }\n.opportunity-form-dialog #opportunity .header .subtitle {\n    margin: 6px 0 0 0; }\n.opportunity-form-dialog #opportunity .center {\n    padding: 0px !important; }\n.opportunity-form-dialog #opportunity .center mat-sidenav-container .sidenav.mat-is-locked-open {\n      width: 320px;\n      min-width: 320px;\n      max-width: 320px; }\n.opportunity-form-dialog #opportunity .content .mat-tab-group,\n  .opportunity-form-dialog #opportunity .content .mat-tab-body-wrapper,\n  .opportunity-form-dialog #opportunity .content .tab-content {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    max-width: 100%; }\n.opportunity-form-dialog #opportunity .content .mat-tab-body-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n.opportunity-form-dialog #opportunity .content .mat-tab-label {\n    height: 64px; }\n.opportunity-form-dialog #opportunity .content .product-image {\n    overflow: hidden;\n    width: 128px;\n    height: 128px;\n    margin-right: 16px;\n    margin-bottom: 16px;\n    border: 3px solid rgba(0, 0, 0, 0.12); }\n.opportunity-form-dialog #opportunity .content .product-image img {\n      height: 100%;\n      width: auto;\n      max-width: none; }\n.opportunity-form-dialog #opportunity .content .py-16 {\n    height: 70px !important; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/opportunities/opportunity-form/opportunity-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunityFormDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__opportunity_model__ = __webpack_require__("./src/app/main/content/apps/opportunities/opportunity.model.ts");
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




var OpportunityFormDialogComponent = /** @class */ (function () {
    function OpportunityFormDialogComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = 'Edit Opportunity';
            this.opportunity = data.opportunity;
        }
        else {
            this.dialogTitle = 'New Opportunity';
            this.opportunity = new __WEBPACK_IMPORTED_MODULE_3__opportunity_model__["a" /* Opportunity */]({});
        }
        this.opportunityForm = this.createOpportunityForm();
    }
    OpportunityFormDialogComponent.prototype.createOpportunityForm = function () {
        return this.formBuilder.group({
            id: [this.opportunity.id],
            name: [this.opportunity.name],
            type: [this.opportunity.type],
            businessType: [this.opportunity.businessType],
            amount: [this.opportunity.amount],
            salesStage: [this.opportunity.salesStage],
            probability: [this.opportunity.probability],
            eventDate: [this.opportunity.eventDate],
            closeDate: [this.opportunity.closeDate],
            inHandsDate: [this.opportunity.inHandsDate],
            description: [this.opportunity.description],
            accountName: [this.opportunity.accountName],
            contactName: [this.opportunity.contactName],
            leadSource: [this.opportunity.leadSource],
            nextStep: [this.opportunity.nextStep],
            assignedTo: [this.opportunity.assignedTo],
            budget: [this.opportunity.budget],
            location: [this.opportunity.location],
            dateCreated: [this.opportunity.dateCreated],
            dateModified: [this.opportunity.dateModified],
            campaign: 'None'
        });
    };
    OpportunityFormDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'opportunity-form-dialog',
            template: __webpack_require__("./src/app/main/content/apps/opportunities/opportunity-form/opportunity-form.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/opportunities/opportunity-form/opportunity-form.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], OpportunityFormDialogComponent);
    return OpportunityFormDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/opportunities/opportunity-list/opportunity-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-table #table matSort\n           [dataSource]=\"dataSource\"\n           [@animateStagger]=\"{value:'50'}\"\n           >\n\n    <!-- Checkbox Column -->\n    <ng-container cdkColumnDef=\"checkbox\">\n        <mat-header-cell *cdkHeaderCellDef>\n            <mat-checkbox (change)=\"toggleAll($event)\"\n                        [checked]=\"selectedOpportunities.length > 0 && selectedOpportunities.length === opportunities.length\"\n                        [indeterminate]=\"selectedOpportunities.length > 0 && selectedOpportunities.length < opportunities.length\">\n            </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *cdkCellDef=\"let opportunity\">\n            <mat-checkbox [(ngModel)]=\"checkboxes[opportunity.id]\" (ngModelChange)=\"onSelectedChange(opportunity.id)\"\n                          (click)=\"$event.stopPropagation()\">\n            </mat-checkbox>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container cdkColumnDef=\"name\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header>Name</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let opportunity\">\n            <p class=\"text-truncate\">{{opportunity.name}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Account Name Column -->\n    <ng-container cdkColumnDef=\"accountName\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header>Account Name</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let opportunity\">\n            <p class=\"text-truncate\">{{opportunity.accountName}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Contact Name Column -->\n    <ng-container cdkColumnDef=\"contactName\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header>Contact Name</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let opportunity\">\n            <p class=\"text-truncate\">{{opportunity.contactName}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Lead Source Column -->\n    <ng-container cdkColumnDef=\"leadSource\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header>Lead Source</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let opportunity\">\n            <p class=\"text-truncate\">{{opportunity.leadSource}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Type Column -->\n    <ng-container cdkColumnDef=\"type\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header>Type</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let opportunity\">\n            <p class=\"text-truncate\">{{opportunity.type}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Sales Stage Column -->\n    <ng-container cdkColumnDef=\"salesStage\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header>Sales Stage</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let opportunity\">\n            <p class=\"text-truncate\">{{opportunity.salesStage}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Amount Column -->\n    <ng-container cdkColumnDef=\"amount\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header>Amount</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let opportunity\">\n            <p class=\"text-truncate\">{{opportunity.amount}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Close Column -->\n    <ng-container cdkColumnDef=\"closeDate\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header>Close</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let opportunity\">\n            <p class=\"text-truncate\">{{opportunity.closeDate}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- User Column -->\n    <ng-container cdkColumnDef=\"user\" >\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header>User</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let opportunity\">\n            <p class=\"text-truncate\">{{opportunity.user}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Date Created Column -->\n    <ng-container cdkColumnDef=\"dateCreated\" >\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header>Date Created</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let opportunity\">\n            <p class=\"text-truncate\">{{opportunity.dateCreated}}</p>\n        </mat-cell>\n    </ng-container>\n    \n    <!-- More Buttons Column -->\n    <ng-container cdkColumnDef=\"buttons\">\n        <mat-header-cell *cdkHeaderCellDef></mat-header-cell>\n        <mat-cell *cdkCellDef=\"let opportunity\">\n            <div fxFlex=\"row\" fxLayoutAlign=\"end center\">\n                <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\"\n                        (click)=\"$event.stopPropagation();\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n\n                <mat-menu #moreMenu=\"matMenu\">\n                    <button mat-menu-item aria-label=\"remove\" (click)=\"deleteOpportunity(opportunity)\">\n                        <mat-icon>delete</mat-icon>\n                        <span>Remove</span>\n                    </button>\n                </mat-menu>\n            </div>\n\n        </mat-cell>\n    </ng-container>\n\n    <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *cdkRowDef=\"let opportunity; columns: displayedColumns;\"\n             class=\"contact\"\n             (click)=\"editOpportunity(opportunity)\"\n             [ngClass]=\"{'mat-light-blue-50-bg':checkboxes[opportunity.id]}\"\n             matRipple\n             [@animate]=\"{value:'*',params:{y:'100%'}}\">\n    </mat-row>\n</mat-table>\n\n<mat-paginator #paginator\n                [length]=\"dataSource.total\"\n                [pageSize]=\"10\"\n                [pageSizeOptions]=\"[5, 10, 20]\"\n                [showFirstLastButtons]=\"true\">\n</mat-paginator>"

/***/ }),

/***/ "./src/app/main/content/apps/opportunities/opportunity-list/opportunity-list.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nopportunities-opportunity-list {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\nopportunities-opportunity-list .mat-table {\n    background: transparent;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\nopportunities-opportunity-list .mat-table .mat-column-checkbox {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 48px;\n              flex: 0 1 48px; }\nopportunities-opportunity-list .mat-table .mat-column-checkbox .mat-checkbox-ripple {\n        display: none !important; }\nopportunities-opportunity-list .mat-table .mat-column-avatar {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 64px;\n              flex: 0 1 64px; }\nopportunities-opportunity-list .mat-table .mat-column-buttons {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 80px;\n              flex: 0 1 80px; }\nopportunities-opportunity-list .mat-table .mat-row {\n      position: relative;\n      cursor: pointer;\n      padding: 8px 8px 8px 24px; }\nopportunities-opportunity-list .mat-table .mat-row .mat-cell {\n        min-width: 0; }\nopportunities-opportunity-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n          -webkit-box-flex: 0;\n              -ms-flex: 0 1 auto;\n                  flex: 0 1 auto;\n          padding: 0 24px 0 0; }\n@media screen and (min-width: 1280px) {\n            opportunities-opportunity-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n              display: none; } }\n#add-opportunity-button {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  padding: 0;\n  z-index: 99; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/opportunities/opportunity-list/opportunity-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunityListComponent; });
/* unused harmony export OpportunitiesDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__opportunity_form_opportunity_form_component__ = __webpack_require__("./src/app/main/content/apps/opportunities/opportunity-form/opportunity-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__opportunities_service__ = __webpack_require__("./src/app/main/content/apps/opportunities/opportunities.service.ts");
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








var OpportunityListComponent = /** @class */ (function () {
    function OpportunityListComponent(opportunitiesService, dialog, snackBar) {
        var _this = this;
        this.opportunitiesService = opportunitiesService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.displayedColumns = ['checkbox', 'name', 'accountName', 'contactName', 'leadSource', 'type', 'salesStage', 'amount', 'closeDate', 'user', 'dateCreated', 'buttons'];
        this.onOpportunitiesChangedSubscription =
            this.opportunitiesService.onOpportunitiesChanged.subscribe(function (opportunities) {
                _this.opportunities = opportunities;
                _this.checkboxes = {};
                opportunities.map(function (contact) {
                    _this.checkboxes[contact.id] = false;
                });
            });
        this.onSelectedOpportunitiesChangedSubscription =
            this.opportunitiesService.onSelectedOpportunitiesChanged.subscribe(function (selectedOpportunities) {
                for (var id in _this.checkboxes) {
                    if (!_this.checkboxes.hasOwnProperty(id)) {
                        continue;
                    }
                    _this.checkboxes[id] = selectedOpportunities.includes(id);
                }
                _this.selectedOpportunities = selectedOpportunities;
            });
    }
    OpportunityListComponent.prototype.ngOnInit = function () {
        this.dataSource = new OpportunitiesDataSource(this.opportunitiesService, this.paginator, this.sort);
    };
    OpportunityListComponent.prototype.ngOnDestroy = function () {
        this.onOpportunitiesChangedSubscription.unsubscribe();
        this.onSelectedOpportunitiesChangedSubscription.unsubscribe();
    };
    OpportunityListComponent.prototype.editOpportunity = function (opportunity) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__opportunity_form_opportunity_form_component__["a" /* OpportunityFormDialogComponent */], {
            panelClass: 'opportunity-form-dialog',
            data: {
                opportunity: opportunity,
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
                    _this.opportunitiesService.updateOpportunity(formData.getRawValue());
                    break;
                /**
                 * Delete
                 */
                case 'delete':
                    _this.deleteOpportunity(opportunity);
                    break;
            }
        });
    };
    /**
     * Delete Opportunity
     */
    OpportunityListComponent.prototype.deleteOpportunity = function (opportunity) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.opportunitiesService.deleteOpportunity(opportunity);
            }
            _this.confirmDialogRef = null;
        });
    };
    OpportunityListComponent.prototype.onSelectedChange = function (opportunityId) {
        this.opportunitiesService.toggleSelectedOpportunity(opportunityId);
    };
    OpportunityListComponent.prototype.toggleAll = function (ev) {
        if (ev) {
            this.opportunitiesService.toggleSelectAll();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], OpportunityListComponent.prototype, "dialogContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatPaginator */])
    ], OpportunityListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["P" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["P" /* MatSort */])
    ], OpportunityListComponent.prototype, "sort", void 0);
    OpportunityListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'opportunities-opportunity-list',
            template: __webpack_require__("./src/app/main/content/apps/opportunities/opportunity-list/opportunity-list.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/opportunities/opportunity-list/opportunity-list.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_4__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__opportunities_service__["a" /* OpportunitiesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["N" /* MatSnackBar */]])
    ], OpportunityListComponent);
    return OpportunityListComponent;
}());

var OpportunitiesDataSource = /** @class */ (function (_super) {
    __extends(OpportunitiesDataSource, _super);
    function OpportunitiesDataSource(opportunitiesService, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this.opportunitiesService = opportunitiesService;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this.total = 0;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    OpportunitiesDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.opportunitiesService.onOpportunitiesChanged,
            this._paginator.page,
            this._sort.sortChange
        ];
        this.sub1 = this.opportunitiesService.onOpportunitiesChanged
            .subscribe(function (opportunities) {
            setTimeout(function () {
                _this.total = opportunities.length;
            });
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */], displayDataChanges).map(function () {
            var opportunities = _this.opportunitiesService.opportunities;
            opportunities = _this.sortData(opportunities);
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            opportunities = opportunities.slice(startIndex, startIndex + _this._paginator.pageSize);
            return opportunities;
        });
    };
    OpportunitiesDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var valueA, valueB;
            switch (_this._sort.active) {
                case 'dateCreated':
                    valueA = new Date(a[_this._sort.active]);
                    valueB = new Date(b[_this._sort.active]);
                    break;
                default:
                    valueA = a[_this._sort.active];
                    valueB = b[_this._sort.active];
                    break;
            }
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction === 'asc' ? 1 : -1);
        });
    };
    OpportunitiesDataSource.prototype.disconnect = function () {
        this.sub1.unsubscribe();
    };
    return OpportunitiesDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/main/content/apps/opportunities/opportunity-sidebar/opportunity-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-content p-20\" fusePerfectScrollbar>\n    <div class=\"fuse-card auto-width mb-32\" [ngClass.gt-sm]=\"'mb-0 mr-32'\">\n\n        <div class=\"p-16 pb-0\" fxLayout=\"row wrap\" fxLayoutAlign=\"start end\">\n            <div class=\"pr-16\">\n                <div class=\"h3 secondary-text\">Opportunities</div>\n            </div>\n        </div>\n\n        <div class=\"h-80 w-100-p\">\n            <canvas baseChart\n                    [datasets]=\"opportunities\"\n                    [labels]=\"['opportunities']\"\n                    [colors]=\"colors\"\n                    [options]=\"options\"\n                    [chartType]=\"'horizontalBar'\">\n            </canvas>\n        </div>\n\n    </div>\n    <div class=\"fuse-card auto-width mb-32\" [ngClass.gt-sm]=\"'mb-0 mr-32'\">\n\n        <div class=\"p-16 pb-0\" fxLayout=\"row wrap\" fxLayoutAlign=\"start end\">\n            <div class=\"pr-16\">\n                <div class=\"h3 secondary-text\">Sales</div>\n            </div>\n        </div>\n\n        <div class=\"h-160 w-100-p\">\n            <canvas baseChart\n                    [datasets]=\"sales\"\n                    [labels]=\"['Month', 'YTD', 'Last Year']\"\n                    [colors]=\"colors\"\n                    [options]=\"options\"\n                    [chartType]=\"'horizontalBar'\">\n            </canvas>\n        </div>\n\n    </div>\n\n    <div class=\"fuse-card auto-width mb-32\">\n        <div class=\"p-16 pb-0\" fxLayout=\"row wrap\" fxLayoutAlign=\"start end\">\n            <div class=\"pr-16\">\n                <div class=\"h3 secondary-text\">Sales</div>\n            </div>\n        </div>\n\n        <div class=\"h-160\">\n            <ngx-charts-pie-chart\n                *fuseIfOnDom\n                [scheme]=\"scheme\"\n                [results]=\"credits\"\n                [doughnut]=\"true\">\n            </ngx-charts-pie-chart>\n        </div>\n    \n        <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n            <div class=\"px-16\" fxLayout=\"column\" fxLayoutAlign=\"start center\"\n                 *ngFor=\"let credit of credits\">\n                <div class=\"h4 secondary-text\">{{credit.name}}</div>\n                <div class=\"h2 font-weight-300 py-8\">{{credit.value}}%</div>\n            </div>\n        </div>\n    </div>\n\n    <div>\n        <div class=\"fuse-card mb-16 py-8 text-center\" fxLayout=\"row\">\n            <div fxFlex=\"33\">\n                <div class=\"figure\">4</div>\n                <div class=\"label secondary-text\">Leads</div>\n            </div>\n            <div fxFlex>\n                <div class=\"figure\">9</div>\n                <div class=\"label secondary-text\">Quotes</div>\n            </div>\n            <div class=\"right-border-none\" fxFlex>\n                <div class=\"figure\">2</div>\n                <div class=\"label secondary-text\">Orders</div>\n            </div>\n        </div>\n        <div class=\"fuse-card mb-16 py-8 text-center\" fxLayout=\"row\">\n            <div fxFlex=\"33\">\n                <div class=\"figure\">27</div>\n                <div class=\"label secondary-text\">Tasks</div>\n            </div>\n            <div fxFlex>\n                <div class=\"figure\">14</div>\n                <div class=\"label secondary-text\">Calls</div>\n            </div>\n            <div class=\"right-border-none\" fxFlex>\n                <div class=\"figure\">6</div>\n                <div class=\"label secondary-text\">Ranks</div>\n            </div>\n        </div>\n        <div class=\"fuse-card mb-16 py-8 text-center\" fxLayout=\"row\">\n            <div fxFlex=\"33\">\n                <div class=\"figure\">10</div>\n                <div class=\"label secondary-text\">Subsidiaries</div>\n            </div>\n            <div fxFlex>\n                <div class=\"figure\">2</div>\n                <div class=\"label secondary-text\">Marketing</div>\n            </div>\n            <div class=\"right-border-none\" fxFlex>\n                <div class=\"figure\">5</div>\n                <div class=\"label secondary-text\">Locations</div>\n            </div>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/apps/opportunities/opportunity-sidebar/opportunity-sidebar.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  height: 100%; }\n:host .sidenav-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 0; }\n@media screen and (min-width: 960px) {\n      :host .sidenav-content {\n        padding: 24px 4px 24px 24px; } }\n:host .sidenav-content .fuse-card {\n      min-width: 100%;\n      max-width: 100%; }\n:host .sidenav-content .fuse-card .figure {\n        font-size: 36px;\n        color: #058ec0;\n        cursor: pointer; }\n:host .sidenav-content .fuse-card .label {\n        margin-top: -4px;\n        margin-bottom: 4px; }\n:host .sidenav-content .fuse-card > div {\n        border-right: 1px solid #C5C6CB; }\n:host .sidenav-content .fuse-card .right-border-none {\n        border-right: none; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/opportunities/opportunity-sidebar/opportunity-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunitiesMainSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__("./node_modules/chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartjs_plugin_datalabels__ = __webpack_require__("./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartjs_plugin_datalabels___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chartjs_plugin_datalabels__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OpportunitiesMainSidenavComponent = /** @class */ (function () {
    function OpportunitiesMainSidenavComponent() {
        this.options = {
            spanGaps: false,
            legend: {
                display: false
            },
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 24,
                    left: 16,
                    right: 16,
                    bottom: 16
                }
            },
            scales: {
                xAxes: [
                    {
                        display: false,
                        ticks: {
                            min: 0,
                            max: 100
                        }
                    }
                ],
                yAxes: [
                    {
                        display: false,
                    }
                ]
            },
            tooltips: {
                enabled: true
            },
            plugins: {
                datalabels: {
                    color: '#333',
                    display: true,
                    font: {
                        weight: 'bold'
                    },
                    formatter: function (v) { return v + 'k'; },
                    align: 'right',
                    anchor: 'end',
                    offset: 4
                }
            }
        };
        this.colors = [{
                borderColor: '#41a6f5',
                backgroundColor: '#41a6f5'
            }];
        this.opportunities = [
            {
                label: 'Opportunites',
                data: [38]
            }
        ];
        this.sales = [
            {
                label: 'Sales',
                data: [24, 56, 75]
            }
        ];
        this.scheme = {
            domain: ['#d50000', '#00c853']
        };
        this.credits = [{
                "name": "Used",
                "value": 24
            },
            {
                "name": "Available",
                "value": 76
            }];
    }
    OpportunitiesMainSidenavComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"].plugins.register(__WEBPACK_IMPORTED_MODULE_2_chartjs_plugin_datalabels__);
    };
    OpportunitiesMainSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'opportunities-main-sidenav',
            template: __webpack_require__("./src/app/main/content/apps/opportunities/opportunity-sidebar/opportunity-sidebar.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/opportunities/opportunity-sidebar/opportunity-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OpportunitiesMainSidenavComponent);
    return OpportunitiesMainSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/opportunities/opportunity.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Opportunity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");

var Opportunity = /** @class */ (function () {
    function Opportunity(opportunity) {
        {
            this.id = opportunity.id || __WEBPACK_IMPORTED_MODULE_0__fuse_utils__["a" /* FuseUtils */].generateGUID();
            this.name = opportunity.name || '';
            this.type = opportunity.type || '';
            this.businessType = opportunity.businessType || '';
            this.amount = opportunity.amount || '';
            this.salesStage = opportunity.salesStage || '';
            this.probability = opportunity.probability || '';
            this.eventDate = opportunity.eventDate || '';
            this.closeDate = opportunity.closeDate || '';
            this.inHandsDate = opportunity.inHandsDate || '';
            this.description = opportunity.description || '';
            this.accountName = opportunity.accountName || '';
            this.contactName = opportunity.contactName || '';
            this.leadSource = opportunity.leadSource || '';
            this.nextStep = opportunity.nextStep || '';
            this.assignedTo = opportunity.assignedTo || '';
            this.location = opportunity.location || '';
            this.dateCreated = opportunity.dateCreated || '';
            this.dateCreated = opportunity.dateCreated || '';
        }
    }
    return Opportunity;
}());



/***/ }),

/***/ "./src/app/main/content/apps/opportunities/selected-bar/selected-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-24\">\n\n    <div class=\"close-button-wrapper\" fxFlex=\"0 1 auto\" fxFlex.gt-sm=\"220px\" (click)=\"deselectAll()\">\n        <button class=\"p-8\" mat-button fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"mr-8\">arrow_back</mat-icon>\n            <span class=\"text-uppercase\">Back</span>\n        </button>\n    </div>\n\n\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutAlign.gt-sm=\"space-between center\">\n\n        <div>\n            <span class=\"selected-contacts-count\">\n                <span>{{selectedOpportunities.length}}</span>\n                <span>selected</span>\n            </span>\n\n            <button mat-icon-button [matMenuTriggerFor]=\"selectMenu\">\n                <mat-icon>arrow_drop_down</mat-icon>\n            </button>\n            <mat-menu #selectMenu=\"matMenu\">\n                <button mat-menu-item (click)=\"selectAll()\">Select all</button>\n                <button mat-menu-item (click)=\"deselectAll()\">Deselect all</button>\n            </mat-menu>\n\n        </div>\n\n        <div class=\"multi-select-actions\">\n            <button mat-icon-button (click)=\"deleteSelectedOpportunities()\" aria-label=\"delete selected\">\n                <mat-icon>delete</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"deleteSelectedOpportunities()\" aria-label=\"delete selected\">\n                <mat-icon>description</mat-icon>\n            </button>\n            <button mat-button class=\"text-capitalize\" [matMenuTriggerFor]=\"selectActionMenu\">\n                More Actions\n                <mat-icon>arrow_drop_down</mat-icon>\n            </button>\n            <mat-menu #selectActionMenu=\"matMenu\">\n                <button mat-menu-item class=\"text-capitalize\"\n                        (click)=\"emailSelected()\">Email\n                </button>\n                <button mat-menu-item class=\"text-capitalize\"\n                        (click)=\"massUpdateSelected()\">Mass Update\n                </button>\n                <button mat-menu-item class=\"text-capitalize\"\n                        (click)=\"mergeSelected()\">Merge\n                </button>\n                <button mat-menu-item class=\"text-capitalize\"\n                        (click)=\"addToTargetListSelected()\">Add To Target List\n                </button>\n                <button mat-menu-item class=\"text-capitalize\"\n                        (click)=\"generateLetterSelected()\">Generate Letter\n                </button>\n            </mat-menu>\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/apps/opportunities/selected-bar/selected-bar.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 120px;\n  z-index: 99; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/opportunities/selected-bar/selected-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunitiesSelectedBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__opportunities_service__ = __webpack_require__("./src/app/main/content/apps/opportunities/opportunities.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OpportunitiesSelectedBarComponent = /** @class */ (function () {
    function OpportunitiesSelectedBarComponent(opportunitiesService, dialog) {
        var _this = this;
        this.opportunitiesService = opportunitiesService;
        this.dialog = dialog;
        this.opportunitiesService.onSelectedOpportunitiesChanged
            .subscribe(function (selectedOpportunities) {
            _this.selectedOpportunities = selectedOpportunities;
            setTimeout(function () {
                _this.hasSelectedOpportunities = selectedOpportunities.length > 0;
                _this.isIndeterminate = (selectedOpportunities.length !== _this.opportunitiesService.opportunities.length && _this.selectedOpportunities.length > 0);
            }, 0);
        });
    }
    OpportunitiesSelectedBarComponent.prototype.selectAll = function () {
        this.opportunitiesService.selectOpportunities();
    };
    OpportunitiesSelectedBarComponent.prototype.deselectAll = function () {
        this.opportunitiesService.deselectOpportunities();
    };
    OpportunitiesSelectedBarComponent.prototype.deleteSelectedOpportunities = function () {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete all selected contacts?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.opportunitiesService.deleteSelectedOpportunities();
            }
            _this.confirmDialogRef = null;
        });
    };
    OpportunitiesSelectedBarComponent.prototype.emailSelected = function () {
    };
    OpportunitiesSelectedBarComponent.prototype.massUpdateSelected = function () {
    };
    OpportunitiesSelectedBarComponent.prototype.mergeSelected = function () {
    };
    OpportunitiesSelectedBarComponent.prototype.addToTargetListSelected = function () {
    };
    OpportunitiesSelectedBarComponent.prototype.generateLetterSelected = function () {
    };
    OpportunitiesSelectedBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-selected-bar',
            template: __webpack_require__("./src/app/main/content/apps/opportunities/selected-bar/selected-bar.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/opportunities/selected-bar/selected-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__opportunities_service__["a" /* OpportunitiesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */]])
    ], OpportunitiesSelectedBarComponent);
    return OpportunitiesSelectedBarComponent;
}());



/***/ })

});
//# sourceMappingURL=opportunities.module.chunk.js.map