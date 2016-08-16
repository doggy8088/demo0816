import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

  keyword: string;

  doSearch($event: MouseEvent|KeyboardEvent, input: HTMLInputElement) {
    // Method 1
    // $event.target

    // Method 2
    if($event instanceof MouseEvent) {
      this.keyword = input.value;
    }

    if($event instanceof KeyboardEvent && $event.keyCode == 13) {
      this.keyword = input.value;
    }
  }
}
