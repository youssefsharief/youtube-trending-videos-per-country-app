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
        let params = new HttpParams()
        params = params
        .append('part', 'snippet, statistics, status')
        .append('chart', 'mostPopular')
        .append('maxResults', '24').append('key', CONFIG.youtubeApiKey)
        if (nextPageToken) params = params.append('pageToken', nextPageToken);
        if (country) params = params.append('regionCode', country)      
        return this.http.get(CONFIG.youtubeEndPoint, {params}).catch(this.throwError);
    }

    private throwError(error: any) {
        return Observable.throw(error.status);
    }
}
