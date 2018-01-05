import { Video } from '../../shared/models/video';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { YoutubeService } from './youtube.service';
import { ContextService } from '../../shared/context.service';

import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
    selector: 'youtube',
    templateUrl: './youtube.component.html',
    styleUrls: ['./youtube.component.css'],
})

export class YoutubeComponent implements OnInit {

    private isLoadingVideos: boolean;
    private country: any;
    private trendingVideos: Video[] = [];
    public isErrorInApi: boolean
    private nextPageToken: string

    constructor(
        private youtubeService: YoutubeService,
        public appContext: ContextService,
        private router: Router) {
    }



    ngOnInit() {
        this.loadVideos();
        this.subscribeToCountryChanges()
    }

    private subscribeToCountryChanges() {
        this.appContext.countryChanged.subscribe(
            (lang) => {
                console.log('emit received');
                this.nextPageToken = ''
                this.trendingVideos = []
                this.country = this.appContext.getCountry();
                this.loadVideos();
            }
        );
    }



    private loadVideos(): void {
        if (!this.nextPageToken) this.isLoadingVideos = true;
        this.youtubeService.getTrendingVideos(this.country, this.nextPageToken).subscribe((result) => {
            this.nextPageToken = result.nextPageToken
            this.trendingVideos = this.trendingVideos.concat(result.items.map(item => ({
                id: item.id,
                title: item.snippet.title,
                thumbnail: item.snippet.thumbnails.high.url,
                publishedAt: moment(item.snippet.publishedAt).fromNow(),
                viewCount: item.statistics.viewCount,
                likeCount: item.statistics.likeCount
            })))
            this.isLoadingVideos = false;
        }, error => {
            this.isLoadingVideos = false
            this.isErrorInApi = true
        });
    }

    onVideoClick(id) {
        this.router.navigate(['/watch', id])
    }

    onScrollDown() {
        this.loadVideos()
    }

}
