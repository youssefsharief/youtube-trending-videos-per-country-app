import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { TrendsComponent } from './trends/trends.component';

const paths: Routes = [
    { path: '', component: TrendsComponent },
    { path: 'video/:id', loadChildren: './trends/watch/watch.module#WatchModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(paths)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

