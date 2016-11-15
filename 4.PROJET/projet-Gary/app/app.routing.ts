import { AuthGuard } from "./auth-guard.service";

export const authProviders = [
    AuthGuard
];

export const appRoutes = [
    { path: "", redirectTo: "/image", pathMatch: "full" },
    { path: "villes", redirectTo: "/villes", pathMatch: "full" },
    
];