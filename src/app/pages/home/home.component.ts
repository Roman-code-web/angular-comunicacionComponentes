import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tituloPadre="Componentes";

  CambiartituloPadre(){
    this.tituloPadre="Titulo del Padre";
  }
}
