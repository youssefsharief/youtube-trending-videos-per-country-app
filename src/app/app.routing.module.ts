import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { TrendsComponent } from './trends/trends.component';

const paths: Routes = [
    { path: '', component: TrendsComponent },
    { path: 'watch/:id', loadChildren: './trends/watch/watch.module#WatchModule' },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [RouterModule.forRoot(paths)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

