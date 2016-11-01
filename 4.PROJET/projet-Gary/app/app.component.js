"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.counter = 1;
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " Tappez pour verifier si vous etes un agent";
            }
            else {
                return "Pas un agent secret";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        this.counter--;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map