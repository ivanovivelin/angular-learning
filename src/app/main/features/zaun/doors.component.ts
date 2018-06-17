import { Component , OnInit} from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.scss']
})
export class DoorsComponent {
  constructor(private observableMedia: ObservableMedia) {}

  /**
   * @author Ivelin Ivanov
   * @param event {$event}
   */
  galleryNotifier(event) {}
}
