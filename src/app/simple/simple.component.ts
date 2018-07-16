import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class SimpleComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('email') emailDefaultValue = '';

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildLoginForm();
  }

  onLogin() {
    console.log(this.loginForm.value);
  }

  private buildLoginForm() {
    this.loginForm = this.fb.group({
      email: [this.emailDefaultValue, Validators.required],
      password: ['', Validators.required],
      checkMe: false
    });
  }
}
