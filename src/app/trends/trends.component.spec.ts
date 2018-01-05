import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrendsComponent } from './trends.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { HeaderComponent } from '../shared/header/header.component';
import { LimitToPipe } from '../shared/limit-to.pipe';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YoutubeService } from './youtube/youtube.service';
import { ContextService } from '../shared/context.service';

describe('TrendsComponent', () => {
  let component: TrendsComponent;
  let fixture: ComponentFixture<TrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendsComponent, LimitToPipe, YoutubeComponent, HeaderComponent ],
      imports: [
        NgbModule.forRoot(),
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers:[
        YoutubeService,
        ContextService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
