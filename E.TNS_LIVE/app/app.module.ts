import { NativeScriptModule } from "nativescript-angular/platform";

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        NativeScriptModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}