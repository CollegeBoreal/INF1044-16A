import {ModuleWithProviders} from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppComponent} from './app.component';
import {VilleListComponent} from './dashboard/ville-list/ville-list.component';

const appRoutes: Routes = [
  {path: '', component:AppComponent},
  {path: 'apropos', component:DashboardComponent},
  {path: 'autre', component:VilleListComponent}
];

export const appRouting : ModuleWithProviders = RouterModule.forRoot(appRoutes);