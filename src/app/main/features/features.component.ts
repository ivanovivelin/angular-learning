import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
})
export class FeaturesComponent {
  public first_feature = 'GELÄNDER';
  public second_feature = 'TORE';
  public third_feature = 'ZAUN';
  constructor(public translate: TranslateService) { }
}
