import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedOnlyGuard implements CanActivate {
  constructor(private user: UsersService) {}

  canActivate(): boolean {
    return this.user.isSignedIn();
  }
}
