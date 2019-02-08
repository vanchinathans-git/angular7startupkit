import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isAuthenticated(): boolean {
        return localStorage.getItem('user') !== undefined;
    }

    logOut() {
        localStorage.setItem('user', undefined);
    }
}