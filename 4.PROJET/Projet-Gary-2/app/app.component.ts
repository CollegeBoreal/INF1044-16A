import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template:` 
<StackLayout class="nav">
  <ActionBar title="The Greater 6ix"></ActionBar>
  <Button text="M" [nsRouterLink]="['/villes']" class="btnChVille"></Button>
</StackLayout>

<StackLayout>
  <router-outlet></router-outlet>
</StackLayout>
`
})
export class AppComponent {}
