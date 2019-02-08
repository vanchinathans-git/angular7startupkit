import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { loginRoutes } from './login.route';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [ LoginComponent ],
    imports: [
        RouterModule.forChild(loginRoutes),
        SharedModule
    ]
})
export class LoginModule {

}