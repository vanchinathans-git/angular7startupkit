import { Component, OnDestroy } from '@angular/core';
import { LoginStatusService } from 'src/app/core/service/login-status.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
/// Header component
export class HeaderComponent implements OnDestroy {

    private subscription: Subscription;
    isLoggedIn: boolean = false;

    constructor(private loginStatusService: LoginStatusService, private router: Router) {
        this.subscription = this.loginStatusService.getStatus().subscribe((response) => {
            this.isLoggedIn = response;
        })
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    logOut() {
        localStorage.setItem('user', null);
        this.loginStatusService.setStatus(false);
        this.router.navigate(['login'])
    }
}