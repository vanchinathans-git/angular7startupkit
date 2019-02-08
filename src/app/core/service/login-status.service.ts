import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginStatusService {
    private loginStatus = new Subject<any>();
    setStatus(status: any) {
        this.loginStatus.next(status)
    }

    getStatus(): Observable<any> {
        return this.loginStatus.asObservable();
    }
}