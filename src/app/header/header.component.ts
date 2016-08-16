import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'The Will Will Web !';
  titleurl = 'http://blog.miniasp.com/';

  constructor() { }

  ngOnInit() {
  }

}