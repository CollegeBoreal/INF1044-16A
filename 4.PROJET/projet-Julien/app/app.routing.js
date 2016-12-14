"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var login_component_1 = require('./login/login.component');
// const routes: Routes = [
// //   {
// //     path: '',
// //     redirectTo: '/home',
// //     pathMatch: 'full'
// //   }
//      //{ path: '', redirectTo: "main", pathMatch:"full"}
//     //  { path: 'main', component: AppComponent },
//   {
//   path: '',
//   redirectTo: '/home',
//   pathMatch: 'full'
// },
// // //   {
// // //     path: 'login', component: LoginComponent
// // //   }
// ];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: "Home-page", pathMatch: "full" },
                    { path: 'main', component: app_component_1.AppComponent },
                    { path: 'Home-page', component: home_component_1.HomeComponent },
                    { path: 'Login-page', component: login_component_1.LoginComponent },
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