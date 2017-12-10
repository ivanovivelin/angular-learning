import { Component , OnInit} from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-fence',
  templateUrl: './fence.component.html',
})
export class FenceComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
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

    this.galleryOptions = [
      {
          width: '100%',
          height: '500px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
    ];

    this.galleryImages = [
        {
          small: 'assets/TORE/TORE1.JPG',
          medium: 'assets/TORE/TORE1.JPG',
          big: 'assets/TORE/TORE1.JPG'
        },
        {
          small: 'assets/TORE/TORE2.JPG',
          medium: 'assets/TORE/TORE2.JPG',
          big: 'assets/TORE/TORE2.JPG'
        },
        {
          small: 'assets/TORE/TORE3.JPG',
          medium: 'assets/TORE/TORE3.JPG',
          big: 'assets/TORE/TORE3.JPG'
        },
        {
          small: 'assets/TORE/TORE4.JPG',
          medium: 'assets/TORE/TORE4.JPG',
          big: 'assets/TORE/TORE4.JPG'
        }
    ];
    /*
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
      */
  }
}
