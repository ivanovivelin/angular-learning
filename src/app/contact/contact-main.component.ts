import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-contact',
  styles: [`
  agm-map {
    height: 300px;
  }
  `],
  templateUrl: './contact-main.component.html',
})
export class ContactMainComponent {

  constructor(public translate: TranslateService) { }
}
