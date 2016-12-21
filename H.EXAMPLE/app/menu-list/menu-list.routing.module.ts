import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenusListComponent } from "./menu-list.component";


export const routerConfig: Routes = [{
    path: "",
    component: MenusListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routerConfig)],
  exports: [RouterModule]
})

export class MenuListRoutingModule { }