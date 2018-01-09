import { ContextService } from '../../shared/context.service';
import { AppModule } from '../../app.module';
import { Observable, Subject } from 'rxjs/Rx';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { YoutubeService } from './youtube.service';
import { YoutubeComponent } from './youtube.component';
import { reponse, reponseWithoutSnippet } from '../../shared/data/mock-youtube-api-response';
import { EventEmitter } from '@angular/core';


describe('YoutubeComponent', () => {
    let component: YoutubeComponent;
    let fixture: ComponentFixture<YoutubeComponent>;
    let youtubeServiceStub = {}
    let contextServiceStub = {
        selectedVideo: null,
        getSelectedVideo() {
            return this.selectedVideo
        },
        setSelectedVideo(x) {
            this.selectedVideo = x
        },
        countryChanged: new EventEmitter()

    }
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule, RouterTestingModule],
            providers: [
                { provide: YoutubeService, useValue: youtubeServiceStub },
                { provide: ContextService, useValue: contextServiceStub },

            ]
        })
        youtubeServiceStub = TestBed.get(YoutubeService);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(YoutubeComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        youtubeServiceStub = { getTrendingVideos: () => Observable.of(reponse) }
        expect(component).toBeTruthy();
    });

    it('should load videos', () => {
        youtubeServiceStub = { getTrendingVideos: () => Observable.of(reponse) }
        component.ngOnInit()
        expect(component).toBeTruthy();
    });

    it('should load videos without snippet', () => {
        youtubeServiceStub = { getTrendingVideos: () => Observable.of(reponseWithoutSnippet) }
        component.ngOnInit()
        expect(component).toBeTruthy();
    });

    it('should load videos after scrolling', () => {
        youtubeServiceStub = { getTrendingVideos: () => Observable.of(reponse) }
        component.ngOnInit()
        expect(component).toBeTruthy();
        component.onScrollDown()
        expect(component).toBeTruthy();
    });

    it('should respond to error', () => {
        youtubeServiceStub = { getTrendingVideos: () => Observable.throw(Error('err')) }
        component.ngOnInit()
        expect(component).toBeTruthy();
    });



    it('should set video in context service when video is clicked', () => {
        youtubeServiceStub = { getTrendingVideos: () => Observable.of(reponse) }
        component.onVideoClick({ id: 'sdsd', title: 'This is a title' })
    })


});
