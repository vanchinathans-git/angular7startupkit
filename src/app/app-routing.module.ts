import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule'},
  { path: 'list', loadChildren: './pages/list/list.module#ListModule'},
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
