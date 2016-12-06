"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: " \n<StackLayout class=\"nav\">\n  <ActionBar title=\"The Greater 6ix\"></ActionBar>\n  <Button text=\"M\" [nsRouterLink]=\"['/villes']\" class=\"btnChVille\"></Button>\n</StackLayout>\n\n<StackLayout>\n  <router-outlet></router-outlet>\n</StackLayout>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map