import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouteModule } from './modules/route.module';
import { HintsModule } from './modules/hints.module';
import { SharedModule } from './modules/shared.module';
import { MaterialModule } from './modules/material.module';
import { AuthModule } from './modules/auth.module';
import { HintsRoutingModule } from './modules/hints-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

import { ProfileComponent } from './components/profile/profile.component';
import { UserComponent } from './components/user/user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthRoutingModule } from './modules/auth-routing.module';
import { ProfileRoutingModule } from './modules/profile-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    UserComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProfileRoutingModule,
    HintsModule,
    AuthModule,
    RouteModule,
    SharedModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
