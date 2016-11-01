import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 1;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " Tappez pour verifier si vous etes un agent";
        } else {
            return "Pas un agent secret";
        }
    }
    
    public onTap() {
        this.counter--;
    }
}
