// this import should be first in order to load some required settings (like globals and reflect-metadata)
// >> ngmodule-config
// >> (hide)
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";
// << (hide)
import { NsModuleFactoryLoader } from "./shared/ns-module-factory-loader";

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        AppRoutingModule,
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NsModuleFactoryLoader }
    ]
})
// << ngmodule-config
export class AppModule { }
