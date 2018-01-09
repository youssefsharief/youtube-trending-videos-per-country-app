import { YoutubeService } from '../youtube/youtube.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { WatchComponent } from './watch.component';
import { WatchModule } from './watch.module';
import { ContextService } from '../../shared/context.service';
import { reponse } from '../../shared/data/mock-youtube-api-response';

describe('WatchComponent', () => {
    let component: WatchComponent;
    let fixture: ComponentFixture<WatchComponent>;
    let youtubeService
    let contextService
    let domSanitizerStub = {
        bypassSecurityTrustResourceUrl: () => 'ds'
    }
    let activatedRouteStub = {
        params: {
            first: () => Observable.of({ id: 'a' })
        }
    }


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: ActivatedRoute, useValue: activatedRouteStub },
                { provide: DomSanitizer, useValue: domSanitizerStub },
                { provide: YoutubeService, useValue: {} },
                { provide: ContextService, useValue: {} },

                
            ],
            imports: [
                WatchModule
            ]
        })
        contextService = TestBed.get(ContextService)
        youtubeService = TestBed.get(YoutubeService)
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WatchComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        contextService.getSelectedVideo = () => ({title:'dsd', id: 'sd'})
        youtubeService.getVideoInfo = () => Observable.of(reponse) 
        expect(component).toBeTruthy();
    });

    

    it('should load video info from context service', () => {
        contextService.getSelectedVideo = () => ({title:'dsd', id: 'sd'})
        youtubeService.getVideoInfo = () => Observable.of(reponse) 
        component.ngOnInit()
        expect(component).toBeTruthy();
    });

    it('should load video from api after refresh', () => {
        contextService.getSelectedVideo = () => (null)
        youtubeService.getVideoInfo = () => Observable.of(reponse) 
        component.ngOnInit()
        expect(component).toBeTruthy();
    });

    it('should respond to error from api after refresh', () => {
        contextService.getSelectedVideo = () => (null)
        youtubeService.getVideoInfo = () => Observable.throw(Error('err'))
        component.ngOnInit()
        expect(component).toBeTruthy();
    });

});
