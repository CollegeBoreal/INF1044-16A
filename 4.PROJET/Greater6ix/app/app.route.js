"use strict";
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var ville_component_1 = require('./Villes/ville.component');
// export const routes: Routes = [
//     {path: '', component: AppComponent },
//     {path: 'villes', component: VilleComponent}
// ];
var appRoutes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: 'app', component: app_component_1.AppComponent },
    { path: 'Villes', component: ville_component_1.VilleComponent }
];
// @NgModule({
//   imports: [RouterModule.forChild|Root(routes)],
//   exports: [RouterModule]
// })
// export class NameRoutingModapp{ }
// export const routedComponeapp= [AppComponent,VilleComponent];
exports.appRoute = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.route.js.map