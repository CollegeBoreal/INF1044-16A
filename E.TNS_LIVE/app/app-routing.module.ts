import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule} from "nativescript-angular/router"
import { NgModule }             from '@angular/core';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    }
    ,{
        path: 'heroes',
        loadChildren: './heroes/heroes.module#HeroesModule'
    }
];

@NgModule({
  imports: [
      NativeScriptRouterModule,
      NativeScriptRouterModule.forRoot(appRoutes)
  ],
  exports: [
    NativeScriptRouterModule
  ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/