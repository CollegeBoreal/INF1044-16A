"use strict";
var router_1 = require('@angular/router');
var ville_component_1 = require('./ville.component');
var ajax_component_1 = require('./ajax/ajax.component');
var brampton_component_1 = require('./brampton/brampton.component');
// const routes: Routes = [
//   { path: '', component: VilleComponent },
//   { path: 'ajax', component: AjaxComponent },
//   { path: 'brampton', component: BramptonComponent }
// ];
var appRoutes = [
    { path: '', redirectTo: 'Ville', pathMatch: 'full' },
    { path: 'Ville', component: ville_component_1.VilleComponent },
    { path: 'ajax', component: ajax_component_1.AjaxComponent },
    { path: 'brampton', component: brampton_component_1.BramptonComponent }
];
// @NgModule({
//   imports: [RouterModule.forChild|Root(routes)],
//   exports: [RouterModule]
// })
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
// export class NameRoutingModule { }
// export const routedComponents = [VilleComponent,AjaxComponent,BramptonComponent]; 
//# sourceMappingURL=villes.route.js.map