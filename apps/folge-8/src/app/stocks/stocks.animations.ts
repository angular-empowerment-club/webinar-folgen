import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const fadeStockQuotes = trigger('flyInOut', [
  state('in', style({ opacity: 1, transform: 'translateX(0)' })),
  transition('void => *', [
    style({ opacity: 0, transform: 'translateX(-100%)' }),
    animate(1000)
  ]),
  transition('* => void', [
    animate(100, style({ opacity: 1, transform: 'translateX(100%)' }))
  ])
]);
