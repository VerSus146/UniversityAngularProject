import { Component, Output, EventEmitter } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'range-slider',
  templateUrl: './range-slider.component.html'
})
export class RangeSliderComponent {

  minValue: number = 1;
  maxValue: number = 3;
  options: Options = {
    floor:1,
    ceil: 6,
    minRange: 1,
    maxRange: 2
  };

  @Output() messageEvent = new EventEmitter<[number, number]>();

  constructor() { }

  sendData() {
    this.messageEvent.emit([this.minValue, this.maxValue])
  }

  GetBalance() {
    let user: any = JSON.parse(localStorage.getItem("LoggedUser"))
    return "Balance: " + user[0].stats.Balance.amount + " zł"
  }
}
