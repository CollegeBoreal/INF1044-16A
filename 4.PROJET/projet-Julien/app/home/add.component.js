"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var AddComponent = (function () {
    function AddComponent(router) {
        this.router = router;
    }
    AddComponent.prototype.ngOnInit = function () { };
    AddComponent.prototype.gotoBack = function () {
        this.router.navigate(['/home']);
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'Add-Page',
            template: "\n    <h1>Add Mode</h1>\n    <button (click)=\"gotoBack()\">Back</button>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
//# sourceMappingURL=add.component.js.map