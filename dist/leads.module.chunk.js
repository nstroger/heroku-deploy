webpackJsonp(["leads.module"],{

/***/ "./src/app/main/content/apps/leads/lead.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lead; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");

var Lead = /** @class */ (function () {
    function Lead(lead) {
        {
            this.id = lead.id || __WEBPACK_IMPORTED_MODULE_0__fuse_utils__["a" /* FuseUtils */].generateGUID();
            this.firstname = lead.firstname || '';
            this.lastname = lead.lastname || '';
            this.title = lead.title || '';
            this.salesRep = lead.salesRep || '';
            this.department = lead.department || '';
            this.accountName = lead.accountName || '';
            this.email = lead.email || '';
            this.phoneOffice = lead.phoneOffice || '';
            this.phoneMobile = lead.phoneMobile || '';
            this.address = lead.address || '';
            this.dateCreated = lead.dateCreated || '';
            this.notes = lead.notes || '';
            this.createdBy = lead.createdBy || '';
            this.leadSource = lead.leadSource || '';
            this.referredBy = lead.referredBy || '';
            this.status = lead.status || '';
            this.description = lead.description || '';
            this.fax = lead.fax || '';
            this.website = lead.website || '';
            this.city = lead.city || '';
            this.state = lead.state || '';
            this.postalCode = lead.postalCode || '';
            this.country = lead.country || '';
            this.address1 = lead.address1 || '';
            this.city1 = lead.city1 || '';
            this.state1 = lead.state1 || '';
            this.postalCode1 = lead.postalCode1 || '';
            this.country1 = lead.country1 || '';
        }
    }
    return Lead;
}());



/***/ }),

/***/ "./src/app/main/content/apps/leads/leads-form/leads-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0 toolbar-margin\">\n        <mat-toolbar-row class=\"toolbar-row\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\n            <button mat-button class=\"mat-icon-button\"\n                    (click)=\"dialogRef.close()\"\n                    aria-label=\"Close dialog\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </mat-toolbar-row>\n    </mat-toolbar>\n    \n    <!-- CONTENT -->\n    <mat-dialog-content class=\"p-24 m-0\">\n\n        <form name=\"leadsForm\" [formGroup]=\"leadsForm\" class=\"product w-100-p\" fxLayout=\"column\" fxFlex>\n\n            <mat-tab-group>\n\n                <mat-tab label=\"Basic Info\">\n                    <div class=\"tab-content p-24\" fxLayout=\"column\">\n\n                        <div class=\"py-16\" fxLayout=\"row\">\n\n                            <mat-icon class=\"mr-12 mt-12\">account_circle</mat-icon>\n                            <mat-form-field fxFlex>\n                                <input name=\"firstname\" formControlName=\"firstname\" placeholder=\"First Name\" matInput required>\n                            </mat-form-field>\n\n                            <mat-icon class=\"mr-12 mt-12\">account_circle</mat-icon>\n                            <mat-form-field fxFlex>\n                                <input name=\"lastname\" formControlName=\"lastname\" placeholder=\"Last Name\" matInput required>\n                            </mat-form-field>\n\n                        </div>\n                        <div class=\"py-16\" fxLayout=\"row\">\n                            <mat-icon class=\"mr-12 mt-12\">star</mat-icon>\n                            <mat-form-field fxFlex>\n                                <input name=\"title\" formControlName=\"title\" matInput placeholder=\"Title\">\n                            </mat-form-field>\n                            \n                            <mat-icon class=\"mr-12 mt-12\">developer_board</mat-icon>\n                            <mat-form-field fxFlex>\n                                <input name=\"department\" formControlName=\"department\" matInput placeholder=\"Department\">\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"py-16\" fxLayout=\"row\">\n                            <mat-icon class=\"mr-12 mt-12\">person</mat-icon>\n                            <mat-form-field fxFlex>\n                                <input name=\"accountName\" formControlName=\"accountName\" matInput placeholder=\"Account Name\">\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"py-16\" fxLayout=\"row\">\n                            <mat-icon class=\"mr-12 mt-12\">email</mat-icon>\n                            <mat-form-field fxFlex>\n                                <input name=\"email\" formControlName=\"email\" matInput type=\"email\" placeholder=\"Email\">\n                            </mat-form-field>\n                            <mat-icon class=\"mr-12 mt-12\">cloud</mat-icon>\n                            <mat-form-field fxFlex>\n                                <mat-select placeholder=\"Lead Source\" formControlName=\"leadSource\">\n                                        <mat-option [value]=\"'Campaign'\">\n                                            Campaign\n                                        </mat-option>                                                                     \n                                        <mat-option [value]=\"'Cold Call'\">\n                                            Cold Call\n                                        </mat-option>                                                                    \n                                </mat-select>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"py-16\" fxLayout=\"row\">\n\n                            <mat-icon class=\"mr-12 mt-12\">dns</mat-icon>\n                            <mat-form-field fxFlex>\n                                <input name=\"referredBy\" formControlName=\"referredBy\" matInput placeholder=\"Referred By\">\n                            </mat-form-field>\n\n                            <mat-icon class=\"mr-12 mt-12\">nature</mat-icon>\n                            <mat-form-field fxFlex>\n                                <mat-select placeholder=\"Status\" formControlName=\"status\">\n                                    <mat-option [value]=\"'Assigned'\">Campaign</mat-option>\n                                    <mat-option [value]=\"'Converted'\">Cold Call</mat-option>\n                                    <mat-option [value]=\"'Dead'\">Dead</mat-option>                                                         \n                                    <mat-option [value]=\"'New'\">New</mat-option>\n                                    <mat-option [value]=\"'Qaulified'\">Qaulified</mat-option>                                                                 \n                                    <mat-option [value]=\"'Qaulifying'\">qualifying</mat-option>\n                                </mat-select>                                                                          \n                            </mat-form-field>\n                \n                        </div>\n\n                        <div class=\"py-16\" fxLayout=\"row\">\n                            <mat-icon class=\"mr-12 mt-12\">note</mat-icon>\n                            <mat-form-field fxFlex>\n                                    <textarea name=\"description\" formControlName=\"description\" placeholder=\"Description\" matInput type=\"text\" rows=\"4\"></textarea>\n                            </mat-form-field>\n                        </div>\n\n                    </div>\n                </mat-tab>\n\n                <mat-tab label=\"Additional Info\">\n                    <div class=\"tab-content p-24\" fusePerfectScrollbar>\n\n                        <div class=\"py-16\" fxLayout=\"row\">\n                            <mat-form-field fxFlex>\n                                <input matInput\n                                    name=\"salesRep\"\n                                    formControlName=\"salesRep\"\n                                    placeholder=\"Sales Rep\">\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex>\n                                <input matInput\n                                    name=\"phoneOffice\"\n                                    formControlName=\"phoneOffice\"\n                                    placeholder=\"Office Phone\">\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"py-16\" fxLayout=\"row\">\n                            <mat-form-field fxFlex>\n                                <input matInput\n                                    name=\"phoneMobile\"\n                                    formControlName=\"phoneMobile\"\n                                    placeholder=\"Mobile Phone\">\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex>\n                                <input matInput\n                                    name=\"fax\"\n                                    formControlName=\"fax\"\n                                    placeholder=\"Fax\">\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex>\n                                <input matInput\n                                    name=\"website\"\n                                    formControlName=\"website\"\n                                    placeholder=\"Website\">\n                            </mat-form-field>\n                        </div>\n                        <p>Billing Address</p>\n                        <div class=\"py-16\" fxLayout=\"row\">\n                            <mat-form-field fxFlex>\n                                    <input matInput\n                                        name=\"address\"\n                                        formControlName=\"address\"\n                                        placeholder=\"Address\">\n                                </mat-form-field>\n\n                            <mat-form-field fxFlex>\n                                <input matInput\n                                    name=\"city\"\n                                    formControlName=\"city\"\n                                    placeholder=\"City\">\n                            </mat-form-field>\n                        </div>\n                        <div class=\"py-16\" fxLayout=\"row\">\n                            <mat-form-field fxFlex>\n                                <input matInput\n                                    name=\"state\"\n                                    formControlName=\"state\"\n                                    placeholder=\"State\">\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex>\n                                <input matInput\n                                    name=\"postalCode\"\n                                    formControlName=\"postalCode\"\n                                    placeholder=\"Postal Code\">\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex>\n                                <input matInput\n                                    name=\"country\"\n                                    formControlName=\"country\"\n                                    placeholder=\"Country\">\n                            </mat-form-field>\n                        </div>\n                        <p>Shipping Address</p>\n                                                                                \n                        <div class=\"py-16\" fxLayout=\"row\">\n                            <mat-form-field fxFlex>\n                                <input matInput\n                                    name=\"address1\"\n                                    formControlName=\"address1\"\n                                    placeholder=\"Address\">\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex>\n                                <input matInput\n                                    name=\"city1\"\n                                    formControlName=\"city1\"\n                                    placeholder=\"City\">\n                            </mat-form-field>\n                        </div>\n                        <div class=\"py-16\" fxLayout=\"row\">\n                            <mat-form-field fxFlex>\n                                <input matInput\n                                    name=\"state1\"\n                                    formControlName=\"state1\"\n                                    placeholder=\"State\">\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex>\n                                <input matInput\n                                    name=\"postalCode1\"\n                                    formControlName=\"postalCode1\"\n                                    placeholder=\"Postal Code\">\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex>\n                                <input matInput\n                                    name=\"country1\"\n                                    formControlName=\"country1\"\n                                    placeholder=\"Country\">\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </mat-tab>\n\n            </mat-tab-group>\n        </form>\n\n    </mat-dialog-content>\n    <!-- / CONTENT -->\n\n    <mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n        <button *ngIf=\"action !=='edit'\"\n                mat-raised-button\n                (click)=\"dialogRef.close(leadsForm)\"\n                class=\"save-button mat-accent\"\n                [disabled]=\"leadsForm.invalid\"\n                aria-label=\"SAVE\">\n            SAVE\n        </button>\n\n        <button *ngIf=\"action ==='edit'\"\n                mat-raised-button\n                (click)=\"dialogRef.close(['save',leadsForm])\"\n                class=\"save-button mat-accent\"\n                [disabled]=\"leadsForm.invalid\"\n                aria-label=\"SAVE\">\n            SAVE\n        </button>\n\n        <button *ngIf=\"action ==='edit'\"\n                mat-button\n                class=\"mat-icon-button\"\n                (click)=\"dialogRef.close(['delete',leadsForm])\"\n                aria-label=\"Delete\"\n                matTooltip=\"Delete\">\n            <mat-icon>delete</mat-icon>\n        </button>\n\n    </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/apps/leads/leads-form/leads-form.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.lead-form-dialog {\n  width: 100%; }\n.lead-form-dialog .mat-dialog-container {\n    padding: 0;\n    overflow: hidden; }\n.lead-form-dialog .mat-dialog-container .mat-toolbar {\n      min-height: initial;\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none; }\n.lead-form-dialog .mat-dialog-container .toolbar-bottom {\n      height: auto; }\n.lead-form-dialog .mat-dialog-container .mat-form-field {\n      padding-right: 8px;\n      padding-left: 8px; }\n.lead-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/leads/leads-form/leads-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadsFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lead_model__ = __webpack_require__("./src/app/main/content/apps/leads/lead.model.ts");
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




var LeadsFormComponent = /** @class */ (function () {
    function LeadsFormComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = 'Edit Leads';
            this.lead = data.lead;
        }
        else {
            this.dialogTitle = 'Create Leads';
            this.lead = new __WEBPACK_IMPORTED_MODULE_3__lead_model__["a" /* Lead */]({});
        }
        this.leadsForm = this.createLeadsForm();
    }
    LeadsFormComponent.prototype.createLeadsForm = function () {
        return this.formBuilder.group({
            id: this.lead.id,
            firstname: this.lead.firstname,
            lastname: this.lead.lastname,
            title: this.lead.title,
            salesRep: this.lead.salesRep,
            department: this.lead.department,
            accountName: this.lead.accountName,
            email: this.lead.email,
            phoneOffice: this.lead.phoneOffice,
            phoneMobile: this.lead.phoneMobile,
            address: this.lead.address,
            dateCreated: this.lead.dateCreated,
            notes: this.lead.notes,
            createdBy: this.lead.createdBy,
            leadSource: this.lead.leadSource,
            referredBy: this.lead.referredBy,
            status: this.lead.status,
            description: this.lead.description,
            fax: this.lead.fax,
            website: this.lead.website,
            city: this.lead.city,
            state: this.lead.state,
            postalCode: this.lead.postalCode,
            country: this.lead.country,
            address1: this.lead.address1,
            city1: this.lead.city,
            state1: this.lead.state,
            postalCode1: this.lead.postalCode,
            country1: this.lead.country,
        });
    };
    LeadsFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'leads-form-dialog',
            template: __webpack_require__("./src/app/main/content/apps/leads/leads-form/leads-form.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/leads/leads-form/leads-form.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], LeadsFormComponent);
    return LeadsFormComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/leads/leads-list/leads-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-table class=\"leads-table\"\n            #table [dataSource]=\"dataSource\"\n            matSort\n            [@animateStagger]=\"{value:'50'}\"\n            fusePerfectScrollbar>\n\n    <!-- Checkbox Column -->\n    <ng-container cdkColumnDef=\"checkbox\">\n        <mat-header-cell *cdkHeaderCellDef>\n            <mat-checkbox (change)=\"toggleAll($event)\"\n                        [checked]=\"selectedLeads.length > 0 && selectedLeads.length === paginator.length\"\n                        [indeterminate]=\"selectedLeads.length > 0 && selectedLeads.length < paginator .length\">\n            </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\">\n            <mat-checkbox [(ngModel)]=\"checkboxes[row.id]\"\n                          (ngModelChange)=\"onSelectedChange(row.id)\"\n                          (click)=\"$event.stopPropagation()\">\n            </mat-checkbox>\n        </mat-cell>\n    </ng-container>       \n\n    <!-- Name Column -->\n    <ng-container cdkColumnDef=\"name\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header>Name</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\">\n            <p class=\"text-truncate fong-weight-600\">{{row.firstname}} {{row.lastname}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Title Column -->\n    <ng-container cdkColumnDef=\"title\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header>Title</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\">\n            <p class=\"text-truncate\">{{row.title}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Referred By Column -->\n    <ng-container cdkColumnDef=\"referredBy\">\n        <mat-header-cell *cdkHeaderCellDef fxHide mat-sort-header fxShow.gt-md>Referred By</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\" fxHide fxShow.gt-md>\n            <p class=\"category text-truncate\">{{row.referredBy}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Status Column -->\n    <ng-container cdkColumnDef=\"status\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>Status</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\" fxHide fxShow.gt-xs>\n            <p class=\"text text-truncate\">{{row.status}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Account Name Column -->\n    <ng-container cdkColumnDef=\"accountName\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-sm>Account Name</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\" fxHide fxShow.gt-sm>\n            <p class=\"text text-truncate\">{{row.accountName}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Office Phone Column -->\n    <ng-container cdkColumnDef=\"phone\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-sm>Office Phone</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\" fxHide fxShow.gt-sm>\n            <p class=\"text text-truncate\">{{row.phoneOffice}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Email Column -->\n    <ng-container cdkColumnDef=\"email\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-sm>Email</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\" fxHide fxShow.gt-sm>\n            <p class=\"text text-truncate\">{{row.email}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Sales Rep Column -->\n    <ng-container cdkColumnDef=\"salesRep\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-sm>Sales Rep</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\" fxHide fxShow.gt-sm>\n            <p class=\"text text-truncate\">{{row.salesRep}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Date Created Column -->\n    <ng-container cdkColumnDef=\"dateCreated\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-sm>Date Created</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\" fxHide fxShow.gt-sm>\n            <p class=\"text text-truncate\">{{row.dateCreated}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Email Column -->\n    <ng-container cdkColumnDef=\"createdBy\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-sm>Created By</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\" fxHide fxShow.gt-sm>\n            <p class=\"text text-truncate\">{{row.createdBy}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- More Buttons Column -->\n    <ng-container cdkColumnDef=\"buttons\">\n        <mat-header-cell *cdkHeaderCellDef></mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\">\n            <div fxFlex=\"row\" fxLayoutAlign=\"end center\">\n                <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\"\n                        (click)=\"$event.stopPropagation();\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n\n                <mat-menu #moreMenu=\"matMenu\">\n                    <button mat-menu-item aria-label=\"remove\" (click)=\"deleteLead(row)\">\n                        <mat-icon>delete</mat-icon>\n                        <span>Remove</span>\n                    </button>\n                </mat-menu>\n            </div>\n\n        </mat-cell>\n    </ng-container>\n\n    <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n    <mat-row *cdkRowDef=\"let row; columns: displayedColumns;\"\n        class=\"lead\"\n        (click)=\"editLead(row)\"\n        matRipple\n        [@animate]=\"{value:'*',params:{y:'100%'}}\">\n    </mat-row>\n\n</mat-table>\n\n<mat-paginator #paginator\n                [length]=\"dataSource.total\"\n                [pageIndex]=\"0\"\n                [pageSize]=\"10\"\n                [pageSizeOptions]=\"[5, 10, 25, 100]\">\n</mat-paginator>"

/***/ }),

/***/ "./src/app/main/content/apps/leads/leads-list/leads-list.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nfuse-leads-list {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative; }\nfuse-leads-list .mat-table {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    padding-top: 64px;\n    position: static;\n    overflow-y: auto; }\nfuse-leads-list .mat-table .mat-header-row {\n      background: white;\n      width: 100%;\n      padding-right: 8px;\n      position: absolute;\n      top: 0;\n      z-index: 1; }\nfuse-leads-list .mat-table .mat-column-checkbox {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 48px;\n              flex: 0 1 48px; }\nfuse-leads-list .mat-table .mat-column-checkbox .mat-checkbox-ripple {\n        display: none !important; }\nfuse-leads-list .mat-table .mat-column-avatar {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 64px;\n              flex: 0 1 64px; }\nfuse-leads-list .mat-table .mat-column-buttons {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 80px;\n              flex: 0 1 80px; }\nfuse-leads-list .mat-table .mat-row {\n      position: relative;\n      cursor: pointer;\n      padding: 8px 8px 8px 24px;\n      z-index: 0; }\nfuse-leads-list .mat-table .mat-row .mat-cell {\n        min-width: 0; }\nfuse-leads-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n          -webkit-box-flex: 0;\n              -ms-flex: 0 1 auto;\n                  flex: 0 1 auto;\n          padding: 0 24px 0 0; }\n@media screen and (min-width: 1280px) {\n            fuse-leads-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n              display: none; } }\n"

/***/ }),

/***/ "./src/app/main/content/apps/leads/leads-list/leads-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseLeadsListComponent; });
/* unused harmony export LeadsDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__leads_form_leads_form_component__ = __webpack_require__("./src/app/main/content/apps/leads/leads-form/leads-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__leads_service__ = __webpack_require__("./src/app/main/content/apps/leads/leads.service.ts");
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











var FuseLeadsListComponent = /** @class */ (function () {
    function FuseLeadsListComponent(leadsService, router, dialog) {
        var _this = this;
        this.leadsService = leadsService;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['checkbox', 'name', 'title', 'referredBy', 'status', 'accountName', 'phone', 'email', 'salesRep', 'dateCreated', 'createdBy', 'buttons'];
        this.onLeadsChangedSubscription =
            this.leadsService.onLeadsChanged.subscribe(function (leads) {
                _this.leads = leads;
                _this.checkboxes = {};
                leads.map(function (lead) {
                    _this.checkboxes[lead.id] = false;
                });
            });
        this.onSelectedLeadsChangedSubscription =
            this.leadsService.onSelectedLeadsChanged.subscribe(function (selectedLeads) {
                for (var id in _this.checkboxes) {
                    if (!_this.checkboxes.hasOwnProperty(id)) {
                        continue;
                    }
                    _this.checkboxes[id] = selectedLeads.includes(id);
                }
                _this.selectedLeads = selectedLeads;
            });
    }
    FuseLeadsListComponent.prototype.ngOnInit = function () {
        this.dataSource = new LeadsDataSource(this.leadsService, this.paginator, this.sort);
    };
    FuseLeadsListComponent.prototype.ngOnDestroy = function () {
        this.onLeadsChangedSubscription.unsubscribe();
        this.onSelectedLeadsChangedSubscription.unsubscribe();
    };
    FuseLeadsListComponent.prototype.editLead = function (lead) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__leads_form_leads_form_component__["a" /* LeadsFormComponent */], {
            panelClass: 'lead-form-dialog',
            data: {
                lead: lead,
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
                    _this.leadsService.updateLead(__assign({}, formData.getRawValue(), { created: lead.created }));
                    break;
                /**
                 * Delete
                 */
                case 'delete':
                    _this.deleteLead(lead);
                    break;
            }
        });
    };
    /**
     * Delete Lead
     */
    FuseLeadsListComponent.prototype.deleteLead = function (lead) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.leadsService.deleteLead(lead);
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseLeadsListComponent.prototype.onSelectedChange = function (leadId) {
        this.leadsService.toggleSelectedLead(leadId);
    };
    FuseLeadsListComponent.prototype.toggleAll = function (ev) {
        if (ev) {
            this.leadsService.toggleSelectAll();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], FuseLeadsListComponent.prototype, "dialogContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatPaginator */])
    ], FuseLeadsListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["P" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["P" /* MatSort */])
    ], FuseLeadsListComponent.prototype, "sort", void 0);
    FuseLeadsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-leads-list',
            template: __webpack_require__("./src/app/main/content/apps/leads/leads-list/leads-list.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/leads/leads-list/leads-list.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_5__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__leads_service__["a" /* LeadsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialog */]])
    ], FuseLeadsListComponent);
    return FuseLeadsListComponent;
}());

var LeadsDataSource = /** @class */ (function (_super) {
    __extends(LeadsDataSource, _super);
    function LeadsDataSource(leadsService, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this.leadsService = leadsService;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this.total = 0;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    LeadsDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.leadsService.onLeadsChanged,
            this._paginator.page,
            this._sort.sortChange
        ];
        this.sub1 = this.leadsService.onLeadsChanged
            .subscribe(function (leads) {
            setTimeout(function () {
                _this.total = leads.length;
            });
        });
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */], displayDataChanges).map(function () {
            var leads = _this.leadsService.leads;
            leads = _this.sortData(leads);
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            leads = leads.slice(startIndex, startIndex + _this._paginator.pageSize);
            return leads;
        });
    };
    LeadsDataSource.prototype.sortData = function (data) {
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
    LeadsDataSource.prototype.disconnect = function () {
        this.sub1.unsubscribe();
    };
    return LeadsDataSource;
}(__WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/main/content/apps/leads/leads.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"leads\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- HEADER -->\n        <div class=\"header white-fg\"\n             fxLayout=\"column\" fxLayoutAlign=\"center center\"\n             fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n            <!-- APP TITLE -->\n            <div class=\"logo my-12 m-sm-0\" fxFlex=\"1 0 auto\" \n                 fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">style</mat-icon>\n                <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Leads</span>\n            </div>\n            <!-- / APP TITLE -->\n\n            <!-- SEARCH -->\n            <div class=\"search-input-wrapper mx-12 m-md-0\"\n                 fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <label for=\"search\" class=\"mr-8\">\n                    <mat-icon class=\"secondary-text\">search</mat-icon>\n                </label>\n                <mat-form-field floatPlaceholder=\"never\" fxFlex=\"1 0 auto\">\n                    <input matInput [formControl]=\"searchInput\" id=\"search\" placeholder=\"Search for leads\">\n                </mat-form-field>\n            </div>\n            <!-- / SEARCH -->\n\n        </div>\n        <!-- / HEADER -->\n\n        <!-- CONTENT  -->\n        <div class=\"content-card mat-white-bg\">\n\n            <!-- Toolbar -->\n            <div class=\"toolbar px-24 py-8\">\n                <div class=\"mail-selection\" fxFlex=\"row\">\n                    <div fxFlex=\"row\" fxLayoutAlign=\"start center\">\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\"\n                                (click)=\"newLead()\">\n                            Add Lead\n                        </button>\n\n                        <button mat-raised-button color=\"warn\"\n                                class=\"text-capitalize mr-8\"\n                                (click)=\"deleteSelectedLeads()\">\n                            Delete Leads\n                        </button>\n\n                    </div>\n\n                    <div class=\"toolbar-separator\"></div>\n\n                    <button mat-button class=\"text-capitalize\" [matMenuTriggerFor]=\"selectMenu\">\n                        More Actions\n                        <mat-icon>arrow_drop_down</mat-icon>\n                    </button>\n                    <mat-menu #selectMenu=\"matMenu\">\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"emailSelected()\">Email\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"massUpdateSelected()\">Mass Update\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"mergeSelected()\">Merge\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"addToTargetListSelected()\">Add To Target List\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"generateLetterSelected()\">Generate Letter\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"addToTargetListSelected()\">Change Log\n                        </button>\n                    </mat-menu>\n                    \n                </div>\n            </div>\n\n            <fuse-leads-list></fuse-leads-list>\n\n        </div>\n        <!-- / CONTENT CARD -->\n    </div>\n    <!-- / CENTER -->\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/apps/leads/leads.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host .header .search-input-wrapper {\n  max-width: 480px; }\n@media (max-width: 599px) {\n  :host .header {\n    height: 176px !important;\n    min-height: 176px !important;\n    max-height: 176px !important; } }\n@media (max-width: 599px) {\n  :host .top-bg {\n    height: 240px; } }\n:host .leads-table {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  overflow: auto; }\n:host .leads-table .mat-header-row {\n    min-height: 64px; }\n:host .leads-table .mat-header-cell {\n    overflow: visible; }\n:host .leads-table .lead {\n    position: relative;\n    cursor: pointer;\n    height: 64px; }\n:host .leads-table .mat-cell {\n    min-width: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    overflow: visible; }\n:host .leads-table .mat-column-id {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 64px;\n            flex: 0 1 64px; }\n:host .leads-table .mat-column-checkbox {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 48px;\n            flex: 0 1 48px; }\n:host .leads-table .mat-column-checkbox .mat-checkbox-ripple {\n      display: none !important; }\n:host .leads-table .mat-column-buttons {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 80px;\n            flex: 0 1 80px; }\n:host .selected-count {\n  width: 200px;\n  margin-left: 24px; }\n:host #add-leads-button {\n  position: absolute;\n  bottom: 52px;\n  right: 22px;\n  padding: 0;\n  z-index: 99; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/leads/leads.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseLeadsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__leads_form_leads_form_component__ = __webpack_require__("./src/app/main/content/apps/leads/leads-form/leads-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__leads_service__ = __webpack_require__("./src/app/main/content/apps/leads/leads.service.ts");
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









var FuseLeadsComponent = /** @class */ (function () {
    function FuseLeadsComponent(leadsService, dialog) {
        this.leadsService = leadsService;
        this.dialog = dialog;
        this.selectedCount = 0;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('');
    }
    FuseLeadsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onSelectedLeadsChangedSubscription =
            this.leadsService.onSelectedLeadsChanged
                .subscribe(function (selectedLeads) {
                _this.selectedCount = selectedLeads.length;
            });
        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function (searchText) {
            _this.leadsService.onSearchTextChanged.next(searchText);
        });
    };
    FuseLeadsComponent.prototype.ngOnDestroy = function () {
        this.onSelectedLeadsChangedSubscription.unsubscribe();
    };
    FuseLeadsComponent.prototype.newLead = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__leads_form_leads_form_component__["a" /* LeadsFormComponent */], {
            panelClass: 'lead-form-dialog',
            data: {
                action: 'new'
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            _this.leadsService.updateLead(__assign({}, response.getRawValue(), { created: new Date().toISOString().slice(0, 10) }));
        });
    };
    FuseLeadsComponent.prototype.deleteSelectedLeads = function () {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete all selected leads?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.leadsService.deleteSelectedLeads();
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseLeadsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-leads',
            template: __webpack_require__("./src/app/main/content/apps/leads/leads.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/leads/leads.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_5__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__leads_service__["a" /* LeadsService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatDialog */]])
    ], FuseLeadsComponent);
    return FuseLeadsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/leads/leads.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadsModule", function() { return LeadsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_components_widget_widget_module__ = __webpack_require__("./src/@fuse/components/widget/widget.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__leads_component__ = __webpack_require__("./src/app/main/content/apps/leads/leads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__leads_service__ = __webpack_require__("./src/app/main/content/apps/leads/leads.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__leads_form_leads_form_component__ = __webpack_require__("./src/app/main/content/apps/leads/leads-form/leads-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__leads_list_leads_list_component__ = __webpack_require__("./src/app/main/content/apps/leads/leads-list/leads-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fuse_components__ = __webpack_require__("./src/@fuse/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_charts__ = __webpack_require__("./node_modules/ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__leads_component__["a" /* FuseLeadsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_7__leads_service__["a" /* LeadsService */]
        }
    },
];
var LeadsModule = /** @class */ (function () {
    function LeadsModule() {
    }
    LeadsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__leads_component__["a" /* FuseLeadsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__leads_form_leads_form_component__["a" /* LeadsFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__leads_list_leads_list_component__["a" /* FuseLeadsListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["H" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["I" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["Q" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["T" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["U" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["O" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["V" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_10__fuse_components__["a" /* FuseConfirmDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["K" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_11__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_4__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__fuse_components_widget_widget_module__["a" /* FuseWidgetModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__leads_service__["a" /* LeadsService */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_8__leads_form_leads_form_component__["a" /* LeadsFormComponent */]]
        })
    ], LeadsModule);
    return LeadsModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/leads/leads.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lead_model__ = __webpack_require__("./src/app/main/content/apps/leads/lead.model.ts");
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






var LeadsService = /** @class */ (function () {
    function LeadsService(http) {
        this.http = http;
        this.onLeadsChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.onSelectedLeadsChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.onUserDataChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.onSearchTextChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.onFilterChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.selectedLeads = [];
    }
    /**
     * The Leads App Main Resolver
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    LeadsService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getLeads().then(function (_a) {
                var files = _a[0];
                _this.onSearchTextChanged.subscribe(function (searchText) {
                    _this.searchText = searchText;
                    _this.getLeads();
                });
                _this.onFilterChanged.subscribe(function (filter) {
                    _this.filterBy = filter;
                    _this.getLeads();
                });
                resolve();
            }, reject);
        });
    };
    LeadsService.prototype.getLeads = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/leads')
                .subscribe(function (response) {
                _this.leads = response;
                if (_this.searchText && _this.searchText !== '') {
                    _this.leads = __WEBPACK_IMPORTED_MODULE_4__fuse_utils__["a" /* FuseUtils */].filterArrayByString(_this.leads, _this.searchText);
                }
                _this.leads = _this.leads.map(function (lead) {
                    return new __WEBPACK_IMPORTED_MODULE_5__lead_model__["a" /* Lead */](lead);
                });
                _this.onLeadsChanged.next(_this.leads);
                resolve(_this.leads);
            }, reject);
        });
    };
    /**
     * Toggle selected lead by id
     * @param id
     */
    LeadsService.prototype.toggleSelectedLead = function (id) {
        // First, check if we already have that todo as selected...
        if (this.selectedLeads.length > 0) {
            var index = this.selectedLeads.indexOf(id);
            if (index !== -1) {
                this.selectedLeads.splice(index, 1);
                // Trigger the next event
                this.onSelectedLeadsChanged.next(this.selectedLeads);
                // Return
                return;
            }
        }
        // If we don't have it, push as selected
        this.selectedLeads.push(id);
        // Trigger the next event
        this.onSelectedLeadsChanged.next(this.selectedLeads);
    };
    /**
     * Toggle select all
     */
    LeadsService.prototype.toggleSelectAll = function () {
        if (this.selectedLeads.length === this.leads.length) {
            this.deselectLeads();
        }
        else {
            this.selectLeads();
        }
    };
    LeadsService.prototype.selectLeads = function (filterParameter, filterValue) {
        var _this = this;
        this.selectedLeads = [];
        // If there is no filter, select all todos
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedLeads = [];
            this.leads.map(function (lead) {
                _this.selectedLeads.push(lead.id);
            });
        }
        else {
            /* this.selectedLeads.push(...
                 this.leads.filter(todo => {
                     return todo[filterParameter] === filterValue;
                 })
             );*/
        }
        // Trigger the next event
        this.onSelectedLeadsChanged.next(this.selectedLeads);
    };
    LeadsService.prototype.updateLead = function (lead) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/leads/' + lead.id, __assign({}, lead))
                .subscribe(function (response) {
                _this.getLeads();
                resolve(response);
            });
        });
    };
    LeadsService.prototype.deselectLeads = function () {
        this.selectedLeads = [];
        // Trigger the next event
        this.onSelectedLeadsChanged.next(this.selectedLeads);
    };
    LeadsService.prototype.deleteLead = function (lead) {
        var leadIndex = this.leads.indexOf(lead);
        this.leads.splice(leadIndex, 1);
        this.onLeadsChanged.next(this.leads);
    };
    LeadsService.prototype.deleteSelectedLeads = function () {
        var _loop_1 = function (leadId) {
            var lead = this_1.leads.find(function (_lead) {
                return _lead.id === leadId;
            });
            var leadIndex = this_1.leads.indexOf(lead);
            this_1.leads.splice(leadIndex, 1);
        };
        var this_1 = this;
        for (var _i = 0, _a = this.selectedLeads; _i < _a.length; _i++) {
            var leadId = _a[_i];
            _loop_1(leadId);
        }
        this.onLeadsChanged.next(this.leads);
        this.deselectLeads();
    };
    LeadsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], LeadsService);
    return LeadsService;
}());



/***/ })

});
//# sourceMappingURL=leads.module.chunk.js.map