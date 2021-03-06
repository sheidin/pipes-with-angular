import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length > 10) {
    return value.substr(0, +args) + '...';
    }else {
      return value;
    }
  }

}
