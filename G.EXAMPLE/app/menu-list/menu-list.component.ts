import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./link";

let mainMenuLinks: Array<Link> = [
    new Link("HTTP Module", "/http"),
    new Link("Application Settings", "/application-settings")
];

@Component({
    moduleId: module.id,
    templateUrl: "menu-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MenusListComponent implements OnInit {
    public links: Array<Link>;

    constructor() {
        this.links = [];
    }

    public ngOnInit() {

        let sortedLinks: Array<Link> = [];

        sortedLinks = mainMenuLinks.slice(0);

        sortedLinks.sort( (a,b): number => {
            let titleA = a.title.toUpperCase();
            let titleB = b.title.toUpperCase();
            return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
        });

        // deep copy
        sortedLinks.forEach( result => this.links.push(result));

    }
}
