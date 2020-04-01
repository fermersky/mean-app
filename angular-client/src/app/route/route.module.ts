import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { AuthorizedOnlyGuard } from '../components/guards/authorized-only-guard';
import { CreateHintComponent } from '../components/create-hint/create-hint.component';
import { HintsListComponent } from '../components/hints-list/hints-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthorizedOnlyGuard],
    children: [
      { path: 'list', component: HintsListComponent },
      { path: 'create', component: CreateHintComponent },
      { path: '', pathMatch: 'full', redirectTo: 'list' }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class RouteModule {}
