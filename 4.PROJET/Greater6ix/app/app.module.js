"use strict";
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var app_routing_module_1 = require('./app-routing.module');
// import {BrowserModule} from '@angular/platform-browser';
// import {FormsModule} from '@angular/forms';
var app_component_1 = require("./app.component");
var ns_module_factory_loader_1 = require("./shared/ns-module-factory-loader");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                nativescript_module_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                app_routing_module_1.AppRoutingModule //,
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            providers: [
                { provide: core_1.NgModuleFactoryLoader, useClass: ns_module_factory_loader_1.NsModuleFactoryLoader }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map