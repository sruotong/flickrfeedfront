import { FlickrfeedsRoute } from './flickrfeeds.route';
import { FlickrfeedsComponent } from './flickrfeeds.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StringToDate } from '../pipes/string-date.pipe';


const ENTITY_STATES = [...FlickrfeedsRoute];

@NgModule({
    declarations: [StringToDate, FlickrfeedsComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    bootstrap: [FlickrfeedsComponent]
})
export class FlickrfeedsModule { }
