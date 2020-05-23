import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication-service.service';
import { UserService } from 'src/app/services/user-service.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
       // this.loadAllUsers();
    }

     deleteUser(id: number) {
        this.userService.delete(id)
          .pipe(first())
           .subscribe(() => this.loadAllUsers());
     }

    private loadAllUsers() {
        this.userService.getAll()
             .pipe(first())
             .subscribe(users => this.users = users);
     }
}