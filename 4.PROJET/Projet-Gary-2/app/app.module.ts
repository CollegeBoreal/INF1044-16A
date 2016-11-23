import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { authProviders, appRoutes } from "./app.routing";
import { AppComponent } from "./app.component";

@NgModule({
    providers: [
        authProviders
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent]
})export class AppModule { }

