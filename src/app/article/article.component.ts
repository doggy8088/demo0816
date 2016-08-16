import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() item: any;

  constructor(private searchsvc: SearchService) { }

  ngOnInit() {
  }

}
