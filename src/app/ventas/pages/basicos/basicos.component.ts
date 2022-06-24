import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

nombreLower: string = 'mauro';
nombreUpper: string = 'MAURO';
nombreTitle: string = 'MaUrO';

fecha: Date = new Date(); //el dia de hoy

}
