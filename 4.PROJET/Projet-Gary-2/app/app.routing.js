"use strict";
var auth_guard_service_1 = require("./auth-guard.service");
var image_component_1 = require("./image/image.component");
var villes_component_1 = require("./villes/villes.component");
exports.authProviders = [
    auth_guard_service_1.AuthGuard
];
exports.appRoutes = [
    // { path: "", redirectTo: "/image", pathMatch: "full" },
    { path: "villes", component: villes_component_1.VillesComponent },
    { path: "image", component: image_component_1.ImageComponent }
];
//# sourceMappingURL=app.routing.js.map