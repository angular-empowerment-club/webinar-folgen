import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperOrLowercase'
})
export class UpperOrLowercasePipe implements PipeTransform {
  transform(value: string, isUppercase: boolean): string {
    if (!value) {
      return value;
    }

    switch (isUppercase) {
      case true:
        return value.toUpperCase();
      case false:
        return value.toLowerCase();
    }
  }
}
