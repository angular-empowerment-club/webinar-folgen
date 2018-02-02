import { ElementChangingVisibility } from './element-changing-visibility';

export class HiddenElement implements ElementChangingVisibility {
  readonly visibleness = 'hidden';

  next() {
    return new ShownElement();
  }
}

export class ShownElement implements ElementChangingVisibility {
  readonly visibleness = 'shown';

  next() {
    return new HiddenElement();
  }
}
