import { Component , OnInit} from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-railings',
  templateUrl: './railings.component.html',
})
export class RailingsComponent implements OnInit {
  /**
    * The number of colums in the md-grid-list directive.
  */
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  // public cols: Observable<number>;
  // public dogs: any;

  constructor(private observableMedia: ObservableMedia) {}
  ngOnInit() {
    this.galleryOptions = [
      {
          // fullWidth: true,
          width: '100%',
          height: '500px',
          imagePercent: 80,
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
          small: 'assets/GELANDER/GELANDER1.JPG',
          medium: 'assets/GELANDER/GELANDER1.JPG',
          big: 'assets/GELANDER/GELANDER1.JPG'
        },
        {
          small: 'assets/GELANDER/GELANDER2.JPG',
          medium: 'assets/GELANDER/GELANDER2.JPG',
          big: 'assets/GELANDER/GELANDER2.JPG'
        },
        {
          small: 'assets/GELANDER/GELANDER5.JPG',
          medium: 'assets/GELANDER/GELANDER5.JPG',
          big: 'assets/GELANDER/GELANDER5.JPG'
        },
        {
          small: 'assets/GELANDER/GELANDER6.JPG',
          medium: 'assets/GELANDER/GELANDER6.JPG',
          big: 'assets/GELANDER/GELANDER6.JPG'
        },
        {
          small: 'assets/GELANDER/GELANDER7.JPG',
          medium: 'assets/GELANDER/GELANDER7.JPG',
          big: 'assets/GELANDER/GELANDER7.JPG'
        },
        {
          small: 'assets/GELANDER/GELANDER8.JPG',
          medium: 'assets/GELANDER/GELANDER8.JPG',
          big: 'assets/GELANDER/GELANDER8.JPG'
        },
        {
          small: 'assets/GELANDER/GELANDER9.JPG',
          medium: 'assets/GELANDER/GELANDER9.JPG',
          big: 'assets/GELANDER/GELANDER9.JPG'
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
      ["xs", 1],
      ["sm", 2],
      ["md", 2],
      ["lg", 3],
      ["xl", 3]
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
