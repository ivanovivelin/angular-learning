import { Component , OnInit} from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
})
export class DoorsComponent implements OnInit {
  /**
  * The number of colums in the md-grid-list directive.
  */
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
  // public cols: Observable<number>;
  // public dogs: any;

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
          thumbnailsPercent: 40,
          thumbnailsRows: 2,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsRows: 2,
          thumbnailsPercent: 40,
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
            small: 'assets/ZAUN/ZAUN1.JPG',
            medium: 'assets/ZAUN/ZAUN1.JPG',
            big: 'assets/ZAUN/ZAUN1.JPG'
        },
        {
          small: 'assets/ZAUN/ZAUN2.JPG',
          medium: 'assets/ZAUN/ZAUN2.JPG',
          big: 'assets/ZAUN/ZAUN2.JPG'
        },
        {
          small: 'assets/ZAUN/ZAUN3.JPG',
          medium: 'assets/ZAUN/ZAUN3.JPG',
          big: 'assets/ZAUN/ZAUN3.JPG'
        },
        {
          small: 'assets/ZAUN/ZAUN4.JPG',
          medium: 'assets/ZAUN/ZAUN4.JPG',
          big: 'assets/ZAUN/ZAUN4.JPG'
        },
        {
          small: 'assets/ZAUN/ZAUN5.JPG',
          medium: 'assets/ZAUN/ZAUN5.JPG',
          big: 'assets/ZAUN/ZAUN5.JPG'
        },
        {
          small: 'assets/ZAUN/ZAUN6.JPG',
          medium: 'assets/ZAUN/ZAUN6.JPG',
          big: 'assets/ZAUN/ZAUN6.JPG'
        },
        {
          small: 'assets/ZAUN/ZAUN7.JPG',
          medium: 'assets/ZAUN/ZAUN7.JPG',
          big: 'assets/ZAUN/ZAUN7.JPG'
        },
        {
          small: 'assets/ZAUN/ZAUN8.JPG',
          medium: 'assets/ZAUN/ZAUN8.JPG',
          big: 'assets/ZAUN/ZAUN8.JPG'
        },
        {
          small: 'assets/ZAUN/ZAUN9.JPG',
          medium: 'assets/ZAUN/ZAUN9.JPG',
          big: 'assets/ZAUN/ZAUN9.JPG'
        },
        {
          small: 'assets/ZAUN/ZAUN10.JPG',
          medium: 'assets/ZAUN/ZAUN10.JPG',
          big: 'assets/ZAUN/ZAUN10.JPG'
        },
        {
          small: 'assets/ZAUN/ZAUN11.JPG',
          medium: 'assets/ZAUN/ZAUN11.JPG',
          big: 'assets/ZAUN/ZAUN11.JPG'
        },
        {
          small: 'assets/ZAUN/ZAUN12.JPG',
          medium: 'assets/ZAUN/ZAUN12.JPG',
          big: 'assets/ZAUN/ZAUN12.JPG'
        },
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
