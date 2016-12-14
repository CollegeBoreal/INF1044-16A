import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { VilleComponent } from './Villes/ville.component';

// export const routes: Routes = [
//     {path: '', component: AppComponent },
//     {path: 'villes', component: VilleComponent}
// ];

// const appRoutes=[
// 	{path: '', redirectTo: 'app', pathMatch: 'full'},
// 	{path: 'app', component:AppComponent},
//   {path: 'Villes', component:VilleComponent}
// 	];

const appRoutes: Routes = [
    {path: 'app', component:AppComponent},
    {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'
    }
    ,{
        path: 'Villes',
        // loadChildren: 'app/Villes/Ville.module#VilleModule'
        loadChildren: () => require("app/Villes/Ville.module")["VilleModule"]
        //  Error: Uncaught (in promise): Error: com.tns.NativeScriptException: 
        // Failed to find module: "app/Villes/Ville.module", relative to: app/tns_modules/
  }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{ }