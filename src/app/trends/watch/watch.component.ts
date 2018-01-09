import { Video } from '../../shared/models/video';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import 'rxjs/add/operator/first';
import { ContextService } from '../../shared/context.service';
import { YoutubeService } from '../youtube/youtube.service';

@Component({
    selector: 'watch',
    templateUrl: 'watch.component.html',
    styleUrls: ['./watch.component.css']
})
export class WatchComponent {

    public videoInfo: Video
    public embedUrl: SafeResourceUrl
    constructor(
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer,
        private appContext: ContextService,
        private youtubeService: YoutubeService,
    ) { }

    ngOnInit() {
        this.captureVideoIdThenPlay()
    }

    // The video id is passed through a route params
    private captureVideoIdThenPlay() {
        this.route.params.first().subscribe(x => {
            this.getSelectedVideoOrFetchItIfNotAvailable(x.id)
        })
    }


    private getSelectedVideoOrFetchItIfNotAvailable (id) {
        this.play(id)
        this.videoInfo = this.appContext.getSelectedVideo()
        if(!this.videoInfo) this.youtubeService.getVideoInfo(id).subscribe(
            data => {
                this.videoInfo = {
                title: data.items[0].snippet.title,
            }
            
        },
            error => console.log(error)          
        )
    }

    // Ask youtube to play the video based on the videoId
    private play(videoId: any): void {
        this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoId + '?autoplay=1');
    }


}
