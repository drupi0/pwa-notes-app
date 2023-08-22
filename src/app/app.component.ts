import { Component } from '@angular/core';
import { Route, RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  standalone: true,
  imports: [RouterModule]
})
export class AppComponent {
}