import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing'; //TODO: Create app.routing

 //import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { HomeModule } from './home/home.module';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        AppRoutingModule,
        HomeModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        //HomeComponent
        ],
    providers: [/* TODO: Providers go here */],
    bootstrap: [AppComponent],
})

export class AppModule { }
