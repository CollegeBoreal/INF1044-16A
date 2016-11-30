import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'Add-Page',
    template: `
    <h1>Add Mode</h1>
    <button (click)="gotoBack()">Back</button>
    `
})
export class AddComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }
    
    gotoBack(){
        this.router.navigate(['/home']);
    }
}