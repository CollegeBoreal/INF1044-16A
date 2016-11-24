"use strict";
var router_1 = require("@angular/router");
var villes_component_1 = require("./villes.component");
var auth_guard_service_1 = require("../auth-guard.service");
var villesRoutes = [
    { path: "villes", component: villes_component_1.VillesComponent, canActivate: [auth_guard_service_1.AuthGuard] },
];
exports.villesRouting = router_1.RouterModule.forChild(villesRoutes);
//# sourceMappingURL=villes.routing.js.map