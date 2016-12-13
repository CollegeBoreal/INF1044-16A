"use strict";
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var ville_component_1 = require('./villes/ville.component');
exports.routes = [
    { path: '', component: app_component_1.AppComponent },
    { path: 'villes', component: ville_component_1.VilleComponent }
];
// @NgModule({
//   imports: [RouterModule.forChild|Root(routes)],
//   exports: [RouterModule]
// })
// Apport class NameRoutingModapp{ }
// Apport const routedComponeapp= [AppComponent];
exports.appRoute = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.route.js.map