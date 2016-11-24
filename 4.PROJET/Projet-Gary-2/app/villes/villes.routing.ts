import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { VillesComponent } from "./villes.component";
import { AuthGuard } from "../auth-guard.service";

const villesRoutes: Routes = [
    { path: "villes", component: VillesComponent, canActivate: [AuthGuard] },
];
export const villesRouting: ModuleWithProviders = RouterModule.forChild(villesRoutes);