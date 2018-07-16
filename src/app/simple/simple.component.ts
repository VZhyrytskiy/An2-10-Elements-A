import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  HostBinding,
  HostListener
} from '@angular/core';
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

  @Output() sendLoginFormValue: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('attr.selected') isSelected = true;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private el: ElementRef) {
    console.log(this.el.nativeElement);
  }

  ngOnInit() {
    this.buildLoginForm();
  }

  @HostListener('click', ['$event'])
  onHostClick(event) {
    console.log(
      'Click on Host Element. IsSelected (attr.selected): ',
      this.isSelected
    );
    console.log('Click on Host Element. $event: ', event);
  }

  onLogin() {
    this.sendLoginFormValue.emit(this.loginForm.value);
  }

  private buildLoginForm() {
    this.loginForm = this.fb.group({
      email: [this.emailDefaultValue, Validators.required],
      password: ['', Validators.required],
      checkMe: false
    });
  }
}
