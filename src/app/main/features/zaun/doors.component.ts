import { Component , OnInit} from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
})
export class DoorsComponent implements OnInit {

  imageData = [
    {
      src: 'assets/ZAUN.jpeg',
      srcThumb: 'assets/ZAUN.jpeg'
    }
    // ... more items
  ];

  constructor(private observableMedia: ObservableMedia, private gallery: Gallery) {}

  /**
   * @desc ngOnInit
   * @author Ivelin Ivanov
   * @param {}
   */

  ngOnInit() {
    // Creates gallery items
    const items: GalleryItem[] = this.imageData.map(item => new ImageItem(item.src, item.srcThumb));

    // loads the items into the gallery
    this.gallery.ref('myPhotos').load(items);
  }

  /**
   * @author Ivelin Ivanov
   * @param event {$event}
   */

  galleryNotifier(event) {}
}
