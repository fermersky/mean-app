import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { RouteModule } from './route/route.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { CreateHintComponent } from './components/create-hint/create-hint.component';
import { HintsListComponent } from './components/hints-list/hints-list.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageTitleComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    CreateHintComponent,
    HintsListComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouteModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
