import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VilleComponent } from './ville.component';
import { AjaxComponent } from './ajax/ajax.component';
import { BramptonComponent } from './brampton/brampton.component';

// const routes: Routes = [
//   { path: '', component: VilleComponent },
//   { path: 'ajax', component: AjaxComponent },
//   { path: 'brampton', component: BramptonComponent }
// ];

const villesRoutes=[
	{path: '', redirectTo: 'Ville', pathMatch: 'full'},
	{path: 'Ville', component:VilleComponent},
	{path: 'ajax', component:AjaxComponent},
  {path: 'brampton', component:BramptonComponent}
	];

@NgModule({
  imports: [RouterModule.forChild(villesRoutes)],
  exports: [RouterModule]
})

export class VillesRoutingModule { }

// export const routedComponents = [VilleComponent,AjaxComponent,BramptonComponent];