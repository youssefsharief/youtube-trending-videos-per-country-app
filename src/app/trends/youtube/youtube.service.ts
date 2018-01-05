import { Injectable } from '@angular/core';
import { Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import * as CONFIG from '../../config';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class YoutubeService {

    private params: any;
    private options: any;

    constructor(private http: HttpClient) { }

    getTrendingVideos(country: string, nextPageToken: string) {
        const params = new HttpParams().set('part', 'snippet, statistics').set('chart', 'mostPopular')
        .set('maxResults', '24').set('key', CONFIG.youtubeApiKey)
        if (nextPageToken) this.params.set('pageToken', nextPageToken);
        if (country) this.params.set('regionCode', country)
        this.options = new RequestOptions({
            search: this.params
        });
        return this.http.get(CONFIG.youtubeEndPoint, {params}).catch(this.throwError);
    }

    private throwError(error: any) {
        return Observable.throw(error.status);
    }
}
