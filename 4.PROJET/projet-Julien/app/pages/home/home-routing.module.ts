import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }    from './home.component';
import { EditComponent }  from './edit.component';
import { AddComponent }  from './add.component';

const homeRoutes: Routes = 
// [
//   {
//     path: '',
//     component: HomeComponent,
//     children: [
//       {
//         path: ':add',
//         component: AddComponent,
//       },
//       {
//         path: ':edit',
//         component: EditComponent
//       }
//     ]
//   }
// ];

// [
//   {
//     path: '',
//     redirectTo: '/home',
//     pathMatch: 'full'
//   },
//   {
//     path: 'home',
//     component: HomeComponent,
//     children: [
//       {
//         path: '',
//         component: HomeComponent,
//         children: [
//           {
//             path: ':id',
//             component: HomeComponent
//           },
//           {
//             path: '',
//             component: HomeComponent
//           }
//         ]
//       }
//     ]
//   }
// ];

[
  { path: 'Home-page',  component: HomeComponent },
  { path: 'Home-page/:id', component: EditComponent },
  { path: 'Add-page', component: AddComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
