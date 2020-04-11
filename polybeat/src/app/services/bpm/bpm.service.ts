import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BpmService {

  private c: number = 0.06;

  constructor() { }

  public intervalToBpm(interval: number) {
    return interval * this.c;
  }

  public bpmToInterval(bpm: number) {
    return bpm / this.c;
  }
}
