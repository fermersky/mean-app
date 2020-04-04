import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PageTitleComponent } from '../components/page-title/page-title.component';
import { LoadingSpinnerComponent } from '../components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [PageTitleComponent, LoadingSpinnerComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  exports: [
    PageTitleComponent,
    LoadingSpinnerComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class SharedModule {}
