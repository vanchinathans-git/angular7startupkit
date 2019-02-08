import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppGlobal {
    readonly passwordValidation: string = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
}