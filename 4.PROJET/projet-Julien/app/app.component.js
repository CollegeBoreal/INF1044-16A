"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.counter = 16;
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        this.counter--;
    };
    AppComponent.prototype.pageSwitch = function () {
        this.counter++;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            template: "\n    <StackLayout>\n    <label text=\"test\"></label> \n    <label text=\"cat!\"></label>\n    <Button text=\"switch\" [nsRouterLink]=\"['/Home-page']\"></Button>\n    <Button text=\"switch2\" [nsRouterLink]=\"['/List-page']\"></Button>\n    <router-outlet></router-outlet>\n    </StackLayout>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map