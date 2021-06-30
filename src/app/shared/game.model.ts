export class GameModel {
  static id: number = 0;
  game_id: number = 0;
  name: string = '';
  game: string = '';

  constructor(name: string, game: string) {
    this.game_id = GameModel.id++;
    this.game = game;
    this.name = name;
  }

  getName(){
    return this.name;
  }

  getId(){
    return this.game_id;
  }

  getGame(){
    return this.game;
  }

  public getPicture(){
    switch(this.getName()){
      case "Dice":
        return "/assets/images/dice.jpg"
      case "Blackjack":
        return "/assets/images/blackjack.jpg"
      case "Fruit Rush":
        return "/assets/images/logicmachine.jpeg"
      case "TBA":
        return "/assets/images/tba.jpg"
    }
  }
}
