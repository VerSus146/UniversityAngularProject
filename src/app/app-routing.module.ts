import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlackjackComponent } from "./Games/Blackjack/blackjack.component";
import { DiceComponent } from './Games/Dice/dice.component';
import { LogicmachineComponent } from "./Games/LogicMachine/logicmachine.component";
import { ContactComponent } from "./Contact/contact.component";
import { GamesComponent } from "./Games/games.component";
import {SignupComponent} from "./UserAccount/Signup/signup.component";
import {LoginComponent} from "./UserAccount/Login/login.component";
import {UserAccountComponent} from "./UserAccount/userAccount.component";
import {DepositComponent} from "./UserAccount/Deposit/deposit.component";
import {WithdrawComponent} from "./UserAccount/Withdraw/withdraw.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'Blackjack',
    component: BlackjackComponent
  },
  {
    path: 'Dice',
    component: DiceComponent
  },
  {
    path: 'LogicMachine',
    component: LogicmachineComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
  {
    path: 'Games',
    component: GamesComponent
  },
  {
    path: 'Signup',
    component: SignupComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'UserAccount',
    component: UserAccountComponent
  },
  {
    path: 'Deposit',
    component: DepositComponent
  },
  {
    path: 'Withdraw',
    component: WithdrawComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
