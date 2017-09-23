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

  constructor(private optionService: OptionService) {
  }

  start() {
    const min = this.optionService.count + 1;
    const max = this.optionService.count * 5;
    let n = this.random(min, max);
    const intervalId = window.setInterval(() => {
      this.selected = this.optionService.next();
      if (n-- <= 0) {
        window.clearInterval(intervalId);
      }
    }, 60);
  }

  random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
