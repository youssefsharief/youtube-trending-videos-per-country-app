import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import 'rxjs/add/operator/first';

@Component({
    selector: 'watch',
    templateUrl: 'watch.component.html',
    styleUrls: ['./watch.component.css']
})
export class WatchComponent {

    // public isVideoLoading: boolean;
    public embedUrl: SafeResourceUrl
    constructor(
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit() {
        this.captureVideoIdThenPlay()
    }

    // The video id is passed through a route params
    private captureVideoIdThenPlay() {
        this.route.params.first().subscribe(x => {
            this.play(x.id)
        })
    }


    // Ask youtube to play the video based on the videoId
    private play(videoId: any): void {
        // this.isVideoLoading = true;
        this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoId + '?autoplay=1');
    }

    // public onVideoLoad(): void {
        // this.isVideoLoading = false;
    // }

}
