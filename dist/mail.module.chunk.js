webpackJsonp(["mail.module"],{

/***/ "./src/app/main/content/apps/mail-ngrx/dialogs/compose/compose.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <span class=\"title dialog-title\">New Message</span>\n            <button mat-button class=\"mat-icon-button\"\n                    (click)=\"dialogRef.close()\"\n                    aria-label=\"Close dialog\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </div>\n    </mat-toolbar>\n\n    <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\n\n        <form name=\"composeForm\" [formGroup]=\"composeForm\" class=\"compose-form\" fxLayout=\"column\" fxFlex>\n\n            <mat-form-field>\n                <input matInput name=\"from\"\n                       placeholder=\"From\"\n                       formControlName=\"from\"\n                       type=\"email\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput name=\"to\"\n                       placeholder=\"To\"\n                       formControlName=\"to\"\n                       type=\"email\" required>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput\n                       name=\"cc\"\n                       placeholder=\"Cc\"\n                       formControlName=\"cc\"\n                       type=\"email\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput\n                       name=\"bcc\"\n                       placeholder=\"Bcc\"\n                       formControlName=\"bcc\"\n                       type=\"email\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput name=\"subject\"\n                       placeholder=\"Subject\"\n                       formControlName=\"subject\">\n            </mat-form-field>\n\n            <mat-form-field>\n            <textarea matInput name=\"message\"\n                      placeholder=\"Message\"\n                      formControlName=\"message\"\n                      rows=\"6\">\n            </textarea>\n            </mat-form-field>\n\n            <div class=\"attachment-list\">\n\n                <div class=\"attachment\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <div>\n                        <span class=\"filename\">attachment-2.doc</span>\n                        <span class=\"size\">(12 Kb)</span>\n                    </div>\n\n                    <button mat-icon-button aria-label=\"Delete attachment\">\n                        <mat-icon class=\"s-16\">close</mat-icon>\n                    </button>\n                </div>\n\n                <div class=\"attachment\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <div>\n                        <span class=\"filename\">attachment-1.jpg</span>\n                        <span class=\"size\">(350 Kb)</span>\n                    </div>\n\n                    <button mat-icon-button aria-label=\"Delete attachment\">\n                        <mat-icon class=\"s-16\">close</mat-icon>\n                    </button>\n                </div>\n            </div>\n        </form>\n    </div>\n\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <div>\n            <button mat-raised-button\n                    (click)=\"dialogRef.close(['send',composeForm])\"\n                    class=\"save-button mat-accent\"\n                    [disabled]=\"composeForm.invalid\"\n                    aria-label=\"SAVE\">\n                SEND\n            </button>\n\n            <button mat-icon-button matTooltip=\"Attach a file\">\n                <mat-icon>attach_file</mat-icon>\n            </button>\n        </div>\n\n        <button mat-button\n                class=\"mat-icon-button\"\n                (click)=\"dialogRef.close(['delete',composeForm])\"\n                aria-label=\"Delete\"\n                matTooltip=\"Delete\">\n            <mat-icon>delete</mat-icon>\n        </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/dialogs/compose/compose.component.scss":
/***/ (function(module, exports) {

module.exports = ".mail-compose-dialog .mat-dialog-container {\n  padding: 0;\n  width: 720px; }\n  .mail-compose-dialog .mat-dialog-container .compose-form .mat-form-field {\n    width: 100%; }\n  .mail-compose-dialog .mat-dialog-container .compose-form .attachment-list {\n    font-size: 13px;\n    padding-top: 16px; }\n  .mail-compose-dialog .mat-dialog-container .compose-form .attachment-list .attachment {\n      background-color: rgba(0, 0, 0, 0.08);\n      border: 1px solid rgba(0, 0, 0, 0.16);\n      padding-left: 16px;\n      margin-top: 8px;\n      border-radius: 2px; }\n  .mail-compose-dialog .mat-dialog-container .compose-form .attachment-list .attachment .filename {\n        font-weight: 500; }\n  .mail-compose-dialog .mat-dialog-container .compose-form .attachment-list .attachment:last-child {\n        margin-bottom: 0; }\n  .mail-compose-dialog .dialog-content-wrapper {\n  max-height: 85vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/dialogs/compose/compose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMailNgrxComposeDialogComponent; });
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



var FuseMailNgrxComposeDialogComponent = /** @class */ (function () {
    function FuseMailNgrxComposeDialogComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.composeForm = this.createComposeForm();
    }
    FuseMailNgrxComposeDialogComponent.prototype.createComposeForm = function () {
        return this.formBuilder.group({
            from: {
                value: ['johndoe@creapond.com'],
                disabled: [true]
            },
            to: [''],
            cc: [''],
            bcc: [''],
            subject: [''],
            message: ['']
        });
    };
    FuseMailNgrxComposeDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-mail-compose',
            template: __webpack_require__("./src/app/main/content/apps/mail-ngrx/dialogs/compose/compose.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/mail-ngrx/dialogs/compose/compose.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FuseMailNgrxComposeDialogComponent);
    return FuseMailNgrxComposeDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/i18n/en.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return locale; });
var locale = {
    lang: 'en',
    data: {
        'MAIL': {
            'COMPOSE': 'COMPOSE',
            'FOLDERS': 'FOLDERS',
            'FILTERS': 'FILTERS',
            'LABELS': 'LABELS',
            'NO_MESSAGES': 'There are no messages!',
            'SELECT_A_MESSAGE_TO_READ': 'Select a message to read',
            'SEARCH_PLACEHOLDER': 'Search for an e-mail or contact'
        }
    }
};


/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/i18n/tr.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return locale; });
var locale = {
    lang: 'tr',
    data: {
        'MAIL': {
            'COMPOSE': 'YENİ E-POSTA',
            'FOLDERS': 'KLASÖRLER',
            'FILTERS': 'FİLTRELER',
            'LABELS': 'ETİKETLER',
            'NO_MESSAGES': 'Mesajiniz bulunmamakta!',
            'SELECT_A_MESSAGE_TO_READ': 'Okumak için bir mesaj seçin',
            'SEARCH_PLACEHOLDER': 'E-mail yada bir kişi arayın'
        }
    }
};


/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/mail-details/mail-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!mail\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex>\n    <mat-icon class=\"s-128 mb-16 select-message-icon\">\n        email\n    </mat-icon>\n    <span class=\"select-message-text hint-text\">\n        <span>{{ 'MAIL.SELECT_A_MESSAGE_TO_READ' | translate }}</span>\n    </span>\n</div>\n\n<div *ngIf=\"mail\">\n\n    <div class=\"mail-header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n        <div>\n            <div class=\"subject\" flex>{{mail.subject}}</div>\n\n            <div class=\"labels\" fxLayout=\"row wrap\">\n                <div class=\"label\" *ngFor=\"let labelId of mail.labels\"\n                     fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <div class=\"label-color\" [ngStyle]=\"{'background-color': (labels$ | async) | getById:labelId:'color'}\"></div>\n                    <div class=\"label-title\">{{(labels$ | async) | getById:labelId:'title'}}</div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <button mat-button class=\"mat-icon-button\" (click)=\"toggleStar($event)\" aria-label=\"Toggle star\">\n                <mat-icon *ngIf=\"mail.starred\">star</mat-icon>\n                <mat-icon *ngIf=\"!mail.starred\">star_outline</mat-icon>\n            </button>\n\n            <button mat-button class=\"mat-icon-button\" (click)=\"toggleImportant($event)\" aria-label=\"Toggle important\">\n                <mat-icon *ngIf=\"mail.important\">label</mat-icon>\n                <mat-icon *ngIf=\"!mail.important\">label_outline</mat-icon>\n            </button>\n        </div>\n    </div>\n\n    <div class=\"mail-content\">\n\n        <div class=\"info\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n\n            <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"start start\">\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n                    <div>\n                        <img *ngIf=\"mail.from.avatar\" alt=\"{{mail.from.name}}\"\n                             src=\"{{mail.from.avatar}}\" class=\"avatar\"/>\n\n                        <div *ngIf=\"!mail.from.avatar\" class=\"avatar\" ms-random-class=\"vm.colors\">\n                            {{mail.from.name[0]}}\n                        </div>\n                    </div>\n\n                    <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n\n                        <div class=\"name\">\n                            {{mail.from.name}}\n                        </div>\n\n                        <div class=\"to\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <div class=\"to-text\">to</div>\n                            <div>{{mail.to[0].name}}</div>\n                        </div>\n                    </div>\n                </div>\n\n                <a class=\"toggle-details\" (click)=\"showDetails = !showDetails\">\n                    <span *ngIf=\"!showDetails\">Show Details</span>\n                    <span *ngIf=\"showDetails\">Hide Details</span>\n                </a>\n\n                <div *ngIf=\"showDetails\" class=\"details\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n                    <div fxLayout=\"column\">\n                        <span class=\"title\">From:</span>\n                        <span class=\"title\">To:</span>\n                        <span class=\"title\">Date:</span>\n                    </div>\n\n                    <div fxLayout=\"column\">\n                        <span class=\"detail\">{{mail.from.email}}</span>\n                        <span class=\"detail\">{{mail.to[0].email}}</span>\n                        <span class=\"detail\">{{mail.time}}</span>\n                    </div>\n                </div>\n            </div>\n\n            <button mat-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\" class=\"mat-icon-button\"\n                    (click)=\"$event.stopPropagation()\">\n                <mat-icon>more_vert</mat-icon>\n            </button>\n\n            <mat-menu #moreMenu=\"matMenu\">\n                <button mat-menu-item aria-label=\"Reply\">\n                    <mat-icon>reply</mat-icon>\n                    <span>Reply</span>\n                </button>\n\n                <button mat-menu-item aria-label=\"Forward\">\n                    <mat-icon>forward</mat-icon>\n                    <span>Forward</span>\n                </button>\n\n                <button mat-menu-item aria-label=\"Print\">\n                    <mat-icon>print</mat-icon>\n                    <span>Print</span>\n                </button>\n            </mat-menu>\n        </div>\n\n        <div [innerHTML]=\"mail.message\"></div>\n\n    </div>\n\n    <div *ngIf=\"mail.attachments\" class=\"mail-attachments\">\n\n        <div class=\"title\">\n            <span>Attachments</span>\n            ({{mail.attachments.length}})\n        </div>\n\n        <div class=\"attachment-list\" fxLayout=\"row wrap\">\n\n            <div class=\"attachment\" fxLayout=\"column\"\n                 *ngFor=\"let attachment of mail.attachments\">\n\n                <img class=\"preview\" src=\"{{attachment.preview}}\">\n\n                <div fxLayout=\"column\">\n                    <a href=\"#\" onclick=\"event.preventDefault()\">View</a>\n                    <a href=\"#\" onclick=\"event.preventDefault()\">Download</a>\n                    <div class=\"size\">({{attachment.size}})</div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/mail-details/mail-details.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n  padding: 24px; }\n:host .select-message-text {\n    font-size: 24px;\n    font-weight: 300; }\n:host .mail-header {\n    padding-bottom: 16px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host .mail-header .actions {\n      min-width: 88px; }\n:host .mail-header .subject {\n      font-size: 17px;\n      font-weight: 500; }\n:host .mail-header .label {\n      font-size: 11px;\n      border-radius: 2px;\n      margin: 4px 4px 4px 0;\n      padding: 3px 8px;\n      background-color: rgba(0, 0, 0, 0.08); }\n:host .mail-header .label .label-color {\n        width: 8px;\n        height: 8px;\n        margin-right: 8px;\n        border-radius: 50%; }\n:host .mail-content {\n    padding: 24px 0; }\n:host .mail-content .to {\n      color: rgba(0, 0, 0, 0.54); }\n:host .mail-content .to .to-text {\n        margin-right: 4px;\n        text-transform: lowercase; }\n:host .mail-content .info {\n      padding-bottom: 16px; }\n:host .mail-content .info .avatar {\n        margin-right: 16px;\n        background-color: #058ec0; }\n:host .mail-content .info .name {\n        margin-right: 8px;\n        font-weight: 500; }\n:host .mail-content .info .toggle-details {\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        text-decoration: underline;\n        padding-top: 16px;\n        cursor: pointer;\n        font-weight: 500; }\n:host .mail-content .info .details {\n        padding-top: 8px; }\n:host .mail-content .info .details .title {\n          font-weight: 500;\n          margin-right: 6px; }\n:host .mail-content .info .details .detail {\n          color: rgba(0, 0, 0, 0.54); }\n:host .mail-attachments {\n    padding: 24px 0;\n    border-top: 1px solid rgba(0, 0, 0, 0.12); }\n:host .mail-attachments .title {\n      margin-bottom: 16px;\n      font-weight: 500; }\n:host .mail-attachments .attachment .preview {\n      width: 100px;\n      margin: 0 16px 8px 0; }\n:host .mail-attachments .attachment .link {\n      margin-bottom: 2px; }\n:host .mail-attachments .attachment .size {\n      font-size: 11px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/mail-details/mail-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMailNgrxDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_model__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/mail.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mail_service__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/mail.service.ts");
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





var FuseMailNgrxDetailsComponent = /** @class */ (function () {
    function FuseMailNgrxDetailsComponent(mailService, store) {
        this.mailService = mailService;
        this.store = store;
        this.showDetails = false;
        this.labels$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["q" /* getLabelsArr */]);
    }
    FuseMailNgrxDetailsComponent.prototype.ngOnChanges = function () {
        this.updateModel(this.mailInput);
        this.markAsRead();
    };
    FuseMailNgrxDetailsComponent.prototype.markAsRead = function () {
        if (this.mail && !this.mail.read) {
            this.mail.markRead();
            this.updateMail();
        }
    };
    FuseMailNgrxDetailsComponent.prototype.toggleStar = function (event) {
        event.stopPropagation();
        this.mail.toggleStar();
        this.updateMail();
    };
    FuseMailNgrxDetailsComponent.prototype.toggleImportant = function (event) {
        event.stopPropagation();
        this.mail.toggleImportant();
        this.updateMail();
    };
    FuseMailNgrxDetailsComponent.prototype.updateModel = function (data) {
        this.mail = !data ? null : new __WEBPACK_IMPORTED_MODULE_2__mail_model__["a" /* Mail */](__assign({}, data));
    };
    FuseMailNgrxDetailsComponent.prototype.updateMail = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["m" /* UpdateMail */](this.mail));
        this.updateModel(this.mail);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mail'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__mail_model__["a" /* Mail */])
    ], FuseMailNgrxDetailsComponent.prototype, "mailInput", void 0);
    FuseMailNgrxDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-mail-details',
            template: __webpack_require__("./src/app/main/content/apps/mail-ngrx/mail-details/mail-details.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/mail-ngrx/mail-details/mail-details.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__mail_service__["a" /* MailNgrxService */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], FuseMailNgrxDetailsComponent);
    return FuseMailNgrxDetailsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n    <mat-checkbox [checked]=\"selected\" (change)=\"onSelectedChange()\"\n                  (click)=\"$event.stopPropagation();\">\n    </mat-checkbox>\n\n    <div class=\"info\" fxFlex FlexLayout=\"column\">\n\n        <div class=\"row-1\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <div class=\"name\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex>\n                <img class=\"avatar\" *ngIf=\"mail.from?.avatar\" alt=\"{{mail.from?.name}}\" src=\"{{mail.from?.avatar}}\"/>\n                <div class=\"avatar\" *ngIf=\"!mail.from?.avatar\">{{mail.from?.name[0]}}</div>\n                <span class=\"text-truncate\" *ngIf=\"mail?.from\">{{mail.from?.name}}</span>\n                <mat-icon *ngIf=\"mail.hasAttachments\">attachment</mat-icon>\n            </div>\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div class=\"time\">{{mail.time}}</div>\n            </div>\n\n        </div>\n\n        <div class=\"row-2\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n\n                <div class=\"subject text-truncate\">\n                    {{mail.subject}}\n                </div>\n\n                <div class=\"message text-truncate\" *ngIf=\"mail?.message\">\n                    {{mail.message | htmlToPlaintext | slice:0:180}}{{mail.message.length > 180 ? '...' : ''}}\n                </div>\n\n                <div class=\"labels\" fxLayout=\"row wrap\" fxHide fxShow.gt-sm>\n                    <div class=\"label\" *ngFor=\"let labelId of mail.labels\"\n                         fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <div class=\"label-color\"\n                             [ngStyle]=\"{'background-color': (labels$ | async) | getById:labelId:'color'}\"></div>\n                        <div class=\"label-title\">{{(labels$ | async) | getById:labelId:'title'}}</div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  position: relative;\n  padding: 16px 24px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n  background: #FAFAFA; }\n:host.unread {\n    background: #FFFFFF; }\n:host.unread .info .name {\n      font-weight: 700; }\n:host.unread .info .row-2 .subject {\n      font-weight: 700; }\n:host.unread .info .row-2 .labels {\n      background: #FFFFFF; }\n:host.selected {\n    background: #FFF8E1; }\n:host.selected .info .row-2 .labels {\n      background: #FFF8E1; }\n:host.current-mail {\n    background: #E3F2FD; }\n:host.current-mail .info .row-2 .labels {\n      background: #E3F2FD; }\n:host .info {\n    overflow: hidden;\n    width: 0;\n    margin-left: 16px;\n    position: relative; }\n:host .info .row-1 {\n      margin-bottom: 8px; }\n:host .info .row-1 .name {\n        font-size: 15px;\n        font-weight: 500; }\n:host .info .row-1 .name .avatar {\n          min-width: 32px;\n          width: 32px;\n          height: 32px;\n          line-height: 32px;\n          background-color: #058ec0; }\n:host .info .row-1 .actions {\n        margin-left: 4px; }\n:host .info .row-1 .actions .mat-icon-button {\n          width: 32px;\n          height: 32px;\n          line-height: 1; }\n:host .info .row-2 .subject,\n    :host .info .row-2 .message {\n      width: 100%; }\n:host .info .row-2 .message {\n      position: relative;\n      color: rgba(0, 0, 0, 0.54); }\n:host .info .row-2 .labels {\n      position: absolute;\n      background: #FFFFFF;\n      bottom: 0;\n      right: 0;\n      padding-left: 6px; }\n:host .info .row-2 .labels .label {\n        font-size: 11px;\n        border-radius: 2px;\n        margin: 0 4px 0 0;\n        padding: 3px 8px;\n        background-color: rgba(0, 0, 0, 0.08); }\n:host .info .row-2 .labels .label .label-color {\n          width: 8px;\n          height: 8px;\n          margin-right: 8px;\n          border-radius: 50%; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMailNgrxListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_service__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mail_model__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/mail.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FuseMailNgrxListItemComponent = /** @class */ (function () {
    function FuseMailNgrxListItemComponent(mailService, store, cd) {
        this.mailService = mailService;
        this.store = store;
        this.cd = cd;
        this.labels$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["q" /* getLabelsArr */]);
        this.selectedMailIds$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["t" /* getSelectedMailIds */]);
        this.selected = false;
    }
    FuseMailNgrxListItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set the initial values
        this.mail = new __WEBPACK_IMPORTED_MODULE_3__mail_model__["a" /* Mail */](this.mail);
        this.unread = !this.mail.read;
        this.selectedMailIds$.subscribe(function (selectedMailIds) {
            _this.selected = selectedMailIds.length > 0 && selectedMailIds.find(function (id) { return id === _this.mail.id; }) !== undefined;
            _this.refresh();
        });
    };
    FuseMailNgrxListItemComponent.prototype.refresh = function () {
        this.cd.markForCheck();
    };
    FuseMailNgrxListItemComponent.prototype.onSelectedChange = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["l" /* ToggleInSelectedMails */](this.mail.id));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__mail_model__["a" /* Mail */])
    ], FuseMailNgrxListItemComponent.prototype, "mail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.selected'),
        __metadata("design:type", Boolean)
    ], FuseMailNgrxListItemComponent.prototype, "selected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.unread'),
        __metadata("design:type", Boolean)
    ], FuseMailNgrxListItemComponent.prototype, "unread", void 0);
    FuseMailNgrxListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-mail-list-item',
            template: __webpack_require__("./src/app/main/content/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__mail_service__["a" /* MailNgrxService */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], FuseMailNgrxListItemComponent);
    return FuseMailNgrxListItemComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/mail-list/mail-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mails.length === 0\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlexFill>\n    <span class=\"no-messages-text hint-text\">{{ 'MAIL.NO_MESSAGES' | translate }}</span>\n</div>\n\n<div class=\"mail-list\">\n    <fuse-mail-list-item matRipple *ngFor=\"let mail of mails\" [mail]=\"mail\" (click)=\"readMail(mail.id)\"\n                         [ngClass]=\"{'current-mail':mail?.id == currentMail?.id}\">\n    </fuse-mail-list-item>\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/mail-list/mail-list.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n  padding: 0;\n  border-right: 1px solid rgba(0, 0, 0, 0.12); }\n  :host .no-messages-text {\n    font-size: 24px;\n    font-weight: 300; }\n  :host .mail-list {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/mail-list/mail-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMailNgrxListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_service__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/mail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseMailNgrxListComponent = /** @class */ (function () {
    function FuseMailNgrxListComponent(route, mailService, router) {
        this.route = route;
        this.mailService = mailService;
        this.router = router;
    }
    /**
     * Read mail
     * @param mailId
     */
    FuseMailNgrxListComponent.prototype.readMail = function (mailId) {
        var labelHandle = this.route.snapshot.params.labelHandle, filterHandle = this.route.snapshot.params.filterHandle, folderHandle = this.route.snapshot.params.folderHandle;
        if (labelHandle) {
            this.router.navigate(['apps/mail-ngrx/label/' + labelHandle + '/' + mailId]);
        }
        else if (filterHandle) {
            this.router.navigate(['apps/mail-ngrx/filter/' + filterHandle + '/' + mailId]);
        }
        else {
            this.router.navigate(['apps/mail-ngrx/' + folderHandle + '/' + mailId]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], FuseMailNgrxListComponent.prototype, "mails", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], FuseMailNgrxListComponent.prototype, "currentMail", void 0);
    FuseMailNgrxListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-mail-list',
            template: __webpack_require__("./src/app/main/content/apps/mail-ngrx/mail-list/mail-list.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/mail-ngrx/mail-list/mail-list.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__mail_service__["a" /* MailNgrxService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], FuseMailNgrxListComponent);
    return FuseMailNgrxListComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/mail.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"mail\" class=\"page-layout carded left-sidenav\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav mat-sidenav-opened\" align=\"start\" mode=\"side\" opened=\"true\"\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\n            <fuse-mail-main-sidenav></fuse-mail-main-sidenav>\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT HEADER -->\n            <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <div class=\"search-wrapper\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                            fuseMatSidenavToggler=\"carded-left-sidenav\"\n                            fxHide.gt-md aria-label=\"Toggle Sidenav\">\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <div class=\"search mat-white-bg\" flex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon>search</mat-icon>\n                        <input [formControl]=\"searchInput\" [placeholder]=\"'MAIL.SEARCH_PLACEHOLDER' | translate\" fxFlex>\n                    </div>\n                </div>\n            </div>\n            <!-- / CONTENT HEADER -->\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card mat-white-bg\" [ngClass]=\"{'current-mail-selected':currentMail$ | async}\">\n\n                <!-- CONTENT TOOLBAR -->\n                <div class=\"toolbar px-24 py-8\">\n\n                    <div class=\"mail-selection\" fxFlex=\"row\" fxLayoutAlign=\"start center\">\n\n                        <mat-checkbox (click)=\"toggleSelectAll($event)\"\n                                      [checked]=\"hasSelectedMails\"\n                                      [indeterminate]=\"isIndeterminate\">\n                        </mat-checkbox>\n\n                        <button mat-icon-button [matMenuTriggerFor]=\"selectMenu\">\n                            <mat-icon>arrow_drop_down</mat-icon>\n                        </button>\n                        <mat-menu #selectMenu=\"matMenu\">\n                            <button mat-menu-item (click)=\"selectAllMails()\">All</button>\n                            <button mat-menu-item (click)=\"deselectAllMails()\">None</button>\n                            <button mat-menu-item (click)=\"selectMailsByParameter('read', true)\">Read</button>\n                            <button mat-menu-item (click)=\"selectMailsByParameter('read', false)\">Unread</button>\n                            <button mat-menu-item (click)=\"selectMailsByParameter('starred', true)\">Starred</button>\n                            <button mat-menu-item (click)=\"selectMailsByParameter('starred', false)\">Unstarred</button>\n                            <button mat-menu-item (click)=\"selectMailsByParameter('important', true)\">Important</button>\n                            <button mat-menu-item (click)=\"selectMailsByParameter('important', false)\">Unimportant</button>\n                        </mat-menu>\n\n                        <div class=\"toolbar-separator\" *ngIf=\"hasSelectedMails\"></div>\n\n                        <button mat-icon-button (click)=\"setFolderOnSelectedMails(4)\" *ngIf=\"hasSelectedMails\">\n                            <mat-icon>delete</mat-icon>\n                        </button>\n\n                        <button mat-icon-button [matMenuTriggerFor]=\"folderMenu\" *ngIf=\"hasSelectedMails\">\n                            <mat-icon>folder</mat-icon>\n                        </button>\n                        <mat-menu #folderMenu=\"matMenu\">\n                            <button mat-menu-item *ngFor=\"let folder of folders$ | async\"\n                                    (click)=\"setFolderOnSelectedMails(folder.id)\">{{folder.title}}\n                            </button>\n                        </mat-menu>\n\n                        <button mat-icon-button [matMenuTriggerFor]=\"labelMenu\" *ngIf=\"hasSelectedMails\">\n                            <mat-icon>label</mat-icon>\n                        </button>\n                        <mat-menu #labelMenu=\"matMenu\">\n                            <button mat-menu-item *ngFor=\"let label of labels$ | async\"\n                                    (click)=\"toggleLabelOnSelectedMails(label.id)\">{{label.title}}\n                            </button>\n                        </mat-menu>\n                    </div>\n\n                    <div *ngIf=\"currentMail$ | async\" fxHide.gt-xs>\n                        <button mat-icon-button (click)=\"deSelectCurrentMail()\">\n                            <mat-icon>arrow_back</mat-icon>\n                        </button>\n                    </div>\n                </div>\n                <!-- / CONTENT TOOLBAR -->\n\n                <!-- CONTENT -->\n                <div class=\"content\" fxLayout=\"row\">\n\n                    <fuse-mail-list fusePerfectScrollbar fxFlex [mails]=\"mails$ | async\" [currentMail]=\"currentMail$ | async\"></fuse-mail-list>\n                    <fuse-mail-details [mail]=\"currentMail$ | async\" fusePerfectScrollbar fxFlex></fuse-mail-details>\n\n                </div>\n                <!-- / CONTENT -->\n\n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/mail.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  width: 100%; }\n:host .center .header .search-wrapper {\n    -webkit-box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n:host .center .header .search-wrapper .sidenav-toggle {\n      margin: 0;\n      width: 56px;\n      height: 56px;\n      background: #FFF;\n      border-radius: 0;\n      border-right: 1px solid rgba(0, 0, 0, 0.12); }\n:host .center .header .search-wrapper .search {\n      width: 100%;\n      height: 56px;\n      line-height: 56px;\n      padding: 18px; }\n:host .center .header .search-wrapper .search input {\n        height: 56px;\n        padding-left: 16px;\n        color: rgba(0, 0, 0, 0.54);\n        border: none;\n        outline: none; }\n@media screen and (max-width: 599px) {\n    :host .center .content-card fuse-mail-list {\n      border-right: none; }\n    :host .center .content-card fuse-mail-list,\n    :host .center .content-card fuse-mail-details {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 100%;\n              flex: 1 0 100%; }\n    :host .center .content-card fuse-mail-details {\n      display: none !important; }\n    :host .center .content-card.current-mail-selected .toolbar {\n      padding-left: 16px !important; }\n      :host .center .content-card.current-mail-selected .toolbar .mail-selection {\n        display: none !important; }\n    :host .center .content-card.current-mail-selected .content fuse-mail-list {\n      display: none !important; }\n    :host .center .content-card.current-mail-selected .content fuse-mail-details {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important; } }\n"

/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/mail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMailNgrxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_services_translation_loader_service__ = __webpack_require__("./src/@fuse/services/translation-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fuse_services_config_service__ = __webpack_require__("./src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mail_service__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__i18n_en__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/i18n/en.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__i18n_tr__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/i18n/tr.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var FuseMailNgrxComponent = /** @class */ (function () {
    function FuseMailNgrxComponent(configService, mailService, translationLoader, store, cd) {
        this.configService = configService;
        this.mailService = mailService;
        this.translationLoader = translationLoader;
        this.store = store;
        this.cd = cd;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('');
        this.translationLoader.loadTranslations(__WEBPACK_IMPORTED_MODULE_9__i18n_en__["a" /* locale */], __WEBPACK_IMPORTED_MODULE_10__i18n_tr__["a" /* locale */]);
        this.currentMail$ = this.store.select(__WEBPACK_IMPORTED_MODULE_8__store__["n" /* getCurrentMail */]);
        this.mails$ = this.store.select(__WEBPACK_IMPORTED_MODULE_8__store__["r" /* getMailsArr */]);
        this.folders$ = this.store.select(__WEBPACK_IMPORTED_MODULE_8__store__["p" /* getFoldersArr */]);
        this.labels$ = this.store.select(__WEBPACK_IMPORTED_MODULE_8__store__["q" /* getLabelsArr */]);
        this.selectedMailIds$ = this.store.select(__WEBPACK_IMPORTED_MODULE_8__store__["t" /* getSelectedMailIds */]);
        this.searchText$ = this.store.select(__WEBPACK_IMPORTED_MODULE_8__store__["s" /* getSearchText */]);
        this.mails = [];
        this.selectedMailIds = [];
        this.configService.setConfig({
            routerAnimation: 'none'
        });
    }
    FuseMailNgrxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mails$.subscribe(function (mails) {
            _this.mails = mails;
        });
        this.selectedMailIds$
            .subscribe(function (selectedMailIds) {
            _this.selectedMailIds = selectedMailIds;
            _this.hasSelectedMails = selectedMailIds.length > 0;
            _this.isIndeterminate = (selectedMailIds.length !== _this.mails.length && selectedMailIds.length > 0);
            _this.refresh();
        });
        this.searchText$.subscribe(function (searchText) {
            _this.searchInput.setValue(searchText);
        });
        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function (searchText) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["k" /* SetSearchText */](searchText));
        });
    };
    FuseMailNgrxComponent.prototype.ngOnDestroy = function () {
        this.cd.detach();
    };
    FuseMailNgrxComponent.prototype.toggleSelectAll = function (ev) {
        ev.preventDefault();
        if (this.selectedMailIds.length && this.selectedMailIds.length > 0) {
            this.deselectAllMails();
        }
        else {
            this.selectAllMails();
        }
    };
    FuseMailNgrxComponent.prototype.selectAllMails = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["g" /* SelectAllMails */]());
    };
    FuseMailNgrxComponent.prototype.deselectAllMails = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["b" /* DeselectAllMails */]());
    };
    FuseMailNgrxComponent.prototype.selectMailsByParameter = function (parameter, value) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["h" /* SelectMailsByParameter */]({
            parameter: parameter,
            value: value
        }));
    };
    FuseMailNgrxComponent.prototype.toggleLabelOnSelectedMails = function (labelId) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["a" /* AddLabelOnSelectedMails */](labelId));
    };
    FuseMailNgrxComponent.prototype.setFolderOnSelectedMails = function (folderId) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["j" /* SetFolderOnSelectedMails */](folderId));
    };
    FuseMailNgrxComponent.prototype.deSelectCurrentMail = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["i" /* SetCurrentMail */](''));
    };
    FuseMailNgrxComponent.prototype.refresh = function () {
        this.cd.markForCheck();
    };
    FuseMailNgrxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-mail',
            template: __webpack_require__("./src/app/main/content/apps/mail-ngrx/mail.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/mail-ngrx/mail.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_7__mail_service__["a" /* MailNgrxService */],
            __WEBPACK_IMPORTED_MODULE_5__fuse_services_translation_loader_service__["a" /* FuseTranslationLoaderService */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], FuseMailNgrxComponent);
    return FuseMailNgrxComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/mail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseMailNgrxModule", function() { return FuseMailNgrxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_store_module__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/store.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_guards_index__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mail_component__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/mail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sidenavs_main_main_sidenav_component__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/sidenavs/main/main-sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mail_list_mail_list_item_mail_list_item_component__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mail_list_mail_list_component__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/mail-list/mail-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mail_details_mail_details_component__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/mail-details/mail-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mail_service__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dialogs_compose_compose_component__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/dialogs/compose/compose.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: 'label/:labelHandle',
        component: __WEBPACK_IMPORTED_MODULE_7__mail_component__["a" /* FuseMailNgrxComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__store_guards_index__["a" /* ResolveGuard */]]
    },
    {
        path: 'label/:labelHandle/:mailId',
        component: __WEBPACK_IMPORTED_MODULE_7__mail_component__["a" /* FuseMailNgrxComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__store_guards_index__["a" /* ResolveGuard */]]
    },
    {
        path: 'filter/:filterHandle',
        component: __WEBPACK_IMPORTED_MODULE_7__mail_component__["a" /* FuseMailNgrxComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__store_guards_index__["a" /* ResolveGuard */]]
    },
    {
        path: 'filter/:filterHandle/:mailId',
        component: __WEBPACK_IMPORTED_MODULE_7__mail_component__["a" /* FuseMailNgrxComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__store_guards_index__["a" /* ResolveGuard */]]
    },
    {
        path: ':folderHandle',
        component: __WEBPACK_IMPORTED_MODULE_7__mail_component__["a" /* FuseMailNgrxComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__store_guards_index__["a" /* ResolveGuard */]]
    },
    {
        path: ':folderHandle/:mailId',
        component: __WEBPACK_IMPORTED_MODULE_7__mail_component__["a" /* FuseMailNgrxComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__store_guards_index__["a" /* ResolveGuard */]]
    },
    {
        path: '**',
        redirectTo: 'inbox'
    }
];
var FuseMailNgrxModule = /** @class */ (function () {
    function FuseMailNgrxModule() {
    }
    FuseMailNgrxModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__mail_component__["a" /* FuseMailNgrxComponent */],
                __WEBPACK_IMPORTED_MODULE_10__mail_list_mail_list_component__["a" /* FuseMailNgrxListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__mail_list_mail_list_item_mail_list_item_component__["a" /* FuseMailNgrxListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_11__mail_details_mail_details_component__["a" /* FuseMailNgrxDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__sidenavs_main_main_sidenav_component__["a" /* FuseMailNgrxMainSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dialogs_compose_compose_component__["a" /* FuseMailNgrxComposeDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["K" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["V" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__store_store_module__["a" /* MailAppStoreModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__mail_service__["a" /* MailNgrxService */],
                __WEBPACK_IMPORTED_MODULE_6__store_guards_index__["a" /* ResolveGuard */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_13__dialogs_compose_compose_component__["a" /* FuseMailNgrxComposeDialogComponent */]]
        })
    ], FuseMailNgrxModule);
    return FuseMailNgrxModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/mail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailNgrxService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_selectors__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/selectors/index.ts");
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




var MailNgrxService = /** @class */ (function () {
    function MailNgrxService(http, store) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.store.select(__WEBPACK_IMPORTED_MODULE_3__store_selectors__["d" /* getFoldersArr */]).subscribe(function (folders) {
            _this.foldersArr = folders;
        });
        this.store.select(__WEBPACK_IMPORTED_MODULE_3__store_selectors__["b" /* getFiltersArr */]).subscribe(function (filters) {
            _this.filtersArr = filters;
        });
        this.store.select(__WEBPACK_IMPORTED_MODULE_3__store_selectors__["f" /* getLabelsArr */]).subscribe(function (labels) {
            _this.labelsArr = labels;
        });
        this.store.select(__WEBPACK_IMPORTED_MODULE_3__store_selectors__["h" /* getMailsArr */]).subscribe(function (mails) {
            _this.mails = mails;
        });
        this.selectedMails = [];
    }
    MailNgrxService.prototype.getAllMails = function () {
        return this.http.get('api/mail-mails');
    };
    MailNgrxService.prototype.getFolders = function () {
        return this.http.get('api/mail-folders');
    };
    MailNgrxService.prototype.getFilters = function () {
        return this.http.get('api/mail-filters');
    };
    MailNgrxService.prototype.getLabels = function () {
        return this.http.get('api/mail-labels');
    };
    MailNgrxService.prototype.getMails = function (handle) {
        if (handle.id === 'labelHandle') {
            var labelId = this.labelsArr.find(function (label) { return label.handle === handle.value; }).id;
            return this.http.get('api/mail-mails?labels=' + labelId);
        }
        else if (handle.id === 'filterHandle') {
            return this.http.get('api/mail-mails?' + handle.value + '=true');
        }
        else {
            var folderId = this.foldersArr.find(function (folder) { return folder.handle === handle.value; }).id;
            return this.http.get('api/mail-mails?folder=' + folderId);
        }
    };
    /**
     * Update the mail
     * @param mail
     * @returns {Promise<any>}
     */
    MailNgrxService.prototype.updateMail = function (mail) {
        return this.http.post('api/mail-mails/' + mail.id, __assign({}, mail));
    };
    MailNgrxService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
    ], MailNgrxService);
    return MailNgrxService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/sidenavs/main/main-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- SIDENAV HEADER -->\n<div fxLayout=\"column\" fxLayoutAlign=\"space-between start\"\n     class=\"header p-24 pb-4\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\n\n    <div class=\"logo\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <mat-icon class=\"logo-icon s-32\">mail</mat-icon>\n        <span class=\"logo-text\">Mailbox Ngrx</span>\n    </div>\n\n    <div class=\"account\" fxLayout=\"column\">\n        <div class=\"title\">John Doe</div>\n        <mat-form-field floatPlaceholder=\"never\">\n            <mat-select class=\"account-selection\" placeholder=\"Mail Selection\"\n                        [ngModel]=\"selectedAccount\">\n                <mat-option *ngFor=\"let account of (accounts | keys)\" [value]=\"account.key\">\n                    {{account.value}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n\n</div>\n<!-- / SIDENAV HEADER -->\n\n<!-- SIDENAV CONTENT -->\n<div class=\"content\" fusePerfectScrollbar>\n\n    <div class=\"p-24\">\n        <button mat-raised-button fxFlex\n                class=\"mat-accent compose-dialog-button\"\n                (click)=\"composeDialog()\"\n                aria-label=\"Compose\">\n            {{ 'MAIL.COMPOSE' | translate }}\n        </button>\n    </div>\n\n    <div class=\"nav\">\n\n        <div class=\"nav-subheader\">{{ 'MAIL.FOLDERS' | translate }}</div>\n\n        <div class=\"nav-item\" *ngFor=\"let folder of (folders$ | async)\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/mail-ngrx/' + folder.handle\" routerLinkActive=\"active\">\n                <mat-icon class=\"nav-link-icon\" *ngIf=\"folder.icon\">{{folder.icon}}</mat-icon>\n                <span>{{folder.title}}</span>\n            </a>\n        </div>\n\n        <div class=\"nav-subheader\">{{ 'MAIL.FILTERS' | translate }}</div>\n\n        <div class=\"nav-item\" *ngFor=\"let filter of (filters$ | async)\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/mail-ngrx/filter/' + filter.handle\" routerLinkActive=\"active\">\n                <mat-icon class=\"nav-link-icon\" *ngIf=\"filter.icon\">{{filter.icon}}</mat-icon>\n                <span>{{filter.title}}</span>\n            </a>\n        </div>\n\n        <div class=\"nav-subheader\">{{ 'MAIL.LABELS' | translate }}</div>\n\n        <div class=\"nav-item\" *ngFor=\"let label of (labels$ | async)\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/mail-ngrx/label/' + label.handle\" routerLinkActive=\"active\">\n                <mat-icon class=\"nav-link-icon\" [ngStyle]=\"{'color':label.color}\">label</mat-icon>\n                <span>{{label.title}}</span>\n            </a>\n        </div>\n\n    </div>\n\n</div>\n<!-- / SIDENAV CONTENT -->\n"

/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/sidenavs/main/main-sidenav.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%; }\n  :host .header .logo .logo-icon {\n    margin: 0 16px 0 0; }\n  :host .header .logo .logo-text {\n    font-size: 24px;\n    line-height: 24px; }\n  :host .header .account {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/sidenavs/main/main-sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMailNgrxMainSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mail_service__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialogs_compose_compose_component__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/dialogs/compose/compose.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FuseMailNgrxMainSidenavComponent = /** @class */ (function () {
    function FuseMailNgrxMainSidenavComponent(mailService, dialog, store) {
        this.mailService = mailService;
        this.dialog = dialog;
        this.store = store;
        // Data
        this.accounts = {
            'creapond': 'johndoe@creapond.com',
            'withinpixels': 'johndoe@withinpixels.com'
        };
        this.selectedAccount = 'creapond';
        this.folders$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["p" /* getFoldersArr */]);
        this.filters$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["o" /* getFiltersArr */]);
        this.labels$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["q" /* getLabelsArr */]);
    }
    FuseMailNgrxMainSidenavComponent.prototype.composeDialog = function () {
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__dialogs_compose_compose_component__["a" /* FuseMailNgrxComposeDialogComponent */], {
            panelClass: 'mail-compose-dialog'
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
                 * Send
                 */
                case 'send':
                    console.log('new Mail', formData.getRawValue());
                    break;
                /**
                 * Delete
                 */
                case 'delete':
                    console.log('delete Mail');
                    break;
            }
        });
    };
    FuseMailNgrxMainSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-mail-main-sidenav',
            template: __webpack_require__("./src/app/main/content/apps/mail-ngrx/sidenavs/main/main-sidenav.component.html"),
            styles: [__webpack_require__("./src/app/main/content/apps/mail-ngrx/sidenavs/main/main-sidenav.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__mail_service__["a" /* MailNgrxService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
    ], FuseMailNgrxMainSidenavComponent);
    return FuseMailNgrxMainSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/actions/filters.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_FILTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_FILTERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_FILTERS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GetFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GetFiltersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GetFiltersFailed; });
var GET_FILTERS = '[FILTERS] GET FILTERS';
var GET_FILTERS_SUCCESS = '[FILTERS] GET FILTERS SUCCESS';
var GET_FILTERS_FAILED = '[FILTERS] GET FILTERS FAILED';
/**
 * Get Filters
 */
var GetFilters = /** @class */ (function () {
    function GetFilters(payload) {
        this.payload = payload;
        this.type = GET_FILTERS;
    }
    return GetFilters;
}());

/**
 * Get Filters Success
 */
var GetFiltersSuccess = /** @class */ (function () {
    function GetFiltersSuccess(payload) {
        this.payload = payload;
        this.type = GET_FILTERS_SUCCESS;
    }
    return GetFiltersSuccess;
}());

/**
 * Get Filters Failed
 */
var GetFiltersFailed = /** @class */ (function () {
    function GetFiltersFailed(payload) {
        this.payload = payload;
        this.type = GET_FILTERS_FAILED;
    }
    return GetFiltersFailed;
}());



/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/actions/folders.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_FOLDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_FOLDERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_FOLDERS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GetFolders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GetFoldersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GetFoldersFailed; });
var GET_FOLDERS = '[FOLDERS] GET FOLDERS';
var GET_FOLDERS_SUCCESS = '[FOLDERS] GET FOLDERS SUCCESS';
var GET_FOLDERS_FAILED = '[FOLDERS] GET FOLDERS FAILED';
/**
 * Get Folders
 */
var GetFolders = /** @class */ (function () {
    function GetFolders(payload) {
        this.payload = payload;
        this.type = GET_FOLDERS;
    }
    return GetFolders;
}());

/**
 * Get Folders Success
 */
var GetFoldersSuccess = /** @class */ (function () {
    function GetFoldersSuccess(payload) {
        this.payload = payload;
        this.type = GET_FOLDERS_SUCCESS;
    }
    return GetFoldersSuccess;
}());

/**
 * Get Folders Failed
 */
var GetFoldersFailed = /** @class */ (function () {
    function GetFoldersFailed(payload) {
        this.payload = payload;
        this.type = GET_FOLDERS_FAILED;
    }
    return GetFoldersFailed;
}());



/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/actions/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mails_actions__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/actions/mails.actions.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__mails_actions__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__mails_actions__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__mails_actions__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__mails_actions__["s"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__mails_actions__["t"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__mails_actions__["u"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__mails_actions__["w"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__mails_actions__["x"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__mails_actions__["z"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_0__mails_actions__["E"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__folders_actions__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/actions/folders.actions.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__folders_actions__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters_actions__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/actions/filters.actions.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__filters_actions__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__labels_actions__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/actions/labels.actions.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__labels_actions__["d"]; });






/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/actions/labels.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_LABELS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_LABELS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GetLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GetLabelsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GetLabelsFailed; });
var GET_LABELS = '[LABELS] GET LABELS';
var GET_LABELS_SUCCESS = '[LABELS] GET LABELS SUCCESS';
var GET_LABELS_FAILED = '[LABELS] GET LABELS FAILED';
/**
 * Get Labels
 */
var GetLabels = /** @class */ (function () {
    function GetLabels(payload) {
        this.payload = payload;
        this.type = GET_LABELS;
    }
    return GetLabels;
}());

/**
 * Get Labels Success
 */
var GetLabelsSuccess = /** @class */ (function () {
    function GetLabelsSuccess(payload) {
        this.payload = payload;
        this.type = GET_LABELS_SUCCESS;
    }
    return GetLabelsSuccess;
}());

/**
 * Get Labels Failed
 */
var GetLabelsFailed = /** @class */ (function () {
    function GetLabelsFailed(payload) {
        this.payload = payload;
        this.type = GET_LABELS_FAILED;
    }
    return GetLabelsFailed;
}());



/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/actions/mails.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_MAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GET_MAILS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_MAILS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SET_CURRENT_MAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SET_CURRENT_MAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHECK_CURRENT_MAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return UPDATE_MAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return UPDATE_MAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return UPDATE_MAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return UPDATE_MAILS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SET_SEARCH_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SELECT_ALL_MAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DESELECT_ALL_MAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return TOGGLE_IN_SELECTED_MAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SELECT_MAILS_BY_PARAMETER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SET_FOLDER_ON_SELECTED_MAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_LABEL_ON_SELECTED_MAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GetMails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GetMailsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GetMailsFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return SetCurrentMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return SetCurrentMailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CheckCurrentMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return UpdateMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return UpdateMailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return UpdateMails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UpdateMailsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return SetSearchText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SelectAllMails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DeselectAllMails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return ToggleInSelectedMails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SelectMailsByParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return SetFolderOnSelectedMails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddLabelOnSelectedMails; });
var GET_MAILS = '[MAILS] GET MAILS';
var GET_MAILS_SUCCESS = '[MAILS] GET MAILS SUCCESS';
var GET_MAILS_FAILED = '[MAILS] GET MAILS FAILED';
var SET_CURRENT_MAIL = '[MAILS] SET CURRENT MAIL';
var SET_CURRENT_MAIL_SUCCESS = '[MAILS] SET CURRENT MAIL SUCCESS';
var CHECK_CURRENT_MAIL = '[MAILS] CHECK CURRENT MAIL';
var UPDATE_MAIL = '[MAILS] UPDATE MAIL';
var UPDATE_MAIL_SUCCESS = '[MAILS] UPDATE MAIL SUCCESS';
var UPDATE_MAILS = '[MAILS] UPDATE MAILS';
var UPDATE_MAILS_SUCCESS = '[MAILS] UPDATE MAILS SUCCESS';
var SET_SEARCH_TEXT = '[MAILS] SET SEARCH TEXT';
var SELECT_ALL_MAILS = '[MAILS] SELECT ALL MAILS';
var DESELECT_ALL_MAILS = '[MAILS] DESELECT ALL MAILS';
var TOGGLE_IN_SELECTED_MAILS = '[MAILS] TOGGLE IN SELECTED MAILS';
var SELECT_MAILS_BY_PARAMETER = '[MAILS] SELECT MAILS BY PARAMETER';
var SET_FOLDER_ON_SELECTED_MAILS = '[MAILS] SET FOLDER ON SELECTED MAILS';
var ADD_LABEL_ON_SELECTED_MAILS = '[MAILS] ADD LABEL ON SELECTED MAILS';
/**
 * Get Mails
 */
var GetMails = /** @class */ (function () {
    function GetMails() {
        this.type = GET_MAILS;
    }
    return GetMails;
}());

/**
 * Get Mails Success
 */
var GetMailsSuccess = /** @class */ (function () {
    function GetMailsSuccess(payload) {
        this.payload = payload;
        this.type = GET_MAILS_SUCCESS;
    }
    return GetMailsSuccess;
}());

/**
 * Get Mails Failed
 */
var GetMailsFailed = /** @class */ (function () {
    function GetMailsFailed(payload) {
        this.payload = payload;
        this.type = GET_MAILS_FAILED;
    }
    return GetMailsFailed;
}());

/**
 * Set Current Mail
 */
var SetCurrentMail = /** @class */ (function () {
    function SetCurrentMail(payload) {
        this.payload = payload;
        this.type = SET_CURRENT_MAIL;
    }
    return SetCurrentMail;
}());

/**
 * Set Current Mail Success
 */
var SetCurrentMailSuccess = /** @class */ (function () {
    function SetCurrentMailSuccess(payload) {
        this.payload = payload;
        this.type = SET_CURRENT_MAIL_SUCCESS;
    }
    return SetCurrentMailSuccess;
}());

/**
 * Check Current Mail
 */
var CheckCurrentMail = /** @class */ (function () {
    function CheckCurrentMail() {
        this.type = CHECK_CURRENT_MAIL;
    }
    return CheckCurrentMail;
}());

/**
 * Update Mail
 */
var UpdateMail = /** @class */ (function () {
    function UpdateMail(payload) {
        this.payload = payload;
        this.type = UPDATE_MAIL;
    }
    return UpdateMail;
}());

/**
 * Update Mail Success
 */
var UpdateMailSuccess = /** @class */ (function () {
    function UpdateMailSuccess(payload) {
        this.payload = payload;
        this.type = UPDATE_MAIL_SUCCESS;
    }
    return UpdateMailSuccess;
}());

/**
 * Update Mails
 */
var UpdateMails = /** @class */ (function () {
    function UpdateMails(payload) {
        this.payload = payload;
        this.type = UPDATE_MAILS;
    }
    return UpdateMails;
}());

/**
 * Update Mails Success
 */
var UpdateMailsSuccess = /** @class */ (function () {
    function UpdateMailsSuccess() {
        this.type = UPDATE_MAILS_SUCCESS;
    }
    return UpdateMailsSuccess;
}());

/**
 * Set Search Text
 */
var SetSearchText = /** @class */ (function () {
    function SetSearchText(payload) {
        this.payload = payload;
        this.type = SET_SEARCH_TEXT;
    }
    return SetSearchText;
}());

/**
 * Select All Mails
 */
var SelectAllMails = /** @class */ (function () {
    function SelectAllMails() {
        this.type = SELECT_ALL_MAILS;
    }
    return SelectAllMails;
}());

/**
 * Deselect All Mails
 */
var DeselectAllMails = /** @class */ (function () {
    function DeselectAllMails() {
        this.type = DESELECT_ALL_MAILS;
    }
    return DeselectAllMails;
}());

/**
 * Toggle In Selected Mails
 */
var ToggleInSelectedMails = /** @class */ (function () {
    function ToggleInSelectedMails(payload) {
        this.payload = payload;
        this.type = TOGGLE_IN_SELECTED_MAILS;
    }
    return ToggleInSelectedMails;
}());

/**
 * Select Mails by Parameter
 */
var SelectMailsByParameter = /** @class */ (function () {
    function SelectMailsByParameter(payload) {
        this.payload = payload;
        this.type = SELECT_MAILS_BY_PARAMETER;
    }
    return SelectMailsByParameter;
}());

/**
 * Set Folder on Selected Mails
 */
var SetFolderOnSelectedMails = /** @class */ (function () {
    function SetFolderOnSelectedMails(payload) {
        this.payload = payload;
        this.type = SET_FOLDER_ON_SELECTED_MAILS;
    }
    return SetFolderOnSelectedMails;
}());

/**
 * Add label on Selected Mails
 */
var AddLabelOnSelectedMails = /** @class */ (function () {
    function AddLabelOnSelectedMails(payload) {
        this.payload = payload;
        this.type = ADD_LABEL_ON_SELECTED_MAILS;
    }
    return AddLabelOnSelectedMails;
}());



/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/effects/filters.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersEffect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_filters_actions__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/actions/filters.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mail_service__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/mail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FiltersEffect = /** @class */ (function () {
    function FiltersEffect(actions, mailService) {
        var _this = this;
        this.actions = actions;
        this.mailService = mailService;
        /**
         * Get filters from Server
         * @type {Observable<any>}
         */
        this.getFilters = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions_filters_actions__["a" /* GET_FILTERS */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["switchMap"])(function (action) {
            return _this.mailService.getFilters()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (filters) {
                return new __WEBPACK_IMPORTED_MODULE_7__actions_filters_actions__["f" /* GetFiltersSuccess */](filters);
            }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_7__actions_filters_actions__["e" /* GetFiltersFailed */](err)); }));
        }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */])
    ], FiltersEffect.prototype, "getFilters", void 0);
    FiltersEffect = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_8__mail_service__["a" /* MailNgrxService */]])
    ], FiltersEffect);
    return FiltersEffect;
}());



/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/effects/folders.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoldersEffect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_folders_actions__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/actions/folders.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mail_service__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/mail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FoldersEffect = /** @class */ (function () {
    function FoldersEffect(actions, mailService) {
        var _this = this;
        this.actions = actions;
        this.mailService = mailService;
        /**
         * Get Folders from Server
         * @type {Observable<any>}
         */
        this.getFolders = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions_folders_actions__["a" /* GET_FOLDERS */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["switchMap"])(function (action) {
            return _this.mailService.getFolders()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (folders) {
                return new __WEBPACK_IMPORTED_MODULE_7__actions_folders_actions__["f" /* GetFoldersSuccess */](folders);
            }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_7__actions_folders_actions__["e" /* GetFoldersFailed */](err)); }));
        }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */])
    ], FoldersEffect.prototype, "getFolders", void 0);
    FoldersEffect = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_8__mail_service__["a" /* MailNgrxService */]])
    ], FoldersEffect);
    return FoldersEffect;
}());



/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/effects/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return effects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mails_effects__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/effects/mails.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__folders_effects__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/effects/folders.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters_effects__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/effects/filters.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__labels_effects__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/effects/labels.effects.ts");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */




var effects = [
    __WEBPACK_IMPORTED_MODULE_0__mails_effects__["a" /* MailsEffect */],
    __WEBPACK_IMPORTED_MODULE_1__folders_effects__["a" /* FoldersEffect */],
    __WEBPACK_IMPORTED_MODULE_2__filters_effects__["a" /* FiltersEffect */],
    __WEBPACK_IMPORTED_MODULE_3__labels_effects__["a" /* LabelsEffect */]
];






/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/effects/labels.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelsEffect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_labels_actions__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/actions/labels.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mail_service__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/mail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LabelsEffect = /** @class */ (function () {
    function LabelsEffect(actions, mailService) {
        var _this = this;
        this.actions = actions;
        this.mailService = mailService;
        /**
         * Get Labels from Server
         * @type {Observable<any>}
         */
        this.getLabels = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions_labels_actions__["a" /* GET_LABELS */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["switchMap"])(function (action) {
            return _this.mailService.getLabels()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (labels) {
                return new __WEBPACK_IMPORTED_MODULE_7__actions_labels_actions__["f" /* GetLabelsSuccess */](labels);
            }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_7__actions_labels_actions__["e" /* GetLabelsFailed */](err)); }));
        }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */])
    ], LabelsEffect.prototype, "getLabels", void 0);
    LabelsEffect = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_8__mail_service__["a" /* MailNgrxService */]])
    ], LabelsEffect);
    return LabelsEffect;
}());



/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/effects/mails.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailsEffect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_store_reducers__ = __webpack_require__("./src/app/store/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__selectors__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/selectors/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/actions/mails.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store__ = __webpack_require__("./src/app/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mail_service__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/mail.service.ts");
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












var MailsEffect = /** @class */ (function () {
    function MailsEffect(actions, mailService, store) {
        var _this = this;
        this.actions = actions;
        this.mailService = mailService;
        this.store = store;
        /**
         * Get Mails with router parameters
         * @type {Observable<any>}
         */
        this.getMails = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["g" /* GET_MAILS */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["exhaustMap"])(function (action) {
            var handle = {
                id: '',
                value: ''
            };
            var routeParams = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of('labelHandle', 'filterHandle', 'folderHandle');
            routeParams.subscribe(function (param) {
                if (_this.routerState.params[param]) {
                    handle = {
                        id: param,
                        value: _this.routerState.params[param]
                    };
                }
            });
            return _this.mailService.getMails(handle)
                .map(function (mails) {
                return new __WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["l" /* GetMailsSuccess */]({
                    loaded: handle,
                    mails: mails
                });
            })
                .catch(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["k" /* GetMailsFailed */](err)); });
        }));
        /**
         * Update Mail
         * @type {Observable<any>}
         */
        this.updateMail = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["A" /* UPDATE_MAIL */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["exhaustMap"])(function (action) {
            return _this.mailService.updateMail(action.payload)
                .map(function () {
                return new __WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["F" /* UpdateMailSuccess */](action.payload);
            });
        }));
        /**
         * UpdateMails
         * @type {Observable<any>}
         */
        this.updateMails = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["B" /* UPDATE_MAILS */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["exhaustMap"])(function (action) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].forkJoin(action.payload.map(function (mail) { return _this.mailService.updateMail(mail); }), function () {
                return new __WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["H" /* UpdateMailsSuccess */]();
            });
        }));
        /**
         * Set Current Mail
         * @type {Observable<SetCurrentMailSuccess>}
         */
        this.setCurrentMail = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["o" /* SET_CURRENT_MAIL */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["withLatestFrom"])(this.store.select(__WEBPACK_IMPORTED_MODULE_8__selectors__["j" /* getMailsState */])), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (_a) {
            var action = _a[0], state = _a[1];
            return new __WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["v" /* SetCurrentMailSuccess */](state.entities[action.payload]);
        }));
        /**
         * Check Current Mail
         * Navigate to parent directory if not exist in mail list
         * Update Current Mail if exist in mail list
         * @type {Observable<any>}
         */
        this.checkCurrentMail = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["c" /* CHECK_CURRENT_MAIL */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["withLatestFrom"])(this.store.select(__WEBPACK_IMPORTED_MODULE_8__selectors__["j" /* getMailsState */])), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (_a) {
            var action = _a[0], state = _a[1];
            if (!state.entities[_this.routerState.params.mailId]) {
                return new __WEBPACK_IMPORTED_MODULE_10__store__["b" /* Go */]({ path: [_this.routerState.url.replace(_this.routerState.params.mailId, '')] });
            }
            return new __WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["v" /* SetCurrentMailSuccess */](state.entities[_this.routerState.params.mailId]);
        }));
        /**
         * On Get Mails Success
         * @type {Observable<CheckCurrentMail>}
         */
        this.getMailsSuccess = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["i" /* GET_MAILS_SUCCESS */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["mergeMap"])(function () {
            return [
                new __WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["d" /* CheckCurrentMail */]()
            ];
        }));
        /**
         * On Update Mails Success
         * @type {Observable<DeselectAllMails | GetMails>}
         */
        this.updateMailsSuccess = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["C" /* UPDATE_MAILS_SUCCESS */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["mergeMap"])(function () {
            return [
                new __WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["f" /* DeselectAllMails */](),
                new __WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["j" /* GetMails */]()
            ];
        }));
        /**
         * On Update Mail Success
         * @type {Observable<GetMails>}
         */
        this.updateMailSuccess = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["D" /* UPDATE_MAIL_SUCCESS */])
            .debounceTime(500)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function () {
            return new __WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["j" /* GetMails */]();
        }));
        /**
         * Set Folder on Selected Mails
         * @type {Observable<UpdateMails>}
         */
        this.setFolderOnSelectedMails = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["q" /* SET_FOLDER_ON_SELECTED_MAILS */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["withLatestFrom"])(this.store.select(__WEBPACK_IMPORTED_MODULE_8__selectors__["j" /* getMailsState */])), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (_a) {
            var action = _a[0], state = _a[1];
            var entities = __assign({}, state.entities);
            var mailsToUpdate = [];
            state.selectedMailIds
                .map(function (id) {
                mailsToUpdate = mailsToUpdate.concat([
                    entities[id] = __assign({}, entities[id], { folder: action.payload })
                ]);
            });
            return new __WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["G" /* UpdateMails */](mailsToUpdate);
        }));
        /**
         * Add Label on Selected Mails
         * @type {Observable<UpdateMails>}
         */
        this.addLabelOnSelectedMails = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["a" /* ADD_LABEL_ON_SELECTED_MAILS */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["withLatestFrom"])(this.store.select(__WEBPACK_IMPORTED_MODULE_8__selectors__["j" /* getMailsState */])), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (_a) {
            var action = _a[0], state = _a[1];
            var entities = __assign({}, state.entities);
            var mailsToUpdate = [];
            state.selectedMailIds
                .map(function (id) {
                var labels = entities[id].labels.slice();
                if (!entities[id].labels.includes(action.payload)) {
                    labels = labels.concat([action.payload]);
                }
                mailsToUpdate = mailsToUpdate.concat([
                    entities[id] = __assign({}, entities[id], { labels: labels })
                ]);
            });
            return new __WEBPACK_IMPORTED_MODULE_9__actions_mails_actions__["G" /* UpdateMails */](mailsToUpdate);
        }));
        this.store.select(__WEBPACK_IMPORTED_MODULE_7_app_store_reducers__["b" /* getRouterState */]).subscribe(function (routerState) {
            if (routerState) {
                _this.routerState = routerState.state;
            }
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], MailsEffect.prototype, "getMails", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], MailsEffect.prototype, "updateMail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], MailsEffect.prototype, "updateMails", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], MailsEffect.prototype, "setCurrentMail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], MailsEffect.prototype, "checkCurrentMail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], MailsEffect.prototype, "getMailsSuccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], MailsEffect.prototype, "updateMailsSuccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], MailsEffect.prototype, "updateMailSuccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], MailsEffect.prototype, "setFolderOnSelectedMails", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], MailsEffect.prototype, "addLabelOnSelectedMails", void 0);
    MailsEffect = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_11__mail_service__["a" /* MailNgrxService */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], MailsEffect);
    return MailsEffect;
}());



/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resolve_guard__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/guards/resolve.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__resolve_guard__["a"]; });



/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/guards/resolve.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResolveGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selectors__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/selectors/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_store_reducers__ = __webpack_require__("./src/app/store/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ResolveGuard = /** @class */ (function () {
    function ResolveGuard(store) {
        var _this = this;
        this.store = store;
        this.store.select(__WEBPACK_IMPORTED_MODULE_8_app_store_reducers__["b" /* getRouterState */]).subscribe(function (routerState) {
            if (routerState) {
                _this.routerState = routerState.state;
            }
        });
    }
    ResolveGuard.prototype.canActivate = function (route, state) {
        return this.checkStore().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["switchMap"])(function () { return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(true); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function () { return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(false); }));
    };
    ResolveGuard.prototype.checkStore = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]
            .forkJoin(this.getFolders(), this.getFilters(), this.getLabels())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["filter"])(function (_a) {
            var foldersLoaded = _a[0], filtersLoaded = _a[1], labelsLoaded = _a[2];
            return filtersLoaded && foldersLoaded && labelsLoaded;
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["take"])(1), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["switchMap"])(function () {
            return _this.getMails();
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["take"])(1), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function () { return _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__index__["i" /* SetCurrentMail */](_this.routerState.params.mailId)); }));
    };
    ResolveGuard.prototype.getFolders = function () {
        var _this = this;
        return this.store.select(__WEBPACK_IMPORTED_MODULE_7__selectors__["e" /* getFoldersLoaded */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["tap"])(function (loaded) {
            if (!loaded) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__index__["d" /* GetFolders */]([]));
            }
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["filter"])(function (loaded) { return loaded; }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["take"])(1));
    };
    /**
     * Get Filters
     * @returns {Observable<any>}
     */
    ResolveGuard.prototype.getFilters = function () {
        var _this = this;
        return this.store.select(__WEBPACK_IMPORTED_MODULE_7__selectors__["c" /* getFiltersLoaded */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["tap"])(function (loaded) {
            if (!loaded) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__index__["c" /* GetFilters */]([]));
            }
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["filter"])(function (loaded) { return loaded; }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["take"])(1));
    };
    /**
     * Get Labels
     * @returns {Observable<any>}
     */
    ResolveGuard.prototype.getLabels = function () {
        var _this = this;
        return this.store.select(__WEBPACK_IMPORTED_MODULE_7__selectors__["g" /* getLabelsLoaded */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["tap"])(function (loaded) {
            if (!loaded) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__index__["e" /* GetLabels */]([]));
            }
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["filter"])(function (loaded) { return loaded; }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["take"])(1));
    };
    /**
     * Get Mails
     * @returns {Observable<any>}
     */
    ResolveGuard.prototype.getMails = function () {
        var _this = this;
        return this.store.select(__WEBPACK_IMPORTED_MODULE_7__selectors__["i" /* getMailsLoaded */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["tap"])(function (loaded) {
            if (!_this.routerState.params[loaded.id] || _this.routerState.params[loaded.id] !== loaded.value) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__index__["f" /* GetMails */]());
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__index__["k" /* SetSearchText */](''));
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__index__["b" /* DeselectAllMails */]());
            }
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["filter"])(function (loaded) {
            return _this.routerState.params[loaded.id] && _this.routerState.params[loaded.id] === loaded.value;
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["take"])(1));
    };
    ResolveGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], ResolveGuard);
    return ResolveGuard;
}());



/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/actions/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__actions__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__actions__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__actions__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__actions__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__actions__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__actions__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__actions__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__actions__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__actions__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__actions__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__actions__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__actions__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_0__actions__["m"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/reducers/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectors__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/selectors/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_2__selectors__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_2__selectors__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_2__selectors__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_2__selectors__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_2__selectors__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_2__selectors__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_2__selectors__["l"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__effects__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/effects/index.ts");
/* unused harmony namespace reexport */






/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/reducers/filters.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FiltersInitialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = FiltersReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_filters_actions__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/actions/filters.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var FiltersInitialState = {
    entities: {},
    loading: false,
    loaded: false
};
function FiltersReducer(state, action) {
    if (state === void 0) { state = FiltersInitialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_filters_actions__["a" /* GET_FILTERS */]:
            return __assign({}, state, { loading: true, loaded: false });
        case __WEBPACK_IMPORTED_MODULE_0__actions_filters_actions__["c" /* GET_FILTERS_SUCCESS */]:
            var filters = action.payload;
            var entities = filters.reduce(function (_entities, filter) {
                return __assign({}, _entities, (_a = {}, _a[filter.id] = filter, _a));
                var _a;
            }, {});
            return __assign({}, state, { loading: false, loaded: true, entities: entities });
        case __WEBPACK_IMPORTED_MODULE_0__actions_filters_actions__["b" /* GET_FILTERS_FAILED */]:
            return __assign({}, state, { loading: false, loaded: false });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/reducers/folders.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FoldersInitialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = FoldersReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_folders_actions__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/actions/folders.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var FoldersInitialState = {
    entities: {},
    loading: false,
    loaded: false
};
function FoldersReducer(state, action) {
    if (state === void 0) { state = FoldersInitialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_folders_actions__["a" /* GET_FOLDERS */]:
            return __assign({}, state, { loading: true, loaded: false });
        case __WEBPACK_IMPORTED_MODULE_0__actions_folders_actions__["c" /* GET_FOLDERS_SUCCESS */]:
            var folders = action.payload;
            var entities = folders.reduce(function (_entities, folder) {
                return __assign({}, _entities, (_a = {}, _a[folder.id] = folder, _a));
                var _a;
            }, {});
            return __assign({}, state, { loading: false, loaded: true, entities: entities });
        case __WEBPACK_IMPORTED_MODULE_0__actions_folders_actions__["b" /* GET_FOLDERS_FAILED */]:
            return __assign({}, state, { loading: false, loaded: false });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMailAppState; });
/* unused harmony export getAppState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mails_reducer__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/reducers/mails.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__folders_reducer__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/reducers/folders.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filters_reducer__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/reducers/filters.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__labels_reducer__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/reducers/labels.reducer.ts");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */





var getMailAppState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createFeatureSelector */])('mail-app');
var getAppState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getMailAppState, function (state) { return state; });
var reducers = {
    mails: __WEBPACK_IMPORTED_MODULE_1__mails_reducer__["a" /* MailsReducer */],
    folders: __WEBPACK_IMPORTED_MODULE_2__folders_reducer__["a" /* FoldersReducer */],
    filters: __WEBPACK_IMPORTED_MODULE_3__filters_reducer__["a" /* FiltersReducer */],
    labels: __WEBPACK_IMPORTED_MODULE_4__labels_reducer__["a" /* LabelsReducer */]
};






/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/reducers/labels.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LabelsInitialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = LabelsReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_labels_actions__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/actions/labels.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var LabelsInitialState = {
    entities: {},
    loading: false,
    loaded: false
};
function LabelsReducer(state, action) {
    if (state === void 0) { state = LabelsInitialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_labels_actions__["a" /* GET_LABELS */]:
            return __assign({}, state, { loading: true, loaded: false });
        case __WEBPACK_IMPORTED_MODULE_0__actions_labels_actions__["c" /* GET_LABELS_SUCCESS */]:
            var labels = action.payload;
            var entities = labels.reduce(function (_entities, label) {
                return __assign({}, _entities, (_a = {}, _a[label.id] = label, _a));
                var _a;
            }, {});
            return __assign({}, state, { loading: false, loaded: true, entities: entities });
        case __WEBPACK_IMPORTED_MODULE_0__actions_labels_actions__["b" /* GET_LABELS_FAILED */]:
            return __assign({}, state, { loading: false, loaded: false });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/reducers/mails.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MailsInitialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = MailsReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_mails_actions__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/actions/mails.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var MailsInitialState = {
    entities: {},
    currentMail: null,
    selectedMailIds: [],
    searchText: '',
    loading: false,
    loaded: false
};
function MailsReducer(state, action) {
    if (state === void 0) { state = MailsInitialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_mails_actions__["g" /* GET_MAILS */]:
            {
                return __assign({}, state, { loading: true });
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_mails_actions__["i" /* GET_MAILS_SUCCESS */]:
            {
                var mails = action.payload.mails;
                var loaded = action.payload.loaded;
                var entities = mails.reduce(function (_entities, mail) {
                    return __assign({}, _entities, (_a = {}, _a[mail.id] = mail, _a));
                    var _a;
                }, {});
                return __assign({}, state, { entities: entities, loading: false, loaded: loaded });
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_mails_actions__["h" /* GET_MAILS_FAILED */]:
            {
                return __assign({}, state, { loading: false, loaded: false });
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_mails_actions__["p" /* SET_CURRENT_MAIL_SUCCESS */]:
            {
                return __assign({}, state, { currentMail: action.payload });
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_mails_actions__["D" /* UPDATE_MAIL_SUCCESS */]:
            {
                return __assign({}, state, { entities: __assign({}, state.entities, (_a = {}, _a[action.payload.id] = action.payload, _a)) });
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_mails_actions__["r" /* SET_SEARCH_TEXT */]:
            {
                return __assign({}, state, { searchText: action.payload });
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_mails_actions__["y" /* TOGGLE_IN_SELECTED_MAILS */]:
            {
                var mailId_1 = action.payload;
                var selectedMailIds = state.selectedMailIds.slice();
                if (selectedMailIds.find(function (id) { return id === mailId_1; }) !== undefined) {
                    selectedMailIds = selectedMailIds.filter(function (id) { return id !== mailId_1; });
                }
                else {
                    selectedMailIds = selectedMailIds.concat([mailId_1]);
                }
                return __assign({}, state, { selectedMailIds: selectedMailIds });
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_mails_actions__["m" /* SELECT_ALL_MAILS */]:
            {
                var arr = Object.keys(state.entities).map(function (k) { return state.entities[k]; });
                var selectedMailIds = arr.map(function (mail) { return mail.id; });
                return __assign({}, state, { selectedMailIds: selectedMailIds });
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_mails_actions__["e" /* DESELECT_ALL_MAILS */]:
            {
                return __assign({}, state, { selectedMailIds: [] });
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_mails_actions__["n" /* SELECT_MAILS_BY_PARAMETER */]:
            {
                var filter_1 = action.payload;
                var arr = Object.keys(state.entities).map(function (k) { return state.entities[k]; });
                var selectedMailIds = arr.filter(function (mail) { return mail[filter_1.parameter] === filter_1.value; })
                    .map(function (mail) { return mail.id; });
                return __assign({}, state, { selectedMailIds: selectedMailIds });
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_mails_actions__["q" /* SET_FOLDER_ON_SELECTED_MAILS */]:
            {
                var entities_1 = __assign({}, state.entities);
                state.selectedMailIds.map(function (id) {
                    entities_1[id] = __assign({}, entities_1[id], { folder: action.payload });
                });
                return __assign({}, state, { entities: entities_1 });
            }
        default:
            return state;
    }
    var _a;
}


/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/selectors/filters.selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getFiltersState */
/* unused harmony export getFilters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFiltersLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFiltersArr; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/reducers/index.ts");


var getFiltersState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_1__reducers__["a" /* getMailAppState */], function (state) { return state.filters; });
var getFilters = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getFiltersState, function (state) { return state.entities; });
var getFiltersLoaded = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getFiltersState, function (state) { return state.loaded; });
var getFiltersArr = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getFilters, function (entities) { return Object.keys(entities).map(function (id) { return entities[id]; }); });


/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/selectors/folders.selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getFoldersState */
/* unused harmony export getFolders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFoldersLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFoldersArr; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/reducers/index.ts");


var getFoldersState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_1__reducers__["a" /* getMailAppState */], function (state) { return state.folders; });
var getFolders = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getFoldersState, function (state) { return state.entities; });
var getFoldersLoaded = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getFoldersState, function (state) { return state.loaded; });
var getFoldersArr = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getFolders, function (entities) { return Object.keys(entities).map(function (id) { return entities[id]; }); });


/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/selectors/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mails_selectors__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/selectors/mails.selectors.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__mails_selectors__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__mails_selectors__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__mails_selectors__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__mails_selectors__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__mails_selectors__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__mails_selectors__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__folders_selectors__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/selectors/folders.selectors.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__folders_selectors__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__folders_selectors__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters_selectors__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/selectors/filters.selectors.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__filters_selectors__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__filters_selectors__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__labels_selectors__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/selectors/labels.selectors.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__labels_selectors__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__labels_selectors__["b"]; });






/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/selectors/labels.selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getLabelsState */
/* unused harmony export getLabels */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLabelsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLabelsArr; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/reducers/index.ts");


var getLabelsState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_1__reducers__["a" /* getMailAppState */], function (state) { return state.labels; });
var getLabels = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getLabelsState, function (state) { return state.entities; });
var getLabelsLoaded = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getLabelsState, function (state) { return state.loaded; });
var getLabelsArr = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getLabels, function (entities) { return Object.keys(entities).map(function (id) { return entities[id]; }); });


/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/selectors/mails.selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getMailsState; });
/* unused harmony export getMails */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getMailsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getSearchText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMailsArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCurrentMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getSelectedMailIds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/reducers/index.ts");



var getMailsState = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["o" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* getMailAppState */], function (state) { return state.mails; });
var getMails = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["o" /* createSelector */])(getMailsState, function (state) { return state.entities; });
var getMailsLoaded = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["o" /* createSelector */])(getMailsState, function (state) { return state.loaded; });
var getSearchText = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["o" /* createSelector */])(getMailsState, function (state) { return state.searchText; });
var getMailsArr = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["o" /* createSelector */])(getMails, getSearchText, function (entities, searchText) {
    var arr = Object.keys(entities).map(function (id) { return entities[id]; });
    return __WEBPACK_IMPORTED_MODULE_0__fuse_utils__["a" /* FuseUtils */].filterArrayByString(arr, searchText);
});
var getCurrentMail = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["o" /* createSelector */])(getMailsState, function (state) { return state.currentMail; });
var getSelectedMailIds = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["o" /* createSelector */])(getMailsState, function (state) { return state.selectedMailIds; });


/***/ }),

/***/ "./src/app/main/content/apps/mail-ngrx/store/store.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailAppStoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__effects__ = __webpack_require__("./src/app/main/content/apps/mail-ngrx/store/effects/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MailAppStoreModule = /** @class */ (function () {
    function MailAppStoreModule() {
    }
    MailAppStoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["j" /* StoreModule */].forFeature('mail-app', __WEBPACK_IMPORTED_MODULE_3__reducers__["b" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* EffectsModule */].forFeature(__WEBPACK_IMPORTED_MODULE_4__effects__["a" /* effects */])
            ],
            providers: []
        })
    ], MailAppStoreModule);
    return MailAppStoreModule;
}());



/***/ })

});
//# sourceMappingURL=mail.module.chunk.js.map