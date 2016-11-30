"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '/home',
        loadChildren: 'app/home/home/home.module#HomeModule'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    // { path: '', redirectTo: "main", component: AppComponent },
                    // { path: '', redirectTo: "Home-page", pathMatch:"full"},
                    // { path: 'main', component: AppComponent },
                    // { path: 'Home-page', component: HomeComponent },
                    // { path: 'Login-page', component: LoginComponent },
                    routes
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map