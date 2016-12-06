"use strict";
var auth_guard_service_1 = require("./auth-guard.service");
var villes_component_1 = require("./villes/villes.component");
var ajax_component_1 = require("./villes/Ajax/ajax.component");
var brampton_component_1 = require("./villes/Brampton/brampton.component");
var app_component_1 = require("./app.component");
exports.authProviders = [
    auth_guard_service_1.AuthGuard
];
exports.appRoutes = [
    { path: "", component: app_component_1.AppComponent },
    { path: "villes", component: villes_component_1.VillesComponent },
    { path: "Ajax", component: ajax_component_1.AjaxComponent },
    { path: "Brampton", component: brampton_component_1.BramptonComponent }
];
// export const villesRouting: ModuleWithProviders = RouterModule.forChild(appRoutes); 
//# sourceMappingURL=app.routing.js.map