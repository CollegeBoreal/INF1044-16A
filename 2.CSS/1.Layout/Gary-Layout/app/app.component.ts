import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " fois de plus";
        } else {
            return "Et voila le tour est jouer";
        }
    }
    
    public onTap() {
        this.counter--;
    }
}
