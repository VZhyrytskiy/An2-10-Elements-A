import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SimpleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
