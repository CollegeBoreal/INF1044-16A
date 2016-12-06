import { AuthGuard } from "./auth-guard.service";
import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {VillesComponent} from "./villes/villes.component";
import { AjaxComponent } from "./villes/Ajax/ajax.component";
import { BramptonComponent } from "./villes/Brampton/brampton.component";
import { AppComponent } from "./app.component";

export const authProviders = [
    AuthGuard
];

export const appRoutes = [
    { path: "", component:AppComponent},
    { path: "villes", component:VillesComponent},
    { path: "Ajax", component: AjaxComponent},
    { path: "Brampton", component: BramptonComponent}
];
// export const villesRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);