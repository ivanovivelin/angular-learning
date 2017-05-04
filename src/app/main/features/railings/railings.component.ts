import { Component } from '@angular/core';

@Component({
  selector: 'app-railings',
  templateUrl: './railings.component.html',
})
export class RailingsComponent {
tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'assets/DSC03067.JPG'},
    {text: 'Two', cols: 1, rows: 2, color: 'assets/DSC03067.JPG'},
    {text: 'Three', cols: 1, rows: 1, color: 'assets/DSC03067.JPG'},
    {text: 'Four', cols: 2, rows: 1, color: 'assets/DSC03067.JPG'},
  ];
}
