import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";

import { TitleAndNavButtonModule } from "../directives/title-and-nav-button.module";

import { MenuListRoutingModule } from "./menu-list.routing.module";

import { MenusListComponent } from "./menu-list.component";

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        MenuListRoutingModule
    ],
    declarations: [MenusListComponent]
})

export class MenuListModule { }
