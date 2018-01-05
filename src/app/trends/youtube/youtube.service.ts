import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions, Jsonp } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import * as CONFIG from '../../config';

@Injectable()
export class YoutubeService {

    private params: any;
    private options: any;

    constructor(private http: Http, private _jsonp: Jsonp) { }

	getTrendingVideos(country: string) {
		this.params = new URLSearchParams();
        this.params.set('part', 'snippet, statistics');
        this.params.set('chart', 'mostPopular');
        this.params.set('regionCode', country);
        this.params.set('maxResults', '24');
        this.params.set('key', CONFIG.youtubeApiKey);
        this.options = new RequestOptions({
        	search: this.params
    	});
	    return this.http.get(CONFIG.youtubeEndPoint, this.options)
	    	.map(res => res.json())
	        .catch(this.throwError);
    }

    private throwError(error: any) {
        return Observable.throw(error.status);
    }
}
