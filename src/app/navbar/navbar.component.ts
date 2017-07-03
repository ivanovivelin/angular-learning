import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  public isCollapsed = false;
  selectedValue: string = 'de';
  constructor(public translate: TranslateService) { }
}
