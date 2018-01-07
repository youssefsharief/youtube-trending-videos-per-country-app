import { WatchComponent } from './watch.component';
import { NgModule } from '@angular/core';
import { WatchRoutingModule } from './watch.routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    WatchComponent
  ],
  imports: [
    WatchRoutingModule,
    SharedModule
  ],

})
export class WatchModule { }
