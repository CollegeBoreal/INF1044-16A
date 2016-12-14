import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { VilleComponent } from './Villes/ville.component';

// export const routes: Routes = [
//     {path: '', component: AppComponent },
//     {path: 'villes', component: VilleComponent}
// ];

const appRoutes=[
	{path: '', redirectTo: 'app', pathMatch: 'full'},
	{path: 'app', component:AppComponent},
  {path: 'Villes', component:VilleComponent}
	];

// @NgModule({
//   imports: [RouterModule.forChild|Root(routes)],
//   exports: [RouterModule]
// })

// export class NameRoutingModapp{ }
// export const routedComponeapp= [AppComponent,VilleComponent];
export const appRoute = RouterModule.forRoot(appRoutes);