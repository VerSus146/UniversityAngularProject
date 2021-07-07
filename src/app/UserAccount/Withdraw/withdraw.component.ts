import { Component } from '@angular/core';
import { UserModel } from 'src/app/shared/user.model';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'withdraw',
  templateUrl: './withdraw.component.html',
})
export class WithdrawComponent {

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

  withdraw(amount: string) {
    if(Number(amount) > 0) {
      if (Number(amount) < this.user[0].stats.Balance.amount){
        this.user[0].stats.MoneyWithdrawn.amount += Number(amount)
        this.user[0].stats.Balance.amount = this.user[0].stats.MoneyDeposited.amount - this.user[0].stats.MoneyWithdrawn.amount
        localStorage.setItem("LoggedUser", JSON.stringify(this.user))
        this.router.navigate(['UserAccount'])
      } else {
        alert("Insufficient Balance!")
      }
    } else {
      alert("Wrong number provided")
    }

  }

  GoBack() {
    this.router.navigate(['UserAccount'])
  }
}
