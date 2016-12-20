// tslint:disable:max-line-length
export const routes = [
    {
        path: "",
        loadChildren: "./examples-list.module#ExamplesListModule",
        data: { title: "NativeScript Code Samples" }
    },
    {
        path: "application-settings",
        loadChildren: "./application-settings/application-settings-examples.module#ApplicationSettingsExamplesModule",
        data: { title: "Application Settings" }
    },
    {
        path: "http",
        loadChildren: "./http/http-examples.module#HttpExamplesModule",
        data: { title: "HTTP Module" }
    }
];
