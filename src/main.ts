import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { Route, provideRouter } from "@angular/router";
import { provideServiceWorker } from "@angular/service-worker";
import { isDevMode } from "@angular/core";

const routes: Route[] = [{
  path: 'login',
  loadComponent: () => import('@app').then(c => c.LoginPageComponent),
},
{
  path: "",
  loadComponent: () => import('@app').then(c => c.NoteListPageComponent)
},
{
  path: "**",
  redirectTo: ""
}]

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ]
});