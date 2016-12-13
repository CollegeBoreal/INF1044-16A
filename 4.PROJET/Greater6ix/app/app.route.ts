import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { VilleComponent } from './villes/ville.component';

export const routes: Routes = [
    {path: '', component: AppComponent },
    {path: 'villes', component: VilleComponent}
];

@NgModule({
  imports: [RouterModule.forChild|Root(routes)],
  exports: [RouterModule]
})

Apport class NameRoutingModapp{ }
Apport const routedComponeapp= [AppComponent,VilleComponent];
// export const appRoute = RouterModule.forRoot(routes);