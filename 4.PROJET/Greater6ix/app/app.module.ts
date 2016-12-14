import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router"
import { AppRoutingModule }     from './app-routing.module';

// import {BrowserModule} from '@angular/platform-browser';
// import {FormsModule} from '@angular/forms';

import { AppComponent } from "./app.component";
import { VilleComponent } from "./Villes/ville.component";

@NgModule({
    declarations: [
        AppComponent,
        VilleComponent
        ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        AppRoutingModule //,
        // FormsModule,
        // BrowserModule
        ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
