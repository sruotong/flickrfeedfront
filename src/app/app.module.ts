import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlickrfeedsComponent } from './flickrfeeds/flickrfeeds.component';
import { FlickrfeedsModule } from './flickrfeeds/flickrfeeds.module';
import { HttpClientModule } from '@angular/common/http';
import { StringToDate } from './pipes/string-date.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FlickrfeedsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
