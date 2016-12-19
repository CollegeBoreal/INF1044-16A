import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeroListComponent }    from './hero-list/hero-list.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const heroesRoutes: Routes = [
  { path: 'heroes',  component: HeroListComponent },
  { path: 'hero/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [
      NativeScriptRouterModule,
      NativeScriptRouterModule.forChild(heroesRoutes)
  ],
  exports: [
    NativeScriptRouterModule
  ]
})
export class HeroRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/