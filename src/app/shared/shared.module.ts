import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HeaderModule } from '../pages/header/header.module';

@NgModule({
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
        ScrollingModule ]
})
export class SharedModule {

}