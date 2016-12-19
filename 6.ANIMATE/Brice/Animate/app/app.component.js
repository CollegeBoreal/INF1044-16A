"use strict";
var core_1 = require("@angular/core");
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
                core_1.trigger('etat', [
                    core_1.state("inactif", core_1.style({ "background-color": "red" })),
                    core_1.state("actif", core_1.style({ "background-color": "green" })),
                    core_1.transition("inactif => actif", [core_1.animate("600ms ease-out")]),
                    core_1.transition("actif => inactif", [core_1.animate("600ms ease-out")])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map