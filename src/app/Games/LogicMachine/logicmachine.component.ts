import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { TileModel } from "../../shared/tile.model";


@Component({
  selector: 'logicmachine',
  templateUrl: './logicmachine.component.html',
  styleUrls: ['./logicmachine.component.css']
})
export class LogicmachineComponent implements AfterViewInit{
  tiles_value: TileModel[] = []
  tiles: ElementRef[] = []
  bets: any = []
  game: string = "LogicMachine";
  last_winning: number = 0;

  @ViewChild('tile_1') tile_1: ElementRef;
  @ViewChild('tile_2') tile_2: ElementRef;
  @ViewChild('tile_3') tile_3: ElementRef;
  @ViewChild('tile_4') tile_4: ElementRef;
  @ViewChild('tile_5') tile_5: ElementRef;
  @ViewChild('tile_6') tile_6: ElementRef;
  @ViewChild('tile_7') tile_7: ElementRef;
  @ViewChild('tile_8') tile_8: ElementRef;
  @ViewChild('tile_9') tile_9: ElementRef;
  @ViewChild('tile_10') tile_10: ElementRef;
  @ViewChild('tile_11') tile_11: ElementRef;
  @ViewChild('tile_12') tile_12: ElementRef;
  @ViewChild('tile_13') tile_13: ElementRef;
  @ViewChild('tile_14') tile_14: ElementRef;
  @ViewChild('tile_15') tile_15: ElementRef;



  constructor() {
    for (let i = 0; i < 15; i++) {
      this.tiles_value.push(new TileModel())
    }

    this.bets.push([[1,0,0],
                    [1,0,0],
                    [1,0,0],
                    [1,0,0],
                    [1,0,0]])
    this.bets.push([[1,0,0],
                    [0,1,0],
                    [0,1,0],
                    [0,1,0],
                    [1,0,0]])
    this.bets.push([[1,0,0],
                    [0,1,0],
                    [0,0,1],
                    [0,1,0],
                    [1,0,0]])
    this.bets.push([[1,0,0],
                    [0,1,0],
                    [1,0,0],
                    [0,1,0],
                    [1,0,0]])
    this.bets.push([[0,1,0],
                    [0,1,0],
                    [0,1,0],
                    [0,1,0],
                    [0,1,0]])
    this.bets.push([[0,1,0],
                    [1,0,0],
                    [0,1,0],
                    [1,0,0],
                    [0,1,0]])
    this.bets.push([[0,1,0],
                    [1,0,0],
                    [1,0,0],
                    [1,0,0],
                    [0,1,0]])
    this.bets.push([[0,1,0],
                    [0,0,1],
                    [0,0,1],
                    [0,0,1],
                    [0,1,0]])
    this.bets.push([[0,1,0],
                    [0,0,1],
                    [0,1,0],
                    [0,0,1],
                    [0,1,0]])
    this.bets.push([[0,0,1],
                    [0,0,1],
                    [0,0,1],
                    [0,0,1],
                    [0,0,1]])
    this.bets.push([[0,0,1],
                    [0,1,0],
                    [0,1,0],
                    [0,1,0],
                    [0,0,1]])
    this.bets.push([[0,0,1],
                    [0,1,0],
                    [1,0,0],
                    [0,1,0],
                    [0,0,1]])
    this.bets.push([[0,0,1],
                    [0,1,0],
                    [0,0,1],
                    [0,1,0],
                    [0,0,1]])
  }

  getTilesValues(){
    return this.tiles_value;
  }

  // Please don't kill me for it. It's Utterly stupid
  setTiles(){
    this.tile_1.nativeElement.innerText = ""
    this.tile_2.nativeElement.innerText = ""
    this.tile_3.nativeElement.innerText = ""
    this.tile_4.nativeElement.innerText = ""
    this.tile_5.nativeElement.innerText = ""
    this.tile_6.nativeElement.innerText = ""
    this.tile_7.nativeElement.innerText = ""
    this.tile_8.nativeElement.innerText = ""
    this.tile_9.nativeElement.innerText = ""
    this.tile_10.nativeElement.innerText = ""
    this.tile_11.nativeElement.innerText = ""
    this.tile_12.nativeElement.innerText = ""
    this.tile_13.nativeElement.innerText = ""
    this.tile_14.nativeElement.innerText = ""
    this.tile_15.nativeElement.innerText = ""

    let elem1 = document.createElement("img")
    elem1.className = "img-slot"
    elem1.setAttribute("src", this.tiles_value[0].getPicture())
    this.tile_1.nativeElement.appendChild(elem1)
    let elem2 = document.createElement("img")
    elem2.className = "img-slot"
    elem2.setAttribute("src", this.tiles_value[1].getPicture())
    this.tile_2.nativeElement.appendChild(elem2)
    let elem3 = document.createElement("img")
    elem3.className = "img-slot"
    elem3.setAttribute("src", this.tiles_value[2].getPicture())
    this.tile_3.nativeElement.appendChild(elem3)
    let elem4 = document.createElement("img")
    elem4.className = "img-slot"
    elem4.setAttribute("src", this.tiles_value[3].getPicture())
    this.tile_4.nativeElement.appendChild(elem4)
    let elem5 = document.createElement("img")
    elem5.className = "img-slot"
    elem5.setAttribute("src", this.tiles_value[4].getPicture())
    this.tile_5.nativeElement.appendChild(elem5)
    let elem6 = document.createElement("img")
    elem6.className = "img-slot"
    elem6.setAttribute("src", this.tiles_value[5].getPicture())
    this.tile_6.nativeElement.appendChild(elem6)
    let elem7 = document.createElement("img")
    elem7.className = "img-slot"
    elem7.setAttribute("src", this.tiles_value[6].getPicture())
    this.tile_7.nativeElement.appendChild(elem7)
    let elem8 = document.createElement("img")
    elem8.className = "img-slot"
    elem8.setAttribute("src", this.tiles_value[7].getPicture())
    this.tile_8.nativeElement.appendChild(elem8)
    let elem9 = document.createElement("img")
    elem9.className = "img-slot"
    elem9.setAttribute("src", this.tiles_value[8].getPicture())
    this.tile_9.nativeElement.appendChild(elem9)
    let elem10 = document.createElement("img")
    elem10.className = "img-slot"
    elem10.setAttribute("src", this.tiles_value[9].getPicture())
    this.tile_10.nativeElement.appendChild(elem10)
    let elem11 = document.createElement("img")
    elem11.className = "img-slot"
    elem11.setAttribute("src", this.tiles_value[10].getPicture())
    this.tile_11.nativeElement.appendChild(elem11)
    let elem12 = document.createElement("img")
    elem12.className = "img-slot"
    elem12.setAttribute("src", this.tiles_value[11].getPicture())
    this.tile_12.nativeElement.appendChild(elem12)
    let elem13 = document.createElement("img")
    elem13.className = "img-slot"
    elem13.setAttribute("src", this.tiles_value[12].getPicture())
    this.tile_13.nativeElement.appendChild(elem13)
    let elem14 = document.createElement("img")
    elem14.className = "img-slot"
    elem14.setAttribute("src", this.tiles_value[13].getPicture())
    this.tile_14.nativeElement.appendChild(elem14)
    let elem15 = document.createElement("img")
    elem15.className = "img-slot"
    elem15.setAttribute("src", this.tiles_value[14].getPicture())
    this.tile_15.nativeElement.appendChild(elem15)
  }

  BetMoney(){
    for (let i = 0; i < 15; i++) {
      this.tiles_value[i].setValue()
    }
    this.setTiles()
    this.CheckWinnings(this.tiles_value)
  }

  ngAfterViewInit() {
    this.setTiles()
  }

  CheckWinnings(tiles_value){
    let total_multiplayer = 0
    this.bets.forEach(function (bet){
      let index = -1
      let tested_value = 0
      let multiplayer = 0
      for (let column = 0; column < 5; column++) {
        let match_found = false
        for(let row_value = 0; row_value < 3; row_value++){
          index++
          if(bet[column][row_value] == 1){
            if(tested_value == 0){
              tested_value = tiles_value[index].getValue()
              multiplayer++
              match_found = true
            } else {
              if(tested_value == tiles_value[index].getValue()){
                multiplayer = multiplayer + (tested_value * multiplayer)
                match_found = true
              }
            }
          }
        }
        if(match_found == false){
          if(multiplayer > 1){
            total_multiplayer += (multiplayer/8)
          }
          break
        }
      }
    })
    this.last_winning = total_multiplayer
    console.log(total_multiplayer)
  }
}
