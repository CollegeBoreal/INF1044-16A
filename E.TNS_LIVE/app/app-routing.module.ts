import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NativeScriptRouterModule } from "nativescript-angular/router";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
      NativeScriptRouterModule,
      NativeScriptRouterModule.forRoot(
          appRoutes
          )
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