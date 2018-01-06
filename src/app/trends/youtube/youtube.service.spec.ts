import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { async, getTestBed, TestBed, fakeAsync } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Response, ResponseOptions, ResponseType, Request, HttpModule, BaseRequestOptions, Http, XHRBackend } from '@angular/http';
import { MockConnection } from '@angular/http/testing';
import { YoutubeService } from './youtube.service';
import { HeaderComponent } from '../../shared/header/header.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as CONFIG from '../../config';
import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';

describe('YoutubeService', () => {

    describe('Service: YoutubeService', () => {
        let httpMock: HttpTestingController;
        let service: YoutubeService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    HttpClientTestingModule
                ],
                providers: [
                    YoutubeService,
                ]
            });
            httpMock = TestBed.get(HttpTestingController);
            service = TestBed.get(YoutubeService);
        });

        afterEach(() => {
            httpMock.verify();
        })


        it('should get videos successfully', () => {
            let dummy = {
                "resultCount": 1,
                "results": [
                    {
                        "videoId": 78500,
                        "artistName": "U2",
                        "trackName": "Beautiful Day",
                        "artworkUrl60": "image.jpg",
                    }]
            };
            service.getTrendingVideos('EG', 'token').subscribe(
                data => expect(data).toBeTruthy()

            )
            const req = httpMock.expectOne(CONFIG.youtubeEndPoint);
            expect(req.request.method).toBe("GET");
            req.flush(dummy);
        })

        it('should respond to error while getting videos', () => {
            service.getTrendingVideos('eg', 'token').subscribe(
                payload => { },
                error => {
                    expect(error).toBeTruthy()
                });
                const req = httpMock.expectOne(CONFIG.youtubeEndPoint);
                expect(req.request.method).toBe("GET");
                req.flush(Error('err'));
        });
    })
})
