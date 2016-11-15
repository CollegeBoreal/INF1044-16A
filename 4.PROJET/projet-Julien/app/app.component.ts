import {Component} from "@angular/core";

import frames = require("ui/frame");

@Component({
    selector: "main",
    template: `
    <StackLayout>
    <label text="test"></label> 
    <label text="cat!"></label>
    <Button text="switch" [nsRouterLink]="['/Home-page']"></Button>
    <Button text="switch2" [nsRouterLink]="['/List-page']"></Button>
    <router-outlet></router-outlet>
    </StackLayout>
    `,
    //templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }
    public pageSwitch() {
        this.counter++;
    }
}
