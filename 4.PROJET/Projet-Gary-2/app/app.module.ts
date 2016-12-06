import { NgModule, Component } from "@angular/core";
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { authProviders, appRoutes } from "./app.routing";

import { AppComponent } from "./app.component";
import {VillesComponent} from "./villes/villes.component";
import { AjaxComponent } from "./villes/Ajax/ajax.component";
import { BramptonComponent } from "./villes/Brampton/brampton.component";

@Component({

    selector: 'app-module',
    template:`<router-outlet></router-outlet>`
})

@NgModule({
    providers: [
        authProviders
    ],
    imports: [
        appRoutes,
        Router,

        NativeScriptModule,
        NavigationStart,
        NavigationEnd,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        VillesComponent,
        AjaxComponent,
        BramptonComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformNativeScriptDynamic().bootstrapModule(AppModule);