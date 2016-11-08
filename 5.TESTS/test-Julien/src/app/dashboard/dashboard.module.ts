import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CodeListComponent } from './code-list/code-list.component';

@NgModule({
  imports: [
    CommonModule,
     CodeListComponent
  ],
  declarations: [
    DashboardComponent
     ]
})
export class DashboardModule { }
