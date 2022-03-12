import { ModalSkinsComponent } from './../modal-skins/modal-skins.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkinsRoutingModule } from './skins-routing.module';
import { SkinsComponent } from './skins.component';


@NgModule({
  declarations: [
    SkinsComponent,
    ModalSkinsComponent
  ],
  imports: [
    CommonModule,
    SkinsRoutingModule
  ]
})
export class SkinsModule { }
