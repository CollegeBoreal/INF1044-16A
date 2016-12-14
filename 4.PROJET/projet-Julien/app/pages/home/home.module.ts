import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HomeComponent }    from './home.component';
import { EditComponent }  from './edit.component';
import { AddComponent }  from './add.component';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    EditComponent,
    AddComponent
  ],
  providers: [
  ]
})
export class HomeModule {}