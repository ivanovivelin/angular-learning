import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { MatToolbarRow} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkTheme = false;
  lastDialogResult: string;

  navItems = [
    {name: 'Contact', route: '/contact'},
    {name: 'Home', route: '/'},
  ];


  constructor(public translate: TranslateService) { }
}
