import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ajax-app',
    template: `<label text="Bienvenue a Ajax"></label>`
})
export class AjaxComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}