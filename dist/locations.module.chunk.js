webpackJsonp(["locations.module"],{

/***/ "./src/app/features/locations/location-form/location-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\" fxFlex=\"none\">\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\n\n            <button mat-button class=\"mat-icon-button\"\n                    (click)=\"dialogRef.close()\"\n                    aria-label=\"Close dialog\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </mat-toolbar-row>\n    </mat-toolbar>\n\n    <div fxFlex fxLayout=\"column\" class=\"details-form\">\n\n        <div mat-dialog-content class=\"m-0\">\n\n            <form name=\"form\" [formGroup]=\"locationForm\"\n                  class=\"p-16 pb-0\" fxLayout=\"column\">\n\n                <mat-tab-group >\n                    <mat-tab label=\"Company\" fusePerfectScrollbar>\n                        <div class=\"p-16 pb-0 two-columns\">\n                            <mat-form-field>\n                                <input matInput placeholder=\"Company Name\" formControlName=\"companyName\" required>\n                                <app-error\n                                    [formGroup]=\"locationForm\"\n                                    field=\"companyName\"\n                                    label=\"Company Name\"\n                                ></app-error>\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <input matInput placeholder=\"Contact\" formControlName=\"contact\">\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <input matInput placeholder=\"Delivery Contact\" formControlName=\"deliveryContact\">\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <input matInput placeholder=\"Assigned To\" formControlName=\"salesRep\">\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <input matInput placeholder=\"Location Name\" formControlName=\"locationName\">\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <input matInput placeholder=\"Phone\" formControlName=\"phone\">\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <input matInput placeholder=\"Type\" formControlName=\"type\">\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <input matInput placeholder=\"Fax\" formControlName=\"fax\">\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <input matInput placeholder=\"Fax\" formControlName=\"fax\">\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"px-16 two-columns\">\n                            <mat-form-field class=\"w-100-p\">\n                                <textarea matInput placeholder=\"General Info\"\n                                        formControlName=\"description\" rows=\"4\">\n                                </textarea>\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"px-16 two-columns\">\n                            <mat-form-field>\n                                <input matInput placeholder=\"Accounts\" formControlName=\"accounts\">\n                            </mat-form-field>\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Shipping\" fusePerfectScrollbar>\n\n                        <div class=\"two-columns px-16\">\n                            <mat-form-field>\n                                <input matInput placeholder=\"Shipping Address 1\" formControlName=\"shipAddress1\">\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <input matInput placeholder=\"Shipping Address 2\" formControlName=\"shipAddress2\">\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <input matInput placeholder=\"Shipping City\" formControlName=\"shipCity\">\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <input matInput placeholder=\"Shipping State\" formControlName=\"shipState\">\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <input matInput placeholder=\"Shipping Postal Code\" formControlName=\"shipPostalcode\">\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <input matInput placeholder=\"Shipping Country\" formControlName=\"shipCountry\">\n                            </mat-form-field>\n                        </div>\n                    </mat-tab>\n\n                    <mat-tab label=\"Billing\" fusePerfectScrollbar>\n\n                        <div class=\"two-columns px-16\">\n                            <mat-form-field>\n                                <input matInput placeholder=\"Billing Address 1\" formControlName=\"billAddress1\">\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <input matInput placeholder=\"Billing Address 2\" formControlName=\"billAddress2\">\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <input matInput placeholder=\"Billing City\" formControlName=\"billingCity\">\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <input matInput placeholder=\"Billing State\" formControlName=\"billState\">\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <input matInput placeholder=\"Billing Postal Code\" formControlName=\"billPostalcode\">\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <input matInput placeholder=\"Billing Country\" formControlName=\"billCountry\">\n                            </mat-form-field>\n                        </div>\n                    </mat-tab>\n                </mat-tab-group>\n            </form>\n        </div>\n\n        <div mat-dialog-actions class=\"m-0 p-16\"\n            fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n            <button mat-raised-button\n                    (click)=\"save(locationForm)\"\n                    class=\"save-button mat-accent\"\n                    [disabled]=\"locationForm.invalid\"\n                    aria-label=\"Save\"\n                    matTooltip=\"Save\">\n                SAVE\n            </button>\n\n            <button *ngIf=\"action ==='edit'\"\n                    mat-button\n                    class=\"mat-icon-button\"\n                    (click)=\"delete(locationForm)\"\n                    aria-label=\"Delete\"\n                    matTooltip=\"Delete\">\n                <mat-icon>delete</mat-icon>\n            </button>\n\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/features/locations/location-form/location-form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/locations/location-form/location-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseLocationFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__locations_service__ = __webpack_require__("./src/app/features/locations/locations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__location_model__ = __webpack_require__("./src/app/features/locations/location.model.ts");
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var FuseLocationFormComponent = /** @class */ (function () {
    function FuseLocationFormComponent(formBuilder, locationsService, data, dialogRef) {
        this.formBuilder = formBuilder;
        this.locationsService = locationsService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = 'Edit Location';
            this.location = data.location;
        }
        else {
            this.dialogTitle = 'New Location';
            this.location = new __WEBPACK_IMPORTED_MODULE_4__location_model__["a" /* Location */]({});
        }
    }
    FuseLocationFormComponent.prototype.ngOnInit = function () {
        this.locationForm = this.formBuilder.group({
            companyName: [this.location.companyName],
            contact: [this.location.contact],
            deliveryContact: [this.location.deliveryContact],
            salesRep: [this.location.salesRep],
            locationName: [this.location.locationName],
            phone: [this.location.phone],
            type: [this.location.type],
            fax: [this.location.fax],
            shipAddress1: [this.location.shipAddress1],
            shipAddress2: [this.location.shipAddress2],
            shipCity: [this.location.shipCity],
            shipState: [this.location.shipState],
            shipPostalcode: [this.location.shipPostalcode],
            shipCountry: [this.location.shipCountry],
            billAddress1: [this.location.billAddress1],
            billAddress2: [this.location.billAddress2],
            billingCity: [this.location.billCountry],
            billState: [this.location.billState],
            billPostalcode: [this.location.billPostalcode],
            billCountry: [this.location.billCountry],
            description: [this.location.description],
            accounts: [this.location.accounts],
        });
    };
    FuseLocationFormComponent.prototype.save = function (form) {
        this.dialogRef.close([
            'save',
            __assign({}, this.location, form.getRawValue())
        ]);
    };
    FuseLocationFormComponent.prototype.delete = function () {
        this.dialogRef.close(['delete']);
    };
    FuseLocationFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-location-form',
            template: __webpack_require__("./src/app/features/locations/location-form/location-form.component.html"),
            styles: [__webpack_require__("./src/app/features/locations/location-form/location-form.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__locations_service__["a" /* LocationsService */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatDialogRef */]])
    ], FuseLocationFormComponent);
    return FuseLocationFormComponent;
}());



/***/ }),

/***/ "./src/app/features/locations/location.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");

var Location = /** @class */ (function () {
    function Location(location) {
        {
            this.id = location.id || __WEBPACK_IMPORTED_MODULE_0__fuse_utils__["a" /* FuseUtils */].generateGUID();
            this.companyName = location.companyName || '';
            this.contact = location.contact || '';
            this.deliveryContact = location.deliveryContact || '';
            this.salesRep = location.salesRep || '';
            this.locationName = location.locationName || '';
            this.phone = location.phone || '';
            this.type = location.type || '';
            this.fax = location.fax || '';
            this.shipAddress1 = location.shipAddress1 || '';
            this.shipAddress2 = location.shipAddress2 || '';
            this.shipCity = location.shipCity || '';
            this.shipState = location.shipState || '';
            this.shipPostalcode = location.shipPostalcode || '';
            this.shipCountry = location.shipCountry || '';
            this.billAddress1 = location.billAddress1 || '';
            this.billAddress2 = location.billAddress2 || '';
            this.billCity = location.billCity || '';
            this.billState = location.billState || '';
            this.billPostalcode = location.billPostalcode || '';
            this.billCountry = location.billCountry || '';
            this.description = location.description || '';
            this.accounts = location.accounts || '';
        }
    }
    return Location;
}());



/***/ }),

/***/ "./src/app/features/locations/locations-list/locations-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-table fxFlex #table matSort\n        [dataSource]=\"dataSource\"\n        [@animateStagger]=\"{value:'50'}\">\n    <!-- Checkbox Column -->\n    \n    <ng-container cdkColumnDef=\"checkbox\">\n        <mat-header-cell *cdkHeaderCellDef>\n            <mat-checkbox (change)=\"toggleAll($event)\"\n                        [checked]=\"selectedCount > 0 && selectedCount === paginator.length\"\n                        [indeterminate]=\"selectedCount > 0 && selectedCount < paginator .length\">\n            </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *cdkCellDef=\"let location\">\n            <mat-checkbox [(ngModel)]=\"checkboxes[location.id]\"\n                          (ngModelChange)=\"onSelectedChange(location.id)\"\n                          (click)=\"$event.stopPropagation()\">\n            </mat-checkbox>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"companyName\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Company Name</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let location\">\n            <p class=\"company text-truncate\">\n                {{ location.companyName }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"deliveryContact\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Delivery Contact</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let location\">\n            <p class=\"company text-truncate\">\n                {{ location.deliveryContact }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"type\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Type</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let location\">\n            <p class=\"company text-truncate\">\n                {{ location.type }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"shipCity\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Shipping City</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let location\">\n            <p class=\"company text-truncate\">\n                {{ location.shipCity }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"shipState\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Shipping State</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let location\">\n            <p class=\"company text-truncate\">\n                {{ location.shipState }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"phone\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Phone</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let location\">\n            <p class=\"company text-truncate\">\n                {{ location.phone }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"buttons\">\n        <mat-header-cell *cdkHeaderCellDef fxFlex=\"none\" class=\"w-40\"></mat-header-cell>\n        <mat-cell *cdkCellDef=\"let location\" fxFlex=\"none\" class=\"w-40\">\n            <div fxFlex=\"row\" fxLayoutAlign=\"end center\">\n                <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\"\n                        (click)=\"$event.stopPropagation();\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n\n                <mat-menu #moreMenu=\"matMenu\">\n                    <button mat-menu-item aria-label=\"clone\">\n                        <mat-icon>content_copy</mat-icon>\n                        <span>Clone</span>\n                    </button>\n                    <button mat-menu-item aria-label=\"remove\" (click)=\"deleteLocation(location)\">\n                        <mat-icon>delete</mat-icon>\n                        <span>Remove</span>\n                    </button>\n                </mat-menu>\n            </div>\n\n        </mat-cell>\n    </ng-container>\n\n    <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *cdkRowDef=\"let location; columns: displayedColumns;\"\n            class=\"location\"\n            (click)=\"editLocation(location)\"\n            [ngClass]=\"{'mat-light-blue-50-bg':checkboxes[location.id]}\"\n            matRipple\n            [@animate]=\"{value:'*',params:{y:'100%'}}\">\n    </mat-row>\n</mat-table>\n\n<mat-paginator #paginator fxFlex=\"none\"\n            [length]=\"dataSource.total\"\n            [pageSize]=\"10\"\n            [pageSizeOptions]=\"[5, 10, 20]\"\n            [showFirstLastButtons]=\"true\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/features/locations/locations-list/locations-list.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nfuse-locations-list {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative; }\nfuse-locations-list .mat-table {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    padding-top: 64px;\n    position: static;\n    overflow-y: auto; }\nfuse-locations-list .mat-table .mat-header-row {\n      background: white;\n      width: 100%;\n      padding-right: 8px;\n      position: absolute;\n      top: 0;\n      z-index: 1; }\nfuse-locations-list .mat-table .mat-column-checkbox {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 48px;\n              flex: 0 1 48px; }\nfuse-locations-list .mat-table .mat-column-checkbox .mat-checkbox-ripple {\n        display: none !important; }\nfuse-locations-list .mat-table .mat-column-logo {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 40px;\n              flex: 0 1 40px; }\nfuse-locations-list .mat-table .mat-column-buttons {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 80px;\n              flex: 0 1 80px; }\nfuse-locations-list .mat-table .mat-row {\n      position: relative;\n      cursor: pointer;\n      padding: 8px 8px 8px 24px;\n      z-index: 0; }\nfuse-locations-list .mat-table .mat-row .mat-cell {\n        min-width: 0; }\nfuse-locations-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n          -webkit-box-flex: 0;\n              -ms-flex: 0 1 auto;\n                  flex: 0 1 auto;\n          padding: 0 24px 0 0; }\n@media screen and (min-width: 1280px) {\n            fuse-locations-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n              display: none; } }\nfuse-locations-list .mat-paginator {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none; }\n"

/***/ }),

/***/ "./src/app/features/locations/locations-list/locations-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseLocationsListComponent; });
/* unused harmony export LocationDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__location_form_location_form_component__ = __webpack_require__("./src/app/features/locations/location-form/location-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__locations_service__ = __webpack_require__("./src/app/features/locations/locations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/merge.js");
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










var FuseLocationsListComponent = /** @class */ (function () {
    function FuseLocationsListComponent(locationsService, router, dialog) {
        var _this = this;
        this.locationsService = locationsService;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['checkbox', 'companyName', 'deliveryContact', 'type', 'shipCity', 'shipState', 'phone', 'buttons'];
        this.selectedCount = 0;
        this.onStoresChangedSubscription =
            this.locationsService.onStoresChanged.subscribe(function (locations) {
                _this.checkboxes = {};
                locations.map(function (ws) {
                    _this.checkboxes[ws.id] = false;
                });
            });
        this.onSelectionChangedSubscription =
            this.locationsService.onSelectionChanged.subscribe(function (selection) {
                for (var id in _this.checkboxes) {
                    if (!_this.checkboxes.hasOwnProperty(id)) {
                        continue;
                    }
                    _this.checkboxes[id] = selection.includes(id);
                }
                _this.selectedCount = selection.length;
            });
    }
    FuseLocationsListComponent.prototype.ngOnInit = function () {
        this.dataSource = new LocationDataSource(this.locationsService, this.paginator, this.sort);
    };
    FuseLocationsListComponent.prototype.ngOnDestroy = function () {
        this.onStoresChangedSubscription.unsubscribe();
        this.onSelectionChangedSubscription.unsubscribe();
    };
    FuseLocationsListComponent.prototype.deleteLocation = function (ws) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.locationsService.deleteLocation(ws);
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseLocationsListComponent.prototype.onSelectedChange = function (wsId) {
        this.locationsService.toggleSelected(wsId);
    };
    FuseLocationsListComponent.prototype.editLocation = function (location) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__location_form_location_form_component__["a" /* FuseLocationFormComponent */], {
            panelClass: 'antera-details-dialog',
            data: {
                action: 'edit',
                location: location
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            var actionType = response[0];
            switch (actionType) {
                case 'save':
                    _this.locationsService.updateLocation(response[1]);
                    break;
                case 'delete':
                    _this.deleteLocation(location);
                    break;
            }
        });
    };
    FuseLocationsListComponent.prototype.toggleAll = function (ev) {
        if (ev) {
            this.locationsService.toggleSelectAll();
        }
    };
    FuseLocationsListComponent.prototype.toggleEnable = function (ws, ev) {
        ev.stopPropagation();
        this.locationsService.updateLocation(__assign({}, ws, { enabled: !ws.enabled }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatPaginator */])
    ], FuseLocationsListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["P" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["P" /* MatSort */])
    ], FuseLocationsListComponent.prototype, "sort", void 0);
    FuseLocationsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-locations-list',
            template: __webpack_require__("./src/app/features/locations/locations-list/locations-list.component.html"),
            styles: [__webpack_require__("./src/app/features/locations/locations-list/locations-list.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_5__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__locations_service__["a" /* LocationsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialog */]])
    ], FuseLocationsListComponent);
    return FuseLocationsListComponent;
}());

var LocationDataSource = /** @class */ (function (_super) {
    __extends(LocationDataSource, _super);
    function LocationDataSource(locationsService, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this.locationsService = locationsService;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this.total = 0;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    LocationDataSource.prototype.connect = function () {
        var _this = this;
        this.subscription = this.locationsService.onStoresChanged
            .subscribe(function (locations) {
            setTimeout(function () {
                _this.total = locations.length;
            });
        });
        var displayDataChanges = [
            this.locationsService.onStoresChanged,
            this._paginator.page,
            this._sort.sortChange
        ];
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */], displayDataChanges).map(function () {
            var locations = _this.locationsService.locations;
            locations = _this.sortData(locations);
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            locations = locations.slice(startIndex, startIndex + _this._paginator.pageSize);
            return locations;
        });
    };
    LocationDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var valueA = a[_this._sort.active];
            var valueB = b[_this._sort.active];
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction === 'asc' ? 1 : -1);
        });
    };
    LocationDataSource.prototype.disconnect = function () {
        this.subscription.unsubscribe();
    };
    return LocationDataSource;
}(__WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/features/locations/locations.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseLocationsModule", function() { return FuseLocationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_components__ = __webpack_require__("./src/@fuse/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__locations_service__ = __webpack_require__("./src/app/features/locations/locations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__locations_locations_component__ = __webpack_require__("./src/app/features/locations/locations/locations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__locations_list_locations_list_component__ = __webpack_require__("./src/app/features/locations/locations-list/locations-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__location_form_location_form_component__ = __webpack_require__("./src/app/features/locations/location-form/location-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_8__locations_locations_component__["a" /* FuseLocationsComponent */],
        resolve: {
            location: __WEBPACK_IMPORTED_MODULE_7__locations_service__["a" /* LocationsService */]
        }
    }
];
var FuseLocationsModule = /** @class */ (function () {
    function FuseLocationsModule() {
    }
    FuseLocationsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__locations_locations_component__["a" /* FuseLocationsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__locations_list_locations_list_component__["a" /* FuseLocationsListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__location_form_location_form_component__["a" /* FuseLocationFormComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["H" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["K" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["L" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["Q" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["U" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["T" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["V" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__fuse_components__["a" /* FuseConfirmDialogModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__locations_service__["a" /* LocationsService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__location_form_location_form_component__["a" /* FuseLocationFormComponent */]
            ]
        })
    ], FuseLocationsModule);
    return FuseLocationsModule;
}());



/***/ }),

/***/ "./src/app/features/locations/locations.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");
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





var searchFields = [
    'clientName', 'hostName', 'points', 'distributor'
];
var LocationsService = /** @class */ (function () {
    // filterBy: string;
    function LocationsService(http) {
        var _this = this;
        this.http = http;
        // onUserDataChanged: BehaviorSubject<any> = new BehaviorSubject([]);
        this.onSearchTextChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.onStoresChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.onSelectionChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this._searchText = '';
        this._selection = [];
        this.onSearchTextChanged.subscribe(function (val) {
            _this._searchText = val;
            _this.getLocations().then(console.log);
        });
    }
    LocationsService.prototype.resolve = function (route, state) {
        return this.getLocations();
    };
    LocationsService.prototype.getLocations = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/locations')
                .subscribe(function (response) {
                _this.locations = response;
                if (_this._searchText && _this._searchText !== '') {
                    _this.locations = __WEBPACK_IMPORTED_MODULE_4__fuse_utils__["a" /* FuseUtils */].filterFieldsByString(_this.locations, _this._searchText, searchFields);
                }
                _this.onStoresChanged.next(_this.locations);
                resolve(_this.locations);
            }, reject);
        });
    };
    /**
     * Toggle selected location by id
     * @param id
     */
    LocationsService.prototype.toggleSelected = function (id) {
        if (this._selection.length > 0) {
            var index = this._selection.indexOf(id);
            if (index !== -1) {
                this._selection.splice(index, 1);
                this.onSelectionChanged.next(this._selection);
                return;
            }
        }
        this._selection.push(id);
        this.onSelectionChanged.next(this._selection);
    };
    LocationsService.prototype.toggleSelectAll = function () {
        if (this._selection.length === this.locations.length) {
            this.deselectAll();
        }
        else {
            this.selectAll();
        }
    };
    LocationsService.prototype.selectAll = function () {
        this._selection = this.locations.map(function (ws) { return ws.id; });
        this.onSelectionChanged.next(this._selection);
    };
    LocationsService.prototype.deselectAll = function () {
        this._selection = [];
        this.onSelectionChanged.next(this._selection);
    };
    LocationsService.prototype.updateLocation = function (ws) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/locations/' + ws.id, __assign({}, ws))
                .subscribe(function (response) {
                _this.getLocations().then(resolve, reject);
            });
        });
    };
    LocationsService.prototype.deleteLocation = function (ws) {
        var accountIndex = this.locations.indexOf(ws);
        this.locations.splice(accountIndex, 1);
        this.onStoresChanged.next(this.locations);
    };
    LocationsService.prototype.deleteSelectedLocations = function () {
        var _this = this;
        this.locations = this.locations.filter(function (ws) { return _this._selection.indexOf(ws.id) < 0; });
        this.deselectAll();
        this.onStoresChanged.next(this.locations);
    };
    LocationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], LocationsService);
    return LocationsService;
}());



/***/ }),

/***/ "./src/app/features/locations/locations/locations.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"location\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- HEADER -->\n        <div class=\"header white-fg\"\n             fxLayout=\"column\" fxLayoutAlign=\"center center\"\n             fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n            <!-- APP TITLE -->\n            <div class=\"logo my-12 m-sm-0\" fxFlex=\"1 0 auto\" \n                 fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">location_city</mat-icon>\n                <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Locations</span>\n            </div>\n            <!-- / APP TITLE -->\n\n            <!-- SEARCH -->\n            <div class=\"search-input-wrapper mx-12 m-md-0\"\n                 fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <label for=\"search\" class=\"mr-8\">\n                    <mat-icon class=\"secondary-text\">search</mat-icon>\n                </label>\n                <mat-form-field floatPlaceholder=\"never\" fxFlex=\"1 0 auto\">\n                    <input matInput [formControl]=\"searchInput\" id=\"search\" placeholder=\"Search for locations\">\n                </mat-form-field>\n            </div>\n            <!-- / SEARCH -->\n\n        </div>\n        <!-- / HEADER -->\n\n        <!-- CONTENT  -->\n        <div class=\"content-card mat-white-bg\">\n\n            <div class=\"toolbar px-24 py-8\">\n                <div class=\"mail-selection\" fxFlex=\"row\">\n                    <div fxFlex=\"row\" fxLayoutAlign=\"start center\">\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\"\n                                (click)=\"newLocation()\">\n                            Add\n                        </button>\n\n                        <button mat-raised-button color=\"warn\"\n                                class=\"text-capitalize mr-8\"\n                                (click)=\"deleteSelectedLocations()\">\n                            Delete\n                        </button>\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\">\n                            Clone\n                        </button>\n                    </div>\n\n                    <div class=\"toolbar-separator\"></div>\n\n                    <button mat-button class=\"text-capitalize\" [matMenuTriggerFor]=\"selectMenu\">\n                        More Actions\n                        <mat-icon>arrow_drop_down</mat-icon>\n                    </button>\n                    <mat-menu #selectMenu=\"matMenu\">\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"emailSelected()\">Email\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"massUpdateSelected()\">Mass Update\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"mergeSelected()\">Merge\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"addToTargetListSelected()\">Add To Target List\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"generateLetterSelected()\">Generate Letter\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"addToTargetListSelected()\">Change Log\n                        </button>\n                    </mat-menu>\n\n                </div>\n            </div>\n\n            <fuse-locations-list></fuse-locations-list>\n\n        </div>\n        <!-- / CONTENT CARD -->\n    </div>\n    <!-- / CENTER -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/locations/locations/locations.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/locations/locations/locations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseLocationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__locations_service__ = __webpack_require__("./src/app/features/locations/locations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__location_form_location_form_component__ = __webpack_require__("./src/app/features/locations/location-form/location-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FuseLocationsComponent = /** @class */ (function () {
    function FuseLocationsComponent(locationsService, dialog) {
        this.locationsService = locationsService;
        this.dialog = dialog;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('');
    }
    FuseLocationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onSelectionSubscription =
            this.locationsService.onSelectionChanged
                .subscribe(function (selection) {
                _this.selectedCount = selection.length;
            });
        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function (searchText) {
            _this.locationsService.onSearchTextChanged.next(searchText);
        });
    };
    FuseLocationsComponent.prototype.ngOnDestroy = function () {
        this.onSelectionSubscription.unsubscribe();
    };
    FuseLocationsComponent.prototype.newLocation = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__location_form_location_form_component__["a" /* FuseLocationFormComponent */], {
            panelClass: 'antera-details-dialog',
            data: {
                action: 'new'
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            _this.locationsService.updateLocation(response[1]);
        });
    };
    FuseLocationsComponent.prototype.deleteSelectedLocations = function () {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete all selected locations?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.locationsService.deleteSelectedLocations();
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseLocationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-locations',
            template: __webpack_require__("./src/app/features/locations/locations/locations.component.html"),
            styles: [__webpack_require__("./src/app/features/locations/locations/locations.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__locations_service__["a" /* LocationsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialog */]])
    ], FuseLocationsComponent);
    return FuseLocationsComponent;
}());



/***/ })

});
//# sourceMappingURL=locations.module.chunk.js.map