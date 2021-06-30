import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'contactForm',
  templateUrl: "./contactForm.component.html"
})

export class ContactFormComponent {
  @Output() onSubmit = new EventEmitter<boolean>();

  checkoutForm = this.formBuilder.group({
    name: 'Name',
    email: 'Email',
    text: 'Text'
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  Submit() {
    console.log(this.checkoutForm.value)
    this.onSubmit.emit(true)
    this.checkoutForm.reset();
  }
}
