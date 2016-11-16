import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { VilleListComponent } from './ville-list/ville-list.component';
import { appRouting } from "../app.route";
 
const appRoutes: Routes = [
  { path: '/ville-list', component: VilleListComponent }

@NgModule({
  imports: [
    CommonModule,
    appRouting
  ],
  declarations: [DashboardComponent, VilleListComponent]
})
export class DashboardModule { }
