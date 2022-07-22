import { Component, OnInit } from '@angular/core';
import { UserMock } from './service/user.mock';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'http';
  user = UserMock;

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.onUpdateUser();
    this.onGetUsers();
    this.onGetUser();
    this.onDeleteUser();
    this.onPatchUser();
    //this.onCreateUser();
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe((response) => {
      console.table(response);
    });
  }

  onGetUser(): void {
    this.userService.getUser().subscribe((response) => {
      console.log(response);
    });
  }

  onCreateUser(): void {
    this.userService.createUser(this.user).subscribe((response) => {
      console.log(response);
    });
  }

  onUpdateUser(): void {
    this.userService.updateUser(this.user).subscribe((response) => {
      console.log('update ', response);
    });
  }

  onPatchUser(): void {
    this.userService.patchUser(this.user.id as number).subscribe((response) => {
      console.log('patch ', response);
    });
  }

  onDeleteUser(): void {
    this.userService
      .deleteUser(this.user.id as number)
      .subscribe((response) => {
        console.log('delete ', response);
      });
  }
}
