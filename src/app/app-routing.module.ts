import { NgModule } from '@angular/core';
import { RouterModule, RouterState, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';
import { HomeComponent } from './guest/home/home.component';
import { LoginComponent } from './guest/login/login.component';
import { RegisterComponent } from './guest/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [

  {path : '', redirectTo:'home', pathMatch:'full'},
  {path : 'home', component: HomeComponent},
  {path : 'login', component: LoginComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'profile', component: ProfileComponent},

  {path : 'admin', component: AdminComponent},

  {path : '404', component: NotFoundComponent},
  {path : '401', component: UnauthorizedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  constructor(private router: Router){
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    };
    
  }
}
