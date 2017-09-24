import { Component } from '@angular/core';
import { OptionService } from './option.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OptionService]
})
export class AppComponent {

  selected = '?';
  running = false;

  constructor(private optionService: OptionService) {
  }

  start() {
    const optionCount = this.optionService.count;
    const sn = this.random(0, optionCount - 1);
    let n = optionCount * 5 + sn - 1;
    this.optionService.setCurrentIndex(0);
    this.running = true;
    const intervalId = window.setInterval(() => {
      this.selected = this.optionService.next();
      if (n-- <= 0) {
        window.clearInterval(intervalId);
        this.running = false;
      }
    }, 60);
  }

  random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
