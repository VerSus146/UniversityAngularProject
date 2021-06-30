export class TileModel {
  static id: number = 0;
  tile_id: number = 0;
  value: number = 0;

  constructor() {
    this.tile_id = TileModel.id++;
    this.setValue()
  }

  getValue(){
    return this.value;
  }

  getId(){
    return this.tile_id;
  }

  getPicture(){
    switch(this.getValue()){
      case 1:
        return "/assets/images/litchipng.png"
      case 2:
        return "/assets/images/grapefruit.png"
      case 3:
        return "/assets/images/guava_PNG15.png"
      case 4:
        return "/assets/images/mango.png"
      case 5:
        return "/assets/images/raspberry.png"
      case 6:
        return "/assets/images/sapodilla_503x503.png"
      case 7:
        return "/assets/images/Single_apple.png"
      case 8:
        return "/assets/images/strawberry.png"
    }
  }

  setValue() {
    let random = Math.floor(Math.random() * 100) + 1;

    if(random >= 97) {
      this.value = 8
    } else
    if(random >= 92 && random < 97) {
      this.value = 7
    } else
    if(random >= 85 && random < 92) {
      this.value = 6
    } else
    if(random >= 75 && random < 85) {
      this.value = 5
    } else
    if(random >= 60 && random < 75) {
      this.value = 4
    } else
    if(random >= 45 && random < 60) {
      this.value = 3
    } else
    if(random >= 25 && random < 45) {
      this.value = 2
    } else
    if(random >= 1 && random < 25) {
      this.value = 1
    }

  }
}
