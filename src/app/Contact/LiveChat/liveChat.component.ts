import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'liveChat',
  templateUrl: "./liveChat.component.html"
})
export class LiveChatComponent {

  constructor(private router: Router) {
  }

  DeclineSupport(){
    this.router.navigate([""])
  }

}
