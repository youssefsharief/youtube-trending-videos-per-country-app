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

  private loader: any;
  private country: any;
  private trendingVideos: Video[] = [];
  private embedUrl: any;
  private videoId: any;

  constructor(
    private youtubeService: YoutubeService,
    public appContext: ContextService,
    private router: Router) {
  }

  private videoLoader: any;

  public loadVideo(): void {
    console.log('AAA');
    this.videoLoader = false;
  }
  ngOnInit() {
    this.loadVideos('');
    this.subscribeToCountryChanges()
  }

  private subscribeToCountryChanges() {
    this.appContext.countryChanged.subscribe(
      (lang) => {
        this.country = this.appContext.getCountry();
        this.loadVideos(this.country);
      }
    );
  }



  private loadVideos(countryCode: string): void {
    this.loader = true;
    // several api calls[p]
    this.youtubeService.getTrendingVideos(this.country).subscribe((result) => {
      for (var i = 0; i < result.items.length; i++) {
        this.trendingVideos[i] = {
          id: result.items[i].id,
          title: result.items[i].snippet.title,
          thumbnail: result.items[i].snippet.thumbnails.high.url,
          publishedAt: moment(result.items[i].snippet.publishedAt).fromNow()
        };
      }
      this.loader = false;
    });
  }

  onVideoClick(id) {
    this.router.navigate(['/watch', id])
  }

}
