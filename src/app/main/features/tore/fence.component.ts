import { Component , OnInit} from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-fence',
  templateUrl: './fence.component.html',
})
export class FenceComponent implements OnInit {
  /**
    * The number of colums in the md-grid-list directive.
    */
  public cols: Observable<number>;
  public dogs: any;

  constructor(private observableMedia: ObservableMedia) {}

  /**
   * @desc calculate the size and change the amount of column on mat-tiles
   * @author Ivelin Ivanov
   * @param {}
   */

  ngOnInit() {
    this.dogs = [
      { name: 'Porter', human: 'Kara' },
      { name: 'Mal', human: 'Jeremy' },
      { name: 'Koby', human: 'Igor' },
      { name: 'Razzle', human: 'Ward' },
      { name: 'Molly', human: 'Rob' },
      { name: 'Husi', human: 'Matias' },
    ];
    const grid = new Map([
      ['xs', 1],
      ['sm', 2],
      ['md', 2],
      ['lg', 3],
      ['xl', 3]
    ]);
    let start: number;
    grid.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start = cols;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .map(change => {
        console.log(change);
        console.log(grid.get(change.mqAlias));
        return grid.get(change.mqAlias);
      })
      .startWith(start);
  }
}
