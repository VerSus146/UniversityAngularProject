import { Component } from '@angular/core';
import {UserModel} from "../../../shared/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
})
export class StatsComponent {
  user: UserModel = null;

  constructor(private router: Router) {
    this.user = JSON.parse(localStorage.getItem("LoggedUser"))
  }

  LogOut() {
    let users = JSON.parse(localStorage.getItem("Users"))
    users[this.user[1]][0] = this.user[0]
    localStorage.clear()
    localStorage.setItem("Users", JSON.stringify(users))
  }

  DepositMoney() {
    this.router.navigate(['Deposit'])
  }

  WithdrawMoney() {
    this.router.navigate(['Withdraw'])
  }
}
