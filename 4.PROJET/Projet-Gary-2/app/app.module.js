"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var router_2 = require('@angular/router');
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var villes_component_1 = require("./villes/villes.component");
var ajax_component_1 = require("./villes/Ajax/ajax.component");
var brampton_component_1 = require("./villes/Brampton/brampton.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.Component({
            selector: 'app-module',
            template: "<router-outlet></router-outlet>"
        }),
        core_1.NgModule({
            providers: [
                app_routing_1.authProviders
            ],
            imports: [
                app_routing_1.appRoutes,
                router_2.Router,
                platform_1.NativeScriptModule,
                router_2.NavigationStart,
                router_2.NavigationEnd,
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.appRoutes)
            ],
            declarations: [
                app_component_1.AppComponent,
                villes_component_1.VillesComponent,
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
platform_1.platformNativeScriptDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map