import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginStatusService } from '@service/login-status.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private router: Router,
        private loginStatusService: LoginStatusService) {

    }

    get loginControls() {
        return this.loginForm.controls;
    }

    get userName() {
        return this.loginForm.get('userName');
    }

    get password() {
        return this.loginForm.get('password');
    }
    
    private createFormGroup() {
        return this.formBuilder.group({
            userName: new FormControl('admin'),
            password: new FormControl('admin')
        })
    }

    ngOnInit(): void {
        this.loginForm = this.createFormGroup();
    }

    onLogin(loginData: any) {
        localStorage.setItem('user', loginData.userName);
        this.loginStatusService.setStatus(true);
        this.router.navigate(['list']);
    }

    resetForm(form: FormGroup) {
        form.reset();
    }
}