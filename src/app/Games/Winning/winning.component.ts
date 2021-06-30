import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'winnings',
  templateUrl: './winning.component.html',
})
export class WinningComponent {
  @Input() multiplayer_game: number = 0 ;
  @Input() game: string = "";
  multiplayer: any;

  ngOnChanges(changes: SimpleChanges) {
    this.multiplayer = changes['multiplayer_game']['currentValue']
  }

  setMultiplayer(multiplayer){
    this.multiplayer = multiplayer
  }
}
