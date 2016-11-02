"use strict";
var router_1 = require("@angular/router");
var image_component_1 = require("./image.component");
var auth_guard_service_1 = require("../auth-guard.service");
var imageRoutes = [
    { path: "groceries", component: image_component_1.ImageComponent, canActivate: [auth_guard_service_1.AuthGuard] },
];
exports.imageRouting = router_1.RouterModule.forChild(imageRoutes);
//# sourceMappingURL=image.routing.js.map