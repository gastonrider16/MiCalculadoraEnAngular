import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi Calculador App';
  numero1: string="0";
  numero2: string="0";
  resultado: number=0;
  sumar():void{
    this.resultado = parseInt(this.numero1) + parseInt(this.numero2);
  }
}
