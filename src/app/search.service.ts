import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SearchService {

  constructor(private http: Http) {
    http.get('/api/articles.json').subscribe(value => {
      this.data = value.json();
    });
  }

  keyword: string;

  doSearch(keyword: string) {
    this.keyword = keyword;
    this.http.get('/api/articles.json?search='+keyword).subscribe(value => {
      this.data = value.json();
    });
  }

  deleteArticle(item) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  data: any;
}
