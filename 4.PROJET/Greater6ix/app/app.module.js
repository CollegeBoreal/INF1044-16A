"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var router_1 = require("nativescript-angular/router");
var app_route_1 = require("./app.route");
// import {BrowserModule} from '@angular/platform-browser';
// import {FormsModule} from '@angular/forms';
var app_component_1 = require("./app.component");
var ville_component_1 = require("./Villes/ville.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                ville_component_1.VilleComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                app_route_1.appRoute,
                platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule //,
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map