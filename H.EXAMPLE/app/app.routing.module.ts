import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// tslint:disable:max-line-length
export const routes: Routes = [
    {
        path: "",
        loadChildren: "./menu-list/menu-list.module#MenuListModule",
        data: { title: "NativeScript Code Samples" }
    },
    {
        path: "application-settings",
        loadChildren: "./application-settings/application-settings-examples.module#ApplicationSettingsExamplesModule",
        data: { title: "Application Settings" }
    },
    {
        path: "http",
        loadChildren: "./http/http-examples.module#HttpExamplesModule",
        data: { title: "HTTP Module" }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }