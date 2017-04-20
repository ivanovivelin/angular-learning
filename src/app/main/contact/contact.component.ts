import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {

  @Input()
  latitude: number;

  @Input()
  longitude: number;

  @Input()
  zoom = 8;

  constructor() { }

  ngOnInit() {
  }

}