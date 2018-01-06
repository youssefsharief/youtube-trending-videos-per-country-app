import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { WatchComponent } from './watch.component';
import { AppModule } from '../../app.module';

describe('WatchComponent', () => {
    let component: WatchComponent;
    let fixture: ComponentFixture<WatchComponent>;
    
    let domSanitizerStub = {
        bypassSecurityTrustResourceUrl: () => 'ds'
    }
    let activatedRouteStub = {params: {
        first: ()=> Observable.of({id:'a'})}
    }
        
        
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: ActivatedRoute, useValue: activatedRouteStub },
                { provide: DomSanitizer, useValue: domSanitizerStub },
            ],
            imports: [
                AppModule
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WatchComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should load video', () => {
        component.ngOnInit()
    });

    it('onVideoLoad should work', () => {
        component.onVideoLoad()
        expect(component).toBeTruthy()
    });


});
