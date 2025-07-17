import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, query, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="page-container">
      <div [@routeAnimations]="prepareRoute(outlet)">
        <router-outlet #outlet="outlet"></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      min-height: 100vh;
    }
  `],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            opacity: 0,
            transform: 'translateY(20px)'
          })
        ], { optional: true }),
        query(':enter', [
          animate('0.4s ease-out', style({
            opacity: 1,
            transform: 'translateY(0)'
          }))
        ], { optional: true }),
        query(':leave', [
          animate('0.3s ease-in', style({
            opacity: 0,
            transform: 'translateY(-20px)'
          }))
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
} 