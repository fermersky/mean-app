import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public users: UsersService, public router: Router) {}

  ngOnInit() {}

  logout() {
    this.users.signOut();
    this.router.navigate(['home']);
  }
}
