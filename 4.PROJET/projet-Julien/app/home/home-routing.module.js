"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var homeRoutes = 
// [
//   {
//     path: '',
//     component: HomeComponent,
//     children: [
//       {
//         path: ':add',
//         component: AddComponent,
//       },
//       {
//         path: ':edit',
//         component: EditComponent
//       }
//     ]
//   }
// ];
[
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        children: [
            {
                path: '',
                component: home_component_1.HomeComponent,
                children: [
                    {
                        path: ':id',
                        component: home_component_1.HomeComponent
                    },
                    {
                        path: '',
                        component: home_component_1.HomeComponent
                    }
                ]
            }
        ]
    }
];
// [
//   { path: 'Home-page',  component: HomeComponent },
//   { path: 'Home-page/:id', component: EditComponent },
//   { path: 'Add-page', component: AddComponent }
// ];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(homeRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());
exports.HomeRoutingModule = HomeRoutingModule;
//# sourceMappingURL=home-routing.module.js.map