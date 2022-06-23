import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';



@NgModule({
  declarations: [
    NoComunesComponent,
    NumerosComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  exports:[
    NoComunesComponent,
    NumerosComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VentasModule { }
