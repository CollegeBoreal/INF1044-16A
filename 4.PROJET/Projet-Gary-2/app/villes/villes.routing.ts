import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth-guard.service";

import { VillesComponent } from "./villes.component";
import { AjaxComponent } from "./Ajax/ajax.component";
import { BramptonComponent } from "./Brampton/brampton.component";

export const villesRoute: Routes = [
    { path: "", component: VillesComponent},
    { path: "Ajax", component: AjaxComponent},
    { path: "Brampton", component: BramptonComponent}
    
];
export const villesRouting: ModuleWithProviders = RouterModule.forChild(villesRoute);