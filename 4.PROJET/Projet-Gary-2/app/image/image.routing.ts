import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ImageComponent } from "./image.component";
import { AuthGuard } from "../auth-guard.service";

const imageRoutes: Routes = [
    { path: "images", component: ImageComponent, canActivate: [AuthGuard] },
];
export const imageRouting: ModuleWithProviders = RouterModule.forChild(imageRoutes);