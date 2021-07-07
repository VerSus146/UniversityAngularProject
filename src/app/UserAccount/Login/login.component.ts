import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { userAccountService } from "../userAccount.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  constructor(
    private formBuilder: FormBuilder,
    private userAccountService: userAccountService
  ) {}

  checkoutForm = this.formBuilder.group({
    username: 'Name',
    password: 'Email',
  });

  login(username, password) {
    this.userAccountService.loginUser(username, password)
  }
}
