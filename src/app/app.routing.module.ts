import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { TrendsComponent } from './trends/trends.component';
import { WatchComponent } from './trends/watch/watch.component';

const paths: Routes = [
    { path: '', component: TrendsComponent },
    { path: 'watch/:id', component: WatchComponent },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [RouterModule.forRoot(paths)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

