import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService }                from './login/shared/auth-guard.service';
import { CanDeactivateGuardService }       from './login/shared/can-deactivate-guard.service';
import { SelectivePreloadStrategyService } from './shared/selective-preload-strategy.service';

const adminModulePath  = 'app/admin/admin.module#AdminModule';
const crisisModulePath = 'app/crisis-center/crisis-center.module#CrisisCenterModule';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: adminModulePath,
    canLoad: [AuthGuardService]
  },
  {
    path: 'crisis-center',
    loadChildren: crisisModulePath,
    data: {
      preload: true
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { preloadingStrategy: SelectivePreloadStrategyService }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuardService,
    SelectivePreloadStrategyService
  ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/