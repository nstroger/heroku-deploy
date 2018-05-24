webpackJsonp(["receivings.module"],{

/***/ "./src/app/features/receivings/receiving-form/receiving-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\n            <button mat-button class=\"mat-icon-button\"\n                    (click)=\"dialogRef.close()\"\n                    aria-label=\"Close dialog\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </mat-toolbar-row>\n    </mat-toolbar>\n\n    <mat-dialog-content class=\"p-24 m-0\">\n\n        <form [formGroup]=\"receivingForm\">\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-form-field fxFlex>\n                        <input name=\"poNumber\" formControlName=\"poNumber\" placeholder=\"PO #\" matInput required>\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\">account_circle</mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"vendorName\" formControlName=\"vendorName\" placeholder=\"Vendor Name\" matInput>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-form-field fxFlex>\n                        <input name=\"customerName\" formControlName=\"customerName\" placeholder=\"Customer Name\" matInput>\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\">account_circle</mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"identity\" formControlName=\"identity\" placeholder=\"Identity\" matInput>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-form-field fxFlex>\n                        <input name=\"orderDate\" formControlName=\"orderDate\" placeholder=\"Order Date\" matInput>\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\">account_circle</mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"inHandsDate\" formControlName=\"inHandsDate\" placeholder=\"In Hands Date\" matInput>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-form-field fxFlex>\n                        <input name=\"sku\" formControlName=\"sku\" placeholder=\"Sku\" matInput>\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\">account_circle</mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"color\" formControlName=\"color\" placeholder=\"Color\" matInput>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-form-field fxFlex>\n                        <input name=\"size\" formControlName=\"size\" placeholder=\"Size\" matInput>\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\">account_circle</mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"quantity\" formControlName=\"quantity\" placeholder=\"Quantity\" matInput>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-form-field fxFlex>\n                        <input name=\"site\" formControlName=\"site\" placeholder=\"Site\" matInput>\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\">account_circle</mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"bin\" formControlName=\"bin\" placeholder=\"Bin\" matInput>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-form-field fxFlex>\n                        <input name=\"status\" formControlName=\"status\" placeholder=\"Status\" matInput>\n                    </mat-form-field>\n                </div>\n            </div>\n        </form>\n\n    </mat-dialog-content>\n\n    <mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n        <button *ngIf=\"action !=='edit'\"\n                mat-raised-button\n                (click)=\"dialogRef.close(receivingForm)\"\n                class=\"save-button mat-accent\"\n                [disabled]=\"receivingForm.invalid\"\n                aria-label=\"SAVE\">\n            SAVE\n        </button>\n\n        <button *ngIf=\"action ==='edit'\"\n                mat-raised-button\n                (click)=\"dialogRef.close(['save',receivingForm])\"\n                class=\"save-button mat-accent\"\n                [disabled]=\"receivingForm.invalid\"\n                aria-label=\"SAVE\">\n            SAVE\n        </button>\n\n        <button *ngIf=\"action ==='edit'\"\n                mat-button\n                class=\"mat-icon-button\"\n                (click)=\"dialogRef.close(['delete',receivingForm])\"\n                aria-label=\"Delete\"\n                matTooltip=\"Delete\">\n            <mat-icon>delete</mat-icon>\n        </button>\n\n    </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "./src/app/features/receivings/receiving-form/receiving-form.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.receiving-form-dialog {\n  width: 100%; }\n.receiving-form-dialog .mat-dialog-container {\n    padding: 0;\n    overflow: hidden; }\n.receiving-form-dialog .mat-dialog-container .mat-toolbar {\n      min-height: initial;\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none; }\n.receiving-form-dialog .mat-dialog-container .toolbar-bottom {\n      height: auto; }\n.receiving-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/features/receivings/receiving-form/receiving-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceivingFormDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__receiving_model__ = __webpack_require__("./src/app/features/receivings/receiving.model.ts");
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




var ReceivingFormDialogComponent = /** @class */ (function () {
    function ReceivingFormDialogComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = 'Edit Receiving';
            this.receiving = data.receiving;
        }
        else {
            this.dialogTitle = 'New Receiving';
            this.receiving = new __WEBPACK_IMPORTED_MODULE_3__receiving_model__["a" /* Receiving */]({});
        }
        this.receivingForm = this.createReceivingForm();
    }
    ReceivingFormDialogComponent.prototype.createReceivingForm = function () {
        return this.formBuilder.group({
            poNumber: [this.receiving.poNumber],
            vendorName: [this.receiving.vendorName],
            customerName: [this.receiving.customerName],
            identity: [this.receiving.identity],
            orderDate: [this.receiving.orderDate],
            inHandsDate: [this.receiving.inHandsDate],
            productNumber: [this.receiving.productNumber],
            sku: [this.receiving.sku],
            color: [this.receiving.color],
            size: [this.receiving.size],
            quantity: [this.receiving.quantity],
            site: [this.receiving.site],
            bin: [this.receiving.bin],
            status: [this.receiving.status],
        });
    };
    ReceivingFormDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'receiving-form-dialog',
            template: __webpack_require__("./src/app/features/receivings/receiving-form/receiving-form.component.html"),
            styles: [__webpack_require__("./src/app/features/receivings/receiving-form/receiving-form.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], ReceivingFormDialogComponent);
    return ReceivingFormDialogComponent;
}());



/***/ }),

/***/ "./src/app/features/receivings/receiving-list/receiving-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-table #table matSort\n           [dataSource]=\"dataSource\"\n           [@animateStagger]=\"{value:'50'}\">\n    <!-- Checkbox Column -->\n    <ng-container cdkColumnDef=\"checkbox\">\n        <mat-header-cell *cdkHeaderCellDef>\n            <mat-checkbox (change)=\"toggleAll($event)\"\n                        [checked]=\"selectedReceivings.length > 0 && selectedReceivings.length === paginator.length\"\n                        [indeterminate]=\"selectedReceivings.length > 0 && selectedReceivings.length < paginator .length\">\n            </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *cdkCellDef=\"let receiving\">\n            <mat-checkbox [(ngModel)]=\"checkboxes[receiving.id]\" (ngModelChange)=\"onSelectedChange(receiving.id)\"\n                          (click)=\"$event.stopPropagation()\">\n            </mat-checkbox>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"poNumber\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>Title</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let receiving\" fxHide fxShow.gt-xs>\n            <p class=\"email text-truncate\">\n                {{receiving.poNumber}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"vendorName\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>Title</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let receiving\" fxHide fxShow.gt-xs>\n            <p class=\"email text-truncate\">\n                {{receiving.vendorName}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"customerName\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>Title</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let receiving\" fxHide fxShow.gt-xs>\n            <p class=\"email text-truncate\">\n                {{receiving.customerName}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"identity\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>Title</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let receiving\" fxHide fxShow.gt-xs>\n            <p class=\"email text-truncate\">\n                {{receiving.identity}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"orderDate\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>Title</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let receiving\" fxHide fxShow.gt-xs>\n            <p class=\"email text-truncate\">\n                {{receiving.orderDate}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"inHandsDate\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>Title</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let receiving\" fxHide fxShow.gt-xs>\n            <p class=\"email text-truncate\">\n                {{receiving.inHandsDate}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"productNumber\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>Title</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let receiving\" fxHide fxShow.gt-xs>\n            <p class=\"email text-truncate\">\n                {{receiving.productNumber}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"buttons\">\n        <mat-header-cell *cdkHeaderCellDef></mat-header-cell>\n        <mat-cell *cdkCellDef=\"let receiving\">\n            <div fxFlex=\"row\" fxLayoutAlign=\"end center\">\n                <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\"\n                        (click)=\"$event.stopPropagation();\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n\n                <mat-menu #moreMenu=\"matMenu\">\n                    <button mat-menu-item aria-label=\"remove\" (click)=\"deleteReceiving(receiving)\">\n                        <mat-icon>delete</mat-icon>\n                        <span>Remove</span>\n                    </button>\n                </mat-menu>\n            </div>\n\n        </mat-cell>\n    </ng-container>\n\n    <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *cdkRowDef=\"let receiving; columns: displayedColumns;\"\n             class=\"receiving\"\n             (click)=\"editReceiving(receiving)\"\n             [ngClass]=\"{'mat-light-blue-50-bg':checkboxes[receiving.id]}\"\n             matRipple\n             [@animate]=\"{value:'*',params:{y:'100%'}}\">\n    </mat-row>\n</mat-table>\n\n<mat-paginator #paginator\n                [length]=\"dataSource.total\"\n                [pageSize]=\"10\"\n                [pageSizeOptions]=\"[5, 10, 20]\"\n                [showFirstLastButtons]=\"true\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/features/receivings/receiving-list/receiving-list.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nfuse-receivings-receiving-list {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative; }\nfuse-receivings-receiving-list .mat-table {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    padding-top: 64px;\n    position: static;\n    overflow-y: auto; }\nfuse-receivings-receiving-list .mat-table .mat-header-row {\n      background: white;\n      width: 100%;\n      padding-right: 8px;\n      position: absolute;\n      top: 0;\n      z-index: 1; }\nfuse-receivings-receiving-list .mat-table .mat-column-checkbox {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 48px;\n              flex: 0 1 48px; }\nfuse-receivings-receiving-list .mat-table .mat-column-checkbox .mat-checkbox-ripple {\n        display: none !important; }\nfuse-receivings-receiving-list .mat-table .mat-column-avatar {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 64px;\n              flex: 0 1 64px; }\nfuse-receivings-receiving-list .mat-table .mat-column-buttons {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 80px;\n              flex: 0 1 80px; }\nfuse-receivings-receiving-list .mat-table .mat-row {\n      position: relative;\n      cursor: pointer;\n      padding: 8px 8px 8px 24px;\n      z-index: 0; }\nfuse-receivings-receiving-list .mat-table .mat-row .mat-cell {\n        min-width: 0; }\nfuse-receivings-receiving-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n          -webkit-box-flex: 0;\n              -ms-flex: 0 1 auto;\n                  flex: 0 1 auto;\n          padding: 0 24px 0 0; }\n@media screen and (min-width: 1280px) {\n            fuse-receivings-receiving-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n              display: none; } }\n#add-receiving-button {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  padding: 0;\n  z-index: 99; }\n"

/***/ }),

/***/ "./src/app/features/receivings/receiving-list/receiving-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseReceivingsReceivingListComponent; });
/* unused harmony export ReceivingsDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__receiving_form_receiving_form_component__ = __webpack_require__("./src/app/features/receivings/receiving-form/receiving-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__receivings_service__ = __webpack_require__("./src/app/features/receivings/receivings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
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











var FuseReceivingsReceivingListComponent = /** @class */ (function () {
    function FuseReceivingsReceivingListComponent(receivingsService, router, dialog) {
        var _this = this;
        this.receivingsService = receivingsService;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['checkbox', 'poNumber', 'vendorName', 'customerName', 'identity', 'orderDate', 'inHandsDate', 'productNumber', 'buttons'];
        this.onReceivingsChangedSubscription =
            this.receivingsService.onReceivingsChanged.subscribe(function (receivings) {
                _this.receivings = receivings;
                _this.checkboxes = {};
                receivings.map(function (receiving) {
                    _this.checkboxes[receiving.id] = false;
                });
            });
        this.onSelectedReceivingsChangedSubscription =
            this.receivingsService.onSelectedReceivingsChanged.subscribe(function (selectedReceivings) {
                for (var id in _this.checkboxes) {
                    if (!_this.checkboxes.hasOwnProperty(id)) {
                        continue;
                    }
                    _this.checkboxes[id] = selectedReceivings.includes(id);
                }
                _this.selectedReceivings = selectedReceivings;
            });
    }
    FuseReceivingsReceivingListComponent.prototype.ngOnInit = function () {
        this.dataSource = new ReceivingsDataSource(this.receivingsService, this.paginator, this.sort);
    };
    FuseReceivingsReceivingListComponent.prototype.ngOnDestroy = function () {
        this.onReceivingsChangedSubscription.unsubscribe();
        this.onSelectedReceivingsChangedSubscription.unsubscribe();
    };
    FuseReceivingsReceivingListComponent.prototype.editReceiving = function (receiving) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__receiving_form_receiving_form_component__["a" /* ReceivingFormDialogComponent */], {
            panelClass: 'receiving-form-dialog',
            data: {
                receiving: receiving,
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
                    _this.receivingsService.updateReceiving(formData.getRawValue());
                    break;
                /**
                 * Delete
                 */
                case 'delete':
                    _this.deleteReceiving(receiving);
                    break;
            }
        });
    };
    /**
     * Delete Receiving
     */
    FuseReceivingsReceivingListComponent.prototype.deleteReceiving = function (receiving) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.receivingsService.deleteReceiving(receiving);
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseReceivingsReceivingListComponent.prototype.onSelectedChange = function (receivingId) {
        this.receivingsService.toggleSelectedReceiving(receivingId);
    };
    FuseReceivingsReceivingListComponent.prototype.toggleAll = function (ev) {
        if (ev) {
            this.receivingsService.toggleSelectAll();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], FuseReceivingsReceivingListComponent.prototype, "dialogContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatPaginator */])
    ], FuseReceivingsReceivingListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["P" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["P" /* MatSort */])
    ], FuseReceivingsReceivingListComponent.prototype, "sort", void 0);
    FuseReceivingsReceivingListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-receivings-receiving-list',
            template: __webpack_require__("./src/app/features/receivings/receiving-list/receiving-list.component.html"),
            styles: [__webpack_require__("./src/app/features/receivings/receiving-list/receiving-list.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_5__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__receivings_service__["a" /* ReceivingsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialog */]])
    ], FuseReceivingsReceivingListComponent);
    return FuseReceivingsReceivingListComponent;
}());

var ReceivingsDataSource = /** @class */ (function (_super) {
    __extends(ReceivingsDataSource, _super);
    function ReceivingsDataSource(receivingsService, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this.receivingsService = receivingsService;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this.total = 0;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ReceivingsDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.receivingsService.onReceivingsChanged,
            this._paginator.page,
            this._sort.sortChange
        ];
        this.sub1 = this.receivingsService.onReceivingsChanged
            .subscribe(function (receivings) {
            setTimeout(function () {
                _this.total = receivings.length;
            });
        });
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */], displayDataChanges).map(function () {
            var receivings = _this.receivingsService.receivings;
            receivings = _this.sortData(receivings);
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            receivings = receivings.slice(startIndex, startIndex + _this._paginator.pageSize);
            return receivings;
        });
    };
    ReceivingsDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var valueA, valueB;
            switch (_this._sort.active) {
                case 'created':
                    valueA = new Date(a[_this._sort.active]);
                    valueB = new Date(b[_this._sort.active]);
                    break;
                case 'name':
                    valueA = a['firstname'] + ' ' + a['lastname'];
                    valueB = b['firstname'] + ' ' + b['lastname'];
                    break;
                default:
                    valueA = a[_this._sort.active];
                    valueB = b[_this._sort.active];
                    break;
            }
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction === 'asc' ? 1 : -1);
        });
    };
    ReceivingsDataSource.prototype.disconnect = function () {
        this.sub1.unsubscribe();
    };
    return ReceivingsDataSource;
}(__WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/features/receivings/receiving.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Receiving; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");

var Receiving = /** @class */ (function () {
    function Receiving(receiving) {
        {
            this.id = receiving.id || __WEBPACK_IMPORTED_MODULE_0__fuse_utils__["a" /* FuseUtils */].generateGUID();
            this.poNumber = receiving.poNumber || '';
            this.vendorName = receiving.vendorName || '';
            this.customerName = receiving.customerName || '';
            this.identity = receiving.identity || '';
            this.orderDate = receiving.orderDate || '';
            this.inHandsDate = receiving.inHandsDate || '';
        }
    }
    return Receiving;
}());



/***/ }),

/***/ "./src/app/features/receivings/receivings.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"receivings\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- HEADER -->\n        <div class=\"header white-fg\"\n             fxLayout=\"column\" fxLayoutAlign=\"center center\"\n             fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n            <!-- APP TITLE -->\n            <div class=\"logo my-12 m-sm-0\" fxFlex=\"1 0 auto\" \n                 fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">account_box</mat-icon>\n                <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Receive Inventory</span>\n            </div>\n            <!-- / APP TITLE -->\n\n            <!-- SEARCH -->\n            <div class=\"search-input-wrapper mx-12 m-md-0\"\n                 fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <label for=\"search\" class=\"mr-8\">\n                    <mat-icon class=\"secondary-text\">search</mat-icon>\n                </label>\n                <mat-form-field floatPlaceholder=\"never\" fxFlex=\"1 0 auto\">\n                    <input matInput [formControl]=\"searchInput\" id=\"search\" placeholder=\"Search for receivings\">\n                </mat-form-field>\n            </div>\n            <!-- / SEARCH -->\n\n        </div>\n        <!-- / HEADER -->\n\n        <!-- CONTENT  -->\n        <div class=\"content-card mat-white-bg\">\n\n            <div class=\"toolbar px-24 py-8\">\n                <div class=\"mail-selection\" fxFlex=\"row\">\n                    <div fxFlex=\"row\" fxLayoutAlign=\"start center\">\n\n                        Click on the PO line to Receive Inventory\n                        <!-- commented out for temporary removal by Benzur on 4.17.18\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\"\n                                (click)=\"newReceiving()\">\n                            Receive Selected\n                        </button>\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\">\n                            Quote/Order\n                        </button>\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\">\n                            Add to QB\n                        </button>\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\">\n                            Generate Letter\n                        </button>\n                        \n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\">\n                            Find Duplicates\n                        </button>\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\"\n                                (click)=\"deleteSelectedReceivings()\">\n                            Delete Receivings\n                        </button>\n\n                        -->\n                    </div>\n\n                    <!-- commented out for temporary removal by Benzur on 4.17.18\n\n                    <div class=\"toolbar-separator\"></div>\n\n                    <button mat-button class=\"text-capitalize\" [matMenuTriggerFor]=\"selectMenu\">\n                        More Actions\n                        <mat-icon>arrow_drop_down</mat-icon>\n                    </button>\n                    <mat-menu #selectMenu=\"matMenu\">\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"emailSelected()\">Email\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"massUpdateSelected()\">Mass Update\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"mergeSelected()\">Merge\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"addToTargetListSelected()\">Add To Target List\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"generateLetterSelected()\">Generate Letter\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"addToTargetListSelected()\">Change Log\n                        </button>\n                    </mat-menu>\n\n                    -->\n                    \n                </div>\n            </div>\n\n            <fuse-receivings-receiving-list></fuse-receivings-receiving-list>\n\n        </div>\n        <!-- / CONTENT CARD -->\n    </div>\n    <!-- / CENTER -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/receivings/receivings.component.scss":
/***/ (function(module, exports) {

module.exports = "#receivings .content {\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/features/receivings/receivings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseReceivingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__receiving_form_receiving_form_component__ = __webpack_require__("./src/app/features/receivings/receiving-form/receiving-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__receivings_service__ = __webpack_require__("./src/app/features/receivings/receivings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FuseReceivingsComponent = /** @class */ (function () {
    function FuseReceivingsComponent(receivingsService, dialog) {
        this.receivingsService = receivingsService;
        this.dialog = dialog;
        this.selectedCount = 0;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('');
    }
    FuseReceivingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onSelectedReceivingsChangedSubscription =
            this.receivingsService.onSelectedReceivingsChanged
                .subscribe(function (selectedReceivings) {
                _this.selectedCount = selectedReceivings.length;
            });
        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function (searchText) {
            _this.receivingsService.onSearchTextChanged.next(searchText);
        });
    };
    FuseReceivingsComponent.prototype.ngOnDestroy = function () {
        this.onSelectedReceivingsChangedSubscription.unsubscribe();
    };
    FuseReceivingsComponent.prototype.newReceiving = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__receiving_form_receiving_form_component__["a" /* ReceivingFormDialogComponent */], {
            panelClass: 'receiving-form-dialog',
            data: {
                action: 'new'
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            _this.receivingsService.updateReceiving(response.getRawValue());
        });
    };
    FuseReceivingsComponent.prototype.deleteSelectedReceivings = function () {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete all selected receivings?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.receivingsService.deleteSelectedReceivings();
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseReceivingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-receivings',
            template: __webpack_require__("./src/app/features/receivings/receivings.component.html"),
            styles: [__webpack_require__("./src/app/features/receivings/receivings.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_5__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__receivings_service__["a" /* ReceivingsService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatDialog */]])
    ], FuseReceivingsComponent);
    return FuseReceivingsComponent;
}());



/***/ }),

/***/ "./src/app/features/receivings/receivings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseReceivingsModule", function() { return FuseReceivingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_components__ = __webpack_require__("./src/@fuse/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__receivings_component__ = __webpack_require__("./src/app/features/receivings/receivings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__receivings_service__ = __webpack_require__("./src/app/features/receivings/receivings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__receiving_list_receiving_list_component__ = __webpack_require__("./src/app/features/receivings/receiving-list/receiving-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__selected_bar_selected_bar_component__ = __webpack_require__("./src/app/features/receivings/selected-bar/selected-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__receiving_form_receiving_form_component__ = __webpack_require__("./src/app/features/receivings/receiving-form/receiving-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_6__receivings_component__["a" /* FuseReceivingsComponent */],
        resolve: {
            receivings: __WEBPACK_IMPORTED_MODULE_7__receivings_service__["a" /* ReceivingsService */]
        }
    }
];
var FuseReceivingsModule = /** @class */ (function () {
    function FuseReceivingsModule() {
    }
    FuseReceivingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__receivings_component__["a" /* FuseReceivingsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__receiving_list_receiving_list_component__["a" /* FuseReceivingsReceivingListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__selected_bar_selected_bar_component__["a" /* FuseReceivingsSelectedBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__receiving_form_receiving_form_component__["a" /* ReceivingFormDialogComponent */]
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
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["K" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["Q" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["T" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["V" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__fuse_components__["a" /* FuseConfirmDialogModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__receivings_service__["a" /* ReceivingsService */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_10__receiving_form_receiving_form_component__["a" /* ReceivingFormDialogComponent */]]
        })
    ], FuseReceivingsModule);
    return FuseReceivingsModule;
}());



/***/ }),

/***/ "./src/app/features/receivings/receivings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceivingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__receiving_model__ = __webpack_require__("./src/app/features/receivings/receiving.model.ts");
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






var ReceivingsService = /** @class */ (function () {
    function ReceivingsService(http) {
        this.http = http;
        this.onReceivingsChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.onSelectedReceivingsChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.onSearchTextChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.onFilterChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.selectedReceivings = [];
    }
    /**
     * The Receivings App Main Resolver
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ReceivingsService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getReceivings(),
            ]).then(function (_a) {
                var files = _a[0];
                _this.onSearchTextChanged.subscribe(function (searchText) {
                    _this.searchText = searchText;
                    _this.getReceivings();
                });
                _this.onFilterChanged.subscribe(function (filter) {
                    _this.filterBy = filter;
                    _this.getReceivings();
                });
                resolve();
            }, reject);
        });
    };
    ReceivingsService.prototype.getReceivings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/receivings')
                .subscribe(function (response) {
                _this.receivings = response;
                if (_this.searchText && _this.searchText !== '') {
                    _this.receivings = __WEBPACK_IMPORTED_MODULE_4__fuse_utils__["a" /* FuseUtils */].filterArrayByString(_this.receivings, _this.searchText);
                }
                _this.receivings = _this.receivings.map(function (receiving) {
                    return new __WEBPACK_IMPORTED_MODULE_5__receiving_model__["a" /* Receiving */](receiving);
                });
                _this.onReceivingsChanged.next(_this.receivings);
                resolve(_this.receivings);
            }, reject);
        });
    };
    /**
     * Toggle selected receiving by id
     * @param id
     */
    ReceivingsService.prototype.toggleSelectedReceiving = function (id) {
        // First, check if we already have that todo as selected...
        if (this.selectedReceivings.length > 0) {
            var index = this.selectedReceivings.indexOf(id);
            if (index !== -1) {
                this.selectedReceivings.splice(index, 1);
                // Trigger the next event
                this.onSelectedReceivingsChanged.next(this.selectedReceivings);
                // Return
                return;
            }
        }
        // If we don't have it, push as selected
        this.selectedReceivings.push(id);
        // Trigger the next event
        this.onSelectedReceivingsChanged.next(this.selectedReceivings);
    };
    /**
     * Toggle select all
     */
    ReceivingsService.prototype.toggleSelectAll = function () {
        if (this.selectedReceivings.length === this.receivings.length) {
            this.deselectReceivings();
        }
        else {
            this.selectReceivings();
        }
    };
    ReceivingsService.prototype.selectReceivings = function (filterParameter, filterValue) {
        var _this = this;
        this.selectedReceivings = [];
        // If there is no filter, select all todos
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedReceivings = [];
            this.receivings.map(function (receiving) {
                _this.selectedReceivings.push(receiving.id);
            });
        }
        else {
            /* this.selectedReceivings.push(...
                 this.receivings.filter(todo => {
                     return todo[filterParameter] === filterValue;
                 })
             );*/
        }
        // Trigger the next event
        this.onSelectedReceivingsChanged.next(this.selectedReceivings);
    };
    ReceivingsService.prototype.updateReceiving = function (receiving) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/receivings/' + receiving.id, __assign({}, receiving))
                .subscribe(function (response) {
                _this.getReceivings();
                resolve(response);
            });
        });
    };
    ReceivingsService.prototype.deselectReceivings = function () {
        this.selectedReceivings = [];
        // Trigger the next event
        this.onSelectedReceivingsChanged.next(this.selectedReceivings);
    };
    ReceivingsService.prototype.deleteReceiving = function (receiving) {
        var receivingIndex = this.receivings.indexOf(receiving);
        this.receivings.splice(receivingIndex, 1);
        this.onReceivingsChanged.next(this.receivings);
    };
    ReceivingsService.prototype.deleteSelectedReceivings = function () {
        var _loop_1 = function (receivingId) {
            var receiving = this_1.receivings.find(function (_receiving) {
                return _receiving.id === receivingId;
            });
            var receivingIndex = this_1.receivings.indexOf(receiving);
            this_1.receivings.splice(receivingIndex, 1);
        };
        var this_1 = this;
        for (var _i = 0, _a = this.selectedReceivings; _i < _a.length; _i++) {
            var receivingId = _a[_i];
            _loop_1(receivingId);
        }
        this.onReceivingsChanged.next(this.receivings);
        this.deselectReceivings();
    };
    ReceivingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ReceivingsService);
    return ReceivingsService;
}());



/***/ }),

/***/ "./src/app/features/receivings/selected-bar/selected-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-24\">\n\n    <div class=\"close-button-wrapper\" fxFlex=\"0 1 auto\" fxFlex.gt-sm=\"220px\" (click)=\"deselectAll()\">\n        <button class=\"p-8\" mat-button fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"mr-8\">arrow_back</mat-icon>\n            <span class=\"text-uppercase\">Back</span>\n        </button>\n    </div>\n\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutAlign.gt-sm=\"space-between center\">\n\n        <div>\n            <span class=\"selected-receivings-count\">\n                <span>{{selectedReceivings.length}}</span>\n                <span>selected</span>\n            </span>\n\n            <button mat-icon-button [matMenuTriggerFor]=\"selectMenu\">\n                <mat-icon>arrow_drop_down</mat-icon>\n            </button>\n            <mat-menu #selectMenu=\"matMenu\">\n                <button mat-menu-item (click)=\"selectAll()\">Select all</button>\n                <button mat-menu-item (click)=\"deselectAll()\">Deselect all</button>\n            </mat-menu>\n\n        </div>\n\n        <div class=\"multi-select-actions\">\n            <button mat-icon-button (click)=\"deleteSelectedReceivings()\" aria-label=\"delete selected\">\n                <mat-icon>delete</mat-icon>\n            </button>\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/receivings/selected-bar/selected-bar.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 120px;\n  z-index: 99; }\n"

/***/ }),

/***/ "./src/app/features/receivings/selected-bar/selected-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseReceivingsSelectedBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__receivings_service__ = __webpack_require__("./src/app/features/receivings/receivings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseReceivingsSelectedBarComponent = /** @class */ (function () {
    function FuseReceivingsSelectedBarComponent(receivingsService, dialog) {
        var _this = this;
        this.receivingsService = receivingsService;
        this.dialog = dialog;
        this.receivingsService.onSelectedReceivingsChanged
            .subscribe(function (selectedReceivings) {
            _this.selectedReceivings = selectedReceivings;
            setTimeout(function () {
                _this.hasSelectedReceivings = selectedReceivings.length > 0;
                _this.isIndeterminate = (selectedReceivings.length !== _this.receivingsService.receivings.length && selectedReceivings.length > 0);
            }, 0);
        });
    }
    FuseReceivingsSelectedBarComponent.prototype.selectAll = function () {
        this.receivingsService.selectReceivings();
    };
    FuseReceivingsSelectedBarComponent.prototype.deselectAll = function () {
        this.receivingsService.deselectReceivings();
    };
    FuseReceivingsSelectedBarComponent.prototype.deleteSelectedReceivings = function () {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete all selected receivings?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.receivingsService.deleteSelectedReceivings();
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseReceivingsSelectedBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-selected-bar',
            template: __webpack_require__("./src/app/features/receivings/selected-bar/selected-bar.component.html"),
            styles: [__webpack_require__("./src/app/features/receivings/selected-bar/selected-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__receivings_service__["a" /* ReceivingsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */]])
    ], FuseReceivingsSelectedBarComponent);
    return FuseReceivingsSelectedBarComponent;
}());



/***/ })

});
//# sourceMappingURL=receivings.module.chunk.js.map