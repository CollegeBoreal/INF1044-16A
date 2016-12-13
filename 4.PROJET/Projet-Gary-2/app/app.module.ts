import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule }  from "nativescript-angular/platform";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { VillesComponent } from "./villes/villes.component";
import { AjaxComponent } from "./villes/Ajax/ajax.component";
import { BramptonComponent } from "./villes/Brampton/brampton.component";

// @NgModule({
//     providers: [
//     ],
//     imports: [
//         NativeScriptModule,
//         NativeScriptHttpModule,
//         NativeScriptRouterModule
//     ],
//     declarations: [
//         AppComponent,
//         VillesComponent,
//         AjaxComponent,
//         BramptonComponent
//     ],
//     bootstrap: [AppComponent],
//     schemas: [NO_ERRORS_SCHEMA]
// })
@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule]
    // schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }