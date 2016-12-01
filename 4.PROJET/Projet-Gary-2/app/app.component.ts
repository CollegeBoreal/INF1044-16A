import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template:` 
<StackLayout class="nav">
  <ActionBar title="The Greater 6ix">
    <Button text="M" [nsRouterLink]="['/villes/ville.component']" class="btnChVille"></Button>
  </ActionBar>
  
  <app-villes></app-villes>
</StackLayout>`
})
export class AppComponent {}
