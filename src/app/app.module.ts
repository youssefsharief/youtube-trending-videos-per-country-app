import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LimitToPipe } from './shared/limit-to.pipe';
import { TrendsComponent } from './trends/trends.component';
import { YoutubeComponent } from './trends/youtube/youtube.component';
import { ContextService } from './shared/context.service';
import { YoutubeService } from './trends/youtube/youtube.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LimitToPipe,
    TrendsComponent,
    YoutubeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    InfiniteScrollModule,
    SharedModule
  ],

  providers: [
    ContextService,
    YoutubeService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
