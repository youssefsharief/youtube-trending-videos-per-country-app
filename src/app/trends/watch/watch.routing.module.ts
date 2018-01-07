import { WatchComponent } from './watch.component';
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const paths: Routes = [
    { path: '', component: WatchComponent },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [RouterModule.forChild(paths)],
    exports: [RouterModule]
})
export class WatchRoutingModule { }

