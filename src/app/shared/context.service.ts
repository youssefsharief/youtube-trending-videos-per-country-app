import { Injectable, EventEmitter } from '@angular/core';
import { Video } from './models/video';

@Injectable()
export class ContextService {
	private selectedVideo: Video
	public country: string;
	countryChanged: EventEmitter<string> = new EventEmitter<string>();


	setSelectedVideo(x: Video) {
		this.selectedVideo = x
	}

	getSelectedVideo(): Video {
		return this.selectedVideo
	}


	setCountry(country) {
		this.country = country;
		this.countryChanged.emit(this.country);
	}

	getCountry() {
		return this.country;
	}
}
