import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {
  //i18nselect
  nombre: string = 'Clara';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nplural
  clientes: string[] = ['Maria', 'Juan', 'Ana', 'Pedro', 'Fernando'];
  clientesMapa = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'Mauro';
    this.genero = 'masculino'
  }


  borrarCliente(){
    this.clientes.pop()
  }


  //KeyValue Pipe y JsonPipe
  persona = {
    nombre: 'Mauro',
    edad: 42,
    direccion: 'Molina 1137'
  }

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
