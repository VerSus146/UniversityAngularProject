import { Component } from '@angular/core';
import { gamesService } from "./games.service";
import { GameModel } from "../shared/game.model";

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  public games: GameModel[] = [];

  constructor(private gamesService: gamesService) {
    this.AddGames()
  }

  AddGames(){
    this.games.push(new GameModel("Blackjack", "Blackjack"))
    this.games.push(new GameModel("Dice", "Dice"))
    this.games.push(new GameModel("Fruit Rush", "LogicMachine"))
    this.games.push(new GameModel("TBA", "ToBeAnnounced"))
  }

  PrepareGame(gamemode: string){
    this.gamesService.GameSelection(gamemode);
  }
}
