import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRouting } from './app.route';
import { AppComponent } from './app.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {VilleListComponent} from "./dashboard/ville-list/ville-list.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VilleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
