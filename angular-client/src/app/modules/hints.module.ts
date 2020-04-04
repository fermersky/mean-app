import { NgModule } from '@angular/core';

import { SharedModule } from './shared.module';
import { MaterialModule } from './material.module';
import { HintsRoutingModule } from './hints-routing.module';

import { HintComponent } from '../components/hints/hint/hint.component';
import { CreateHintComponent } from '../components/hints/create-hint/create-hint.component';
import { HintsListComponent } from '../components/hints/hints-list/hints-list.component';

@NgModule({
  declarations: [HintComponent, CreateHintComponent, HintsListComponent],
  imports: [SharedModule, MaterialModule, HintsRoutingModule],
  exports: [HintComponent, CreateHintComponent, HintsListComponent],
})
export class HintsModule {}
