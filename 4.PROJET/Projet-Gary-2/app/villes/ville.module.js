"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
// import { authProviders } from "../app.component";
var villes_routing_1 = require("./villes.routing");
var app_component_1 = require("../app.component");
var villes_component_1 = require("./villes.component");
var ajax_component_1 = require("./Ajax/ajax.component");
var brampton_component_1 = require("./Brampton/brampton.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            providers: [],
            imports: [
                platform_1.NativeScriptModule,
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(villes_routing_1.villesRoute)
            ],
            declarations: [
                villes_component_1.VillesComponent,
                app_component_1.AppComponent,
                ajax_component_1.AjaxComponent,
                brampton_component_1.BramptonComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=ville.module.js.map