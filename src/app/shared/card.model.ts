export class CardModel {
  static id: number = 0;
  card_id: number = 0;
  value: string = '';
  suit: string = '';

  constructor(value: string, suit: string) {
    this.card_id = CardModel.id++;
    this.suit = suit;
    this.value = value;
  }

  getValue(){
    return this.value;
  }

  getId(){
    return this.card_id;
  }

  getSuit(){
    return this.suit;
  }
}
