"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: " \n<StackLayout class=\"nav\">\n  <ActionBar title=\"The Greater 6ix\">\n    <Button text=\"M\" [nsRouterLink]=\"['/villes/ville.component']\" class=\"btnChVille\"></Button>\n  </ActionBar>\n  \n  <app-villes></app-villes>\n</StackLayout>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map