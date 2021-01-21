import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noNulo'
})
export class NoNuloPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let texto: string = "";
    if (value === undefined || value === null || value === "") {
      return '-';
    } else {
      return value;
    }
  }

}
