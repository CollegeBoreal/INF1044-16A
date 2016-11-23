// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppModule } from "./app.module";


// @NgModule({
//     declarations: [AppComponent],
//     bootstrap: [AppComponent],
//     imports: [NativeScriptModule],
// })

const platform = platformNativeScriptDynamic();
platform.bootstrapModule(AppModule);

