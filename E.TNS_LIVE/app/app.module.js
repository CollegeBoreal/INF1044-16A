"use strict";
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var app_routing_module_1 = require('./app-routing.module');
var ns_module_factory_loader_1 = require("./shared/ns-module-factory-loader");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
            providers: [
                { provide: core_1.NgModuleFactoryLoader, useClass: ns_module_factory_loader_1.NsModuleFactoryLoader }
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map