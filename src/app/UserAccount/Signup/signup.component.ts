import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { userAccountService } from "../userAccount.service";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {

  captcha: string = null;

  constructor(
    private userAccountService: userAccountService,
    private formBuilder: FormBuilder,
  ) {}

  checkoutForm = this.formBuilder.group({
    username: 'Name',
    password: 'Email',
    birthdate: '',
  });

  SignUp(){
    if(this.captcha != null && this.checkoutForm.value['birthdate'] != ''){
      let birthdate = new Date(this.checkoutForm.value['birthdate'])
      let diff = (+new Date() - +birthdate)/ (1000 * 3600 * 24*365)
      if(diff > 18){
        this.userAccountService.createUser(this.checkoutForm.value['username'], this.checkoutForm.value['password'], this.checkoutForm.value['birthdate'])
      } else {
        alert("This site is only allowed for people +18")
      }
    } else if(this.captcha == null){
      alert("Captcha not finished")
    } else {
      alert("No birthdate")
    }
  }

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse
  }
}
