import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
      path: '/home',
      loadChildren: 'app/home/home/home.module#HomeModule'
  }
//   {
//     path: 'login', component: LoginComponent
//   }
];

@NgModule({
    imports: [
        RouterModule.forRoot([
            // { path: '', redirectTo: "main", component: AppComponent },
            // { path: '', redirectTo: "Home-page", pathMatch:"full"},
            // { path: 'main', component: AppComponent },
            // { path: 'Home-page', component: HomeComponent },
            // { path: 'Login-page', component: LoginComponent },
            routes
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
