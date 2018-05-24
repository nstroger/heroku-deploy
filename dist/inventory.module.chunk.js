webpackJsonp(["inventory.module"],{

/***/ "./src/app/features/inventory/inventory-form/inventory-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\n            <button mat-button class=\"mat-icon-button\"\n                    (click)=\"dialogRef.close()\"\n                    aria-label=\"Close dialog\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </mat-toolbar-row>\n    </mat-toolbar>\n\n    <mat-dialog-content class=\"p-24 m-0\">\n\n        <form [formGroup]=\"inventoryForm\">\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-form-field fxFlex>\n                        <input name=\"sku\" formControlName=\"sku\" placeholder=\"SKU\" matInput readonly>\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-form-field fxFlex>\n                        <input name=\"size\" formControlName=\"size\" placeholder=\"Size\" matInput readonly>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-form-field fxFlex>\n                        <input name=\"color\" formControlName=\"color\" placeholder=\"Color\" matInput readonly>\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-form-field fxFlex>\n                        <input name=\"site\" formControlName=\"site\" placeholder=\"Site\" matInput readonly>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-form-field fxFlex>\n                        <input name=\"bin\" formControlName=\"bin\" placeholder=\"Bin\" matInput readonly>\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-form-field fxFlex>\n                        <input name=\"quantity\" formControlName=\"quantity\" placeholder=\"Quantity\" matInput readonly>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-form-field fxFlex>\n                        <input name=\"lastInsertDate\" formControlName=\"lastInsertDate\" placeholder=\"Last Insert Date\" matInput readonly>\n                    </mat-form-field>\n                </div>\n            </div>\n        </form>\n\n    </mat-dialog-content>\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/inventory/inventory-form/inventory-form.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.inventory-form-dialog {\n  width: 100%; }\n.inventory-form-dialog .mat-dialog-container {\n    padding: 0;\n    overflow: hidden; }\n.inventory-form-dialog .mat-dialog-container .mat-toolbar {\n      min-height: initial;\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none; }\n.inventory-form-dialog .mat-dialog-container .toolbar-bottom {\n      height: auto; }\n.inventory-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/features/inventory/inventory-form/inventory-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryFormDialogComponent; });
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



var InventoryFormDialogComponent = /** @class */ (function () {
    function InventoryFormDialogComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.dialogTitle = 'Inventory';
        this.inventory = data.inventory;
        this.inventoryForm = this.createInventoryForm();
    }
    InventoryFormDialogComponent.prototype.createInventoryForm = function () {
        return this.formBuilder.group({
            sku: [this.inventory.sku],
            size: [this.inventory.size],
            color: [this.inventory.color],
            site: [this.inventory.site],
            bin: [this.inventory.bin],
            quantity: [this.inventory.quantity],
            lastInsertDate: [this.inventory.lastInsertDate],
        });
    };
    InventoryFormDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'inventory-form-dialog',
            template: __webpack_require__("./src/app/features/inventory/inventory-form/inventory-form.component.html"),
            styles: [__webpack_require__("./src/app/features/inventory/inventory-form/inventory-form.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], InventoryFormDialogComponent);
    return InventoryFormDialogComponent;
}());



/***/ }),

/***/ "./src/app/features/inventory/inventory-list/inventory-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-table #table matSort\n           [dataSource]=\"dataSource\"\n           [@animateStagger]=\"{value:'50'}\">\n    <!-- Checkbox Column -->\n\n    <ng-container cdkColumnDef=\"id\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header class=\"w-40 mr-16\">ID</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let inventory\" class=\"w-40 mr-16\">\n            <p class=\"text-truncate\">\n                {{inventory.id}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"img\">\n        <mat-header-cell *cdkHeaderCellDef class=\"w-40 mr-32\"></mat-header-cell>\n        <mat-cell *cdkCellDef=\"let inventory\" class=\"w-40 mr-32\">\n            <img [src]=\"inventory.img\" alt=\"product image\">\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"name\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header>Name</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let inventory\">\n            <p class=\"text-truncate\">\n                {{inventory.name}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"category\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header>Category</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let inventory\">\n            <p class=\"text-truncate\">\n                {{inventory.category}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"price\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header>Price</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let inventory\">\n            <p class=\"text-truncate\">\n                ${{inventory.price}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"quantity\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header>Quantity</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let inventory\">\n            <p class=\"text-truncate\">\n                {{inventory.quantity}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"active\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header>Active</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let inventory\">\n            <p class=\"text-truncate\">\n                {{inventory.active}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *cdkRowDef=\"let inventory; columns: displayedColumns;\"\n             class=\"inventory\"\n             (click)=\"editInventory(inventory)\"\n             [ngClass]=\"{'mat-light-blue-50-bg':checkboxes[inventory.id]}\"\n             matRipple\n             [@animate]=\"{value:'*',params:{y:'100%'}}\">\n    </mat-row>\n</mat-table>\n\n<mat-paginator #paginator\n                [length]=\"dataSource.total\"\n                [pageSize]=\"10\"\n                [pageSizeOptions]=\"[5, 10, 20]\"\n                [showFirstLastButtons]=\"true\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/features/inventory/inventory-list/inventory-list.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nfuse-inventory-inventory-list {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative; }\nfuse-inventory-inventory-list .mat-table {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    padding-top: 64px;\n    position: static;\n    overflow-y: auto; }\nfuse-inventory-inventory-list .mat-table .mat-header-row {\n      background: white;\n      width: 100%;\n      padding-right: 8px;\n      position: absolute;\n      top: 0;\n      z-index: 1; }\nfuse-inventory-inventory-list .mat-table .mat-column-checkbox {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 48px;\n              flex: 0 1 48px; }\nfuse-inventory-inventory-list .mat-table .mat-column-checkbox .mat-checkbox-ripple {\n        display: none !important; }\nfuse-inventory-inventory-list .mat-table .mat-column-avatar {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 64px;\n              flex: 0 1 64px; }\nfuse-inventory-inventory-list .mat-table .mat-column-buttons {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 80px;\n              flex: 0 1 80px; }\nfuse-inventory-inventory-list .mat-table .mat-row {\n      position: relative;\n      cursor: pointer;\n      padding: 8px 8px 8px 24px;\n      z-index: 0; }\nfuse-inventory-inventory-list .mat-table .mat-row .mat-cell {\n        min-width: 0; }\nfuse-inventory-inventory-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n          -webkit-box-flex: 0;\n              -ms-flex: 0 1 auto;\n                  flex: 0 1 auto;\n          padding: 0 24px 0 0; }\n@media screen and (min-width: 1280px) {\n            fuse-inventory-inventory-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n              display: none; } }\n#add-inventory-button {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  padding: 0;\n  z-index: 99; }\n"

/***/ }),

/***/ "./src/app/features/inventory/inventory-list/inventory-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseInventoryInventoryListComponent; });
/* unused harmony export InventoryDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inventory_form_inventory_form_component__ = __webpack_require__("./src/app/features/inventory/inventory-form/inventory-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inventory_service__ = __webpack_require__("./src/app/features/inventory/inventory.service.ts");
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











var FuseInventoryInventoryListComponent = /** @class */ (function () {
    function FuseInventoryInventoryListComponent(inventoryService, router, dialog) {
        var _this = this;
        this.inventoryService = inventoryService;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'img', 'name', 'category', 'price', 'quantity', 'active'];
        this.onInventoryChangedSubscription =
            this.inventoryService.onInventoryChanged.subscribe(function (inventory) {
                _this.inventory = inventory;
                _this.checkboxes = {};
                inventory.map(function (inventory) {
                    _this.checkboxes[inventory.id] = false;
                });
            });
        this.onSelectedInventoryChangedSubscription =
            this.inventoryService.onSelectedInventoryChanged.subscribe(function (selectedInventory) {
                for (var id in _this.checkboxes) {
                    if (!_this.checkboxes.hasOwnProperty(id)) {
                        continue;
                    }
                    _this.checkboxes[id] = selectedInventory.includes(id);
                }
                _this.selectedInventory = selectedInventory;
            });
    }
    FuseInventoryInventoryListComponent.prototype.ngOnInit = function () {
        this.dataSource = new InventoryDataSource(this.inventoryService, this.paginator, this.sort);
    };
    FuseInventoryInventoryListComponent.prototype.ngOnDestroy = function () {
        this.onInventoryChangedSubscription.unsubscribe();
        this.onSelectedInventoryChangedSubscription.unsubscribe();
    };
    FuseInventoryInventoryListComponent.prototype.editInventory = function (inventory) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__inventory_form_inventory_form_component__["a" /* InventoryFormDialogComponent */], {
            panelClass: 'inventory-form-dialog',
            data: {
                inventory: inventory,
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
                    _this.inventoryService.updateInventory(formData.getRawValue());
                    break;
                /**
                 * Delete
                 */
                case 'delete':
                    _this.deleteInventory(inventory);
                    break;
            }
        });
    };
    /**
     * Delete Inventory
     */
    FuseInventoryInventoryListComponent.prototype.deleteInventory = function (inventory) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.inventoryService.deleteInventory(inventory);
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseInventoryInventoryListComponent.prototype.onSelectedChange = function (inventoryId) {
        this.inventoryService.toggleSelectedInventory(inventoryId);
    };
    FuseInventoryInventoryListComponent.prototype.toggleAll = function (ev) {
        if (ev) {
            this.inventoryService.toggleSelectAll();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], FuseInventoryInventoryListComponent.prototype, "dialogContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatPaginator */])
    ], FuseInventoryInventoryListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["P" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["P" /* MatSort */])
    ], FuseInventoryInventoryListComponent.prototype, "sort", void 0);
    FuseInventoryInventoryListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-inventory-inventory-list',
            template: __webpack_require__("./src/app/features/inventory/inventory-list/inventory-list.component.html"),
            styles: [__webpack_require__("./src/app/features/inventory/inventory-list/inventory-list.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_5__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__inventory_service__["a" /* InventoryService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialog */]])
    ], FuseInventoryInventoryListComponent);
    return FuseInventoryInventoryListComponent;
}());

var InventoryDataSource = /** @class */ (function (_super) {
    __extends(InventoryDataSource, _super);
    function InventoryDataSource(inventoryService, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this.inventoryService = inventoryService;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this.total = 0;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    InventoryDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.inventoryService.onInventoryChanged,
            this._paginator.page,
            this._sort.sortChange
        ];
        this.sub1 = this.inventoryService.onInventoryChanged
            .subscribe(function (inventory) {
            setTimeout(function () {
                _this.total = inventory.length;
            });
        });
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */], displayDataChanges).map(function () {
            var inventory = _this.inventoryService.inventory;
            inventory = _this.sortData(inventory);
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            inventory = inventory.slice(startIndex, startIndex + _this._paginator.pageSize);
            return inventory;
        });
    };
    InventoryDataSource.prototype.sortData = function (data) {
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
    InventoryDataSource.prototype.disconnect = function () {
        this.sub1.unsubscribe();
    };
    return InventoryDataSource;
}(__WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/features/inventory/inventory.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"inventory\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- HEADER -->\n        <div class=\"header white-fg\"\n             fxLayout=\"column\" fxLayoutAlign=\"center center\"\n             fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n            <!-- APP TITLE -->\n            <div class=\"logo my-12 m-sm-0\" fxFlex=\"1 0 auto\" \n                 fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">account_box</mat-icon>\n                <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Inventory</span>\n            </div>\n            <!-- / APP TITLE -->\n\n            <!-- SEARCH -->\n            <div class=\"search-input-wrapper mx-12 m-md-0\"\n                 fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <label for=\"search\" class=\"mr-8\">\n                    <mat-icon class=\"secondary-text\">search</mat-icon>\n                </label>\n                <mat-form-field floatPlaceholder=\"never\" fxFlex=\"1 0 auto\">\n                    <input matInput [formControl]=\"searchInput\" id=\"search\" placeholder=\"Search for inventory\">\n                </mat-form-field>\n            </div>\n            <!-- / SEARCH -->\n\n        </div>\n        <!-- / HEADER -->\n\n        <!-- CONTENT  -->\n        <div class=\"content-card mat-white-bg\">\n\n            <div class=\"toolbar px-24 py-8\">\n                <div class=\"mail-selection\" fxFlex=\"row\">\n                    <div fxFlex=\"row\" fxLayoutAlign=\"start center\">\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\"\n                                (click)=\"newInventory()\">\n                            Add Inventory\n                        </button>\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\">\n                            Quote/Order\n                        </button>\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\">\n                            Add to QB\n                        </button>\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\">\n                            Generate Letter\n                        </button>\n                        \n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\">\n                            Find Duplicates\n                        </button>\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\"\n                                (click)=\"deleteSelectedInventory()\">\n                            Delete Inventory\n                        </button>\n                    </div>\n\n                    <div class=\"toolbar-separator\"></div>\n\n                    <button mat-button class=\"text-capitalize\" [matMenuTriggerFor]=\"selectMenu\">\n                        More Actions\n                        <mat-icon>arrow_drop_down</mat-icon>\n                    </button>\n                    <mat-menu #selectMenu=\"matMenu\">\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"emailSelected()\">Email\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"massUpdateSelected()\">Mass Update\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"mergeSelected()\">Merge\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"addToTargetListSelected()\">Add To Target List\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"generateLetterSelected()\">Generate Letter\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"addToTargetListSelected()\">Change Log\n                        </button>\n                    </mat-menu>\n                    \n                </div>\n            </div>\n\n            <fuse-inventory-inventory-list></fuse-inventory-inventory-list>\n\n        </div>\n        <!-- / CONTENT CARD -->\n    </div>\n    <!-- / CENTER -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/inventory/inventory.component.scss":
/***/ (function(module, exports) {

module.exports = "#inventory .content {\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/features/inventory/inventory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseInventoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inventory_form_inventory_form_component__ = __webpack_require__("./src/app/features/inventory/inventory-form/inventory-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inventory_service__ = __webpack_require__("./src/app/features/inventory/inventory.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FuseInventoryComponent = /** @class */ (function () {
    function FuseInventoryComponent(inventoryService, dialog) {
        this.inventoryService = inventoryService;
        this.dialog = dialog;
        this.selectedCount = 0;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('');
    }
    FuseInventoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onSelectedInventoryChangedSubscription =
            this.inventoryService.onSelectedInventoryChanged
                .subscribe(function (selectedInventory) {
                _this.selectedCount = selectedInventory.length;
            });
        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function (searchText) {
            _this.inventoryService.onSearchTextChanged.next(searchText);
        });
    };
    FuseInventoryComponent.prototype.ngOnDestroy = function () {
        this.onSelectedInventoryChangedSubscription.unsubscribe();
    };
    FuseInventoryComponent.prototype.newInventory = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__inventory_form_inventory_form_component__["a" /* InventoryFormDialogComponent */], {
            panelClass: 'inventory-form-dialog',
            data: {
                action: 'new'
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            _this.inventoryService.updateInventory(response.getRawValue());
        });
    };
    FuseInventoryComponent.prototype.deleteSelectedInventory = function () {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete all selected inventory?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.inventoryService.deleteSelectedInventory();
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseInventoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-inventory',
            template: __webpack_require__("./src/app/features/inventory/inventory.component.html"),
            styles: [__webpack_require__("./src/app/features/inventory/inventory.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_5__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__inventory_service__["a" /* InventoryService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatDialog */]])
    ], FuseInventoryComponent);
    return FuseInventoryComponent;
}());



/***/ }),

/***/ "./src/app/features/inventory/inventory.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Inventory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");

var Inventory = /** @class */ (function () {
    function Inventory(inventory) {
        {
            this.id = inventory.id || __WEBPACK_IMPORTED_MODULE_0__fuse_utils__["a" /* FuseUtils */].generateGUID();
            this.name = inventory.name || '';
            this.img = inventory.img || '';
            this.category = inventory.category || '';
            this.price = inventory.price || '';
            this.quantity = inventory.quantity || '';
            this.active = inventory.active || true;
            this.sku = inventory.sku || '';
            this.size = inventory.size || '';
            this.color = inventory.color || '';
            this.site = inventory.site || '';
            this.bin = inventory.bin || '';
            this.lastInsertDate = inventory.lastInsertDate || '';
        }
    }
    return Inventory;
}());



/***/ }),

/***/ "./src/app/features/inventory/inventory.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseInventoryModule", function() { return FuseInventoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_components__ = __webpack_require__("./src/@fuse/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inventory_component__ = __webpack_require__("./src/app/features/inventory/inventory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inventory_service__ = __webpack_require__("./src/app/features/inventory/inventory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inventory_list_inventory_list_component__ = __webpack_require__("./src/app/features/inventory/inventory-list/inventory-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__inventory_form_inventory_form_component__ = __webpack_require__("./src/app/features/inventory/inventory-form/inventory-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_6__inventory_component__["a" /* FuseInventoryComponent */],
        resolve: {
            inventory: __WEBPACK_IMPORTED_MODULE_7__inventory_service__["a" /* InventoryService */]
        }
    }
];
var FuseInventoryModule = /** @class */ (function () {
    function FuseInventoryModule() {
    }
    FuseInventoryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__inventory_component__["a" /* FuseInventoryComponent */],
                __WEBPACK_IMPORTED_MODULE_8__inventory_list_inventory_list_component__["a" /* FuseInventoryInventoryListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__inventory_form_inventory_form_component__["a" /* InventoryFormDialogComponent */]
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
                __WEBPACK_IMPORTED_MODULE_7__inventory_service__["a" /* InventoryService */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_9__inventory_form_inventory_form_component__["a" /* InventoryFormDialogComponent */]]
        })
    ], FuseInventoryModule);
    return FuseInventoryModule;
}());



/***/ }),

/***/ "./src/app/features/inventory/inventory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inventory_model__ = __webpack_require__("./src/app/features/inventory/inventory.model.ts");
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






var InventoryService = /** @class */ (function () {
    function InventoryService(http) {
        this.http = http;
        this.onInventoryChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.onSelectedInventoryChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.onSearchTextChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.onFilterChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.selectedInventory = [];
    }
    /**
     * The Inventory App Main Resolver
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    InventoryService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getInventory(),
            ]).then(function (_a) {
                var files = _a[0];
                _this.onSearchTextChanged.subscribe(function (searchText) {
                    _this.searchText = searchText;
                    _this.getInventory();
                });
                _this.onFilterChanged.subscribe(function (filter) {
                    _this.filterBy = filter;
                    _this.getInventory();
                });
                resolve();
            }, reject);
        });
    };
    InventoryService.prototype.getInventory = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/inventory')
                .subscribe(function (response) {
                _this.inventory = response;
                if (_this.searchText && _this.searchText !== '') {
                    _this.inventory = __WEBPACK_IMPORTED_MODULE_4__fuse_utils__["a" /* FuseUtils */].filterArrayByString(_this.inventory, _this.searchText);
                }
                _this.inventory = _this.inventory.map(function (inventory) {
                    return new __WEBPACK_IMPORTED_MODULE_5__inventory_model__["a" /* Inventory */](inventory);
                });
                _this.onInventoryChanged.next(_this.inventory);
                resolve(_this.inventory);
            }, reject);
        });
    };
    /**
     * Toggle selected inventory by id
     * @param id
     */
    InventoryService.prototype.toggleSelectedInventory = function (id) {
        // First, check if we already have that todo as selected...
        if (this.selectedInventory.length > 0) {
            var index = this.selectedInventory.indexOf(id);
            if (index !== -1) {
                this.selectedInventory.splice(index, 1);
                // Trigger the next event
                this.onSelectedInventoryChanged.next(this.selectedInventory);
                // Return
                return;
            }
        }
        // If we don't have it, push as selected
        this.selectedInventory.push(id);
        // Trigger the next event
        this.onSelectedInventoryChanged.next(this.selectedInventory);
    };
    /**
     * Toggle select all
     */
    InventoryService.prototype.toggleSelectAll = function () {
        if (this.selectedInventory.length === this.inventory.length) {
            this.deselectInventory();
        }
        else {
            this.selectInventory();
        }
    };
    InventoryService.prototype.selectInventory = function (filterParameter, filterValue) {
        var _this = this;
        this.selectedInventory = [];
        // If there is no filter, select all todos
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedInventory = [];
            this.inventory.map(function (inventory) {
                _this.selectedInventory.push(inventory.id);
            });
        }
        else {
            /* this.selectedInventory.push(...
                 this.inventory.filter(todo => {
                     return todo[filterParameter] === filterValue;
                 })
             );*/
        }
        // Trigger the next event
        this.onSelectedInventoryChanged.next(this.selectedInventory);
    };
    InventoryService.prototype.updateInventory = function (inventory) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/receivings/' + inventory.id, __assign({}, inventory))
                .subscribe(function (response) {
                _this.getInventory();
                resolve(response);
            });
        });
    };
    InventoryService.prototype.deselectInventory = function () {
        this.selectedInventory = [];
        // Trigger the next event
        this.onSelectedInventoryChanged.next(this.selectedInventory);
    };
    InventoryService.prototype.deleteInventory = function (inventory) {
        var inventoryIndex = this.inventory.indexOf(inventory);
        this.inventory.splice(inventoryIndex, 1);
        this.onInventoryChanged.next(this.inventory);
    };
    InventoryService.prototype.deleteSelectedInventory = function () {
        var _loop_1 = function (inventoryId) {
            var inventory = this_1.inventory.find(function (_inventory) {
                return _inventory.id === inventoryId;
            });
            var inventoryIndex = this_1.inventory.indexOf(inventory);
            this_1.inventory.splice(inventoryIndex, 1);
        };
        var this_1 = this;
        for (var _i = 0, _a = this.selectedInventory; _i < _a.length; _i++) {
            var inventoryId = _a[_i];
            _loop_1(inventoryId);
        }
        this.onInventoryChanged.next(this.inventory);
        this.deselectInventory();
    };
    InventoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], InventoryService);
    return InventoryService;
}());



/***/ })

});
//# sourceMappingURL=inventory.module.chunk.js.map