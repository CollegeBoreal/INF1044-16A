import { Component, trigger, state, transition, animate, style } from "@angular/core";


@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    animations: [
        trigger('etat', [
            state("inactif", style({"background-color": "red"})),
            state("actif", style({"background-color": "green"})),
            transition("inactif => actif", [animate ("60ms ease-out")]),
            transition("actif => inactif", [animate ("60ms ease-out")]),

        ])
    ]

})
export class AppComponent {
    public courant: boolean;

    constructor() {
        this.courant = false;
    }

    balancer(){
        this.courant = !this.courant;

    }
}
