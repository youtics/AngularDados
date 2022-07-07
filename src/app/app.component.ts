import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoIzquierda:string = '../assets/img/dice1.png';
  dadoDerecha:string = '../assets/img/dice4.png';
  numero1:number=1;
  numero2:number=1;
  gano:boolean=false;


  tirarDados():void{
    this.numero1 = Math.round((Math.random()*5)+1);
    this.numero2 = Math.round((Math.random()*5)+1);
    this.dadoDerecha = '../assets/img/dice'+this.numero1+'.png';
    this.dadoIzquierda = '../assets/img/dice'+this.numero2+'.png';
    if(this.numero1==this.numero2)
      this.gano = true;
      else
      this.gano = false;
  }
}
