import { Routes } from "@angular/router";
import { ListComponent } from './list.component';
import { 
  AuthGuardService as AuthGuard 
} from '../../core/service/auth-guard.service';

export const listRoutes: Routes  = [
    {path: '', component: ListComponent, canActivate: [AuthGuard]}
]