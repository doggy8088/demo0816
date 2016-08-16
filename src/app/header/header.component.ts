import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() titleurl: string;

  subtitle = '記載著 Will 在網路世界的學習心得與技術分享'

  num = 10;

  constructor() { }

  ngOnInit() {
  }

  plusOne(evt: MouseEvent) {
    console.log(evt);
    if(evt.ctrlKey || evt.metaKey) {
      this.num--;
    } else {
      this.num++;
    }
  }

}
