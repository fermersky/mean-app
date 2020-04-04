import { NgModule } from '@angular/core';

import { SharedModule } from './shared.module';
import { MaterialModule } from './material.module';

import { RegisterComponent } from '../components/auth/register/register.component';
import { LoginComponent } from '../components/auth/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [SharedModule, MaterialModule, AuthRoutingModule],
  exports: [RegisterComponent, LoginComponent],
})
export class AuthModule {}
