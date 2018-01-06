import { Observable } from 'rxjs/Rx';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrendsComponent } from './trends.component';

import { AppModule } from '../app.module';

describe('TrendsComponent', () => {
    let component: TrendsComponent;
    let fixture: ComponentFixture<TrendsComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
        })
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TrendsComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
