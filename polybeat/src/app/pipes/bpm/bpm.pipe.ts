import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bpm'
})
export class BpmPipe implements PipeTransform {

  private c: number = 0.06;

  transform(value: number, ...args: unknown[]): number {
    return value * this.c;
  }

}
