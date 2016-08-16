import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SearchService {

  constructor(private http: Http) {
    http.get('/api/articles.json').subscribe(value => {
      this.data = this.default_data = value.json();
    });
  }

  keyword: string;

  doSearch(keyword: string) {
    this.keyword = keyword;
    this.data = this.default_data.filter(value => {
      return value.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });
  }

  deleteArticle(item) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  default_data: any;
  data: any;
}
