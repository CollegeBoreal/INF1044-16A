"use strict";
var auth_guard_service_1 = require("./auth-guard.service");
var villes_component_1 = require("./villes/villes.component");
exports.authProviders = [
    auth_guard_service_1.AuthGuard
];
exports.appRoutes = [
    // { path: "", redirectTo: "/image", pathMatch: "full" },
    { path: "villes", component: villes_component_1.VillesComponent }
];
//# sourceMappingURL=app.routing.js.map