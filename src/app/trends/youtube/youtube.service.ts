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


    constructor(private http: HttpClient) { }

    getTrendingVideos(country: string, nextPageToken: string) {

        
        const params = new HttpParams()
        
        
        params.set('part', 'snippet, statistics, status')
        .set('chart', 'mostPopular')
        .set('maxResults', '24').set('key', CONFIG.youtubeApiKey)
        if (nextPageToken) params.set('pageToken', nextPageToken);
        if (country) params.set('regionCode', country)
       
        return this.http.get(CONFIG.youtubeEndPoint, {params}).catch(this.throwError);
    }

    private throwError(error: any) {
        return Observable.throw(error.status);
    }
}
