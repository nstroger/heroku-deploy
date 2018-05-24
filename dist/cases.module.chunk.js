webpackJsonp(["cases.module"],{

/***/ "./src/app/features/cases/case-form/case-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\" fxFlex=\"none\">\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\n\n            <button mat-button class=\"mat-icon-button\"\n                    (click)=\"dialogRef.close()\"\n                    aria-label=\"Close dialog\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </mat-toolbar-row>\n    </mat-toolbar>\n\n    <mat-dialog-content class=\"p-24 m-0\">\n\n        <form name=\"form\" [formGroup]=\"caseForm\"\n              fxLayout=\"column\" fusePerfectScrollbar>\n\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxFlex=\"none\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input matInput formControlName=\"number\"\n                               placeholder=\"Number\" readonly>\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxFlex></div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxFlex=\"none\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <mat-select formControlName=\"priority\" placeholder=\"Priority\">\n                            <mat-option [value]=\"priority\" *ngFor=\"let priority of priorities\">{{ priority }}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <mat-select formControlName=\"status\" placeholder=\"Status\">\n                            <mat-option [value]=\"st\" *ngFor=\"let st of status\">{{ st }}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxFlex=\"none\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\"\n                     fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input matInput formControlName=\"accountName\"\n                               placeholder=\"Account Name\">\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\"\n                     fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <mat-select formControlName=\"type\" placeholder=\"Type\">\n                            <mat-option [value]=\"type\" *ngFor=\"let type of accTypes\">{{ type }}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxFlex=\"none\">\n                <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                <mat-form-field fxFlex>\n                    <input matInput formControlName=\"subject\" placeholder=\"Subject\">\n                </mat-form-field>\n            </div>\n            <div fxLayout=\"row\" fxFlex=\"none\">\n                <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                <mat-form-field fxFlex>\n                    <textarea formControlName=\"description\"\n                              matInput type=\"text\" max-rows=\"4\"\n                              placeholder=\"General Info\"></textarea>\n                </mat-form-field>\n            </div>\n            <div fxLayout=\"row\" fxFlex=\"none\">\n                <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                <mat-form-field fxFlex>\n                    <textarea formControlName=\"resolution\"\n                              matInput type=\"text\" max-rows=\"4\"\n                              placeholder=\"Resolution\"></textarea>\n                </mat-form-field>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxFlex=\"none\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input matInput\n                               formControlName=\"salesRep\"\n                               placeholder=\"Assigned To\">\n                    </mat-form-field>\n                </div>\n                <div fxFlex fxFlex.xs=\"none\"></div>\n            </div>\n        </form>\n    </mat-dialog-content>\n\n    <mat-dialog-actions class=\"m-0 p-16\"\n        fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n        <button mat-raised-button\n                (click)=\"save(caseForm)\"\n                class=\"save-button mat-accent\"\n                [disabled]=\"caseForm.invalid\"\n                aria-label=\"Save\"\n                matTooltip=\"Save\">\n            SAVE\n        </button>\n\n        <button *ngIf=\"action ==='edit'\"\n                mat-button\n                class=\"mat-icon-button\"\n                (click)=\"delete(caseForm)\"\n                aria-label=\"Delete\"\n                matTooltip=\"Delete\">\n            <mat-icon>delete</mat-icon>\n        </button>\n\n    </mat-dialog-actions>\n\n</div>"

/***/ }),

/***/ "./src/app/features/cases/case-form/case-form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/cases/case-form/case-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCaseFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cases_service__ = __webpack_require__("./src/app/features/cases/cases.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__case_model__ = __webpack_require__("./src/app/features/cases/case.model.ts");
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





var FuseCaseFormComponent = /** @class */ (function () {
    function FuseCaseFormComponent(formBuilder, casesService, data, dialogRef) {
        this.formBuilder = formBuilder;
        this.casesService = casesService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.status = ['Draft', 'In review'];
        this.priorities = ['Low', 'Medium', 'High'];
        this.accTypes = ['Administration'];
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = 'Edit Case';
            this.case = data.case;
        }
        else {
            this.dialogTitle = 'New Case';
            this.case = new __WEBPACK_IMPORTED_MODULE_4__case_model__["a" /* Case */]({});
        }
    }
    FuseCaseFormComponent.prototype.ngOnInit = function () {
        this.caseForm = this.formBuilder.group({
            number: [this.case.number],
            status: [this.case.status],
            priority: [this.case.priority],
            salesRep: [this.case.salesRep],
            description: [this.case.description],
            accountName: [this.case.accountName],
            type: [this.case.type],
            subject: [this.case.subject],
            resolution: [this.case.resolution],
        });
    };
    FuseCaseFormComponent.prototype.save = function (form) {
        this.dialogRef.close([
            'save',
            __assign({}, this.case, form.getRawValue())
        ]);
    };
    FuseCaseFormComponent.prototype.delete = function () {
        this.dialogRef.close(['delete']);
    };
    FuseCaseFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-case-form',
            template: __webpack_require__("./src/app/features/cases/case-form/case-form.component.html"),
            styles: [__webpack_require__("./src/app/features/cases/case-form/case-form.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__cases_service__["a" /* CasesService */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatDialogRef */]])
    ], FuseCaseFormComponent);
    return FuseCaseFormComponent;
}());



/***/ }),

/***/ "./src/app/features/cases/case.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Case; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");

var Case = /** @class */ (function () {
    function Case(c) {
        {
            this.id = c.id || __WEBPACK_IMPORTED_MODULE_0__fuse_utils__["a" /* FuseUtils */].generateGUID();
            this.number = c.number || '';
            this.subject = c.subject || '';
            this.accountName = c.accountName || '';
            this.priority = c.priority || '';
            this.status = c.status || '';
            this.salesRep = c.salesRep || '';
            this.dateCreated = c.dateCreated || '';
            this.type = c.type || '';
            this.description = c.description || '';
            this.resolution = c.resolution || '';
        }
    }
    return Case;
}());



/***/ }),

/***/ "./src/app/features/cases/cases-list/cases-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-table fxFlex #table matSort\n        [dataSource]=\"dataSource\"\n        [@animateStagger]=\"{value:'50'}\">\n    <!-- Checkbox Column -->\n    \n    <ng-container cdkColumnDef=\"checkbox\">\n        <mat-header-cell *cdkHeaderCellDef>\n            <mat-checkbox (change)=\"toggleAll($event)\"\n                        [checked]=\"selectedCount > 0 && selectedCount === paginator.length\"\n                        [indeterminate]=\"selectedCount > 0 && selectedCount < paginator .length\">\n            </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *cdkCellDef=\"let case\">\n            <mat-checkbox [(ngModel)]=\"checkboxes[case.id]\"\n                          (ngModelChange)=\"onSelectedChange(case.id)\"\n                          (click)=\"$event.stopPropagation()\">\n            </mat-checkbox>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"number\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Num.</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let case\">\n            <p class=\"company text-truncate\">\n                {{ case.number }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"subject\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Subject</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let case\">\n            <p class=\"company text-truncate\">\n                {{ case.subject }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"accountName\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Account Name</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let case\">\n            <p class=\"company text-truncate\">\n                {{ case.accountName }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"priority\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Priority</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let case\">\n            <p class=\"company text-truncate\">\n                {{ case.priority }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"status\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Status</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let case\">\n            <p class=\"company text-truncate\">\n                {{ case.status }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"salesRep\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Assigned To</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let case\">\n            <p class=\"company text-truncate\">\n                {{ case.salesRep }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"dateCreated\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Date Created</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let case\">\n            <p class=\"company text-truncate\">\n                {{ case.dateCreated | date }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"buttons\">\n        <mat-header-cell *cdkHeaderCellDef fxFlex=\"none\" class=\"w-40\"></mat-header-cell>\n        <mat-cell *cdkCellDef=\"let case\" fxFlex=\"none\" class=\"w-40\">\n            <div fxFlex=\"row\" fxLayoutAlign=\"end center\">\n                <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\"\n                        (click)=\"$event.stopPropagation();\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n\n                <mat-menu #moreMenu=\"matMenu\">\n                    <button mat-menu-item aria-label=\"clone\">\n                        <mat-icon>content_copy</mat-icon>\n                        <span>Clone</span>\n                    </button>\n                    <button mat-menu-item aria-label=\"remove\" (click)=\"deleteCase(case)\">\n                        <mat-icon>delete</mat-icon>\n                        <span>Remove</span>\n                    </button>\n                </mat-menu>\n            </div>\n\n        </mat-cell>\n    </ng-container>\n\n    <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *cdkRowDef=\"let case; columns: displayedColumns;\"\n            class=\"case\"\n            (click)=\"editCase(case)\"\n            [ngClass]=\"{'mat-light-blue-50-bg':checkboxes[case.id]}\"\n            matRipple\n            [@animate]=\"{value:'*',params:{y:'100%'}}\">\n    </mat-row>\n</mat-table>\n\n<mat-paginator #paginator fxFlex=\"none\"\n            [length]=\"dataSource.total\"\n            [pageSize]=\"10\"\n            [pageSizeOptions]=\"[5, 10, 20]\"\n            [showFirstLastButtons]=\"true\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/features/cases/cases-list/cases-list.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nfuse-cases-list {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative; }\nfuse-cases-list .mat-table {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    padding-top: 64px;\n    position: static;\n    overflow-y: auto; }\nfuse-cases-list .mat-table .mat-header-row {\n      background: white;\n      width: 100%;\n      padding-right: 8px;\n      position: absolute;\n      top: 0;\n      z-index: 1; }\nfuse-cases-list .mat-table .mat-column-checkbox {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 48px;\n              flex: 0 1 48px; }\nfuse-cases-list .mat-table .mat-column-checkbox .mat-checkbox-ripple {\n        display: none !important; }\nfuse-cases-list .mat-table .mat-column-logo {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 40px;\n              flex: 0 1 40px; }\nfuse-cases-list .mat-table .mat-column-buttons {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 80px;\n              flex: 0 1 80px; }\nfuse-cases-list .mat-table .mat-row {\n      position: relative;\n      cursor: pointer;\n      padding: 8px 8px 8px 24px;\n      z-index: 0; }\nfuse-cases-list .mat-table .mat-row .mat-cell {\n        min-width: 0; }\nfuse-cases-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n          -webkit-box-flex: 0;\n              -ms-flex: 0 1 auto;\n                  flex: 0 1 auto;\n          padding: 0 24px 0 0; }\n@media screen and (min-width: 1280px) {\n            fuse-cases-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n              display: none; } }\nfuse-cases-list .mat-paginator {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none; }\n"

/***/ }),

/***/ "./src/app/features/cases/cases-list/cases-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCasesListComponent; });
/* unused harmony export CaseDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__case_form_case_form_component__ = __webpack_require__("./src/app/features/cases/case-form/case-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cases_service__ = __webpack_require__("./src/app/features/cases/cases.service.ts");
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










var FuseCasesListComponent = /** @class */ (function () {
    function FuseCasesListComponent(casesService, router, dialog) {
        var _this = this;
        this.casesService = casesService;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['checkbox', 'number', 'subject', 'accountName', 'priority', 'status', 'salesRep', 'dateCreated', 'buttons'];
        this.selectedCount = 0;
        this.onStoresChangedSubscription =
            this.casesService.onStoresChanged.subscribe(function (cases) {
                _this.checkboxes = {};
                cases.map(function (ws) {
                    _this.checkboxes[ws.id] = false;
                });
            });
        this.onSelectionChangedSubscription =
            this.casesService.onSelectionChanged.subscribe(function (selection) {
                for (var id in _this.checkboxes) {
                    if (!_this.checkboxes.hasOwnProperty(id)) {
                        continue;
                    }
                    _this.checkboxes[id] = selection.includes(id);
                }
                _this.selectedCount = selection.length;
            });
    }
    FuseCasesListComponent.prototype.ngOnInit = function () {
        this.dataSource = new CaseDataSource(this.casesService, this.paginator, this.sort);
    };
    FuseCasesListComponent.prototype.ngOnDestroy = function () {
        this.onStoresChangedSubscription.unsubscribe();
        this.onSelectionChangedSubscription.unsubscribe();
    };
    FuseCasesListComponent.prototype.deleteCase = function (ws) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.casesService.deleteCase(ws);
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseCasesListComponent.prototype.onSelectedChange = function (wsId) {
        this.casesService.toggleSelected(wsId);
    };
    FuseCasesListComponent.prototype.editCase = function (c) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__case_form_case_form_component__["a" /* FuseCaseFormComponent */], {
            panelClass: 'antera-details-dialog',
            data: {
                action: 'edit',
                case: c
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
                    _this.casesService.updateCase(response[1]);
                    break;
                case 'delete':
                    _this.deleteCase(c);
                    break;
            }
        });
    };
    FuseCasesListComponent.prototype.toggleAll = function (ev) {
        if (ev) {
            this.casesService.toggleSelectAll();
        }
    };
    FuseCasesListComponent.prototype.toggleEnable = function (ws, ev) {
        ev.stopPropagation();
        this.casesService.updateCase(__assign({}, ws, { enabled: !ws.enabled }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatPaginator */])
    ], FuseCasesListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["P" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["P" /* MatSort */])
    ], FuseCasesListComponent.prototype, "sort", void 0);
    FuseCasesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-cases-list',
            template: __webpack_require__("./src/app/features/cases/cases-list/cases-list.component.html"),
            styles: [__webpack_require__("./src/app/features/cases/cases-list/cases-list.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_5__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__cases_service__["a" /* CasesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialog */]])
    ], FuseCasesListComponent);
    return FuseCasesListComponent;
}());

var CaseDataSource = /** @class */ (function (_super) {
    __extends(CaseDataSource, _super);
    function CaseDataSource(casesService, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this.casesService = casesService;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this.total = 0;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    CaseDataSource.prototype.connect = function () {
        var _this = this;
        this.subscription = this.casesService.onStoresChanged
            .subscribe(function (cases) {
            setTimeout(function () {
                _this.total = cases.length;
            });
        });
        var displayDataChanges = [
            this.casesService.onStoresChanged,
            this._paginator.page,
            this._sort.sortChange
        ];
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */], displayDataChanges).map(function () {
            var cases = _this.casesService.cases;
            cases = _this.sortData(cases);
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            cases = cases.slice(startIndex, startIndex + _this._paginator.pageSize);
            return cases;
        });
    };
    CaseDataSource.prototype.sortData = function (data) {
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
    CaseDataSource.prototype.disconnect = function () {
        this.subscription.unsubscribe();
    };
    return CaseDataSource;
}(__WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/features/cases/cases.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseCasesModule", function() { return FuseCasesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_components__ = __webpack_require__("./src/@fuse/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cases_service__ = __webpack_require__("./src/app/features/cases/cases.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cases_cases_component__ = __webpack_require__("./src/app/features/cases/cases/cases.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cases_list_cases_list_component__ = __webpack_require__("./src/app/features/cases/cases-list/cases-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__case_form_case_form_component__ = __webpack_require__("./src/app/features/cases/case-form/case-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_8__cases_cases_component__["a" /* FuseCasesComponent */],
        resolve: {
            case: __WEBPACK_IMPORTED_MODULE_7__cases_service__["a" /* CasesService */]
        }
    }
];
var FuseCasesModule = /** @class */ (function () {
    function FuseCasesModule() {
    }
    FuseCasesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__cases_cases_component__["a" /* FuseCasesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__cases_list_cases_list_component__["a" /* FuseCasesListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__case_form_case_form_component__["a" /* FuseCaseFormComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["H" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["I" /* MatSelectModule */],
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
                __WEBPACK_IMPORTED_MODULE_7__cases_service__["a" /* CasesService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__case_form_case_form_component__["a" /* FuseCaseFormComponent */]
            ]
        })
    ], FuseCasesModule);
    return FuseCasesModule;
}());



/***/ }),

/***/ "./src/app/features/cases/cases.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CasesService; });
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
var CasesService = /** @class */ (function () {
    // filterBy: string;
    function CasesService(http) {
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
            _this.getCases().then(console.log);
        });
    }
    CasesService.prototype.resolve = function (route, state) {
        return this.getCases();
    };
    CasesService.prototype.getCases = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/cases')
                .subscribe(function (response) {
                _this.cases = response;
                if (_this._searchText && _this._searchText !== '') {
                    _this.cases = __WEBPACK_IMPORTED_MODULE_4__fuse_utils__["a" /* FuseUtils */].filterFieldsByString(_this.cases, _this._searchText, searchFields);
                }
                _this.onStoresChanged.next(_this.cases);
                resolve(_this.cases);
            }, reject);
        });
    };
    /**
     * Toggle selected case by id
     * @param id
     */
    CasesService.prototype.toggleSelected = function (id) {
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
    CasesService.prototype.toggleSelectAll = function () {
        if (this._selection.length === this.cases.length) {
            this.deselectAll();
        }
        else {
            this.selectAll();
        }
    };
    CasesService.prototype.selectAll = function () {
        this._selection = this.cases.map(function (ws) { return ws.id; });
        this.onSelectionChanged.next(this._selection);
    };
    CasesService.prototype.deselectAll = function () {
        this._selection = [];
        this.onSelectionChanged.next(this._selection);
    };
    CasesService.prototype.updateCase = function (ws) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/cases/' + ws.id, __assign({}, ws))
                .subscribe(function (response) {
                _this.getCases().then(resolve, reject);
            });
        });
    };
    CasesService.prototype.deleteCase = function (ws) {
        var accountIndex = this.cases.indexOf(ws);
        this.cases.splice(accountIndex, 1);
        this.onStoresChanged.next(this.cases);
    };
    CasesService.prototype.deleteSelectedCases = function () {
        var _this = this;
        this.cases = this.cases.filter(function (ws) { return _this._selection.indexOf(ws.id) < 0; });
        this.deselectAll();
        this.onStoresChanged.next(this.cases);
    };
    CasesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CasesService);
    return CasesService;
}());



/***/ }),

/***/ "./src/app/features/cases/cases/cases.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"case\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- HEADER -->\n        <div class=\"header white-fg\"\n             fxLayout=\"column\" fxLayoutAlign=\"center center\"\n             fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n            <!-- APP TITLE -->\n            <div class=\"logo my-12 m-sm-0\" fxFlex=\"1 0 auto\" \n                 fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">folder_shared</mat-icon>\n                <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Cases</span>\n            </div>\n            <!-- / APP TITLE -->\n\n            <!-- SEARCH -->\n            <div class=\"search-input-wrapper mx-12 m-md-0\"\n                 fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <label for=\"search\" class=\"mr-8\">\n                    <mat-icon class=\"secondary-text\">search</mat-icon>\n                </label>\n                <mat-form-field floatPlaceholder=\"never\" fxFlex=\"1 0 auto\">\n                    <input matInput [formControl]=\"searchInput\" id=\"search\" placeholder=\"Search for cases\">\n                </mat-form-field>\n            </div>\n            <!-- / SEARCH -->\n\n        </div>\n        <!-- / HEADER -->\n\n        <!-- CONTENT  -->\n        <div class=\"content-card mat-white-bg\">\n\n            <div class=\"toolbar px-24 py-8\">\n                <div class=\"mail-selection\" fxFlex=\"row\">\n                    <div fxFlex=\"row\" fxLayoutAlign=\"start center\">\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\"\n                                (click)=\"newCase()\">\n                            Add\n                        </button>\n\n                        <button mat-raised-button color=\"warn\"\n                                class=\"text-capitalize mr-8\"\n                                (click)=\"deleteSelectedCases()\">\n                            Delete\n                        </button>\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\">\n                            Clone\n                        </button>\n                    </div>\n\n                    <div class=\"toolbar-separator\"></div>\n\n                    <button mat-button class=\"text-capitalize\" [matMenuTriggerFor]=\"selectMenu\">\n                        More Actions\n                        <mat-icon>arrow_drop_down</mat-icon>\n                    </button>\n                    <mat-menu #selectMenu=\"matMenu\">\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"emailSelected()\">Email\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"massUpdateSelected()\">Mass Update\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"mergeSelected()\">Merge\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"addToTargetListSelected()\">Add To Target List\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"generateLetterSelected()\">Generate Letter\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"addToTargetListSelected()\">Change Log\n                        </button>\n                    </mat-menu>\n\n                </div>\n            </div>\n\n            <fuse-cases-list></fuse-cases-list>\n\n        </div>\n        <!-- / CONTENT CARD -->\n    </div>\n    <!-- / CENTER -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/cases/cases/cases.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/cases/cases/cases.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCasesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cases_service__ = __webpack_require__("./src/app/features/cases/cases.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__case_form_case_form_component__ = __webpack_require__("./src/app/features/cases/case-form/case-form.component.ts");
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









var FuseCasesComponent = /** @class */ (function () {
    function FuseCasesComponent(casesService, dialog) {
        this.casesService = casesService;
        this.dialog = dialog;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('');
    }
    FuseCasesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onSelectionSubscription =
            this.casesService.onSelectionChanged
                .subscribe(function (selection) {
                _this.selectedCount = selection.length;
            });
        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function (searchText) {
            _this.casesService.onSearchTextChanged.next(searchText);
        });
    };
    FuseCasesComponent.prototype.ngOnDestroy = function () {
        this.onSelectionSubscription.unsubscribe();
    };
    FuseCasesComponent.prototype.newCase = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__case_form_case_form_component__["a" /* FuseCaseFormComponent */], {
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
            _this.casesService.updateCase(response[1]);
        });
    };
    FuseCasesComponent.prototype.deleteSelectedCases = function () {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete all selected cases?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.casesService.deleteSelectedCases();
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseCasesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-cases',
            template: __webpack_require__("./src/app/features/cases/cases/cases.component.html"),
            styles: [__webpack_require__("./src/app/features/cases/cases/cases.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__cases_service__["a" /* CasesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialog */]])
    ], FuseCasesComponent);
    return FuseCasesComponent;
}());



/***/ })

});
//# sourceMappingURL=cases.module.chunk.js.map