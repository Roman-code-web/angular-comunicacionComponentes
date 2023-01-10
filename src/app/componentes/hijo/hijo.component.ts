import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  //recibo el titulo del padre;
  @Input() tituloHijo="Componente Hijo"; 
  //envio el titulo del hijo con Evento
  @Output() onEnvioTituloHijo= new EventEmitter<string>(); 
  CambiartituloHijo(){
    this.tituloHijo="Titulo desde el hijo"
    //lo emito
    this.onEnvioTituloHijo.emit(this.tituloHijo);
  }
}
