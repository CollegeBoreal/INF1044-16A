import { NgModule } from '@angular/core';
import { appRouting } from './villes.route';

import { VilleComponent } from './ville.component';
import { AjaxComponent } from './ajax/ajax.component';
import { BramptonComponent } from './brampton/brampton.component';

@NgModule({
    imports: [appRouting],
    exports: [],
    declarations: [
        VilleComponent,
        AjaxComponent,
        BramptonComponent
    ],
    providers: [],
})
export class VilleModule { }
