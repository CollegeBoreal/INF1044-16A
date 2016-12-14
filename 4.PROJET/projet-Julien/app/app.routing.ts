import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
 import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// const routes: Routes = [
// //   {
// //     path: '',
// //     redirectTo: '/home',
// //     pathMatch: 'full'
// //   }
//      //{ path: '', redirectTo: "main", pathMatch:"full"}
//     //  { path: 'main', component: AppComponent },
//   {
//   path: '',
//   redirectTo: '/home',
//   pathMatch: 'full'
// },
// // //   {
// // //     path: 'login', component: LoginComponent
// // //   }
// ];

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: "Home-page", pathMatch:"full"},
            { path: 'main', component: AppComponent },
            { path: 'Home-page', component: HomeComponent },
            { path: 'Login-page', component: LoginComponent },
            
            //routes
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
