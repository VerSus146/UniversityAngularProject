import { Component } from '@angular/core';
import { UserModel } from 'src/app/shared/user.model';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  mode: string;
  user: UserModel;

  constructor() {
    this.user = JSON.parse(localStorage.getItem("LoggedUser"))[0]
  }
}
