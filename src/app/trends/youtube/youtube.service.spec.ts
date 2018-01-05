import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { async, getTestBed, TestBed, fakeAsync } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { getResponse, setupConnections, setupConnectionsWithError, setupConnectionsWithNoMessageError } from '../../shared/helpers/spec-helper';
import { Response, ResponseOptions, ResponseType, Request, HttpModule, BaseRequestOptions, Http, XHRBackend } from '@angular/http';
import { MockConnection } from '@angular/http/testing';
import { YoutubeService } from './youtube.service';
import { HeaderComponent } from '../../shared/header/header.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


describe('YoutubeService', () => {
   
    describe('Service: YoutubeService', () => {
        let httpMock: HttpTestingController;
        let service: YoutubeService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports:[
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


        fit('should get donor info successfully from backend', fakeAsync(() => {
            let response = { 
                "resultCount": 1,
                "results": [
                  {
                    "artistId": 78500,
                    "artistName": "U2",
                    "trackName": "Beautiful Day",
                    "artworkUrl60": "image.jpg",
                  }]
              };
            
              backend.connections.subscribe(connection => { 
                connection.mockRespond(new Response(<ResponseOptions>{ 
                  body: JSON.stringify(response)
                }));
              });
  
            service.getTrendingVideos('eg', 'token').subscribe((payload) => {
                expect(payload).toBeTruthy();
                expect(payload._id).toBe(fakeVideos[0]._id)
                expect(payload.firstName).toBe(fakeVideos[0].firstName)
                done()
            });
        }))

        fit('should respond to error while getting videos', (done) => {
            setupConnectionsWithError(backend);
            service.getTrendingVideos('eg', 'token').subscribe(
                payload => {},
                error => {
                    expect(error).toBeTruthy()
                    done()
                });
        });
    })
})
