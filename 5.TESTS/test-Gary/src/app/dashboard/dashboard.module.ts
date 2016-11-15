import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouting } from '../app.routing'
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { VilleListComponent } from './ville-list/ville-list.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    appRouting
  ],
  declarations: [DashboardComponent, VilleListComponent]
})
export class DashboardModule { }