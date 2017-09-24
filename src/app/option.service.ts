import { Injectable } from '@angular/core';

@Injectable()
export class OptionService {

  options = [
    '小阿姨',
    '豪客',
    '大町拉麵',
    '吉蜂蒸餃',
    '蒸作吉食'
  ];

  currentIndex = this.options.length - 1;

  setCurrentIndex(n: number) {
    this.currentIndex = n;
  }

  next() {
    this.currentIndex = this.isLast() ? 0 : this.currentIndex + 1;
    return this.options[this.currentIndex];
  }

  getAt(index: number) {
    return this.options[index];
  }

  get count() {
    return this.options.length;
  }

  private isLast() {
    return this.options.length - 1 === this.currentIndex;
  }

}
