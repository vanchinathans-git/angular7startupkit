import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from './list.component';
import { listRoutes } from './list.route';

@NgModule({
    declarations: [ ListComponent ],
    imports: [
        RouterModule.forChild(listRoutes),
        SharedModule
    ]
})
export class ListModule {

}