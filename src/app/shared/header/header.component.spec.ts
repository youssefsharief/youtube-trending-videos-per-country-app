import { Observable } from 'rxjs/Rx';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import 'rxjs/add/observable/of';
import 'rxjs/operator/first';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../shared.module';
import { ContextService } from '../context.service';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let contextServiceStub = { setCountry : (x) => console.log(x)}
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            providers: [
                {provide: ContextService, useValue: contextServiceStub}
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should load successfully', () => {
        expect(component).toBeTruthy();
    });

    it('formatter should returun name from object', () => {
        expect(component.formatter({name:'er'})).toBe('er')
    });


    describe('search observable',()=>{
        it('search return country code in subscription', () => {
            const sub = component.search(Observable.of('Egyp')).subscribe(data => {
                expect(data[0].code).toBe('EG')
            })
            sub.unsubscribe()
        });
        it('search return empt array in case the search length is less than 2', () => {
            const sub = component.search(Observable.of('E')).subscribe(data => {
                expect(data.length).toBe(0)
            })
            sub.unsubscribe()
        });
    })
    

    describe('Select country', ()=>{
        it('should select country object', () => {
            component.selectCountry({code:'EG'})
            expect(component).toBeTruthy()
        });
        it('should select country string', () => {
            component.selectCountry('Egypt')
            expect(component).toBeTruthy()
        });
    })
    
});
