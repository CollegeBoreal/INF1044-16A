"use strict";
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.constructeur = function () {
        this.courant = false;
    };
    AppComponent.prototype.balancer = function () {
        this.courant = !this.courant;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
            animations: [
                core_2.trigger('etat', [
                    core_2.state("inactif", core_2.style({ "background-color": "red" })),
                    core_2.state("actif", core_2.style({ "background-color": "green" })),
                    core_2.transition("inactif => actif", [core_2.animate("600ms ease-out")]),
                    core_2.transition("actif => inactif", [core_2.animate("600ms ease-out")]),
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map