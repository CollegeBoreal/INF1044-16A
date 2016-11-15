import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing'; //TODO: Create app.routing

import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ListComponent
        ],
    providers: [/* TODO: Providers go here */],
    bootstrap: [AppComponent],
})

export class AppModule { }
