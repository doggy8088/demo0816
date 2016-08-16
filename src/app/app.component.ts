import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

	constructor(private searchsvc: SearchService) { }

  title = 'The Will Will Web !';
  titleurl = 'http://blog.miniasp.com/';

  toInt(str) {
    return parseInt(str, 10);
  }

}
