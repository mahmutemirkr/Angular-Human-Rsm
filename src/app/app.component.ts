import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from './models/role.enum';
import { User } from './models/user.model';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-human-rsm';

  currentUser : User = new User;

  constructor(private authenticationService: AuthenticationService, private router: Router){
    this.authenticationService.currentUser.subscribe(data=>{
      this.currentUser = data;
    });
  }

  isAdmin(){
    return this.currentUser?.role == Role.ADMIN;
  }
  
  logOut(){
    this.authenticationService.logOut();
    this.router.navigate(['/login']);
  }

}
