import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppGlobal } from '@shared/app.global';
import { Match } from '@validator/match.validator';

@Component({
    selector: 'app-signup',
    templateUrl: 'signup.component.html'
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    passwordValidation: string;
    constructor(private formBuilder: FormBuilder, private appGlobal: AppGlobal) {
        this.passwordValidation = this.appGlobal.passwordValidation;
    }

    ngOnInit(): void {
        this.signupForm = this.createFormGroup();
    }

    get signupControls() {
        return this.signupForm.controls;
    }

    get userName() {
        return this.signupForm.get('userName');
    }

    get password() {
        return this.signupForm.get('password');
    }

    get confirmPassword() {
        return this.signupForm.get('confirmPassword');
    }

    onSignup(signupData: any) {

    }

    resetForm(form: FormGroup) {
        form.reset();
    }

    private createFormGroup() {
        return this.formBuilder.group({
            userName: new FormControl('',[ Validators.required, Validators.email ]),
            password: new FormControl('', [Validators.required, Validators.pattern(this.passwordValidation)]),
            confirmPassword: new FormControl('')
        }, {
            validator: Match('password', 'confirmPassword')
        })
    }

}