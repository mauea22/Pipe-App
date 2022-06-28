import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import { MenubarModule} from 'primeng/menubar';
import {ToolbarModule} from 'primeng/toolbar';


@NgModule({
  //solo necesitamos que el modulo exporte los modulos de primeNg
  exports: [
    CommonModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
