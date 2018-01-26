import { Component , OnInit} from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-fence',
  templateUrl: './fence.component.html',
})
export class FenceComponent implements OnInit {

  constructor(private observableMedia: ObservableMedia) {}

  /**
   * @desc calculate the size and change the amount of column on mat-tiles
   * @author Ivelin Ivanov
   * @param {}
   */

  ngOnInit() {}

  /**
   * @author Ivelin Ivanov
   * @param event {$event}
   */
  galleryNotifier(event) {}
}
