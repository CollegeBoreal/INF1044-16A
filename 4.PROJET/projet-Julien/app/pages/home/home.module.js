"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var home_component_1 = require('./home.component');
var edit_component_1 = require('./edit.component');
var add_component_1 = require('./add.component');
var home_routing_module_1 = require('./home-routing.module');
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                home_routing_module_1.HomeRoutingModule
            ],
            declarations: [
                home_component_1.HomeComponent,
                edit_component_1.EditComponent,
                add_component_1.AddComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map