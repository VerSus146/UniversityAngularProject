import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { userAccountService } from "./userAccount.service";

@Component({
  selector: 'userAccount',
  templateUrl: './userAccount.component.html',
})
export class UserAccountComponent {

  constructor(public userAccountService: userAccountService, private router: Router) {
  }

  SignUp(){
    this.router.navigate(['Signup'])
  }

  GetLoggedUser() {
    return localStorage.getItem("LoggedUser")
  }
}
