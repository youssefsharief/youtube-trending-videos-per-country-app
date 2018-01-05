import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import 'rxjs/add/operator/first';

@Component({
    selector: 'watch',
    templateUrl: 'watch.component.html',
})
export class WatchComponent {

    private isVideoLoading: boolean;
    public embedUrl: SafeResourceUrl
    constructor(
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit() {
        this.captureVideoIdThenPlay()
    }


    private captureVideoIdThenPlay() {
        this.route.params.first().subscribe(x => {
            this.play(x.id)
        })
    }


    private play(videoId: any): void {
        this.isVideoLoading = true;
        this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoId + '?autoplay=1');
    }

    public onVideoLoad(): void {
        this.isVideoLoading = false;
    }
}
