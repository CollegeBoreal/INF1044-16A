import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing'; //TODO: Create app.routing

// import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { HomeModule } from './pages/home/home.module';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        AppRoutingModule,
        HomeModule
    ],
    declarations: [
        AppComponent,
        LoginComponent
        ],
    providers: [/* TODO: Providers go here */],
    bootstrap: [AppComponent],
})

export class AppModule { }
