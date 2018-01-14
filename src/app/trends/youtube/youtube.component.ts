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

    public areVideosLoading: boolean;
    private country: any;
    private trendingVideos: Video[] = [];
    public isErrorInApi: boolean
    private nextPageToken: string

    constructor(
        private youtubeService: YoutubeService,
        private appContext: ContextService,
        private router: Router) {
    }


    ngOnInit() {
        this.loadVideos();
        this.subscribeToCountryChanges();
    }

    private subscribeToCountryChanges() {
        this.appContext.countryChanged.subscribe(lang => {
            this.nextPageToken = '';
            this.trendingVideos = [];
            this.country = this.appContext.getCountry();
            this.loadVideos();
        })
    }

    private loadVideos(): void {
        // Show loader only if we are fetching the first batch of videos
        if (!this.nextPageToken) {
            this.areVideosLoading = true;
        }
        this.youtubeService.getTrendingVideos(this.country, this.nextPageToken).subscribe((result) => {
            this.nextPageToken = result.nextPageToken;
            // Concat videos to current videos so that we do not lose previously fetched videos in case this is not the first batch
            const newVideos = result.items.map(item => {
                if (item.snippet) {
                    return this.getComponentScopeObjectFromPayload(item);
                }
            });
            this.trendingVideos = this.trendingVideos.concat(newVideos);
            this.areVideosLoading = false;
        }, error => {
            this.areVideosLoading = false;
            this.isErrorInApi = true;
        });
    }

    private getComponentScopeObjectFromPayload(item) {
        return {
            id: item.id,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
            publishedAt: moment(item.snippet.publishedAt).fromNow(),
            viewCount: item.statistics.viewCount,
            likeCount: item.statistics.likeCount
        };
    }

    public onVideoClick(video: Video) {
        this.appContext.setSelectedVideo(video)
        this.router.navigate(['/video', video.id])
    }

    // Fetch for new videos as the scroll is triggered
    public onScrollDown() {
        this.loadVideos()
    }

}
