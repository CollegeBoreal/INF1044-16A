import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { VilleListComponent } from './ville-list/ville-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, VilleListComponent]
})
export class DashboardModule { }
