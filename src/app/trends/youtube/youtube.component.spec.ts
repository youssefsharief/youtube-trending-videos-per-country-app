import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YoutubeComponent } from './youtube.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { LimitToPipe } from '../../shared/limit-to.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YoutubeService } from './youtube.service';
import { ContextService } from '../../shared/context.service';

describe('YoutubeComponent', () => {
  let component: YoutubeComponent;
  let fixture: ComponentFixture<YoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubeComponent, HeaderComponent, LimitToPipe],
      imports: [FormsModule, CommonModule, NgbModule.forRoot(),
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        YoutubeService,
        ContextService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
