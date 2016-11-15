"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var home_component_1 = require('./pages/home/home.component');
var list_component_1 = require('./pages/list/list.component');
// const routes: Routes = [
//   { path: '', component: AppComponent },
//   { path: 'home-page', component: HomeComponent },
//   { path: 'List-page', component: ListComponent },
// ];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    // { path: '', redirectTo: "main", component: AppComponent },
                    { path: '', redirectTo: "Home-page", pathMatch: "full" },
                    { path: 'main', component: app_component_1.AppComponent },
                    { path: 'Home-page', component: home_component_1.HomeComponent },
                    { path: 'List-page', component: list_component_1.ListComponent },
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