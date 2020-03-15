import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFeeds } from './flickrfeeds.model';

const api = environment.api;

@Injectable({ providedIn: 'root' })
export class FlickrfeedsService {

    constructor(private http: HttpClient) { }
    
    //call flickr feeds api, tags can be empty or string value
    getFlickrfeeds(tags?: string): Observable<HttpResponse<IFeeds[]>> {
        tags = tags ? tags : '';
        let params = new HttpParams();
        params = params.append('tags', tags);
        return this.http.get<IFeeds[]>(`${api}/feeds`, { params: params, observe: 'response' });
    }

}