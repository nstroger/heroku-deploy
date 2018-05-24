webpackJsonp(["apps.module"],{

/***/ "./src/app/main/content/apps/apps.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseAppsModule", function() { return FuseAppsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_angular_material_angular_material_module__ = __webpack_require__("./src/app/main/content/components/angular-material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("./src/@fuse/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'dashboards/analytics',
        loadChildren: './dashboards/analytics/analytics.module#FuseAnalyticsDashboardModule'
    },
    {
        path: 'dashboards/project',
        loadChildren: './dashboards/project/project.module#FuseProjectDashboardModule'
    },
    {
        path: 'mail',
        loadChildren: './mail/mail.module#FuseMailModule'
    },
    {
        path: 'mail-ngrx',
        loadChildren: './mail-ngrx/mail.module#FuseMailNgrxModule'
    },
    {
        path: 'chat',
        loadChildren: './chat/chat.module#FuseChatModule'
    },
    {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#FuseCalendarModule'
    },
    {
        path: 'e-commerce',
        loadChildren: './e-commerce/e-commerce.module#FuseEcommerceModule'
    },
    {
        path: 'leads',
        loadChildren: './leads/leads.module#LeadsModule'
    },
    {
        path: 'opportunities',
        loadChildren: './opportunities/opportunities.module#OpportunitiesModule'
    },
    {
        path: 'academy',
        loadChildren: './academy/academy.module#FuseAcademyModule'
    },
    {
        path: 'todo',
        loadChildren: './todo/todo.module#FuseTodoModule'
    },
    {
        path: 'file-manager',
        loadChildren: './file-manager/file-manager.module#FuseFileManagerModule'
    },
    {
        path: 'contacts',
        loadChildren: './contacts/contacts.module#FuseContactsModule'
    },
    {
        path: 'scrumboard',
        loadChildren: './scrumboard/scrumboard.module#FuseScrumboardModule'
    }
];
var FuseAppsModule = /** @class */ (function () {
    function FuseAppsModule() {
    }
    FuseAppsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__components_angular_material_angular_material_module__["a" /* FuseAngularMaterialModule */]
            ],
            declarations: []
        })
    ], FuseAppsModule);
    return FuseAppsModule;
}());



/***/ })

});
//# sourceMappingURL=apps.module.chunk.js.map