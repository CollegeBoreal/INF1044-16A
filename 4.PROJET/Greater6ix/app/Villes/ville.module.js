"use strict";
var core_1 = require('@angular/core');
var villes_routing_module_1 = require('./villes-routing.module');
var ville_component_1 = require('./ville.component');
var ajax_component_1 = require('./ajax/ajax.component');
var brampton_component_1 = require('./brampton/brampton.component');
var VilleModule = (function () {
    function VilleModule() {
    }
    VilleModule = __decorate([
        core_1.NgModule({
            imports: [villes_routing_module_1.VillesRoutingModule],
            exports: [],
            declarations: [
                ville_component_1.VilleComponent,
                ajax_component_1.AjaxComponent,
                brampton_component_1.BramptonComponent
            ],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VilleModule);
    return VilleModule;
}());
exports.VilleModule = VilleModule;
//# sourceMappingURL=ville.module.js.map