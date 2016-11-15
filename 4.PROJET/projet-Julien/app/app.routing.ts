import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';

// const routes: Routes = [
//   { path: '', component: AppComponent },
//   { path: 'home-page', component: HomeComponent },
//   { path: 'List-page', component: ListComponent },
// ];

@NgModule({
    imports: [
        RouterModule.forRoot([
           // { path: '', redirectTo: "main", component: AppComponent },
            { path: '', redirectTo: "Home-page", pathMatch:"full"},
            { path: 'main', component: AppComponent },
            { path: 'Home-page', component: HomeComponent },
            { path: 'List-page', component: ListComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
