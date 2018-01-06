import { ContextService } from '../../shared/context.service';
import { AppModule } from '../../app.module';
import { Observable, Subject } from 'rxjs/Rx';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { YoutubeService } from './youtube.service';
import { YoutubeComponent } from './youtube.component';
import { reponse } from '../../shared/data/mock-youtube-api-response';
import { EventEmitter } from '@angular/core';


describe('YoutubeComponent', () => {
    let component: YoutubeComponent;
    let fixture: ComponentFixture<YoutubeComponent>;
    let youtubeServiceStub = { getTrendingVideos: () => Observable.of(reponse) }
    let contextServiceStub = {
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
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(YoutubeComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should load', () => {
        component.ngOnInit()
        expect(component).toBeTruthy();
    });

    // fit('should load videos for new country when app context emits event', () => {
    //     component.ngOnInit()
    //     expect(component).toBeTruthy();
    // });

    it('onScrollDown should work', () => {
        component.onScrollDown()
        expect(component).toBeTruthy()
    });


});
