import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { signupRoutes } from './signup.route';

@NgModule({
    declarations: [ SignupComponent ],
    imports: [
        RouterModule.forChild(signupRoutes),
        SharedModule
    ]

})
export class SignupModule {

}