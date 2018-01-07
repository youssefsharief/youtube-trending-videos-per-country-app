import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    exports: [
        HeaderComponent,
        CommonModule
    ],
    imports:[
        FormsModule,
        CommonModule,
        NgbModule.forRoot(),
    ]
})
export class SharedModule { }
