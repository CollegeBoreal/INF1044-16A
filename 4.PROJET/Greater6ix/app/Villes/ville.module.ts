import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NgModule } from '@angular/core';
import { VillesRoutingModule } from './villes-routing.module';

import { VilleComponent } from './ville.component';
import { AjaxComponent } from './ajax/ajax.component';
import { BramptonComponent } from './brampton/brampton.component';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        VillesRoutingModule
    ],
    exports: [],
    declarations: [
        VilleComponent,
        AjaxComponent,
        BramptonComponent
    ],
    providers: [],
})
export class VilleModule { }
