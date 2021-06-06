import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

   @Input('valor') progreso = 50;
   @Output() valorSalida: EventEmitter<number> = new EventEmitter();

   @Input('clase') btnClass:string = 'btn btn-primary';




  cambiarValor(valor :number){
    if((this.progreso>0 && valor<0) || (this.progreso<100 && valor>0)){
      this.progreso = this.progreso + valor;
    }
    this.valorSalida.emit(this.progreso);    
  }
}
