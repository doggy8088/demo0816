import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CatlistComponent } from './catlist/catlist.component';
import { MvpComponent } from './mvp/mvp.component';
import { ArticleComponent } from './article/article.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarComponent,
    CatlistComponent,
    MvpComponent,
    ArticleComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [SearchService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
