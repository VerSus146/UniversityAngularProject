import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {UserModel} from "../../shared/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'withdraw',
  templateUrl: './deposit.component.html',
})
export class DepositComponent {

  user: UserModel;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.user = this.GetLoggedUser()
  }

  checkoutForm = this.formBuilder.group({
    amount: 'amount',
  });

  GetLoggedUser() {
    return JSON.parse(localStorage.getItem("LoggedUser"))
  }

  deposit(amount: string) {
    if(Number(amount) > 0){
      this.user[0].stats.MoneyDeposited.amount += Number(amount)
      this.user[0].stats.Balance.amount = this.user[0].stats.MoneyDeposited.amount - this.user[0].stats.MoneyWithdrawn.amount
      localStorage.setItem("LoggedUser", JSON.stringify(this.user))
      this.router.navigate(['UserAccount'])
    } else {
      console.log("Don't do -, or words")
    }
  }

  GoBack() {
    this.router.navigate(['UserAccount'])
  }
}
