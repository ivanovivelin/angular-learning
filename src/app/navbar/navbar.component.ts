import { Component , Input} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  public isCollapsed = false;
  selectedValue: string = 'de';
  @Input() public sidenavRef: MatSidenav;
  constructor(public translate: TranslateService) { }
}
