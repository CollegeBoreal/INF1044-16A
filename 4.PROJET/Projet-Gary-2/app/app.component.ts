import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return "Vous etes a Mississauga";
        } else {
            return "Choisis une ville";
        }
    }
    
    public onTap() {
        this.counter--;
    }
}
