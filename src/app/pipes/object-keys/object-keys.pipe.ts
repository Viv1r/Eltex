import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectKeys'
})
export class ObjectKeysPipe implements PipeTransform {

  transform(object: object) {
    return Object.keys(object).map(key => key as keyof typeof object);
  }

}
