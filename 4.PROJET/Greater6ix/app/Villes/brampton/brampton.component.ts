import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'brampton-app',
    template: `<label text="Bienvenue a Brampton" class="Villetxt"></label>`
})
export class BramptonComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}