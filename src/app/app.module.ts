import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GamesComponent } from "./Games/games.component";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { BlackjackComponent } from "./Games/Blackjack/blackjack.component";
import { DiceComponent } from "./Games/Dice/dice.component";
import { LogicmachineComponent } from "./Games/LogicMachine/logicmachine.component";
import { RangeSliderComponent } from "./Games/Dice/range-slider/range-slider.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgxSliderModule } from "@angular-slider/ngx-slider";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from "./Header/header.component";
import { ContactComponent } from "./Contact/contact.component";
import { ContactFormComponent } from "./Contact/ContactForm/contactForm.component";
import { LiveChatComponent } from "./Contact/LiveChat/liveChat.component";
import {WinningComponent} from "./Games/Winning/winning.component";
import {LoginComponent} from "./UserAccount/Login/login.component";
import {SignupComponent} from "./UserAccount/Signup/signup.component";
import {StatsComponent} from "./UserAccount/User/Stats/stats.component";
import {UserAccountComponent} from "./UserAccount/userAccount.component";
import {UserComponent} from "./UserAccount/User/user.component";
import { RecaptchaModule } from 'ng-recaptcha';
import {DepositComponent} from "./UserAccount/Deposit/deposit.component";
import {WithdrawComponent} from "./UserAccount/Withdraw/withdraw.component";

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    BlackjackComponent,
    DiceComponent,
    LogicmachineComponent,
    RangeSliderComponent,
    ContactComponent,
    HeaderComponent,
    ContactFormComponent,
    LiveChatComponent,
    WinningComponent,
    LoginComponent,
    SignupComponent,
    StatsComponent,
    UserAccountComponent,
    UserComponent,
    DepositComponent,
    WithdrawComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    NgxSliderModule,
    NgbModule,
    ReactiveFormsModule,
    RecaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
