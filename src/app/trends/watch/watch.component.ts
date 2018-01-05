import { Component } from '@angular/core';

@Component({
    selector: 'watch',
    templateUrl: 'watch.component.html',
})
export class WatchComponent {

    private videoLoader: any;

    public loadVideo(): void {
        console.log('AAA');
        this.videoLoader = false;
    }
}
