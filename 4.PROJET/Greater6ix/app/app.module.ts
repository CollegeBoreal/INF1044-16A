
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router"


import { AppRoutingModule }     from './app-routing.module';

// import {BrowserModule} from '@angular/platform-browser';
// import {FormsModule} from '@angular/forms';

import { AppComponent } from "./app.component";

import { NsModuleFactoryLoader } from "./ns-module-factory-loader";

@NgModule({
    declarations: [
        AppComponent
        ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        AppRoutingModule //,
        // FormsModule,
        // BrowserModule
        ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NsModuleFactoryLoader }
    ]
})
export class AppModule { }
