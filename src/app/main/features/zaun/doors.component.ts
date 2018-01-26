import { Component , OnInit} from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
})
export class DoorsComponent implements OnInit {

  constructor(private observableMedia: ObservableMedia) {}

  /**
   * @desc ngOnInit
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
