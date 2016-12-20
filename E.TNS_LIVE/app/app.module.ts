import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router"

import { AppRoutingModule }     from './app-routing.module';
import { NsModuleFactoryLoader } from "./shared/ns-module-factory-loader";

import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NsModuleFactoryLoader }
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
