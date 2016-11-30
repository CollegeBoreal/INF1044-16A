"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var edit_component_1 = require('./edit.component');
var add_component_1 = require('./add.component');
var homeRoutes = [
    { path: 'Home-page', component: home_component_1.HomeComponent },
    { path: 'Home-page/:id', component: edit_component_1.EditComponent },
    { path: 'Add-page', component: add_component_1.AddComponent }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(homeRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());
exports.HomeRoutingModule = HomeRoutingModule;
//# sourceMappingURL=home-routing.module.js.map