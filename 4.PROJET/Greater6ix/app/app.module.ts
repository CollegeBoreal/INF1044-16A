import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router"

import { AppComponent } from "./app.component";
import { VilleComponent } from "./villes/ville.component";
import { routes } from "./app.route";
@NgModule({
    declarations: [
        AppComponent,
        VilleComponent
        ],
    bootstrap: [
        AppComponent
        ],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule
        ],
    schemas: [
        NO_ERRORS_SCHEMA
        ]
})
export class AppModule { }
