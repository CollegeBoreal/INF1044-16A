import { AuthGuard } from "./auth-guard.service";
import {VillesComponent} from "./villes/villes.component";
export const authProviders = [
    AuthGuard
];

export const appRoutes = [
    // { path: "", redirectTo: "/image", pathMatch: "full" },

    { path: "villes", component:VillesComponent}
];