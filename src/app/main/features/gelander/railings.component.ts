import { Component , OnInit} from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-railings',
  templateUrl: './railings.component.html',
})
export class RailingsComponent implements OnInit {

  constructor(private observableMedia: ObservableMedia) {}

  /**
   * @description ngOnInit
   * @author Ivelin Ivanov
   */

  ngOnInit() {}

  /**
   * @description event function on the gallery
   * @param event {}
   * @author Ivelin Ivanov
   */

  mynotifier(event) {}
}
