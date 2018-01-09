import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { YoutubeService } from './youtube.service';
import * as CONFIG from '../../config';

describe('YoutubeService', () => {

    describe('Service: YoutubeService', () => {
        let httpMock: HttpTestingController;
        let service: YoutubeService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule],
                providers: [YoutubeService,]
            });
            httpMock = TestBed.get(HttpTestingController);
            service = TestBed.get(YoutubeService);
        });

        afterEach(() => {
            httpMock.verify()
        })

        describe('getTrendingVideos', () => {
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
                service.getTrendingVideos('EG', 'token').subscribe(data => {
                    expect(data).toBeTruthy()
                })
                const req = httpMock.expectOne(req => req.method === 'GET' && req.url === CONFIG.youtubeEndPoint + '/videos');
                expect(req.request.method).toBe("GET");
                req.flush(dummy);
            })

            it('should get videos successfully without nextpageToken and without country', () => {
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
                service.getTrendingVideos(null, null).subscribe(data => {
                    expect(data).toBeTruthy()
                })
                const req = httpMock.expectOne(req => req.method === 'GET' && req.url === CONFIG.youtubeEndPoint + '/videos');
                expect(req.request.method).toBe("GET");
                req.flush(dummy);
            })

            it('should respond to error while getting videos', () => {
                service.getTrendingVideos('eg', 'token').subscribe(
                    payload => { },
                    error => { });
                const req = httpMock.expectOne(req => req.method === 'GET' && req.url === CONFIG.youtubeEndPoint + '/videos');
                expect(req.request.method).toBe("GET");
                req.error(new ErrorEvent('a'));
            });
        })





        describe('getVideoInfo', () => {
            it('should get video info successfully', () => {
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
                service.getVideoInfo('id').subscribe(data => {
                    expect(data).toBeTruthy()
                })
                const req = httpMock.expectOne(req => req.method === 'GET' && req.url === CONFIG.youtubeEndPoint + '/videos');
                expect(req.request.method).toBe("GET");
                req.flush(dummy);
            })


            it('should respond to error while getting video info', () => {
                service.getVideoInfo('id').subscribe(
                    payload => { },
                    error => { });
                const req = httpMock.expectOne(req => req.method === 'GET' && req.url === CONFIG.youtubeEndPoint + '/videos');
                expect(req.request.method).toBe("GET");
                req.error(new ErrorEvent('a'));
            });
        })



    })
})
