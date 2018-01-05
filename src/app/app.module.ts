import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LimitToPipe } from './shared/limit-to.pipe';
import { TrendsComponent } from './trends/trends.component';
import { YoutubeComponent } from './trends/youtube/youtube.component';
import { ContextService } from './shared/context.service';
import { YoutubeService } from './trends/youtube/youtube.service';
import { WatchComponent } from './trends/watch/watch.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LimitToPipe,
    TrendsComponent,
    YoutubeComponent,
    TrendsComponent,
    YoutubeComponent,
    WatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    InfiniteScrollModule
  ],
  providers: [
    ContextService,
    YoutubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
