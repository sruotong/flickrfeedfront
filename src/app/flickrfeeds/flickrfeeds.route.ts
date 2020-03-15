import { Routes } from "@angular/router";
import { FlickrfeedsComponent } from './flickrfeeds.component';


export const FlickrfeedsRoute:Routes = [
    {
        path: '',
        component: FlickrfeedsComponent,
        data: { title: 'Feeds' }
      }
]

