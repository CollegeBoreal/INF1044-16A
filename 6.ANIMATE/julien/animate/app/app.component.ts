import {Component} from "@angular/core";
import {animate,trigger,state,transition,style} from "@angular/core";
@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    animations: [
        trigger('etat', [
            state("inactif", style({"background-color":"red"})),
            state("actif", style({"background-color":"green"})),
            transition("inactif => actif", [animate("600ms ease-out")]),
            transition("actif => inactif", [animate("600ms ease-out")]),
        ])
    ]
})
export class AppComponent {
   public courant:boolean;

   constructeur(){
       this.courant= false;
   }

   balancer(){
       this.courant = !this.courant;
   }

}
