import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContextService } from '../context.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/operator/first';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [CommonModule, FormsModule, NgbModule.forRoot(),],
            providers: [
                ContextService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
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
