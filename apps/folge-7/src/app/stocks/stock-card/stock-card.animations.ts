import { animate, state, style, transition, trigger } from '@angular/animations';

export const detailsVisibility = trigger('detailsVisibility', [
  state(
    'hidden',
    style({
      opacity: 0,
      display: 'none'
    })
  ),
  state(
    'shown',
    style({
      opacity: 1,
      display: 'block'
    })
  ),
  transition('hidden => shown', animate('1000ms ease-in')),
  transition('shown => hidden', animate('1000ms ease-out'))
]);
