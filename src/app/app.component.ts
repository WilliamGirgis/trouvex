import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export const rightSlide =
  trigger('routeAnimations', [
    state('main', style({
      height: '100vh',
      opacity: 0.8,
      backgroundColor: 'blue',

    })), 
    state('box', style({
      height: '100vh',
      opacity: 0.8,
      backgroundColor: 'yellow',

    })),

    transition('main <=> box', [

      animate(500)
  ]),
    
   /* transition('Home => *, Values => Contact,Values => Machines,Contact => Machines,* => Contact,Prof => Contact, Machines => Prof, Values => Prof', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',

        })
      ],{ optional: true }),
      query(':enter', [
        style({ left: '100%' }) // left : 100% to change the direction
        
      ],{ optional: true }),
      query(':leave', animateChild(),{ optional: true }),
      group([
        query(':leave', [
          animate('400ms ease-in-out', style({left: '-100%' }))// left -100% to change the direction
        ],{ optional: true }),
        query(':enter', [
          animate('400ms ease-in-out', style({ left: '0%' }))
        ],{ optional: true })
      ]),
    ])*/
  ]);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[rightSlide]
})


export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  title = 'portfolio';
}
