import { Component } from '@angular/core';

@Component({
  selector: 'dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
  slider_value: [number, number]
  last_winning: number = 0
  game: string = "Dice";

  receiveData($event: any) {
    this.slider_value = $event
    this.PlayGame()
  }

  PlayGame(){
    let random = Math.floor(Math.random() * 6) + 1;
    if(random >= this.slider_value[0] && random <= this.slider_value[1]){
      this.last_winning = Math.ceil((4 - Math.abs(this.slider_value[0] - this.slider_value[1])))
      console.log("Właśnie wygrałeś x" + this.last_winning)
    } else {
      this.last_winning = 0
    }
  }
}
