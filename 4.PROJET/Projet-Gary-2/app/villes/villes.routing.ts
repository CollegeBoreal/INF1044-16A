import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { VillesComponent } from "./villes.component";
import { AuthGuard } from "../auth-guard.service";

export const villesRoute: Routes = [
    { path: "villes", component: VillesComponent},
];
// export const villesRouting: ModuleWithProviders = RouterModule.forChild(villesRoutes);