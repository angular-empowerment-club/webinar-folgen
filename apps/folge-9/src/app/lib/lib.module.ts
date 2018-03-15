import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule
  ],
  declarations: [ModalComponent],
  entryComponents: [ModalComponent],
})
export class LibModule { }
