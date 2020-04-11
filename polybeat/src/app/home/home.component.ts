import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer/timer.service';
import { BpmService } from '../services/bpm/bpm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  public interval: number;

  constructor(public timer: TimerService, private bpm: BpmService) { }

  ngOnInit(): void {

  }

  setInterval() {
    this.timer.updateInterval(this.bpm.bpmToInterval(this.interval));
  }

}
