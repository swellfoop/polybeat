import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  public interval: number = 1000;
  public tick: number = 0;

  private timer;

  constructor() { }

  public start() {
    this.timer = setInterval(el => {
      this.tick ++;
    }, this.interval);
  }

  public stop() {
    this.pause();
    this.reset();
  }

  public pause() {
    clearInterval(this.timer);
  }

  public reset() {
    this.tick = 0;
  }

  public updateInterval(interval: number) {
    this.interval = interval;
    this.start();
  }
}
