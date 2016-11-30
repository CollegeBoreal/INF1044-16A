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
            // template: `
            // <StackLayout>
            // <label text="test"></label> 
            // <label text="cat!"></label>
            // <Button text="switch" [nsRouterLink]="['/Home-page']"></Button>
            // <Button text="switch2" [nsRouterLink]="['/List-page']"></Button>
            // <router-outlet></router-outlet>
            // </StackLayout>
            // `,
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map