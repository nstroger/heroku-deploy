webpackJsonp(["contacts.module.0"],{

/***/ "./src/app/features/contacts/contact-form/contact-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\n            <button mat-button class=\"mat-icon-button\"\n                    (click)=\"dialogRef.close()\"\n                    aria-label=\"Close dialog\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </mat-toolbar-row>\n\n        <mat-toolbar-row\n            class=\"toolbar-bottom py-8 py-sm-16\"\n            fxLayout=\"column\" fxLayoutAlign=\"center center\"\n            *ngIf=\"action==='edit'\"\n        >\n            <div class=\"contact-name\">{{contact.firstName + ' ' + contact.lastName}}</div>\n        </mat-toolbar-row>\n    </mat-toolbar>\n\n    <mat-dialog-content class=\"p-24 m-0\">\n\n        <form [formGroup]=\"contactForm\">\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\">account_circle</mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"firstName\" formControlName=\"firstName\" placeholder=\"First Name\" matInput required>\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\">account_circle</mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"lastName\" formControlName=\"lastName\" placeholder=\"Last Name\" matInput required>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\">work</mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"title\" formControlName=\"title\" matInput placeholder=\"Title\">\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input formControlName=\"department\" matInput placeholder=\"Department\">\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"reportsTo\" formControlName=\"reportsTo\" matInput placeholder=\"Reports To\">\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <mat-select formControlName=\"shippingType\" placeholder=\"Shipping Type\">\n                            <mat-option *ngFor=\"let sType of ['Shipping Type 1', 'Shipping Type 2']\">{{ sType }}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"shippingAcctNumber\" formControlName=\"shippingAcctNumber\" matInput placeholder=\"Shipping Account Number\">\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"salesRep\" formControlName=\"salesRep\" matInput placeholder=\"Assigned To\">\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"phoneWork\" formControlName=\"phoneWork\" matInput placeholder=\"Phone\">\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"phoneFax\" formControlName=\"phoneFax\" matInput placeholder=\"Fax\">\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">           \n                <div fxLayout=\"row\" class=\"textarea-wrapper\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <textarea name=\"description\" formControlName=\"description\" placeholder=\"General Info\" matInput type=\"text\" max-rows=\"4\"></textarea>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"shipAddress1\" formControlName=\"shipAddress1\" matInput placeholder=\"Shipping Address 1\">\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"shipAddress2\" formControlName=\"shipAddress2\" matInput placeholder=\"Shipping Address 2\">\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"shipCity\" formControlName=\"shipCity\" matInput placeholder=\"Shipping City\">\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"shipState\" formControlName=\"shipState\" matInput placeholder=\"Shipping State\">\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"shipPostalcode\" formControlName=\"shipPostalcode\" matInput placeholder=\"Shipping Postal Code\">\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                        <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                        <mat-form-field fxFlex>\n                            <input name=\"shipCountry\" formControlName=\"shipCountry\" matInput placeholder=\"Shipping Country\">\n                        </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"billAddress1\" formControlName=\"billAddress1\" matInput placeholder=\"Billing Address 1\">\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"billAddress2\" formControlName=\"billAddress2\" matInput placeholder=\"Billing Address 2\">\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"billCity\" formControlName=\"billCity\" matInput placeholder=\"Billing City\">\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"billState\" formControlName=\"billState\" matInput placeholder=\"Billing State\">\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"billPostalcode\" formControlName=\"billPostalcode\" matInput placeholder=\"Billing Postal Code\">\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                        <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                        <mat-form-field fxFlex>\n                            <input name=\"billCountry\" formControlName=\"billCountry\" matInput placeholder=\"Billing Country\">\n                        </mat-form-field>\n                </div>\n            </div>\n        </form>\n\n    </mat-dialog-content>\n\n    <mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n        <button *ngIf=\"action !=='edit'\"\n                mat-raised-button\n                (click)=\"dialogRef.close(contactForm)\"\n                class=\"save-button mat-accent\"\n                [disabled]=\"contactForm.invalid\"\n                aria-label=\"SAVE\">\n            SAVE\n        </button>\n\n        <button *ngIf=\"action ==='edit'\"\n                mat-raised-button\n                (click)=\"dialogRef.close(['save',contactForm])\"\n                class=\"save-button mat-accent\"\n                [disabled]=\"contactForm.invalid\"\n                aria-label=\"SAVE\">\n            SAVE\n        </button>\n\n        <button *ngIf=\"action ==='edit'\"\n                mat-button\n                class=\"mat-icon-button\"\n                (click)=\"dialogRef.close(['delete',contactForm])\"\n                aria-label=\"Delete\"\n                matTooltip=\"Delete\">\n            <mat-icon>delete</mat-icon>\n        </button>\n\n    </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "./src/app/features/contacts/contact-form/contact-form.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.contact-form-dialog {\n  width: 100%; }\n.contact-form-dialog .mat-dialog-container {\n    padding: 0;\n    overflow: hidden; }\n.contact-form-dialog .mat-dialog-container .mat-toolbar {\n      min-height: initial;\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none; }\n.contact-form-dialog .mat-dialog-container .toolbar-bottom {\n      height: auto; }\n.contact-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/features/contacts/contact-form/contact-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFormDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_model__ = __webpack_require__("./src/app/features/contacts/contact.model.ts");
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




var ContactFormDialogComponent = /** @class */ (function () {
    function ContactFormDialogComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = 'Edit Contact';
            this.contact = data.contact;
        }
        else {
            this.dialogTitle = 'New Contact';
            this.contact = new __WEBPACK_IMPORTED_MODULE_3__contact_model__["a" /* Contact */]({});
        }
        this.contactForm = this.createContactForm();
    }
    ContactFormDialogComponent.prototype.createContactForm = function () {
        return this.formBuilder.group({
            id: [this.contact.id],
            firstName: [this.contact.firstName],
            lastName: [this.contact.lastName],
            title: [this.contact.title],
            department: [this.contact.department],
            reportsTo: [this.contact.reportsTo],
            shippingType: [this.contact.shippingType],
            shippingAcctNumber: [this.contact.shippingAcctNumber],
            salesRep: [this.contact.salesRep],
            phoneWork: [this.contact.phoneWork],
            phoneFax: [this.contact.phoneFax],
            description: [this.contact.description],
            shipAddress1: [this.contact.shipAddress1],
            shipAddress2: [this.contact.shipAddress2],
            shipCity: [this.contact.shipCity],
            shipState: [this.contact.shipState],
            shipPostalcode: [this.contact.shipPostalcode],
            shipCountry: [this.contact.shipCountry],
            billAddress1: [this.contact.billAddress1],
            billAddress2: [this.contact.billAddress2],
            billCity: [this.contact.billCity],
            billState: [this.contact.billState],
            billPostalcode: [this.contact.billPostalcode],
            billCountry: [this.contact.billCountry],
            email: [this.contact.email],
            dateCreated: [this.contact.dateCreated],
            dateModified: [this.contact.dateModified]
        });
    };
    ContactFormDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'contact-form-dialog',
            template: __webpack_require__("./src/app/features/contacts/contact-form/contact-form.component.html"),
            styles: [__webpack_require__("./src/app/features/contacts/contact-form/contact-form.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], ContactFormDialogComponent);
    return ContactFormDialogComponent;
}());



/***/ }),

/***/ "./src/app/features/contacts/contact-list/contact-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-table #table matSort\n           [dataSource]=\"dataSource\"\n           [@animateStagger]=\"{value:'50'}\">\n    <!-- Checkbox Column -->\n    <ng-container cdkColumnDef=\"checkbox\">\n        <mat-header-cell *cdkHeaderCellDef>\n            <mat-checkbox (change)=\"toggleAll($event)\"\n                        [checked]=\"selectedContacts.length > 0 && selectedContacts.length === paginator.length\"\n                        [indeterminate]=\"selectedContacts.length > 0 && selectedContacts.length < paginator .length\">\n            </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\">\n            <mat-checkbox [(ngModel)]=\"checkboxes[contact.id]\" (ngModelChange)=\"onSelectedChange(contact.id)\"\n                          (click)=\"$event.stopPropagation()\">\n            </mat-checkbox>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"firstName\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header>First Name</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\">\n            <p class=\"text-truncate font-weight-600\">\n                {{contact.firstName}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"lastName\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header>Last Name</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\">\n            <p class=\"text-truncate font-weight-600\">\n                {{contact.lastName}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"title\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>Title</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-xs>\n            <p class=\"email text-truncate\">\n                {{contact.title}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"shipCity\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>City</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-xs>\n            <p class=\"email text-truncate\">\n                {{contact.shipCity}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"shipState\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-sm>State</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-sm>\n            <p class=\"phone text-truncate\">\n                {{contact.shipState}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"leadSource\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-sm>Lead Source</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-sm>\n            <p class=\"phone text-truncate\">\n                {{contact.leadSource}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"phoneWork\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>Phone</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-xs>\n            <p class=\"company text-truncate\">\n                {{contact.phoneWork}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"email\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-xs>Email</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-xs>\n            <p class=\"company text-truncate\">\n                {{contact.email}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"salesRep\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-md>Assigned To</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-md>\n            <p class=\"company text-truncate\">\n                {{contact.salesRep}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"dateCreated\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-md>Created</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-md>\n            <p class=\"company text-truncate\">\n                {{contact.dateCreated | date}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"dateModified\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header fxHide fxShow.gt-md>Modified</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-md>\n            <p class=\"company text-truncate\">\n                {{contact.dateModified | date}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"buttons\">\n        <mat-header-cell *cdkHeaderCellDef class=\"w-40\"></mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\" class=\"w-40\">\n            <div fxFlex=\"row\" fxLayoutAlign=\"end center\">\n                <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\"\n                        (click)=\"$event.stopPropagation();\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n\n                <mat-menu #moreMenu=\"matMenu\">\n                    <button mat-menu-item aria-label=\"remove\" (click)=\"deleteContact(contact)\">\n                        <mat-icon>delete</mat-icon>\n                        <span>Remove</span>\n                    </button>\n                </mat-menu>\n            </div>\n\n        </mat-cell>\n    </ng-container>\n\n    <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *cdkRowDef=\"let contact; columns: displayedColumns;\"\n             class=\"contact\"\n             (click)=\"editContact(contact)\"\n             [ngClass]=\"{'mat-light-blue-50-bg':checkboxes[contact.id]}\"\n             matRipple\n             [@animate]=\"{value:'*',params:{y:'100%'}}\">\n    </mat-row>\n</mat-table>\n\n<mat-paginator #paginator\n                [length]=\"dataSource.total\"\n                [pageSize]=\"10\"\n                [pageSizeOptions]=\"[5, 10, 20]\"\n                [showFirstLastButtons]=\"true\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/features/contacts/contact-list/contact-list.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nfuse-contacts-contact-list {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative; }\nfuse-contacts-contact-list .mat-table {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    padding-top: 64px;\n    position: static;\n    overflow-y: auto; }\nfuse-contacts-contact-list .mat-table .mat-header-row {\n      background: white;\n      width: 100%;\n      padding-right: 8px;\n      position: absolute;\n      top: 0;\n      z-index: 1; }\nfuse-contacts-contact-list .mat-table .mat-column-checkbox {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 48px;\n              flex: 0 1 48px; }\nfuse-contacts-contact-list .mat-table .mat-column-checkbox .mat-checkbox-ripple {\n        display: none !important; }\nfuse-contacts-contact-list .mat-table .mat-column-avatar {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 64px;\n              flex: 0 1 64px; }\nfuse-contacts-contact-list .mat-table .mat-column-buttons {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 80px;\n              flex: 0 1 80px; }\nfuse-contacts-contact-list .mat-table .mat-row {\n      position: relative;\n      cursor: pointer;\n      padding: 8px 8px 8px 24px;\n      z-index: 0; }\nfuse-contacts-contact-list .mat-table .mat-row .mat-cell {\n        min-width: 0; }\nfuse-contacts-contact-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n          -webkit-box-flex: 0;\n              -ms-flex: 0 1 auto;\n                  flex: 0 1 auto;\n          padding: 0 24px 0 0; }\n@media screen and (min-width: 1280px) {\n            fuse-contacts-contact-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n              display: none; } }\nfuse-contacts-contact-list .mat-table .mat-sort-header-container {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding-right: 16px; }\n"

/***/ }),

/***/ "./src/app/features/contacts/contact-list/contact-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseContactsContactListComponent; });
/* unused harmony export ContactsDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_form_contact_form_component__ = __webpack_require__("./src/app/features/contacts/contact-form/contact-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contacts_service__ = __webpack_require__("./src/app/features/contacts/contacts.service.ts");
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











var FuseContactsContactListComponent = /** @class */ (function () {
    function FuseContactsContactListComponent(contactsService, router, dialog) {
        var _this = this;
        this.contactsService = contactsService;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['checkbox', 'firstName', 'lastName', 'title', 'shipCity', 'shipState', 'leadSource', 'phoneWork', 'email', 'salesRep', 'dateCreated', 'dateModified', 'buttons'];
        this.onContactsChangedSubscription =
            this.contactsService.onContactsChanged.subscribe(function (contacts) {
                _this.contacts = contacts;
                _this.checkboxes = {};
                contacts.map(function (contact) {
                    _this.checkboxes[contact.id] = false;
                });
            });
        this.onSelectedContactsChangedSubscription =
            this.contactsService.onSelectedContactsChanged.subscribe(function (selectedContacts) {
                for (var id in _this.checkboxes) {
                    if (!_this.checkboxes.hasOwnProperty(id)) {
                        continue;
                    }
                    _this.checkboxes[id] = selectedContacts.includes(id);
                }
                _this.selectedContacts = selectedContacts;
            });
        this.onUserDataChangedSubscription =
            this.contactsService.onUserDataChanged.subscribe(function (user) {
                _this.user = user;
            });
    }
    FuseContactsContactListComponent.prototype.ngOnInit = function () {
        this.dataSource = new ContactsDataSource(this.contactsService, this.paginator, this.sort);
    };
    FuseContactsContactListComponent.prototype.ngOnDestroy = function () {
        this.onContactsChangedSubscription.unsubscribe();
        this.onSelectedContactsChangedSubscription.unsubscribe();
        this.onUserDataChangedSubscription.unsubscribe();
    };
    FuseContactsContactListComponent.prototype.editContact = function (contact) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__contact_form_contact_form_component__["a" /* ContactFormDialogComponent */], {
            panelClass: 'contact-form-dialog',
            data: {
                contact: contact,
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
                    _this.contactsService.updateContact(__assign({}, formData.getRawValue(), { created: contact.created }));
                    break;
                /**
                 * Delete
                 */
                case 'delete':
                    _this.deleteContact(contact);
                    break;
            }
        });
    };
    /**
     * Delete Contact
     */
    FuseContactsContactListComponent.prototype.deleteContact = function (contact) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.contactsService.deleteContact(contact);
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseContactsContactListComponent.prototype.onSelectedChange = function (contactId) {
        this.contactsService.toggleSelectedContact(contactId);
    };
    FuseContactsContactListComponent.prototype.toggleStar = function (contactId) {
        if (this.user.starred.includes(contactId)) {
            this.user.starred.splice(this.user.starred.indexOf(contactId), 1);
        }
        else {
            this.user.starred.push(contactId);
        }
        this.contactsService.updateUserData(this.user);
    };
    FuseContactsContactListComponent.prototype.toggleAll = function (ev) {
        if (ev) {
            this.contactsService.toggleSelectAll();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], FuseContactsContactListComponent.prototype, "dialogContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatPaginator */])
    ], FuseContactsContactListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["P" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["P" /* MatSort */])
    ], FuseContactsContactListComponent.prototype, "sort", void 0);
    FuseContactsContactListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-contacts-contact-list',
            template: __webpack_require__("./src/app/features/contacts/contact-list/contact-list.component.html"),
            styles: [__webpack_require__("./src/app/features/contacts/contact-list/contact-list.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_5__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__contacts_service__["a" /* ContactsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialog */]])
    ], FuseContactsContactListComponent);
    return FuseContactsContactListComponent;
}());

var ContactsDataSource = /** @class */ (function (_super) {
    __extends(ContactsDataSource, _super);
    function ContactsDataSource(contactsService, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this.contactsService = contactsService;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this.total = 0;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ContactsDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.contactsService.onContactsChanged,
            this._paginator.page,
            this._sort.sortChange
        ];
        this.sub1 = this.contactsService.onContactsChanged
            .subscribe(function (contacts) {
            setTimeout(function () {
                _this.total = contacts.length;
            });
        });
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */], displayDataChanges).map(function () {
            var contacts = _this.contactsService.contacts;
            contacts = _this.sortData(contacts);
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            contacts = contacts.slice(startIndex, startIndex + _this._paginator.pageSize);
            return contacts;
        });
    };
    ContactsDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var valueA, valueB;
            switch (_this._sort.active) {
                case 'dateCreated':
                case 'dateModified':
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
    ContactsDataSource.prototype.disconnect = function () {
        this.sub1.unsubscribe();
    };
    return ContactsDataSource;
}(__WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/features/contacts/contact.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");

var Contact = /** @class */ (function () {
    function Contact(contact) {
        {
            this.id = contact.id || __WEBPACK_IMPORTED_MODULE_0__fuse_utils__["a" /* FuseUtils */].generateGUID();
            this.firstName = contact.firstName || '';
            this.lastName = contact.lastName || '';
            this.title = contact.title || '';
            this.department = contact.department || '';
            this.reportsTo = contact.reportsTo || '';
            this.shippingType = contact.shippingType || '';
            this.shippingAcctNumber = contact.shippingAcctNumber || '';
            this.salesRep = contact.salesRep || '';
            this.phoneWork = contact.phoneWork || '';
            this.phoneFax = contact.phoneFax || '';
            this.description = contact.description || '';
            this.shipAddress1 = contact.shipAddress1 || '';
            this.shipAddress2 = contact.shipAddress2 || '';
            this.shipCity = contact.shipCity || '';
            this.shipState = contact.shipState || '';
            this.shipPostalcode = contact.shipPostalcode || '';
            this.shipCountry = contact.shipCountry || '';
            this.billAddress1 = contact.billAddress1 || '';
            this.billAddress2 = contact.billAddress2 || '';
            this.billCity = contact.billCity || '';
            this.billState = contact.billState || '';
            this.billPostalcode = contact.billPostalcode || '';
            this.billCountry = contact.billCountry || '';
            this.email = contact.email || '';
            this.dateCreated = contact.dateCreated || '';
            this.dateModified = contact.dateModified || '';
        }
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/features/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contacts\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- HEADER -->\n        <div class=\"header white-fg\"\n             fxLayout=\"column\" fxLayoutAlign=\"center center\"\n             fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n            <!-- APP TITLE -->\n            <div class=\"logo my-12 m-sm-0\" fxFlex=\"1 0 auto\" \n                 fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">account_box</mat-icon>\n                <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Contacts</span>\n            </div>\n            <!-- / APP TITLE -->\n\n            <!-- SEARCH -->\n            <div class=\"search-input-wrapper mx-12 m-md-0\"\n                 fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <label for=\"search\" class=\"mr-8\">\n                    <mat-icon class=\"secondary-text\">search</mat-icon>\n                </label>\n                <mat-form-field floatPlaceholder=\"never\" fxFlex=\"1 0 auto\">\n                    <input matInput [formControl]=\"searchInput\" id=\"search\" placeholder=\"Search for contacts\">\n                </mat-form-field>\n            </div>\n            <!-- / SEARCH -->\n\n        </div>\n        <!-- / HEADER -->\n\n        <!-- CONTENT  -->\n        <div class=\"content-card mat-white-bg\">\n\n            <div class=\"toolbar px-24 py-8\">\n                <div class=\"mail-selection\" fxFlex=\"row\">\n                    <div fxFlex=\"row\" fxLayoutAlign=\"start center\">\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\"\n                                (click)=\"newContact()\">\n                            Add Contact\n                        </button>\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\">\n                            Quote/Order\n                        </button>\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\">\n                            Add to QB\n                        </button>\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\">\n                            Generate Letter\n                        </button>\n                        \n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\">\n                            Find Duplicates\n                        </button>\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\"\n                                (click)=\"deleteSelectedContacts()\">\n                            Delete Contacts\n                        </button>\n                    </div>\n\n                    <div class=\"toolbar-separator\"></div>\n\n                    <button mat-button class=\"text-capitalize\" [matMenuTriggerFor]=\"selectMenu\">\n                        More Actions\n                        <mat-icon>arrow_drop_down</mat-icon>\n                    </button>\n                    <mat-menu #selectMenu=\"matMenu\">\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"emailSelected()\">Email\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"massUpdateSelected()\">Mass Update\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"mergeSelected()\">Merge\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"addToTargetListSelected()\">Add To Target List\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"generateLetterSelected()\">Generate Letter\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"addToTargetListSelected()\">Change Log\n                        </button>\n                    </mat-menu>\n                    \n                </div>\n            </div>\n\n            <fuse-contacts-contact-list></fuse-contacts-contact-list>\n\n        </div>\n        <!-- / CONTENT CARD -->\n    </div>\n    <!-- / CENTER -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/contacts/contacts.component.scss":
/***/ (function(module, exports) {

module.exports = "#contacts .content {\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/features/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_form_contact_form_component__ = __webpack_require__("./src/app/features/contacts/contact-form/contact-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contacts_service__ = __webpack_require__("./src/app/features/contacts/contacts.service.ts");
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









var FuseContactsComponent = /** @class */ (function () {
    function FuseContactsComponent(contactsService, dialog) {
        this.contactsService = contactsService;
        this.dialog = dialog;
        this.selectedCount = 0;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('');
    }
    FuseContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onSelectedContactsChangedSubscription =
            this.contactsService.onSelectedContactsChanged
                .subscribe(function (selectedContacts) {
                _this.selectedCount = selectedContacts.length;
            });
        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function (searchText) {
            _this.contactsService.onSearchTextChanged.next(searchText);
        });
    };
    FuseContactsComponent.prototype.ngOnDestroy = function () {
        this.onSelectedContactsChangedSubscription.unsubscribe();
    };
    FuseContactsComponent.prototype.newContact = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__contact_form_contact_form_component__["a" /* ContactFormDialogComponent */], {
            panelClass: 'contact-form-dialog',
            data: {
                action: 'new'
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            _this.contactsService.updateContact(__assign({}, response.getRawValue(), { created: new Date().toISOString().slice(0, 10) }));
        });
    };
    FuseContactsComponent.prototype.deleteSelectedContacts = function () {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete all selected contacts?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.contactsService.deleteSelectedContacts();
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-contacts',
            template: __webpack_require__("./src/app/features/contacts/contacts.component.html"),
            styles: [__webpack_require__("./src/app/features/contacts/contacts.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_5__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__contacts_service__["a" /* ContactsService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatDialog */]])
    ], FuseContactsComponent);
    return FuseContactsComponent;
}());



/***/ }),

/***/ "./src/app/features/contacts/contacts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseContactsModule", function() { return FuseContactsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_components__ = __webpack_require__("./src/@fuse/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidenavs_main_main_component__ = __webpack_require__("./src/app/features/contacts/sidenavs/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contacts_component__ = __webpack_require__("./src/app/features/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contacts_service__ = __webpack_require__("./src/app/features/contacts/contacts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_list_contact_list_component__ = __webpack_require__("./src/app/features/contacts/contact-list/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__selected_bar_selected_bar_component__ = __webpack_require__("./src/app/features/contacts/selected-bar/selected-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_form_contact_form_component__ = __webpack_require__("./src/app/features/contacts/contact-form/contact-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_7__contacts_component__["a" /* FuseContactsComponent */],
        resolve: {
            contacts: __WEBPACK_IMPORTED_MODULE_8__contacts_service__["a" /* ContactsService */]
        }
    }
];
var FuseContactsModule = /** @class */ (function () {
    function FuseContactsModule() {
    }
    FuseContactsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__contacts_component__["a" /* FuseContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contact_list_contact_list_component__["a" /* FuseContactsContactListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__selected_bar_selected_bar_component__["a" /* FuseContactsSelectedBarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sidenavs_main_main_component__["a" /* FuseContactsMainSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contact_form_contact_form_component__["a" /* ContactFormDialogComponent */]
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
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["Q" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["T" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["V" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__fuse_components__["a" /* FuseConfirmDialogModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__contacts_service__["a" /* ContactsService */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_11__contact_form_contact_form_component__["a" /* ContactFormDialogComponent */]]
        })
    ], FuseContactsModule);
    return FuseContactsModule;
}());



/***/ }),

/***/ "./src/app/features/contacts/contacts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_model__ = __webpack_require__("./src/app/features/contacts/contact.model.ts");
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






var ContactsService = /** @class */ (function () {
    function ContactsService(http) {
        this.http = http;
        this.onContactsChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.onSelectedContactsChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.onUserDataChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.onSearchTextChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.onFilterChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.selectedContacts = [];
    }
    /**
     * The Contacts App Main Resolver
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ContactsService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getContacts().then(function (_a) {
                var files = _a[0];
                _this.onSearchTextChanged.subscribe(function (searchText) {
                    _this.searchText = searchText;
                    _this.getContacts();
                });
                _this.onFilterChanged.subscribe(function (filter) {
                    _this.filterBy = filter;
                    _this.getContacts();
                });
                resolve();
            }, reject);
        });
    };
    ContactsService.prototype.getContacts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/contacts-contacts')
                .subscribe(function (response) {
                _this.contacts = response;
                if (_this.filterBy === 'starred') {
                    _this.contacts = _this.contacts.filter(function (_contact) {
                        return _this.user.starred.includes(_contact.id);
                    });
                }
                if (_this.filterBy === 'frequent') {
                    _this.contacts = _this.contacts.filter(function (_contact) {
                        return _this.user.frequentContacts.includes(_contact.id);
                    });
                }
                if (_this.searchText && _this.searchText !== '') {
                    _this.contacts = __WEBPACK_IMPORTED_MODULE_4__fuse_utils__["a" /* FuseUtils */].filterArrayByString(_this.contacts, _this.searchText);
                }
                _this.contacts = _this.contacts.map(function (contact) {
                    return new __WEBPACK_IMPORTED_MODULE_5__contact_model__["a" /* Contact */](contact);
                });
                _this.onContactsChanged.next(_this.contacts);
                resolve(_this.contacts);
            }, reject);
        });
    };
    ContactsService.prototype.getUserData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/contacts-user/5725a6802d10e277a0f35724')
                .subscribe(function (response) {
                _this.user = response;
                _this.onUserDataChanged.next(_this.user);
                resolve(_this.user);
            }, reject);
        });
    };
    /**
     * Toggle selected contact by id
     * @param id
     */
    ContactsService.prototype.toggleSelectedContact = function (id) {
        // First, check if we already have that todo as selected...
        if (this.selectedContacts.length > 0) {
            var index = this.selectedContacts.indexOf(id);
            if (index !== -1) {
                this.selectedContacts.splice(index, 1);
                // Trigger the next event
                this.onSelectedContactsChanged.next(this.selectedContacts);
                // Return
                return;
            }
        }
        // If we don't have it, push as selected
        this.selectedContacts.push(id);
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    };
    /**
     * Toggle select all
     */
    ContactsService.prototype.toggleSelectAll = function () {
        if (this.selectedContacts.length === this.contacts.length) {
            this.deselectContacts();
        }
        else {
            this.selectContacts();
        }
    };
    ContactsService.prototype.selectContacts = function (filterParameter, filterValue) {
        var _this = this;
        this.selectedContacts = [];
        // If there is no filter, select all todos
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedContacts = [];
            this.contacts.map(function (contact) {
                _this.selectedContacts.push(contact.id);
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
        this.onSelectedContactsChanged.next(this.selectedContacts);
    };
    ContactsService.prototype.updateContact = function (contact) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/contacts-contacts/' + contact.id, __assign({}, contact))
                .subscribe(function (response) {
                _this.getContacts();
                resolve(response);
            });
        });
    };
    ContactsService.prototype.updateUserData = function (userData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/contacts-user/' + _this.user.id, __assign({}, userData))
                .subscribe(function (response) {
                _this.getUserData();
                _this.getContacts();
                resolve(response);
            });
        });
    };
    ContactsService.prototype.deselectContacts = function () {
        this.selectedContacts = [];
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    };
    ContactsService.prototype.deleteContact = function (contact) {
        var contactIndex = this.contacts.indexOf(contact);
        this.contacts.splice(contactIndex, 1);
        this.onContactsChanged.next(this.contacts);
    };
    ContactsService.prototype.deleteSelectedContacts = function () {
        var _loop_1 = function (contactId) {
            var contact = this_1.contacts.find(function (_contact) {
                return _contact.id === contactId;
            });
            var contactIndex = this_1.contacts.indexOf(contact);
            this_1.contacts.splice(contactIndex, 1);
        };
        var this_1 = this;
        for (var _i = 0, _a = this.selectedContacts; _i < _a.length; _i++) {
            var contactId = _a[_i];
            _loop_1(contactId);
        }
        this.onContactsChanged.next(this.contacts);
        this.deselectContacts();
    };
    ContactsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ContactsService);
    return ContactsService;
}());



/***/ }),

/***/ "./src/app/features/contacts/selected-bar/selected-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-24\">\n\n    <div class=\"close-button-wrapper\" fxFlex=\"0 1 auto\" fxFlex.gt-sm=\"220px\" (click)=\"deselectAll()\">\n        <button class=\"p-8\" mat-button fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"mr-8\">arrow_back</mat-icon>\n            <span class=\"text-uppercase\">Back</span>\n        </button>\n    </div>\n\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutAlign.gt-sm=\"space-between center\">\n\n        <div>\n            <span class=\"selected-contacts-count\">\n                <span>{{selectedContacts.length}}</span>\n                <span>selected</span>\n            </span>\n\n            <button mat-icon-button [matMenuTriggerFor]=\"selectMenu\">\n                <mat-icon>arrow_drop_down</mat-icon>\n            </button>\n            <mat-menu #selectMenu=\"matMenu\">\n                <button mat-menu-item (click)=\"selectAll()\">Select all</button>\n                <button mat-menu-item (click)=\"deselectAll()\">Deselect all</button>\n            </mat-menu>\n\n        </div>\n\n        <div class=\"multi-select-actions\">\n            <button mat-icon-button (click)=\"deleteSelectedContacts()\" aria-label=\"delete selected\">\n                <mat-icon>delete</mat-icon>\n            </button>\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/contacts/selected-bar/selected-bar.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 120px;\n  z-index: 99; }\n"

/***/ }),

/***/ "./src/app/features/contacts/selected-bar/selected-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseContactsSelectedBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_service__ = __webpack_require__("./src/app/features/contacts/contacts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseContactsSelectedBarComponent = /** @class */ (function () {
    function FuseContactsSelectedBarComponent(contactsService, dialog) {
        var _this = this;
        this.contactsService = contactsService;
        this.dialog = dialog;
        this.contactsService.onSelectedContactsChanged
            .subscribe(function (selectedContacts) {
            _this.selectedContacts = selectedContacts;
            setTimeout(function () {
                _this.hasSelectedContacts = selectedContacts.length > 0;
                _this.isIndeterminate = (selectedContacts.length !== _this.contactsService.contacts.length && selectedContacts.length > 0);
            }, 0);
        });
    }
    FuseContactsSelectedBarComponent.prototype.selectAll = function () {
        this.contactsService.selectContacts();
    };
    FuseContactsSelectedBarComponent.prototype.deselectAll = function () {
        this.contactsService.deselectContacts();
    };
    FuseContactsSelectedBarComponent.prototype.deleteSelectedContacts = function () {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete all selected contacts?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.contactsService.deleteSelectedContacts();
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseContactsSelectedBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-selected-bar',
            template: __webpack_require__("./src/app/features/contacts/selected-bar/selected-bar.component.html"),
            styles: [__webpack_require__("./src/app/features/contacts/selected-bar/selected-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__contacts_service__["a" /* ContactsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */]])
    ], FuseContactsSelectedBarComponent);
    return FuseContactsSelectedBarComponent;
}());



/***/ }),

/***/ "./src/app/features/contacts/sidenavs/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-content\">\n\n    <div class=\"card mat-white-bg\">\n        <!-- SIDENAV HEADER -->\n        <div class=\"header p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <!-- USER -->\n            <img [src]=\"user.avatar\" class=\"avatar mr-16\" [alt]=\"user.name\"/>\n            <span class=\"h5\">{{user.name}}</span>\n            <!-- / USER -->\n\n        </div>\n        <!-- / SIDENAV HEADER -->\n\n        <!-- SIDENAV CONTENT -->\n        <div class=\"content py-16\" fusePerfectScrollbar>\n\n            <div class=\"nav\">\n\n                <div class=\"nav-item\" aria-label=\"inbox\">\n                    <a class=\"nav-link\" matRipple (click)=\"changeFilter('all')\" [ngClass]=\"{'active':filterBy ==='all'}\">\n                        <span class=\"title\">All Contacts</span>\n                    </a>\n                </div>\n\n                <div class=\"nav-item\" aria-label=\"frequently contacted\" (click)=\"changeFilter('frequent')\">\n                    <a class=\"nav-link\" matRipple [ngClass]=\"{'active':filterBy ==='frequent'}\">\n                        <div class=\"title\">Freequently contacted</div>\n                    </a>\n                </div>\n\n                <div class=\"nav-item\" aria-label=\"starred\" (click)=\"changeFilter('starred')\">\n                    <a class=\"nav-link\" matRipple [ngClass]=\"{'active':filterBy ==='starred'}\">\n                        <div class=\"title\">Starred Contacts</div>\n                    </a>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!-- / SIDENAV CONTENT -->\n"

/***/ }),

/***/ "./src/app/features/contacts/sidenavs/main/main.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  height: 100%; }\n:host .sidenav-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 0; }\n@media screen and (min-width: 960px) {\n      :host .sidenav-content {\n        padding: 24px 4px 24px 24px; } }\n:host .sidenav-content .card {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 auto;\n              flex: 0 1 auto;\n      padding: 0; }\n@media screen and (min-width: 960px) {\n        :host .sidenav-content .card {\n          -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n                  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); } }\n:host .sidenav-content .card > .header {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 1 auto;\n                flex: 0 1 auto;\n        border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host .sidenav-content .card > .content {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 1 auto;\n                flex: 0 1 auto; }\n"

/***/ }),

/***/ "./src/app/features/contacts/sidenavs/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseContactsMainSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contacts_service__ = __webpack_require__("./src/app/features/contacts/contacts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseContactsMainSidenavComponent = /** @class */ (function () {
    function FuseContactsMainSidenavComponent(contactsService) {
        var _this = this;
        this.contactsService = contactsService;
        this.filterBy = this.contactsService.filterBy || 'all';
        this.onUserDataChangedSubscription =
            this.contactsService.onUserDataChanged.subscribe(function (user) {
                _this.user = user;
            });
    }
    FuseContactsMainSidenavComponent.prototype.changeFilter = function (filter) {
        this.filterBy = filter;
        this.contactsService.onFilterChanged.next(this.filterBy);
    };
    FuseContactsMainSidenavComponent.prototype.ngOnDestroy = function () {
        this.onUserDataChangedSubscription.unsubscribe();
    };
    FuseContactsMainSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-contacts-main-sidenav',
            template: __webpack_require__("./src/app/features/contacts/sidenavs/main/main.component.html"),
            styles: [__webpack_require__("./src/app/features/contacts/sidenavs/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contacts_service__["a" /* ContactsService */]])
    ], FuseContactsMainSidenavComponent);
    return FuseContactsMainSidenavComponent;
}());



/***/ })

});
//# sourceMappingURL=contacts.module.0.chunk.js.map