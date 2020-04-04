import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HintComponent } from '../components/hints/hint/hint.component';
import { UserComponent } from '../components/user/user.component';

const routes: Routes = [
  {
    path: 'hints',
    children: [
      { path: 'hint/:slug', component: HintComponent },
      { path: 'author/:author', component: UserComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HintsRoutingModule {}
