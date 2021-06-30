import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: "root",
})

export class gamesService{

  constructor(private router: Router) {
  }

  public GameSelection(gamemode: string){
    switch (gamemode){
      case "Blackjack":
        this.Blackjack();
        break;
      case "LogicMachine":
        this.LogicMachine();
        break;
      case "Dice":
        this.Dice();
        break;
      default:
        console.log("Game " + gamemode + " not found")
    }
  }

  Blackjack(){
    this.router.navigate(['Blackjack'])
  }

  LogicMachine(){
    this.router.navigate(['LogicMachine'])
  }

  Dice(){
    this.router.navigate(['Dice'])
  }

}
