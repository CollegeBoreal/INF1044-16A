import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./link";

let mainMenuLinks = [
    new Link("HTTP Module", "/http"),
    new Link("Application Settings", "/application-settings")
];

@Component({
    moduleId: module.id,
    templateUrl: "menu-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MenusListComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        mainMenuLinks.sort(function (a, b) {
            let titleA = a.title.toUpperCase();
            let titleB = b.title.toUpperCase();
            return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
        });

        for (let i = 0; i < mainMenuLinks.length; i++) {
            this.links.push(mainMenuLinks[i]);
        }
    }
}
