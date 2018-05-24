webpackJsonp(["projects.module"],{

/***/ "./src/app/features/projects/project-form/project-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\" fxFlex=\"none\">\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\n\n            <button mat-button class=\"mat-icon-button\"\n                    (click)=\"dialogRef.close()\"\n                    aria-label=\"Close dialog\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </mat-toolbar-row>\n    </mat-toolbar>\n\n    <mat-dialog-content class=\"p-24 m-0\">\n\n        <form name=\"form\" [formGroup]=\"projectForm\"\n              fxLayout=\"column\" fusePerfectScrollbar>\n\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxFlex=\"none\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"name\" formControlName=\"name\" placeholder=\"Name\" matInput required>\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxFlex></div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxFlex=\"none\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input matInput formControlName=\"startDate\" [matDatepicker]=\"startDate\" placeholder=\"Start Date\">\n                        <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n                        <mat-datepicker #startDate></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input matInput formControlName=\"endDate\" [matDatepicker]=\"endDate\" placeholder=\"End Date\">\n                        <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n                        <mat-datepicker #endDate></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxFlex=\"none\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <mat-select formControlName=\"status\" placeholder=\"Status\">\n                            <mat-option [value]=\"st\" *ngFor=\"let st of status\">{{ st }}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <mat-select formControlName=\"priority\" placeholder=\"Priority\">\n                            <mat-option [value]=\"priority\" *ngFor=\"let priority of priorities\">{{ priority }}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxFlex=\"none\">\n                <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                <mat-form-field fxFlex>\n                    <textarea name=\"description\" formControlName=\"description\" placeholder=\"General Info\" matInput type=\"text\" max-rows=\"4\"></textarea>\n                </mat-form-field>\n            </div>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxFlex=\"none\">\n                <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex fxFlex.xs=\"none\">\n                    <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                    <mat-form-field fxFlex>\n                        <input name=\"salesRep\" formControlName=\"salesRep\" placeholder=\"Assigned To\" matInput required>\n                    </mat-form-field>\n                </div>\n                <div fxFlex fxFlex.xs=\"none\"></div>\n            </div>\n        </form>\n    </mat-dialog-content>\n\n    <mat-dialog-actions class=\"m-0 p-16\"\n        fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n        <button mat-raised-button\n                (click)=\"save(projectForm)\"\n                class=\"save-button mat-accent\"\n                [disabled]=\"projectForm.invalid\"\n                aria-label=\"Save\"\n                matTooltip=\"Save\">\n            SAVE\n        </button>\n\n        <button *ngIf=\"action ==='edit'\"\n                mat-button\n                class=\"mat-icon-button\"\n                (click)=\"delete(projectForm)\"\n                aria-label=\"Delete\"\n                matTooltip=\"Delete\">\n            <mat-icon>delete</mat-icon>\n        </button>\n\n    </mat-dialog-actions>\n\n</div>"

/***/ }),

/***/ "./src/app/features/projects/project-form/project-form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/projects/project-form/project-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseProjectFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_service__ = __webpack_require__("./src/app/features/projects/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_model__ = __webpack_require__("./src/app/features/projects/project.model.ts");
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





var FuseProjectFormComponent = /** @class */ (function () {
    function FuseProjectFormComponent(formBuilder, projectsService, data, dialogRef) {
        this.formBuilder = formBuilder;
        this.projectsService = projectsService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.status = ['Draft', 'In review'];
        this.priorities = ['Low', 'Medium', 'High'];
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = 'Edit Project';
            this.project = data.project;
        }
        else {
            this.dialogTitle = 'New Project';
            this.project = new __WEBPACK_IMPORTED_MODULE_4__project_model__["a" /* Project */]({});
        }
    }
    FuseProjectFormComponent.prototype.ngOnInit = function () {
        this.projectForm = this.formBuilder.group({
            name: [this.project.name],
            startDate: [this.project.startDate],
            endDate: [this.project.endDate],
            status: [this.project.status],
            priority: [this.project.priority],
            salesRep: [this.project.salesRep],
            description: [this.project.description],
        });
    };
    FuseProjectFormComponent.prototype.save = function (form) {
        this.dialogRef.close([
            'save',
            __assign({}, this.project, form.getRawValue())
        ]);
    };
    FuseProjectFormComponent.prototype.delete = function () {
        this.dialogRef.close(['delete']);
    };
    FuseProjectFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-project-form',
            template: __webpack_require__("./src/app/features/projects/project-form/project-form.component.html"),
            styles: [__webpack_require__("./src/app/features/projects/project-form/project-form.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__projects_service__["a" /* ProjectsService */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatDialogRef */]])
    ], FuseProjectFormComponent);
    return FuseProjectFormComponent;
}());



/***/ }),

/***/ "./src/app/features/projects/project.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fuse_utils__ = __webpack_require__("./src/@fuse/utils/index.ts");

var Project = /** @class */ (function () {
    function Project(project) {
        {
            this.id = project.id || __WEBPACK_IMPORTED_MODULE_0__fuse_utils__["a" /* FuseUtils */].generateGUID();
            this.name = project.name || '';
            this.startDate = project.startDate || '';
            this.endDate = project.endDate || '';
            this.status = project.status || '';
            this.priority = project.priority || '';
            this.salesRep = project.salesRep || '';
            this.description = project.description || '';
        }
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/features/projects/projects-list/projects-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-table fxFlex #table matSort\n        [dataSource]=\"dataSource\"\n        [@animateStagger]=\"{value:'50'}\">\n    <!-- Checkbox Column -->\n    \n    <ng-container cdkColumnDef=\"checkbox\">\n        <mat-header-cell *cdkHeaderCellDef>\n            <mat-checkbox (change)=\"toggleAll($event)\"\n                        [checked]=\"selectedCount > 0 && selectedCount === paginator.length\"\n                        [indeterminate]=\"selectedCount > 0 && selectedCount < paginator .length\">\n            </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *cdkCellDef=\"let project\">\n            <mat-checkbox [(ngModel)]=\"checkboxes[project.id]\"\n                          (ngModelChange)=\"onSelectedChange(project.id)\"\n                          (click)=\"$event.stopPropagation()\">\n            </mat-checkbox>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"name\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Name</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let project\">\n            <p class=\"company text-truncate\">\n                {{ project.name }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"startDate\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Start Date</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let project\">\n            <p class=\"company text-truncate\">\n                {{ project.startDate | date }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"endDate\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>End Date</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let project\">\n            <p class=\"company text-truncate\">\n                {{ project.endDate | date }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"status\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Status</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let project\">\n            <p class=\"company text-truncate\">\n                {{ project.status }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"salesRep\">\n        <mat-header-cell class=\"pr-8\" *cdkHeaderCellDef mat-sort-header>Assigned To</mat-header-cell>\n        <mat-cell class=\"pr-8\" *cdkCellDef=\"let project\">\n            <p class=\"company text-truncate\">\n                {{ project.salesRep }}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container cdkColumnDef=\"buttons\">\n        <mat-header-cell *cdkHeaderCellDef fxFlex=\"none\" class=\"w-40\"></mat-header-cell>\n        <mat-cell *cdkCellDef=\"let project\" fxFlex=\"none\" class=\"w-40\">\n            <div fxFlex=\"row\" fxLayoutAlign=\"end center\">\n                <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\"\n                        (click)=\"$event.stopPropagation();\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n\n                <mat-menu #moreMenu=\"matMenu\">\n                    <button mat-menu-item aria-label=\"clone\">\n                        <mat-icon>content_copy</mat-icon>\n                        <span>Clone</span>\n                    </button>\n                    <button mat-menu-item aria-label=\"remove\" (click)=\"deleteProject(project)\">\n                        <mat-icon>delete</mat-icon>\n                        <span>Remove</span>\n                    </button>\n                </mat-menu>\n            </div>\n\n        </mat-cell>\n    </ng-container>\n\n    <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *cdkRowDef=\"let project; columns: displayedColumns;\"\n            class=\"project\"\n            (click)=\"editProject(project)\"\n            [ngClass]=\"{'mat-light-blue-50-bg':checkboxes[project.id]}\"\n            matRipple\n            [@animate]=\"{value:'*',params:{y:'100%'}}\">\n    </mat-row>\n</mat-table>\n\n<mat-paginator #paginator fxFlex=\"none\"\n            [length]=\"dataSource.total\"\n            [pageSize]=\"10\"\n            [pageSizeOptions]=\"[5, 10, 20]\"\n            [showFirstLastButtons]=\"true\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/features/projects/projects-list/projects-list.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nfuse-projects-list {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative; }\nfuse-projects-list .mat-table {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    padding-top: 64px;\n    position: static;\n    overflow-y: auto; }\nfuse-projects-list .mat-table .mat-header-row {\n      background: white;\n      width: 100%;\n      padding-right: 8px;\n      position: absolute;\n      top: 0;\n      z-index: 1; }\nfuse-projects-list .mat-table .mat-column-checkbox {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 48px;\n              flex: 0 1 48px; }\nfuse-projects-list .mat-table .mat-column-checkbox .mat-checkbox-ripple {\n        display: none !important; }\nfuse-projects-list .mat-table .mat-column-logo {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 40px;\n              flex: 0 1 40px; }\nfuse-projects-list .mat-table .mat-column-buttons {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 80px;\n              flex: 0 1 80px; }\nfuse-projects-list .mat-table .mat-row {\n      position: relative;\n      cursor: pointer;\n      padding: 8px 8px 8px 24px;\n      z-index: 0; }\nfuse-projects-list .mat-table .mat-row .mat-cell {\n        min-width: 0; }\nfuse-projects-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n          -webkit-box-flex: 0;\n              -ms-flex: 0 1 auto;\n                  flex: 0 1 auto;\n          padding: 0 24px 0 0; }\n@media screen and (min-width: 1280px) {\n            fuse-projects-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n              display: none; } }\nfuse-projects-list .mat-paginator {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none; }\n"

/***/ }),

/***/ "./src/app/features/projects/projects-list/projects-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseProjectsListComponent; });
/* unused harmony export ProjectDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__project_form_project_form_component__ = __webpack_require__("./src/app/features/projects/project-form/project-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projects_service__ = __webpack_require__("./src/app/features/projects/projects.service.ts");
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










var FuseProjectsListComponent = /** @class */ (function () {
    function FuseProjectsListComponent(projectsService, router, dialog) {
        var _this = this;
        this.projectsService = projectsService;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['checkbox', 'name', 'startDate', 'endDate', 'status', 'salesRep', 'buttons'];
        this.selectedCount = 0;
        this.onStoresChangedSubscription =
            this.projectsService.onStoresChanged.subscribe(function (projects) {
                _this.checkboxes = {};
                projects.map(function (ws) {
                    _this.checkboxes[ws.id] = false;
                });
            });
        this.onSelectionChangedSubscription =
            this.projectsService.onSelectionChanged.subscribe(function (selection) {
                for (var id in _this.checkboxes) {
                    if (!_this.checkboxes.hasOwnProperty(id)) {
                        continue;
                    }
                    _this.checkboxes[id] = selection.includes(id);
                }
                _this.selectedCount = selection.length;
            });
    }
    FuseProjectsListComponent.prototype.ngOnInit = function () {
        this.dataSource = new ProjectDataSource(this.projectsService, this.paginator, this.sort);
    };
    FuseProjectsListComponent.prototype.ngOnDestroy = function () {
        this.onStoresChangedSubscription.unsubscribe();
        this.onSelectionChangedSubscription.unsubscribe();
    };
    FuseProjectsListComponent.prototype.deleteProject = function (ws) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.projectsService.deleteProject(ws);
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseProjectsListComponent.prototype.onSelectedChange = function (wsId) {
        this.projectsService.toggleSelected(wsId);
    };
    FuseProjectsListComponent.prototype.editProject = function (project) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__project_form_project_form_component__["a" /* FuseProjectFormComponent */], {
            panelClass: 'antera-details-dialog',
            data: {
                action: 'edit',
                project: project
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
                    _this.projectsService.updateProject(response[1]);
                    break;
                case 'delete':
                    _this.deleteProject(project);
                    break;
            }
        });
    };
    FuseProjectsListComponent.prototype.toggleAll = function (ev) {
        if (ev) {
            this.projectsService.toggleSelectAll();
        }
    };
    FuseProjectsListComponent.prototype.toggleEnable = function (ws, ev) {
        ev.stopPropagation();
        this.projectsService.updateProject(__assign({}, ws, { enabled: !ws.enabled }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatPaginator */])
    ], FuseProjectsListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["P" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["P" /* MatSort */])
    ], FuseProjectsListComponent.prototype, "sort", void 0);
    FuseProjectsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-projects-list',
            template: __webpack_require__("./src/app/features/projects/projects-list/projects-list.component.html"),
            styles: [__webpack_require__("./src/app/features/projects/projects-list/projects-list.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_5__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__projects_service__["a" /* ProjectsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialog */]])
    ], FuseProjectsListComponent);
    return FuseProjectsListComponent;
}());

var ProjectDataSource = /** @class */ (function (_super) {
    __extends(ProjectDataSource, _super);
    function ProjectDataSource(projectsService, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this.projectsService = projectsService;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this.total = 0;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ProjectDataSource.prototype.connect = function () {
        var _this = this;
        this.subscription = this.projectsService.onStoresChanged
            .subscribe(function (projects) {
            setTimeout(function () {
                _this.total = projects.length;
            });
        });
        var displayDataChanges = [
            this.projectsService.onStoresChanged,
            this._paginator.page,
            this._sort.sortChange
        ];
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */], displayDataChanges).map(function () {
            var projects = _this.projectsService.projects;
            projects = _this.sortData(projects);
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            projects = projects.slice(startIndex, startIndex + _this._paginator.pageSize);
            return projects;
        });
    };
    ProjectDataSource.prototype.sortData = function (data) {
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
    ProjectDataSource.prototype.disconnect = function () {
        this.subscription.unsubscribe();
    };
    return ProjectDataSource;
}(__WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/features/projects/projects.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseProjectsModule", function() { return FuseProjectsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_components__ = __webpack_require__("./src/@fuse/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__projects_service__ = __webpack_require__("./src/app/features/projects/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__ = __webpack_require__("./src/app/features/projects/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__projects_list_projects_list_component__ = __webpack_require__("./src/app/features/projects/projects-list/projects-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__project_form_project_form_component__ = __webpack_require__("./src/app/features/projects/project-form/project-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__["a" /* FuseProjectsComponent */],
        resolve: {
            project: __WEBPACK_IMPORTED_MODULE_7__projects_service__["a" /* ProjectsService */]
        }
    }
];
var FuseProjectsModule = /** @class */ (function () {
    function FuseProjectsModule() {
    }
    FuseProjectsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__["a" /* FuseProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__projects_list_projects_list_component__["a" /* FuseProjectsListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__project_form_project_form_component__["a" /* FuseProjectFormComponent */],
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
                __WEBPACK_IMPORTED_MODULE_7__projects_service__["a" /* ProjectsService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__project_form_project_form_component__["a" /* FuseProjectFormComponent */]
            ]
        })
    ], FuseProjectsModule);
    return FuseProjectsModule;
}());



/***/ }),

/***/ "./src/app/features/projects/projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
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
var ProjectsService = /** @class */ (function () {
    // filterBy: string;
    function ProjectsService(http) {
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
            _this.getProjects().then(console.log);
        });
    }
    ProjectsService.prototype.resolve = function (route, state) {
        return this.getProjects();
    };
    ProjectsService.prototype.getProjects = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/projects')
                .subscribe(function (response) {
                _this.projects = response;
                if (_this._searchText && _this._searchText !== '') {
                    _this.projects = __WEBPACK_IMPORTED_MODULE_4__fuse_utils__["a" /* FuseUtils */].filterFieldsByString(_this.projects, _this._searchText, searchFields);
                }
                _this.onStoresChanged.next(_this.projects);
                resolve(_this.projects);
            }, reject);
        });
    };
    /**
     * Toggle selected project by id
     * @param id
     */
    ProjectsService.prototype.toggleSelected = function (id) {
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
    ProjectsService.prototype.toggleSelectAll = function () {
        if (this._selection.length === this.projects.length) {
            this.deselectAll();
        }
        else {
            this.selectAll();
        }
    };
    ProjectsService.prototype.selectAll = function () {
        this._selection = this.projects.map(function (ws) { return ws.id; });
        this.onSelectionChanged.next(this._selection);
    };
    ProjectsService.prototype.deselectAll = function () {
        this._selection = [];
        this.onSelectionChanged.next(this._selection);
    };
    ProjectsService.prototype.updateProject = function (ws) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/projects/' + ws.id, __assign({}, ws))
                .subscribe(function (response) {
                _this.getProjects().then(resolve, reject);
            });
        });
    };
    ProjectsService.prototype.deleteProject = function (ws) {
        var accountIndex = this.projects.indexOf(ws);
        this.projects.splice(accountIndex, 1);
        this.onStoresChanged.next(this.projects);
    };
    ProjectsService.prototype.deleteSelectedProjects = function () {
        var _this = this;
        this.projects = this.projects.filter(function (ws) { return _this._selection.indexOf(ws.id) < 0; });
        this.deselectAll();
        this.onStoresChanged.next(this.projects);
    };
    ProjectsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/app/features/projects/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"project\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- HEADER -->\n        <div class=\"header white-fg\"\n             fxLayout=\"column\" fxLayoutAlign=\"center center\"\n             fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n            <!-- APP TITLE -->\n            <div class=\"logo my-12 m-sm-0\" fxFlex=\"1 0 auto\" \n                 fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">folder_special</mat-icon>\n                <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Projects</span>\n            </div>\n            <!-- / APP TITLE -->\n\n            <!-- SEARCH -->\n            <div class=\"search-input-wrapper mx-12 m-md-0\"\n                 fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <label for=\"search\" class=\"mr-8\">\n                    <mat-icon class=\"secondary-text\">search</mat-icon>\n                </label>\n                <mat-form-field floatPlaceholder=\"never\" fxFlex=\"1 0 auto\">\n                    <input matInput [formControl]=\"searchInput\" id=\"search\" placeholder=\"Search for projects\">\n                </mat-form-field>\n            </div>\n            <!-- / SEARCH -->\n\n        </div>\n        <!-- / HEADER -->\n\n        <!-- CONTENT  -->\n        <div class=\"content-card mat-white-bg\">\n\n            <div class=\"toolbar px-24 py-8\">\n                <div class=\"mail-selection\" fxFlex=\"row\">\n                    <div fxFlex=\"row\" fxLayoutAlign=\"start center\">\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\"\n                                (click)=\"newProject()\">\n                            Add\n                        </button>\n\n                        <button mat-raised-button color=\"warn\"\n                                class=\"text-capitalize mr-8\"\n                                (click)=\"deleteSelectedProjects()\">\n                            Delete\n                        </button>\n\n                        <button mat-raised-button color=\"accent\"\n                                class=\"text-capitalize mr-8\">\n                            Clone\n                        </button>\n                    </div>\n\n                    <div class=\"toolbar-separator\"></div>\n\n                    <button mat-button class=\"text-capitalize\" [matMenuTriggerFor]=\"selectMenu\">\n                        More Actions\n                        <mat-icon>arrow_drop_down</mat-icon>\n                    </button>\n                    <mat-menu #selectMenu=\"matMenu\">\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"emailSelected()\">Email\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"massUpdateSelected()\">Mass Update\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"mergeSelected()\">Merge\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"addToTargetListSelected()\">Add To Target List\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"generateLetterSelected()\">Generate Letter\n                        </button>\n                        <button mat-menu-item class=\"text-capitalize\"\n                                (click)=\"addToTargetListSelected()\">Change Log\n                        </button>\n                    </mat-menu>\n\n                </div>\n            </div>\n\n            <fuse-projects-list></fuse-projects-list>\n\n        </div>\n        <!-- / CONTENT CARD -->\n    </div>\n    <!-- / CENTER -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/projects/projects/projects.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/projects/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("./src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projects_service__ = __webpack_require__("./src/app/features/projects/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_form_project_form_component__ = __webpack_require__("./src/app/features/projects/project-form/project-form.component.ts");
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









var FuseProjectsComponent = /** @class */ (function () {
    function FuseProjectsComponent(projectsService, dialog) {
        this.projectsService = projectsService;
        this.dialog = dialog;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('');
    }
    FuseProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onSelectionSubscription =
            this.projectsService.onSelectionChanged
                .subscribe(function (selection) {
                _this.selectedCount = selection.length;
            });
        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function (searchText) {
            _this.projectsService.onSearchTextChanged.next(searchText);
        });
    };
    FuseProjectsComponent.prototype.ngOnDestroy = function () {
        this.onSelectionSubscription.unsubscribe();
    };
    FuseProjectsComponent.prototype.newProject = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__project_form_project_form_component__["a" /* FuseProjectFormComponent */], {
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
            _this.projectsService.updateProject(response[1]);
        });
    };
    FuseProjectsComponent.prototype.deleteSelectedProjects = function () {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete all selected projects?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.projectsService.deleteSelectedProjects();
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fuse-projects',
            template: __webpack_require__("./src/app/features/projects/projects/projects.component.html"),
            styles: [__webpack_require__("./src/app/features/projects/projects/projects.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__projects_service__["a" /* ProjectsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDialog */]])
    ], FuseProjectsComponent);
    return FuseProjectsComponent;
}());



/***/ })

});
//# sourceMappingURL=projects.module.chunk.js.map