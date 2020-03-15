import { Component, OnInit } from '@angular/core';
import { FlickrfeedsService } from './flickrfeeds.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { IFeeds } from './flickrfeeds.model';

@Component({
  selector: 'app-flickrfeeds',
  templateUrl: './flickrfeeds.component.html',
  styleUrls: ['./flickrfeeds.component.scss']
})
export class FlickrfeedsComponent implements OnInit {

  feeds: IFeeds[];
  tagsSearch: string;
  emptyList: boolean;
  constructor(
    private flickrfeedsService: FlickrfeedsService
  ) {
  }

  ngOnInit() {
    this.tagsSearch = '';
    this.feeds = [];
  }

  submitSearch() {
    this.flickrfeedsService.getFlickrfeeds(this.tagsSearch).subscribe(
      (res: HttpResponse<IFeeds[]>) => {
        if (res && res.body.length !== 0) {
          this.feeds = res.body;
          this.emptyList = false;
        } else {
          this.emptyList=true;
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

}
