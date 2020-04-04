import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/models/user-info';
import { UsersService } from 'src/app/services/users.service';
import { HintsService } from 'src/app/services/hints.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public author: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(async (p) => {
      this.author = p.author;
    });
  }
}
