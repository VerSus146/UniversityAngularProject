import { Component } from '@angular/core';
import {UserModel} from "../../shared/user.model";

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
    if(this.UpdateStats()){
      let random = Math.floor(Math.random() * 6) + 1;
      if(random >= this.slider_value[0] && random <= this.slider_value[1]){
        this.last_winning = Math.ceil((4 - Math.abs(this.slider_value[0] - this.slider_value[1])))
        console.log("Właśnie wygrałeś x" + this.last_winning)
      } else {
        this.last_winning = 0
      }
      this.AddWinnings(this.last_winning)
    }
  }

  AddWinnings(total_multiplayer){
    if(total_multiplayer > 1){
      let user: any = JSON.parse(localStorage.getItem("LoggedUser"))
      user[0].stats.MoneyDeposited.amount += 2*total_multiplayer;
      user[0].stats.Balance.amount = user[0].stats.MoneyDeposited.amount - user[0].stats.MoneyWithdrawn.amount;
      localStorage.setItem("LoggedUser", JSON.stringify(user))
    }
  }

  UpdateStats(){
    let user: any = JSON.parse(localStorage.getItem("LoggedUser"))
    user[0].stats.DicePlays++;
    if(user[0].stats.MoneyDeposited.amount < 2){
      alert("Insufficient balance!")
      return false
    } else {
      user[0].stats.MoneyWithdrawn.amount += 2;
      user[0].stats.Balance.amount = user[0].stats.MoneyDeposited.amount - user[0].stats.MoneyWithdrawn.amount;
      localStorage.setItem("LoggedUser", JSON.stringify(user))
      return true
    }
  }


}
