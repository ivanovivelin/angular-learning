import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import {MdSnackBar} from '@angular/material';

export interface User {
  email: any;
  name: string;
  message: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [`
    input.ng-invalid {
      border: 1px solid red;
    }
    `]
})
export class ContactComponent implements OnInit {

  private user: User = {
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

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('Form to be submitted ! =>', form.value);
  }
}
