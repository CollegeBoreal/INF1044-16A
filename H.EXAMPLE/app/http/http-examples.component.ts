import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./../menu-list/link";

let menuLinks = [
    new Link("HTTP POST", "/http/http-post"),
    new Link("HTTP GET", "/http/http-get")
];

@Component({
    moduleId: module.id,
    templateUrl: "./../menu-list/menu-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HttpExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (let i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}