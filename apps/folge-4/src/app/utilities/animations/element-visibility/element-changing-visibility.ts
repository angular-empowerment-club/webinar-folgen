/**
 * Represents a certain state of visibility an element can have
 * e.g.: hidden or shown
 */
export interface ElementChangingVisibility {
  /**
   * A descriptive name for the state of visibility
   *
   * Its value maps to names of @angular/animation state names.
   */
  visibleness: string;

  /**
   * Yields the next visibility state
   */
  next: () => ElementChangingVisibility;
}
