import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/models/user-info';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public uinfo: UserInfo;

  constructor(private users: UsersService) {
    this.uinfo = users.getUserFromLocalStorage();
  }

  ngOnInit(): void {}
}
