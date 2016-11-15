import { ModuleWithProviders } from '@angular/core';
import{ Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VilleListComponent } from './dashboard/ville-list/ville-list.component'; 

const appRoutes: Routes = [
	{path: 'dashboard/', component:DashboardComponent},
	{path: 'dashboard/ville-list', component:VilleListComponent}
	];

export const appRouting : ModuleWithProviders = RouterModule.forRoot(appRoutes);