import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {TranslateService} from '@ngx-translate/core';

export interface User {
  email: any;
  name: string;
  message: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [``]
})
export class ContactComponent {

  public user: User = {
    email: '',
    name: '',
    message: ''
  };

  @Input()
  latitude: number;

  @Input()
  longitude: number;

  @Input()
  zoom = 8;

  constructor(public snackBar: MatSnackBar, public translate: TranslateService) { }

  /**
   * @author Ivelin Ivanov
   * @param form {}
   * @desc function to submit the form
   */

  onSubmit(form: NgForm) {
    console.log('Form to be submitted ! =>', form.value);
  }

  /**
   * @author Ivelin Ivanov
   * @desc notification on sending emails
   */

  openSnackBar() {
    this.snackBar.open('Email is sent !', '', {
    duration: 3000
  });
  }
}
