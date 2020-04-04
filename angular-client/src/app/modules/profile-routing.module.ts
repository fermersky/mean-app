import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from '../components/profile/profile.component';
import { AuthorizedOnlyGuard } from '../components/guards/authorized-only-guard';
import { CreateHintComponent } from '../components/hints/create-hint/create-hint.component';
import { HintsListComponent } from '../components/hints/hints-list/hints-list.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthorizedOnlyGuard],
    children: [
      { path: 'list', component: HintsListComponent },
      { path: 'create', component: CreateHintComponent },
      { path: '', pathMatch: 'full', redirectTo: 'list' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
