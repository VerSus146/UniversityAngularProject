import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlackjackComponent } from "./Games/Blackjack/blackjack.component";
import { DiceComponent } from './Games/Dice/dice.component';
import { LogicmachineComponent } from "./Games/LogicMachine/logicmachine.component";
import { ContactComponent } from "./Contact/contact.component";
import { GamesComponent } from "./Games/games.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
