import { AuthGuard } from "./auth-guard.service";
import {VillesComponent} from "./villes/villes.component";
export const authProviders = [
    AuthGuard
];

export const appRoutes = [
    { path: "villes", component:VillesComponent}
];
