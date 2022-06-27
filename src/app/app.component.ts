import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nombre: string = 'MaUro';
  mostrarNombre(){
    console.log(this.nombre);
  }

  constructor (private primengConfig: PrimeNGConfig){}

  ngOnInit(): void {
    //ANIMACION en pipes no comunes
    this.primengConfig.ripple = true;
  }

}
