webpackJsonp(["webstore.module"],{

/***/ "./src/app/features/webstore/webstore-form/webstore-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\" fxFlex=\"none\">\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\n\n            <button mat-button class=\"mat-icon-button\"\n                    (click)=\"dialogRef.close()\"\n                    aria-label=\"Close dialog\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </mat-toolbar-row>\n    </mat-toolbar>\n\n    <div fxFlex fxLayout=\"column\" class=\"details-form\">\n\n        <div mat-dialog-content class=\"m-0\">\n\n            <form name=\"form\" [formGroup]=\"webstoreForm\"\n                  class=\"p-16 pb-0\" fxLayout=\"column\"\n                  fusePerfectScrollbar>\n\n                <div fxLayout=\"row\" fxFlex=\"none\">\n                        <mat-form-field fxFlex class=\"mr-16\">\n                            <input matInput placeholder=\"Client Name\" formControlName=\"clientName\" required>\n                        </mat-form-field>\n                    \n                        <div fxFlex=\"none\" class=\"pt-16\">\n                            <button mat-button class=\"mat-button\"\n                                    color=\"primary\"\n                                    (click)=\"dialogRef.close()\"\n                                    aria-label=\"Close dialog\">\n                                <mat-icon>store</mat-icon>\n                                Go To Store Management\n                            </button>\n                        </div>\n                </div>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Logo\" formControlName=\"logo\">\n                </mat-form-field>\n            \n                <mat-form-field>\n                    <input matInput placeholder=\"Host Name\" formControlName=\"hostName\" required>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Crm Url\" formControlName=\"crmUrl\">\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Crm Account\" formControlName=\"crmAccount\">\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Order Type\" formControlName=\"orderType\">\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Sales Person\" formControlName=\"salesPerson\">\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Currency\" formControlName=\"currency\" required>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <textarea matInput placeholder=\"CSS\"\n                              formControlName=\"css\" rows=\"8\">\n                    </textarea>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Enabled\" formControlName=\"enabled\">\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Distributor\" formControlName=\"distributor\" required>\n                </mat-form-field>\n            </form>\n        </div>\n\n        <div mat-dialog-actions class=\"m-0 p-16\"\n            fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n            <button mat-raised-button\n                    (click)=\"save(webstoreForm)\"\n                    class=\"save-button mat-accent\"\n                    [disabled]=\"webstoreForm.invalid\"\n                    aria-label=\"Save\"\n                    matTooltip=\"Save\">\n                SAVE\n            </button>\n\n            <button *ngIf=\"action ==='edit'\"\n                    mat-button\n                    class=\"mat-icon-button\"\n                    (click)=\"delete(webstoreForm)\"\n                    aria-label=\"Delete\"\n                    matTooltip=\"Delete\">\n                <mat-icon>delete</mat-icon>\n            </button>\n\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/features/webstore/webstore-form/webstore-form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/webstore/webstore-form/webstore-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseWebstoreFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__webstore_service__ = __webpack_require__("./src/app/features/webstore/webstore.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__webstore_model__ = __webpack_require__("./src/app/features/webstore/webstore.model.ts");
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





var FuseWebstoreFormComponent = /** @class */ (function () {
    function FuseWebstoreFormComponent(formBuilder, webstoreService, data, dialogRef) {
        this.formBuilder = formBuilder;
        this.webstoreService = webstoreService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = 'Edit Webstore';
            this.webstore = data.webstore;
        }
        else {
            this.dialogTitle = 'New Webstore';
            this.webstore = new __WEBPACK_IMPORTED_MODULE_4__webstore_model__["a" /* Webstore */]({});
        }
    }
    FuseWebstoreFormComponent.prototype.ngOnInit = function () {
        this.webstoreForm = this.formBuilder.group({
            clientName: [this.webstore.clientName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            logo: [this.webstore.logo],
            hostName: [this.webstore.hostName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            crmUrl: [this.webstore.crmUrl],
            crmAccount: [this.webstore.crmAccount],
            orderType: [this.webstore.orderType],
            salesPerson: [this.webstore.salesPerson],
            currency: [this.webstore.currency],
            css: [this.webstore.css],
            enabled: [this.webstore.enabled],
            distributor: [this.webstore.distributor]
        });
    };
    FuseWebstoreFormComponent.prototype.save = function (form) {
        this.dialogRef.close([
            'save',
            __assign({}, this.webstore, form.getRawValue())
        ]);
    };
    FuseWebstoreFormComponent.prototype.delete = function () {
        this.dialogRef.close(['delete']);
    };
    FuseWebstoreFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-webstore-form',
            template: __webpack_require__("./src/app/features/webstore/webstore-form/webstore-form.component.html"),
            styles: [__webpack_require__("./src/app/features/webstore/webstore-form/webstore-form.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__webstore_service__["a" /* WebstoreService */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatDialogRef */]])
    ], FuseWebstoreFormComponent);
    return FuseWebstoreFormComponent;
}());



/***/ }),

/***/ "./src/app/features/webstore/webstore-list/webstore-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-table fxFlex #table matSort\n        [dataSource]=\"dataSource\"\n        [@animateStagger]=\"{value:'50'}\">\n    <!-- Checkbox Column -->\n    \n    <ng-container cdkColumnDef=\"checkbox\">\n        <mat-header-cell *cdkHeaderCellDef>\n            <mat-checkbox (change)=\"toggleAll($event)\"\n                        [checked]=\"selectedCount > 0 && selectedCount === paginator.length\"\n                        [indeterminate]=\"selectedCount > 0 && selectedCount < paginator .length\">\n            </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *cdkCellDef=\"let webstore\">\n            <mat-checkbox [(ngModel)]=\"checkboxes[webstore.id]\"\n                          (ngModelChange)=\"onSelectedChange(webstore.id)\"\n                          (click)=\"$event.stopPropagation()\">\n            </mat-checkbox>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"clientName\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Client Name</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let webstore\">\n            <p class=\"company text-truncate\">\n                {{ webstore.clientName }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"hostName\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Host Name</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let webstore\">\n            <p class=\"company text-truncate\">\n                {{ webstore.hostName }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"points\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Points</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let webstore\">\n            <p class=\"company text-truncate\">\n                {{ webstore.points }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"enabled\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Enabled</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let webstore\">\n            <mat-slide-toggle\n                [ngModel]=\"webstore.enabled\"\n                (click)=\"toggleEnable(webstore, $event)\"\n            ></mat-slide-toggle>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"buttons\">\n        <mat-header-cell *cdkHeaderCellDef fxFlex=\"none\" class=\"w-40\"></mat-header-cell>\n        <mat-cell *cdkCellDef=\"let webstore\" fxFlex=\"none\" class=\"w-40\">\n            <div fxFlex=\"row\" fxLayoutAlign=\"end center\">\n                <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\"\n                        (click)=\"$event.stopPropagation();\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n\n                <mat-menu #moreMenu=\"matMenu\">\n                    <button mat-menu-item aria-label=\"clone\">\n                        <mat-icon>content_copy</mat-icon>\n                        <span>Clone</span>\n                    </button>\n                    <button mat-menu-item aria-label=\"remove\" (click)=\"deleteWebstore(webstore)\">\n                        <mat-icon>delete</mat-icon>\n                        <span>Remove</span>\n                    </button>\n                </mat-menu>\n            </div>\n\n        </mat-cell>\n    </ng-container>\n\n    <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *cdkRowDef=\"let webstore; columns: displayedColumns;\"\n            class=\"webstore\"\n            (click)=\"editWebstore(webstore)\"\n            [ngClass]=\"{'mat-light-blue-50-bg':checkboxes[webstore.id]}\"\n            matRipple\n            [@animate]=\"{value:'*',params:{y:'100%'}}\">\n    </mat-row>\n</mat-table>\n\n<mat-paginator #paginator fxFlex=\"none\"\n            [length]=\"dataSource.total\"\n            [pageSize]=\"10\"\n            [pageSizeOptions]=\"[5, 10, 20]\"\n            [showFirstLastButtons]=\"true\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/features/webstore/webstore-list/webstore-list.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nfuse-webstore-list {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative; }\nfuse-webstore-list .mat-table {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    padding-top: 64px;\n    position: static;\n    overflow-y: auto; }\nfuse-webstore-list .mat-table .mat-header-row {\n      background: white;\n      width: 100%;\n      padding-right: 8px;\n      position: absolute;\n      top: 0;\n      z-index: 1; }\nfuse-webstore-list .mat-table .mat-column-checkbox {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 48px;\n              flex: 0 1 48px; }\nfuse-webstore-list .mat-table .mat-column-checkbox .mat-checkbox-ripple {\n        display: none !important; }\nfuse-webstore-list .mat-table .mat-column-logo {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 40px;\n              flex: 0 1 40px; }\nfuse-webstore-list .mat-table .mat-column-buttons {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 80px;\n              flex: 0 1 80px; }\nfuse-webstore-list .mat-table .mat-row {\n      position: relative;\n      cursor: pointer;\n      padding: 8px 8px 8px 24px;\n      z-index: 0; }\nfuse-webstore-list .mat-table .mat-row .mat-cell {\n        min-width: 0; }\nfuse-webstore-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n          -webkit-box-flex: 0;\n              -ms-flex: 0 1 auto;\n                  flex: 0 1 auto;\n          padding: 0 24px 0 0; }\n@media screen and (min-width: 1280px) {\n            fuse-webstore-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n              display: none; } }\nfuse-webstore-list .mat-paginator {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none; }\n"

/***/ }),

/***/ "./src/app/features/webstore/webstore-list/webstore-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseWebstoreListComponent; });
/* unused harmony export WebstoreDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__webstore_form_webstore_form_component__ = __webpack_require__("./src/app/features/webstore/webstore-form/webstore-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__webstore_service__ = __webpack_require__("./src/app/features/webstore/webstore.service.ts");
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










var FuseWebstoreListComponent = /** @class */ (function () {
    function FuseWebstoreListComponent(wsService, router, dialog) {
        var _this = this;
        this.wsService = wsService;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['checkbox', 'clientName', 'hostName', 'points', 'enabled', 'buttons'];
        this.selectedCount = 0;
        this.onStoresChangedSubscription =
            this.wsService.onStoresChanged.subscribe(function (webstores) {
                _this.checkboxes = {};
                webstores.map(function (ws) {
                    _this.checkboxes[ws.id] = false;
                });
            });
        this.onSelectionChangedSubscription =
            this.wsService.onSelectionChanged.subscribe(function (selection) {
                for (var id in _this.checkboxes) {
                    if (!_this.checkboxes.hasOwnProperty(id)) {
                        continue;
                    }
                    _this.checkboxes[id] = selection.includes(id);
                }
                _this.selectedCount = selection.length;
            });
    }
    FuseWebstoreListComponent.prototype.ngOnInit = function () {
        this.dataSource = new WebstoreDataSource(this.wsService, this.paginator, this.sort);
    };
    FuseWebstoreListComponent.prototype.ngOnDestroy = function () {
        this.onStoresChangedSubscription.unsubscribe();
        this.onSelectionChangedSubscription.unsubscribe();
    };
    FuseWebstoreListComponent.prototype.deleteWebstore = function (ws) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.wsService.deleteWebstore(ws);
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseWebstoreListComponent.prototype.onSelectedChange = function (wsId) {
        this.wsService.toggleSelected(wsId);
    };
    FuseWebstoreListComponent.prototype.editWebstore = function (webstore) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__webstore_form_webstore_form_component__["a" /* FuseWebstoreFormComponent */], {
            panelClass: 'antera-details-dialog',
            data: {
                action: 'edit',
                webstore: webstore
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
                    _this.wsService.updateWebstore(response[1]);
                    break;
                case 'delete':
                    _this.deleteWebstore(webstore);
                    break;
            }
        });
    };
    FuseWebstoreListComponent.prototype.toggleAll = function (ev) {
        if (ev) {
            this.wsService.toggleSelectAll();
        }
    };
    FuseWebstoreListComponent.prototype.toggleEnable = function (ws, ev) {
        ev.stopPropagation();
        this.wsService.updateWebstore(__assign({}, ws, { enabled: !ws.enabled }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatPaginator */])
    ], FuseWebstoreListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["P" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["P" /* MatSort */])
    ], FuseWebstoreListComponent.prototype, "sort", void 0);
    FuseWebstoreListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-webstore-list',
            template: __webpack_require__("./src/app/features/webstore/webstore-list/webstore-list.component.html"),
            styles: [__webpack_require__("./src/app/features/webstore/webstore-list/webstore-list.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_5__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__webstore_service__["a" /* WebstoreService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialog */]])
    ], FuseWebstoreListComponent);
    return FuseWebstoreListComponent;
}());

var WebstoreDataSource = /** @class */ (function (_super) {
    __extends(WebstoreDataSource, _super);
    function WebstoreDataSource(wsService, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this.wsService = wsService;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this.total = 0;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    WebstoreDataSource.prototype.connect = function () {
        var _this = this;
        this.subscription = this.wsService.onStoresChanged
            .subscribe(function (webstores) {
            setTimeout(function () {
                _this.total = webstores.length;
            });
        });
        var displayDataChanges = [
            this.wsService.onStoresChanged,
            this._paginator.page,
            this._sort.sortChange
        ];
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */], displayDataChanges).map(function () {
            var webstores = _this.wsService.webstores;
            webstores = _this.sortData(webstores);
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            webstores = webstores.slice(startIndex, startIndex + _this._paginator.pageSize);
            return webstores;
        });
    };
    WebstoreDataSource.prototype.sortData = function (data) {
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
    WebstoreDataSource.prototype.disconnect = function () {
        this.subscription.unsubscribe();
    };
    return WebstoreDataSource;
}(__WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/features/webstore/webstore.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Webstore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");

var Webstore = /** @class */ (function () {
    function Webstore(ws) {
        {
            this.id = ws.id || __WEBPACK_IMPORTED_MODULE_0__fuse_utils__["a" /* FuseUtils */].generateGUID();
            this.clientName = ws.clientName || '';
            this.hostName = ws.hostName || '';
            this.points = ws.points || '';
            this.distributor = ws.distributor || '';
            this.enabled = ws.enabled || true;
            this.logo = ws.logo || '';
            this.crmUrl = ws.crmUrl || '';
            this.crmAccount = ws.crmAccount || '';
            this.orderType = ws.orderType || '';
            this.salesPerson = ws.salesPerson || '';
            this.currency = ws.currency || '';
            this.css = ws.css || '';
        }
    }
    return Webstore;
}());



/***/ }),

/***/ "./src/app/features/webstore/webstore.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseWebstoreModule", function() { return FuseWebstoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_components__ = __webpack_require__("./src/@fuse/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__webstore_service__ = __webpack_require__("./src/app/features/webstore/webstore.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__webstore_webstore_component__ = __webpack_require__("./src/app/features/webstore/webstore/webstore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__webstore_list_webstore_list_component__ = __webpack_require__("./src/app/features/webstore/webstore-list/webstore-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__webstore_form_webstore_form_component__ = __webpack_require__("./src/app/features/webstore/webstore-form/webstore-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_8__webstore_webstore_component__["a" /* FuseWebstoreComponent */],
        resolve: {
            webstore: __WEBPACK_IMPORTED_MODULE_7__webstore_service__["a" /* WebstoreService */]
        }
    }
];
var FuseWebstoreModule = /** @class */ (function () {
    function FuseWebstoreModule() {
    }
    FuseWebstoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__webstore_webstore_component__["a" /* FuseWebstoreComponent */],
                __WEBPACK_IMPORTED_MODULE_9__webstore_list_webstore_list_component__["a" /* FuseWebstoreListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__webstore_form_webstore_form_component__["a" /* FuseWebstoreFormComponent */],
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
                __WEBPACK_IMPORTED_MODULE_7__webstore_service__["a" /* WebstoreService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__webstore_form_webstore_form_component__["a" /* FuseWebstoreFormComponent */]
            ]
        })
    ], FuseWebstoreModule);
    return FuseWebstoreModule;
}());



/***/ }),

/***/ "./src/app/features/webstore/webstore.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebstoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__webstore_model__ = __webpack_require__("./src/app/features/webstore/webstore.model.ts");
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
var WebstoreService = /** @class */ (function () {
    // filterBy: string;
    function WebstoreService(http) {
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
            _this.getWebstores().then(console.log);
        });
    }
    WebstoreService.prototype.resolve = function (route, state) {
        return this.getWebstores();
    };
    WebstoreService.prototype.getWebstores = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/webstore')
                .subscribe(function (response) {
                _this.webstores = response;
                if (_this._searchText && _this._searchText !== '') {
                    _this.webstores = __WEBPACK_IMPORTED_MODULE_4__fuse_utils__["a" /* FuseUtils */].filterFieldsByString(_this.webstores, _this._searchText, searchFields);
                }
                _this.onStoresChanged.next(_this.webstores);
                resolve(_this.webstores);
            }, reject);
        });
    };
    WebstoreService.prototype.toggleEnabled = function (ws) {
        var _this = this;
        var ws1 = new __WEBPACK_IMPORTED_MODULE_5__webstore_model__["a" /* Webstore */](__assign({}, ws, { enabled: !ws.enabled }));
        return new Promise(function (resolve, reject) {
            _this.http.post('api/webstore/' + ws.id, ws1)
                .subscribe(function (response) {
                var id = _this.webstores.indexOf(ws);
                _this.webstores[id] = ws1;
            });
        });
    };
    /**
     * Toggle selected webstore by id
     * @param id
     */
    WebstoreService.prototype.toggleSelected = function (id) {
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
    WebstoreService.prototype.toggleSelectAll = function () {
        if (this._selection.length === this.webstores.length) {
            this.deselectAll();
        }
        else {
            this.selectAll();
        }
    };
    WebstoreService.prototype.selectAll = function () {
        this._selection = this.webstores.map(function (ws) { return ws.id; });
        this.onSelectionChanged.next(this._selection);
    };
    WebstoreService.prototype.deselectAll = function () {
        this._selection = [];
        this.onSelectionChanged.next(this._selection);
    };
    WebstoreService.prototype.updateWebstore = function (ws) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/webstore/' + ws.id, __assign({}, ws))
                .subscribe(function (response) {
                _this.getWebstores().then(resolve, reject);
            });
        });
    };
    WebstoreService.prototype.deleteWebstore = function (ws) {
        var accountIndex = this.webstores.indexOf(ws);
        this.webstores.splice(accountIndex, 1);
        this.onStoresChanged.next(this.webstores);
    };
    WebstoreService.prototype.deleteSelectedWebstores = function () {
        var _this = this;
        this.webstores = this.webstores.filter(function (ws) { return _this._selection.indexOf(ws.id) < 0; });
        this.deselectAll();
        this.onStoresChanged.next(this.webstores);
    };
    WebstoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], WebstoreService);
    return WebstoreService;
}());



/***/ }),

/***/ "./src/app/features/webstore/webstore/webstore.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"webstore\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- HEADER -->\n        <div class=\"header white-fg\"\n             fxLayout=\"column\" fxLayoutAlign=\"center center\"\n             fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n            <!-- APP TITLE -->\n            <div class=\"logo my-12 m-sm-0\" fxFlex=\"1 0 auto\" \n                 fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">store</mat-icon>\n                <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Webstore</span>\n            </div>\n            <!-- / APP TITLE -->\n\n            <!-- SEARCH -->\n            <div class=\"search-input-wrapper mx-12 m-md-0\"\n                 fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <label for=\"search\" class=\"mr-8\">\n                    <mat-icon class=\"secondary-text\">search</mat-icon>\n                </label>\n                <mat-form-field floatPlaceholder=\"never\" fxFlex=\"1 0 auto\">\n                    <input matInput [formControl]=\"searchInput\" id=\"search\" placeholder=\"Search for webstores\">\n                </mat-form-field>\n            </div>\n            <!-- / SEARCH -->\n\n        </div>\n        <!-- / HEADER -->\n\n        <!-- CONTENT  -->\n        <div class=\"content-card mat-white-bg\">\n\n            <div class=\"toolbar px-24 py-8\">\n                <div class=\"mail-selection\" fxFlex=\"row\">\n                    <div fxFlex=\"row\" fxLayoutAlign=\"start center\">\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\"\n                                (click)=\"newWebstore()\">\n                            Add\n                        </button>\n\n                        <button mat-raised-button color=\"warn\"\n                                class=\"text-capitalize mr-8\"\n                                (click)=\"deleteSelectedWebstores()\">\n                            Delete\n                        </button>\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\">\n                            Clone\n                        </button>\n                    </div>\n\n                </div>\n            </div>\n\n            <fuse-webstore-list></fuse-webstore-list>\n\n        </div>\n        <!-- / CONTENT CARD -->\n    </div>\n    <!-- / CENTER -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/webstore/webstore/webstore.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/webstore/webstore/webstore.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseWebstoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__webstore_service__ = __webpack_require__("./src/app/features/webstore/webstore.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__webstore_form_webstore_form_component__ = __webpack_require__("./src/app/features/webstore/webstore-form/webstore-form.component.ts");
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









var FuseWebstoreComponent = /** @class */ (function () {
    function FuseWebstoreComponent(webstoreService, dialog) {
        this.webstoreService = webstoreService;
        this.dialog = dialog;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('');
    }
    FuseWebstoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onSelectionSubscription =
            this.webstoreService.onSelectionChanged
                .subscribe(function (selection) {
                _this.selectedCount = selection.length;
            });
        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function (searchText) {
            _this.webstoreService.onSearchTextChanged.next(searchText);
        });
    };
    FuseWebstoreComponent.prototype.ngOnDestroy = function () {
        this.onSelectionSubscription.unsubscribe();
    };
    FuseWebstoreComponent.prototype.newWebstore = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__webstore_form_webstore_form_component__["a" /* FuseWebstoreFormComponent */], {
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
            _this.webstoreService.updateWebstore(response[1]);
        });
    };
    FuseWebstoreComponent.prototype.deleteSelectedWebstores = function () {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete all selected webstores?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.webstoreService.deleteSelectedWebstores();
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseWebstoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-webstore',
            template: __webpack_require__("./src/app/features/webstore/webstore/webstore.component.html"),
            styles: [__webpack_require__("./src/app/features/webstore/webstore/webstore.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__webstore_service__["a" /* WebstoreService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialog */]])
    ], FuseWebstoreComponent);
    return FuseWebstoreComponent;
}());



/***/ })

});
//# sourceMappingURL=webstore.module.chunk.js.map