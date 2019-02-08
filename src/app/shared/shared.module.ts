import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HeaderModule } from '../pages/header/header.module';
import { NumberOnlyDirective } from '@directive/numeric.directive';

@NgModule({
    declarations: [ NumberOnlyDirective ],
    imports: [ HeaderModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule ],
    exports: [ HeaderModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        ScrollingModule,
    NumberOnlyDirective ]
})
export class SharedModule {

}