import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ HeaderComponent ],
    exports: [HeaderComponent],
    imports: [RouterModule, 
        CommonModule]
})
export class HeaderModule {

}