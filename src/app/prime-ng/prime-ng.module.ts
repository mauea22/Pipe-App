import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule} from 'primeng/menubar';



@NgModule({
  //solo necesitamos que el modulo exporte los modulos de primeNg
  exports: [
    CommonModule,
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
